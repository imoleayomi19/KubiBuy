"use client";

import { useRouter } from "next/navigation"
import React, { useState } from "react";
import "../styles/login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSignupClick = () => {
    router.push("/signup");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    // Add login logic here
    alert(`Logged in as ${email}`);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome back</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          {error && <div className="error">{error}</div>}
          <button type="submit">Log in</button>
        </form>
      </div>
      <div className="foot">
        <p>
          Don't have an account? <a onClick={handleSignupClick} href="#">Sign up</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
