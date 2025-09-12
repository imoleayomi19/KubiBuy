'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import '../styles/login.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful! 🎉');
    }, 1500);
  };

  return (
    <div className="page-container">
      <div className="login-wrapper">
        <div className="decorative-bubble bubble-yellow"></div>
        <div className="decorative-bubble bubble-blue"></div>
        <div className="decorative-bubble bubble-pink"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="login-card"
        >
          <div className="brand-section">
            <h1 className="brand-title">
              kubi<span className="brand-pink">Buy</span>
            </h1>
            <p className="brand-subtitle">Welcome back, super parent! 👶</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <div className="input-container">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                  placeholder="you@example.com"
                />
                <span className="input-icon">📧</span>
              </div>
            </div>

            <div className="form-group">
              <div className="form-header">
                <label htmlFor="password" className="form-label">Password</label>
                <Link href="/forgot-password" className="link-text">Forgot password?</Link>
              </div>
              <div className="input-container">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-input"
                  placeholder="••••••••"
                />
                <span className="input-icon">🔒</span>
              </div>
            </div>

            <div className="remember-me">
              <input
                id="remember-me"
                type="checkbox"
                className="checkbox-input"
              />
              <label htmlFor="remember-me" className="checkbox-label">
                Remember me
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="cta-button"
            >
              {isLoading ? (
                <>
                  <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </motion.button>
          </form>

          <div className="signup-link">
            <p>
              Don't have an account?{' '}
              <Link href="/signup" className="link-text">
                Sign up now
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}