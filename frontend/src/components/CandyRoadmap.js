import React from "react";
import "./Roadmap.css";

const NODE_ICONS = ["📖","🎯","⚡","🌙","💡","🏆","🌟","🎓","🚀","💎"];

export default function CandyRoadmap({ plan, progress, streak, adaptiveMsg, onSelectDay }) {
  const totalDays = plan.days;
  const dayPlans = plan.dayPlans;

  const completedDays = Object.keys(progress).filter((k) => progress[k]?.completed).length;

  // Returns: "completed" | "current" (open) | "waiting" (24hr lock) | "locked" (prev not done)
  const getStatus = (dayIndex) => {
    if (progress[dayIndex]?.completed) return "completed";

    // Day 0 is always open (every skill starts with day 1 unlocked)
    if (dayIndex === 0) return "current";

    const prev = progress[dayIndex - 1];
    // Previous day not done yet — locked until user completes it
    if (!prev?.completed) return "locked";

    // Previous day done — check if 24hrs have passed since it was completed
    const elapsed = Date.now() - (prev.completedAt || 0);
    const twentyFourHrs = 24 * 60 * 60 * 1000;
    if (elapsed < twentyFourHrs) return "waiting";

    return "current";
  };

  const getCountdown = (dayIndex) => {
    const prev = progress[dayIndex - 1];
    if (!prev?.completedAt) return "";
    const remaining = 24 * 60 * 60 * 1000 - (Date.now() - prev.completedAt);
    if (remaining <= 0) return "";
    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    return `${h}h ${m}m`;
  };

  // Build zigzag rows of 3
  const rows = [];
  for (let i = 0; i < totalDays; i += 3) {
    rows.push([i, i + 1, i + 2].filter((d) => d < totalDays));
  }

  return (
    <div className="roadmap-page">
      <div className="roadmap-header">
        <h2>{plan.skill.icon} {plan.skill.name} Roadmap</h2>
        <p className="subtitle">{plan.category === "career" ? "💼 Career" : "🌟 Extra-Curricular"} · {totalDays} days · {completedDays} completed</p>
      </div>

      {adaptiveMsg && (
        <div className={`adaptive-banner ${adaptiveMsg.type}`}>
          {adaptiveMsg.type === "struggling" ? "🔁" : adaptiveMsg.type === "review" ? "📚" : "✅"} {adaptiveMsg.text}
        </div>
      )}

      <div className="roadmap-layout">
        {/* LEFT — candy path */}
        <div className="roadmap-main">
          <div className="candy-path">
            {rows.map((row, ri) => (
              <React.Fragment key={ri}>
                <div className="candy-row" style={{ flexDirection: ri % 2 === 0 ? "row" : "row-reverse" }}>
                  {row.map((dayIndex) => {
                    const status = getStatus(dayIndex);
                    const icon = NODE_ICONS[dayIndex % NODE_ICONS.length];
                    const isClickable = status === "current";
                    const countdown = status === "waiting" ? getCountdown(dayIndex) : null;
                    return (
                      <div
                        key={dayIndex}
                        className={`candy-node ${status === "current" ? "current" : status === "completed" ? "completed" : "locked"}`}
                        onClick={() => isClickable && onSelectDay(dayIndex)}
                        title={
                          status === "completed" ? "Completed & locked" :
                          status === "waiting" ? `Unlocks in ${countdown}` :
                          status === "locked" ? "Complete the previous day first" :
                          dayPlans[dayIndex]?.topic
                        }
                      >
                        {status === "completed" && <span className="check-badge">✓</span>}
                        <span className="node-icon">
                          {status === "completed" ? "✅" : status === "locked" ? "🔒" : status === "waiting" ? "⏳" : icon}
                        </span>
                        <span className="node-day">
                          {status === "waiting" ? countdown : `Day ${dayIndex + 1}`}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {ri < rows.length - 1 && <div className="candy-connector" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT — stats panel */}
        <div className="roadmap-sidebar-panel">
          <div className="streak-bar" style={{ flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
              <span className="streak-fire">🔥</span>
              <div className="streak-info" style={{ flex: 1 }}>
                <h3>{streak} Day Streak</h3>
                <p>{streak > 0 ? "Keep it up!" : "Complete today to start!"}</p>
              </div>
              <span className="streak-count">{streak}</span>
            </div>
          </div>

          <div className="report-card">
            <h3>📊 Progress Report</h3>
            <div className="progress-track" style={{ marginBottom: 14 }}>
              <div
                className="progress-fill"
                style={{ width: `${totalDays > 0 ? Math.round((completedDays / totalDays) * 100) : 0}%` }}
              >
                {totalDays > 0 ? Math.round((completedDays / totalDays) * 100) : 0}%
              </div>
            </div>
            <div className="report-grid">
              <div className="report-stat">
                <div className="stat-val">{completedDays}</div>
                <div className="stat-label">Done</div>
              </div>
              <div className="report-stat">
                <div className="stat-val">{totalDays - completedDays}</div>
                <div className="stat-label">Left</div>
              </div>
              <div className="report-stat">
                <div className="stat-val">{streak}🔥</div>
                <div className="stat-label">Streak</div>
              </div>
              <div className="report-stat">
                <div className="stat-val">
                  {completedDays > 0
                    ? Math.round(Object.values(progress).reduce((a, b) => a + (b.score || 0), 0) / completedDays) + "%"
                    : "—"}
                </div>
                <div className="stat-label">Avg Score</div>
              </div>
            </div>
          </div>

          {/* Day list */}
          <div className="report-card">
            <h3>📋 Day List</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {dayPlans.map((dp, i) => {
                const st = getStatus(i);
                return (
                  <div
                    key={i}
                    onClick={() => st === "current" && onSelectDay(i)}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "8px 10px",
                      background: st === "completed" ? "#e8f8f2" : st === "current" ? "#fff" : "#f9f9f9",
                      border: `1px solid ${st === "completed" ? "#04aa6d" : st === "current" ? "#04aa6d" : "#e0e0e0"}`,
                      cursor: st === "current" ? "pointer" : "default",
                      opacity: st === "locked" ? 0.5 : 1,
                    }}
                  >
                    <span style={{ fontSize: 16 }}>
                      {st === "completed" ? "✅" : st === "waiting" ? "⏳" : st === "locked" ? "🔒" : "▶️"}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#282a35", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        Day {i + 1}: {dp.topic}
                      </div>
                      {st === "waiting" && (
                        <div style={{ fontSize: 11, color: "#856404" }}>Unlocks in {getCountdown(i)}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
