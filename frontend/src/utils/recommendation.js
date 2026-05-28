export function getNextLevel(score) {
  if (score < 50) return { label: "Revise Basics", color: "#f87171", icon: "🔁" };
  if (score < 80) return { label: "Intermediate Level", color: "#fbbf24", icon: "📚" };
  return { label: "Advanced Topics", color: "#10b981", icon: "🚀" };
}
