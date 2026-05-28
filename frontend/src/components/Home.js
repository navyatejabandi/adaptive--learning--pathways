import React from "react";
import "./Home.css";
import { CATEGORIES } from "../data/content";

function getLabel(xp) {
  if (xp === 0) return { label: "Beginner", color: "#6b7280", bg: "#f3f4f6" };
  if (xp < 50)  return { label: "Explorer",  color: "#3b82f6", bg: "#eff6ff" };
  if (xp < 150) return { label: "Achiever",  color: "#f59e0b", bg: "#fff7ed" };
  if (xp < 300) return { label: "Champion",  color: "#8b5cf6", bg: "#f5f3ff" };
  return           { label: "Legend",    color: "#ef4444", bg: "#fef2f2" };
}

export default function Home({ user, streak, plan, allProgress, onGetStarted, onGoToRoadmap, onGoToCatalog }) {
  const totalCompleted = Object.values(allProgress || {}).reduce((s, sp) =>
    s + Object.values(sp).filter(d => d?.completed).length, 0);

  const allScores = Object.values(allProgress || {}).flatMap(sp =>
    Object.values(sp).filter(d => d?.completed).map(d => d.score || 0));
  const avgScore = allScores.length ? Math.round(allScores.reduce((a,b)=>a+b,0)/allScores.length) : 0;

  const xp = totalCompleted * 10;
  const perf = getLabel(xp);
  const activeCourses = plan ? 1 : 0;
  const skillDone = plan ? Object.values(allProgress?.[plan.skill.id]||{}).filter(d=>d?.completed).length : 0;
  const skillPct = plan ? Math.round((skillDone / plan.days) * 100) : 0;

  const DAYS = ["Fri","Sat","Sun","Mon","Tue","Wed","Thu"];
  const activityData = DAYS.map((_, i) => i === 6 ? streak * 2 : i === 5 ? Math.max(0, streak-1) : 0);
  const maxAct = Math.max(...activityData, 1);

  const recentActivity = Object.entries(allProgress || {}).flatMap(([skillId, sp]) =>
    Object.entries(sp).filter(([,d]) => d?.completed).map(([dayIdx, d]) => ({
      skillId, dayIdx: Number(dayIdx), score: d.score, date: d.date, wrongCount: d.wrongCount
    }))
  ).sort((a,b) => (b.completedAt||0)-(a.completedAt||0)).slice(0,3);

  if (!user) {
    return (
      <div className="dash-landing">
        <div className="landing-icon">🧠</div>
        <h1>Welcome to Adaptive Learning</h1>
        <p>Let's personalize your learning experience</p>
        <button className="btn-landing" onClick={onGetStarted}>Get Started →</button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dash-header">
        <div>
          <h1 className="dash-welcome">Welcome back, {user.name.split(" ")[0]}</h1>
          <p className="dash-sub">You're on a <b style={{color:"var(--purple)"}}>{streak}-day</b> learning streak. Keep it up!</p>
        </div>
        <div className="dash-streak-pill">🔥 {streak} Day Streak</div>
      </div>

      {/* STAT CARDS */}
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-card-top"><span className="stat-label">Active Courses</span><span className="stat-icon" style={{color:"var(--purple)"}}>📖</span></div>
          <div className="stat-big">{activeCourses}</div>
          <div className="stat-sub">out of {activeCourses} total</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-top"><span className="stat-label">Modules Done</span><span className="stat-icon" style={{color:"#06b6d4"}}>◎</span></div>
          <div className="stat-big">{totalCompleted}</div>
          <div className="stat-sub">knowledge nodes acquired</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-top"><span className="stat-label">Average Accuracy</span><span className="stat-icon" style={{color:"#f59e0b"}}>⚡</span></div>
          <div className="stat-big">{avgScore > 0 ? avgScore + "%" : "—"}</div>
          <div className="stat-sub">across {allScores.length} quizzes</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-top"><span className="stat-label">Time Learned</span><span className="stat-icon" style={{color:"#ec4899"}}>🕐</span></div>
          <div className="stat-big"><span>{Math.floor(totalCompleted*0.33)}</span><span className="stat-unit">h</span> <span>{(totalCompleted*20)%60}</span><span className="stat-unit">m</span></div>
          <div className="stat-sub">invested in yourself</div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="dash-bottom-row">
        {/* Weekly Activity */}
        <div className="dash-widget">
          <div className="widget-title">Weekly Activity</div>
          <div className="widget-sub">Time spent learning over the last 7 days</div>
          <div className="activity-chart">
            <div className="chart-bars">
              {activityData.map((v, i) => (
                <div key={i} className="chart-col">
                  <div className="chart-bar-wrap">
                    <div className="chart-bar" style={{ height: `${(v/maxAct)*100}%` }} />
                  </div>
                  <div className="chart-day">{DAYS[i]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Categories */}
        <div className="dash-widget">
          <div className="widget-title">Top Categories</div>
          <div className="widget-sub">Your most explored subjects</div>
          {totalCompleted > 0 && plan ? (
            <div className="top-cat-list">
              <div className="top-cat-item">
                <span className="top-cat-icon">{plan.skill.icon}</span>
                <div className="top-cat-info">
                  <div className="top-cat-name">{plan.skill.name}</div>
                  <div className="top-cat-bar-wrap">
                    <div className="top-cat-bar" style={{ width: skillPct + "%" }} />
                  </div>
                </div>
                <span className="top-cat-pct">{skillPct}%</span>
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <span style={{fontSize:32}}>📖</span>
              <p>Enroll in courses to see your top categories</p>
            </div>
          )}
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="dash-widget" style={{marginTop:20}}>
        <div className="widget-title">Recent Activity</div>
        {recentActivity.length > 0 ? (
          <div className="recent-list">
            {recentActivity.map((a, i) => {
              const skillName = [...CATEGORIES.career.skills, ...CATEGORIES.extracurricular.skills].find(s => s.id === a.skillId)?.name || a.skillId;
              return (
                <div key={i} className="recent-item">
                  <div className="recent-icon" style={{background: a.score >= 60 ? "#dcfce7" : "#fee2e2", color: a.score >= 60 ? "#15803d" : "#b91c1c"}}>
                    {a.score >= 60 ? "✓" : "✗"}
                  </div>
                  <div className="recent-info">
                    <div className="recent-title">Quiz attempted: Day {a.dayIdx + 1}</div>
                    <div className="recent-sub">{skillName} — {a.score}% accuracy</div>
                    <div className="recent-date">{a.date}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <span style={{fontSize:32}}>📋</span>
            <p>No activity yet. Start a lesson to see your history here.</p>
            <button className="btn-purple-outline" onClick={onGetStarted}>Browse Catalog</button>
          </div>
        )}
      </div>

    </div>
  );
}
