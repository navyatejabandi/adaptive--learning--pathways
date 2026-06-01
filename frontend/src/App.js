import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Onboarding from "./components/Onboarding";
import CandyRoadmap from "./components/CandyRoadmap";
import DayDetail from "./components/DayDetail";
import { getDayPlan, applyAdaptiveLogic } from "./data/content";
import ForYou from "./components/ForYou";

function loadState(key, def) {
  try { return JSON.parse(localStorage.getItem(key)) ?? def; } catch { return def; }
}
function saveState(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

export default function App() {
  const [screen, setScreen] = useState("home");
  const [history, setHistory] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const goTo = (s) => { setHistory(h => [...h, screen]); setScreen(s); setSidebarOpen(false); };
  const goBack = () => {
    if (!history.length) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setScreen(prev);
  };

  const [user, setUser] = useState(null);
  const [plan, setPlan] = useState(null);
  const [allProgress, setAllProgress] = useState({});
  const [streak, setStreak] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const [adaptiveMsg, setAdaptiveMsg] = useState(null);

  const progress = plan ? (allProgress[plan.skill.id] || {}) : {};

  const handleLogin = (u) => {
    setUser(u);
    const savedPlan = loadState(`plan_${u.email}`, null);
    const savedAllProgress = loadState(`allprogress_${u.email}`, {});
    const savedStreak = loadState(`streak_${u.email}`, 0);
    setAllProgress(savedAllProgress);
    setStreak(savedStreak);
    if (savedPlan) setPlan(savedPlan);
    goTo("dashboard");
  };

  const handleOnboardingDone = (setup) => {
    const dayPlans = getDayPlan(setup.skill.id, setup.days);
    const newPlan = { ...setup, dayPlans };
    setPlan(newPlan);
    saveState(`plan_${user.email}`, newPlan);
    goTo("roadmap");
  };

  const sendUnlockEmail = (u, nextDayIndex, nextTopic, skillName) => {
    import("@emailjs/browser").then(emailjs => {
      emailjs.default.send(
        "service_b2ta60s",
        "template_93dgful",
        {
          user_name: u.name,
          user_email: u.email,
          day_number: nextDayIndex + 1,
          topic: nextTopic,
          score: "—",
          streak: streak + " days",
          next_level: `Day ${nextDayIndex + 1} of ${skillName} is now unlocked! Open the app to continue.`,
        },
        "xrURtP_IZIpuBgdcF"
      ).catch(() => {});
    });
  };

  const handleDayComplete = (dayIndex, score, wrongCount) => {
    const today = new Date().toDateString();
    const lastDay = loadState(`lastday_${user.email}`, null);
    let newStreak = streak;
    if (lastDay !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      newStreak = lastDay === yesterday ? streak + 1 : 1;
      saveState(`lastday_${user.email}`, today);
    }
    const { updatedPlan, message } = applyAdaptiveLogic(plan, dayIndex, wrongCount);
    const skillId = plan.skill.id;
    const skillProgress = { ...(allProgress[skillId] || {}), [dayIndex]: { completed: true, score, wrongCount, date: today, completedAt: Date.now() } };
    const newAllProgress = { ...allProgress, [skillId]: skillProgress };
    setAllProgress(newAllProgress); setStreak(newStreak); setPlan(updatedPlan); setAdaptiveMsg(message);
    saveState(`plan_${user.email}`, updatedPlan);
    saveState(`allprogress_${user.email}`, newAllProgress);
    saveState(`streak_${user.email}`, newStreak);

    // Schedule unlock email after 24 hours
    const nextDayIndex = dayIndex + 1;
    if (nextDayIndex < updatedPlan.dayPlans.length && user?.email?.includes("@")) {
      const nextTopic = updatedPlan.dayPlans[nextDayIndex]?.topic || "Next Lesson";
      setTimeout(() => {
        sendUnlockEmail(user, nextDayIndex, nextTopic, plan.skill.name);
      }, 24 * 60 * 60 * 1000); // 24 hours
    }

    goTo("roadmap"); setSelectedDay(null);
  };

  const handleLogout = () => {
    setUser(null); setPlan(null); setAllProgress({}); setStreak(0);
    setSelectedDay(null); setHistory([]); setScreen("home");
  };

  const NAV = [
    { id: "dashboard", icon: "⊞", label: "Dashboard" },
    { id: "catalog",   icon: "📖", label: "Catalog" },
    { id: "roadmap",   icon: "◎", label: "Progress" },
    { id: "onboarding",icon: "⚡", label: "For You" },
  ];

  const initials = user?.name?.split(" ").map(w => w[0]).join("").toUpperCase().slice(0,2) || "?";

  return (
    <div className="page-wrapper">
      {/* SIDEBAR */}
      <nav className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <img src="/alp-logo.png" alt="ALP" className="sidebar-logo-img" onError={e => { e.target.style.display='none'; }} />
          <span className="sidebar-logo-text">Adaptive Learning Pathways</span>
          <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>✕</button>
        </div>

        <div className="sidebar-nav">
          {NAV.map(n => (
            <div key={n.id}
              className={`sidebar-link ${screen === n.id || (n.id === "dashboard" && screen === "home") ? "active" : ""}`}
              onClick={() => {
                if (n.id === "dashboard") user ? goTo("dashboard") : goTo("home");
                else if (n.id === "catalog") user ? goTo("catalog") : goTo("login");
                else if (n.id === "roadmap") user && plan ? goTo("roadmap") : user ? goTo("onboarding") : goTo("login");
                else if (n.id === "onboarding") user ? goTo("onboarding") : goTo("login");
              }}>
              <span className="sl-icon">{n.icon}</span>
              {n.label}
            </div>
          ))}
        </div>

        {user ? (
          <div className="sidebar-user-box">
            <div className="sidebar-avatar-circle">{user.avatar || initials}</div>
            <div className="sidebar-user-info">
              <div className="sidebar-user-name">{user.name}</div>
              <div className="sidebar-user-sub">Sign out</div>
            </div>
            <button className="btn-sidebar-logout" onClick={handleLogout} title="Sign out">→</button>
          </div>
        ) : (
          <div className="sidebar-user-box">
            <div className="sidebar-user-info">
              <div className="sidebar-user-sub">Not signed in</div>
            </div>
            <button className="btn-topbar-login" onClick={() => goTo("login")} style={{ fontSize: 12, padding: "6px 12px" }}>Sign In</button>
          </div>
        )}
      </nav>

      <div className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`} onClick={() => setSidebarOpen(false)} />

      {/* MAIN AREA */}
      <div className="main-area">
        <div className="topbar">
          <div className="topbar-left">
            <button className="topbar-hamburger" onClick={() => setSidebarOpen(true)}>☰</button>
          </div>
          <div className="topbar-right">
            {history.length > 0 && screen !== "home" && screen !== "dashboard" && (
              <button className="btn-topbar-back" onClick={goBack}>← Back</button>
            )}
            {user && streak > 0 && <span className="topbar-streak">🔥 {streak} Day Streak</span>}
            {user && (
              <div className="topbar-user-pill" onClick={() => goTo("onboarding")}>
                <span className="topbar-avatar">{user.avatar || "🎓"}</span>
                <span className="topbar-username">{user.name?.split(" ")[0]}</span>
              </div>
            )}
            {!user && screen !== "login" && (
              <button className="btn-topbar-login" onClick={() => goTo("login")}>Sign In</button>
            )}
          </div>
        </div>

        <div className="main">
          {(screen === "home" || screen === "dashboard") && (
            <Home
              key={Object.values(allProgress).reduce((s,sp) => s + Object.values(sp).filter(d=>d?.completed).length, 0)}
              user={user} streak={streak} plan={plan} allProgress={allProgress}
              onGetStarted={() => user ? goTo("onboarding") : goTo("login")}
              onGoToRoadmap={() => goTo("roadmap")}
              onGoToCatalog={() => goTo("catalog")} />
          )}
          {screen === "login" && <Login onLogin={handleLogin} />}
          {screen === "catalog" && user && (
            <Onboarding user={user} existingPlan={plan}
              onDone={handleOnboardingDone} onContinue={() => goTo("roadmap")} />
          )}
          {screen === "catalog" && !user && <Login onLogin={handleLogin} />}
          {screen === "onboarding" && user && (
            <ForYou user={user} streak={streak} allProgress={allProgress} plan={plan}
              onStartNew={handleOnboardingDone} onContinue={() => goTo("roadmap")}
              onLogout={handleLogout}
              onChoosePath={() => goTo("catalog")} />
          )}
          {screen === "roadmap" && plan && (
            <CandyRoadmap plan={plan} progress={progress} streak={streak}
              adaptiveMsg={adaptiveMsg}
              onSelectDay={(i) => { setAdaptiveMsg(null); setSelectedDay(i); goTo("day"); }} />
          )}
          {screen === "day" && plan && selectedDay !== null && (
            <DayDetail dayIndex={selectedDay} dayData={plan.dayPlans[selectedDay]}
              isCompleted={!!progress[selectedDay]?.completed}
              onBack={() => { goBack(); setSelectedDay(null); }}
              onComplete={(score, wrongCount) => handleDayComplete(selectedDay, score, wrongCount)}
              user={user}
              streak={streak} />
          )}
        </div>
      </div>
    </div>
  );
}
