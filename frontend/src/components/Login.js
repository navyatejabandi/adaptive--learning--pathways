import React, { useState } from "react";

const AVATARS = ["🦊","🐯","🦁","🐻","🐼","🐨","🦄","🐸","🐙","🦋","🦅","🐬","🐺","🦝","🐲","🦩","🦚","🐧","🧑‍💻","👩‍🎨","🧑‍🚀","👨‍🔬","🧙","🦸","🧝","🥷","👩‍🏫","🧑‍🎤","🎓","🏆"];

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

  const getUsers = () => JSON.parse(localStorage.getItem("alp_users") || "{}");

  const handleStep1 = () => {
    if (!displayName.trim() || !username.trim() || !email.trim()) { setError("Please fill in all fields."); return; }
    if (!email.includes("@") || !email.includes(".")) { setError("Please enter a valid email address."); return; }
    setError(""); setStep(2);
  };

  const handleRegister = () => {
    if (password.length < 4) { setError("Password must be at least 4 characters."); return; }
    const users = getUsers();
    const id = username.trim().toLowerCase();
    if (users[id]) { setError("Username already taken."); return; }
    users[id] = { username: id, name: displayName.trim(), email: email.trim().toLowerCase(), password, avatar, goal };
    localStorage.setItem("alp_users", JSON.stringify(users));
    onLogin({ name: displayName.trim(), email: email.trim().toLowerCase(), username: id, avatar, goal });
  };

  const handleLogin = () => {
    const id = username.trim().toLowerCase();
    if (!id || !password) { setError("Please fill in all fields."); return; }
    const users = getUsers();
    const user = users[id];
    if (!user) { setError("Username not found."); return; }
    if (user.password !== password) { setError("Incorrect password."); return; }
    onLogin({ name: user.name, email: user.email || id, username: id, avatar: user.avatar || "🎓", goal: user.goal || "" });
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
              <label>Username</label>
              <input type="text" placeholder="your_username" value={username} onChange={e => setUsername(e.target.value)} autoCapitalize="none" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === "Enter" && handleLogin()} />
            </div>
            {error && <p className="error-msg">{error}</p>}
            <button className="btn-primary" onClick={handleLogin}>Sign In →</button>
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
            <button className="btn-primary" onClick={handleRegister}>Create Account →</button>
            <p className="login-switch"><span onClick={() => setStep(1)}>← Back</span></p>
          </>
        )}
      </div>
    </div>
  );
}
