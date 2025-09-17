"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Contact Us Today! <span className="hero-emoji">💬</span>
          </h1>
          <p className="hero-subtitle">
            We're here to help you find the perfect outfits for your little
            ones. Reach out anytime!
          </p>
        </motion.div>
      </section>

      <div className="main-content">
        <div className="content-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-form-container"
          >
            <h2 className="form-heading">Send Us a Message</h2>

            {submitStatus === "success" && (
              <div className="alert alert-success">
                <span className="emoji">✅</span>
                <div>
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="alert alert-error">
                <span className="emoji">❌</span>
                <div>
                  <h3>Oops! Something went wrong.</h3>
                  <p>Please try again or contact us via email or phone.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-textarea"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="cta-button"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="spinner"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-info-container"
          >
            <div className="info-card">
              <h2 className="info-heading">Quick Contact Info</h2>

              <div className="info-item">
                <div className="info-icon bg-pink-light">
                  <span className="emoji">📧</span>
                </div>
                <div>
                  <h3 className="info-title">Email Us</h3>
                  <p className="info-text">support@kubibuy.com</p>
                  <p className="info-note">We respond within 24 hours</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon bg-blue-light">
                  <span className="emoji">📱</span>
                </div>
                <div>
                  <h3 className="info-title">Call Us</h3>
                  <p className="info-text">+234 (81-621-127-35) KUBI-BUY</p>
                  <p className="info-note">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon bg-purple-light">
                  <span className="emoji">📍</span>
                </div>
                <div>
                  <h3 className="info-title">Visit Us</h3>
                  <p className="info-text">123 Happy Kids Lane</p>
                  <p className="info-text">Lagos, LG 10001</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="decorative-bubble bubble-yellow"></div>
      <div className="decorative-bubble bubble-pink"></div>
      <div className="decorative-bubble bubble-blue"></div>
    </div>
  );
}
