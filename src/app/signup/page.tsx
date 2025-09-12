'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import "../styles/signup.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="page-container">
      <div className="register-wrapper">
        <div className="decorative-bubble bubble-pink"></div>
        <div className="decorative-bubble bubble-yellow"></div>
        <div className="decorative-bubble bubble-blue"></div>
        <div className="decorative-bubble bubble-green"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="register-card"
        >
          <div className="brand-section">
            <h1 className="brand-title">
              Join <span className="brand-pink">kubiBuy</span>
            </h1>
            <p className="brand-subtitle">Create your account in seconds 🚀</p>
          </div>

          <form className="register-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <div className="input-container">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
                <span className="input-icon">👤</span>
              </div>
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <div className="input-container">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                <span className="input-icon">📧</span>
              </div>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-container">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input ${errors.password ? 'input-error' : ''}`}
                  placeholder="Create a password"
                  autoComplete="new-password"
                />
                <span className="input-icon">🔒</span>
              </div>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <div className="input-container">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                />
                <span className="input-icon">🔒</span>
              </div>
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>

            <div className="terms-checkbox">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="checkbox-input"
              />
              <label htmlFor="acceptTerms" className="checkbox-label">
                I accept the{' '}
                <Link href="/terms" className="link-text">Terms of Service</Link>{' '}
                and{' '}
                <Link href="/privacy" className="link-text">Privacy Policy</Link>
              </label>
            </div>
            {errors.acceptTerms && <p className="error-message">{errors.acceptTerms}</p>}
          </form>

          <div className="login-link">
            <p>
              Already have an account?{' '}
              <Link href="/login" className="link-text">
                Sign in here
              </Link>
            </p>
          </div>
        </motion.div>

        <div className="illustration-section">
          <p className="illustration-caption">Join thousands of happy parents today!</p>
        </div>
      </div>
    </div>
  );
}