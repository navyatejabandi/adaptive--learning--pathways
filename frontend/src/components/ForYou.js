import React from "react";
import { CATEGORIES } from "../data/content";

function getLabel(xp) {
  if (xp === 0) return { label: "Beginner", color: "#6b7280", bg: "#f3f4f6", icon: "🌱" };
  if (xp < 50)  return { label: "Explorer",  color: "#3b82f6", bg: "#eff6ff", icon: "🔭" };
  if (xp < 150) return { label: "Achiever",  color: "#f59e0b", bg: "#fff7ed", icon: "⭐" };
  if (xp < 300) return { label: "Champion",  color: "#8b5cf6", bg: "#f5f3ff", icon: "🏆" };
  return           { label: "Legend",    color: "#ef4444", bg: "#fef2f2", icon: "🔥" };
}

export default function ForYou({ user, streak, allProgress, plan, onChoosePath, onLogout }) {
  const totalCompleted = Object.values(allProgress || {}).reduce((s, sp) =>
    s + Object.values(sp).filter(d => d?.completed).length, 0);
  const allScores = Object.values(allProgress || {}).flatMap(sp =>
    Object.values(sp).filter(d => d?.completed).map(d => d.score || 0));
  const avgScore = allScores.length ? Math.round(allScores.reduce((a,b)=>a+b,0)/allScores.length) : 0;
  const xp = totalCompleted * 10;
  const perf = getLabel(xp);

  const allSkills = [...CATEGORIES.career.skills, ...CATEGORIES.extracurricular.skills];

  return (
    <div className="foryou-page">
      {/* PROFILE CARD */}
      <div className="foryou-profile-card">
        <div className="foryou-avatar">{user?.avatar || "🎓"}</div>
        <div className="foryou-info">
          <h2 className="foryou-name">{user?.name}</h2>
          <p className="foryou-email">{user?.email}</p>
          {user?.goal && <p className="foryou-goal">🎯 Goal: {user.goal}</p>}
          <span className="foryou-badge" style={{ background: perf.bg, color: perf.color }}>
            {perf.icon} {perf.label}
          </span>
        </div>
        <button className="foryou-logout" onClick={onLogout}>Sign Out</button>
      </div>

      {/* STATS ROW */}
      <div className="foryou-stats">
        <div className="foryou-stat">
          <div className="foryou-stat-val">{xp}</div>
          <div className="foryou-stat-label">Total XP</div>
        </div>
        <div className="foryou-stat">
          <div className="foryou-stat-val">{totalCompleted}</div>
          <div className="foryou-stat-label">Lessons Done</div>
        </div>
        <div className="foryou-stat">
          <div className="foryou-stat-val">{avgScore > 0 ? avgScore + "%" : "—"}</div>
          <div className="foryou-stat-label">Avg Score</div>
        </div>
        <div className="foryou-stat">
          <div className="foryou-stat-val">{streak}🔥</div>
          <div className="foryou-stat-label">Day Streak</div>
        </div>
      </div>

      {/* CURRENT PLAN */}
      <div className="foryou-section-title">Current Learning Path</div>
      {plan ? (
        <div className="foryou-plan-card">
          <span className="foryou-plan-icon">{plan.skill.icon}</span>
          <div className="foryou-plan-info">
            <div className="foryou-plan-name">{plan.skill.name}</div>
            <div className="foryou-plan-meta">
              {plan.category === "career" ? "💼 Career" : "🌟 Extra-Curricular"} · {plan.days} days
            </div>
            <div className="foryou-plan-progress">
              <div className="foryou-progress-bar">
                <div className="foryou-progress-fill" style={{
                  width: `${Math.round((Object.values(allProgress?.[plan.skill.id]||{}).filter(d=>d?.completed).length / plan.days)*100)}%`
                }} />
              </div>
              <span>{Math.round((Object.values(allProgress?.[plan.skill.id]||{}).filter(d=>d?.completed).length / plan.days)*100)}% complete</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="foryou-empty">No active learning path. <span onClick={onChoosePath}>Start one →</span></div>
      )}

      {/* RECOMMENDED SKILLS */}
      <div className="foryou-section-title" style={{marginTop:28}}>Recommended For You</div>
      <div className="foryou-skills-grid">
        {allSkills.filter(s => !plan || s.id !== plan.skill.id).slice(0, 6).map(s => (
          <div key={s.id} className="foryou-skill-card" onClick={onChoosePath}>
            <span className="foryou-skill-icon">{s.icon}</span>
            <span className="foryou-skill-name">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
