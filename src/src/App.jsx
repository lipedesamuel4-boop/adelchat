import { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState("welcome");

  return (
    <div className="app">
      {screen === "welcome" && (
        <div className="card">
          <div className="logo">A</div>
          <h1>AdelChat</h1>
          <p>Connect. Chat. Play.</p>

          <button onClick={() => setScreen("login")}>
            Login
          </button>

          <button
            className="secondary"
            onClick={() => setScreen("signup")}
          >
            Create Account
          </button>
        </div>
      )}

      {screen === "login" && (
        <div className="card">
          <h2>Welcome back 👋</h2>

          <input
            type="text"
            placeholder="Username"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>Login</button>

          <button
            className="link"
            onClick={() => setScreen("welcome")}
          >
            Back
          </button>
        </div>
      )}

      {screen === "signup" && (
        <div className="card">
          <h2>Create your AdelChat account</h2>

          <input
            type="text"
            placeholder="Choose username"
          />

          <input
            type="password"
            placeholder="Create password"
          />

          <button>Create Account</button>

          <button
            className="link"
            onClick={() => setScreen("welcome")}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
          }
