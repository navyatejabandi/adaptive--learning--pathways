import React, { useState } from "react";
import { CATEGORIES } from "../data/content";

const DAY_OPTIONS = [7, 14, 21, 30, 60, 90];

export default function Onboarding({ user, existingPlan, onDone, onContinue }) {
  const [category, setCategory] = useState("career");
  const [skill, setSkill] = useState(null);
  const [days, setDays] = useState(null);

  const handleStart = () => {
    if (!skill || !days) return;
    onDone({ category, skill, days });
  };

  const skills = CATEGORIES[category].skills;

  return (
    <div className="card">
      <h2>Hey {user.name}, let's set up your path 🚀</h2>
      <p className="subtitle">Tell us what you want to learn and we'll build your roadmap</p>

      {existingPlan && (
        <div className="resume-banner">
          <div>
            <p>{existingPlan.skill.icon} Continue: {existingPlan.skill.name}</p>
            <span>You have an existing roadmap in progress</span>
          </div>
          <button className="btn-resume" onClick={onContinue}>Resume »</button>
        </div>
      )}

      {/* Category */}
      <p className="section-label">Choose Category</p>
      <div className="category-tabs" style={{ marginBottom: 20 }}>
        {Object.entries(CATEGORIES).map(([key, val]) => (
          <div key={key} className={`cat-tab ${category === key ? "active" : ""}`} onClick={() => { setCategory(key); setSkill(null); }}>
            {val.icon} {val.label}
          </div>
        ))}
      </div>

      {/* Skill */}
      <p className="section-label">Choose Skill</p>
      <div className="skill-grid">
        {skills.map((s) => (
          <div key={s.id} className={`skill-card ${skill?.id === s.id ? "selected" : ""}`} onClick={() => setSkill(s)}>
            <div className="sk-icon">{s.icon}</div>
            <div className="sk-name">{s.name}</div>
          </div>
        ))}
      </div>

      {/* Days */}
      <p className="section-label">How many days?</p>
      <div className="days-row">
        {DAY_OPTIONS.map((d) => (
          <div key={d} className={`day-chip ${days === d ? "selected" : ""}`} onClick={() => setDays(d)}>
            {d} days
          </div>
        ))}
      </div>

      <button className="btn-primary" onClick={handleStart} disabled={!skill || !days}
        style={{ opacity: (!skill || !days) ? 0.5 : 1 }}>
        Build My Roadmap →
      </button>
    </div>
  );
}
