import React, { useState } from "react";

const AVATARS = ["🦊","🐯","🦁","🐻","🐼","🐨","🦄","🐸","🐙","🦋","🦅","🐬","🐺","🦝","🐲","🦩","🦚","🐧","🧑‍💻","👩‍🎨","🧑‍🚀","👨‍🔬","🧙","🦸","🧝","🥷","👩‍🏫","🧑‍🎤","🎓","🏆"];
const API = "https://adaptive-learning-pathways.onrender.com/api";

export default function Login({ onLogin }) {
  const [mode, setMode] = useState("login");
  const [step, setStep] = useState(1);
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [avatar, setAvatar] = useState("🦊");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStep1 = () => {
    if (!displayName.trim() || !username.trim() || !email.trim()) { setError("Please fill in all fields."); return; }
    if (!email.includes("@") || !email.includes(".")) { setError("Please enter a valid email address."); return; }
    setError(""); setStep(2);
  };

  const handleRegister = async () => {
    if (password.length < 4) { setError("Password must be at least 4 characters."); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch(`${API}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: displayName.trim(), email: email.trim().toLowerCase(), password, avatar, goal, username: username.trim().toLowerCase() }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || "Registration failed."); return; }
      onLogin({ name: data.name, email: data.email, avatar: data.avatar || avatar, goal: data.goal || goal, id: data.id });
    } catch {
      setError("Network error. Please try again.");
    } finally { setLoading(false); }
  };

  const handleLogin = async () => {
    const id = username.trim().toLowerCase();
    if (!id || !password) { setError("Please fill in all fields."); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch(`${API}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: id, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || "Login failed."); return; }
      onLogin({ name: data.name, email: data.email, avatar: data.avatar || "🎓", goal: data.goal || "", id: data.id });
    } catch {
      setError("Network error. Please try again.");
    } finally { setLoading(false); }
  };

  return (
    <div className="login-page">
      <div className="login-brand-icon">🧠</div>
      <h1 className="login-title">Welcome to Adaptive Learning</h1>
      <p className="login-sub">Let's personalize your learning experience</p>

      {mode === "register" && (
        <div className="login-steps">
          <div className={`login-step-dot ${step >= 1 ? "active" : ""}`} />
          <div className={`login-step-dot ${step >= 2 ? "active" : ""}`} />
        </div>
      )}

      <div className="login-card">
        {mode === "login" ? (
          <>
            <div className="login-step-label">SIGN IN</div>
            <div className="form-group">
              <label>Email or Username</label>
              <input type="text" placeholder="your@email.com" value={username} onChange={e => setUsername(e.target.value)} autoCapitalize="none" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === "Enter" && handleLogin()} />
            </div>
            {error && <p className="error-msg">{error}</p>}
            <button className="btn-primary" onClick={handleLogin} disabled={loading}>
              {loading ? "Signing in..." : "Sign In →"}
            </button>
            <p className="login-switch">Don't have an account? <span onClick={() => { setMode("register"); setStep(1); setError(""); }}>Sign up</span></p>
          </>
        ) : step === 1 ? (
          <>
            <div className="login-step-label">STEP 1 OF 2 — ABOUT YOU</div>
            <div className="form-group">
              <label>What's your name?</label>
              <input type="text" placeholder="Jane Doe" value={displayName} onChange={e => setDisplayName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Choose a username</label>
              <input type="text" placeholder="jane_doe" value={username} onChange={e => setUsername(e.target.value)} autoCapitalize="none" />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} autoCapitalize="none" />
              <p style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>We'll send your progress reports here</p>
            </div>
            <div className="form-group">
              <label>Choose your avatar</label>
              <div className="avatar-grid">
                {AVATARS.map(a => (
                  <button key={a} onClick={() => setAvatar(a)}
                    className={`avatar-btn ${avatar === a ? "selected" : ""}`}>{a}</button>
                ))}
              </div>
            </div>
            {error && <p className="error-msg">{error}</p>}
            <button className="btn-primary" onClick={handleStep1}>Continue →</button>
            <p className="login-switch">Already have an account? <span onClick={() => { setMode("login"); setError(""); }}>Sign in</span></p>
          </>
        ) : (
          <>
            <div className="login-step-label">STEP 2 OF 2 — LEARNING STYLE</div>
            <div className="form-group">
              <label>What are you hoping to achieve?</label>
              <textarea className="login-textarea" placeholder="e.g. Master React, Learn Python, Get a promotion..." value={goal} onChange={e => setGoal(e.target.value)} rows={3} />
            </div>
            <div className="form-group">
              <label>Set a password</label>
              <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            {error && <p className="error-msg">{error}</p>}
            <button className="btn-primary" onClick={handleRegister} disabled={loading}>
              {loading ? "Creating account..." : "Create Account →"}
            </button>
            <p className="login-switch"><span onClick={() => setStep(1)}>← Back</span></p>
          </>
        )}
      </div>
    </div>
  );
}
