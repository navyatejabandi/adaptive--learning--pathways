import React from "react";

const GOALS = [
  {
    id: "software",
    icon: "💻",
    title: "Software Development",
    description: "Learn HTML, CSS, JavaScript and modern frontend frameworks.",
  },
  {
    id: "uiux",
    icon: "🎨",
    title: "UI/UX Design",
    description: "Master design principles, Figma, and user experience concepts.",
  },
  {
    id: "speaking",
    icon: "🎤",
    title: "Public Speaking",
    description: "Build confidence, structure talks, and engage any audience.",
  },
];

function Goals({ onSelect }) {
  return (
    <div className="card">
      <h2>Choose Your Learning Goal</h2>
      <p className="subtitle">Pick a path and we'll build a personalized roadmap for you</p>

      <div className="goals-grid">
        {GOALS.map((goal) => (
          <div key={goal.id} className="goal-card" onClick={() => onSelect(goal)}>
            <div className="goal-icon">{goal.icon}</div>
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
