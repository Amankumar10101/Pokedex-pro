"use client";

import "@/styles/login.css";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Log In</h1>
        <p>Welcome back to PokéDex Pro</p>

        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <span className="login-footer">
          Don’t have an account? <a href="#">Sign up</a>
        </span>
      </div>
    </div>
  );
}
