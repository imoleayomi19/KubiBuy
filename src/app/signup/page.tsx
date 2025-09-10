"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "../styles/signup.css";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      setError("Please fill all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    // Add signup logic here
    alert(`Account created for ${email}`);
  };

  return (
    <div className="cont">
      {/* <img src="" alt="" /> */}
      <div className="sign-logo">
        Join <span>K</span>ubi<span>B</span>uy
      </div>
      <p>Sign up and start your shopping journey!</p>
      <div className="signup-container">
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
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm your password"
            required
          />
          {error && <div className="error">{error}</div>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="footer">
        <p>
          By sign up, you agree to our <a href="#">Terms</a> and{" "}
          <a href="#">Privacy Policy</a>
        </p>
        <p>
          Already have an account? <a onClick={handleLoginClick} href="#">Sign in</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
