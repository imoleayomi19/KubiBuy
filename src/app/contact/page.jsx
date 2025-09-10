"use client";
import "../styles/contact.css";
import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className=" contact-main">
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
            <button type="submit">Send Message</button>
            {submitted && (
              <div className="contact-success">
                Thank you for contacting us!
              </div>
            )}
          </form>
        </div>
        <div>
          <div className="flex mb-5 gap-4">
            <img
              height={25}
              width={25}
              className="contact-image"
              src="phone.svg"
              alt="Contact Us"
            />
            <a href="">+234 91 6769 0775</a>
          </div>
          <div className="flex gap-4 mb-5">
            <img
              height={25}
              width={25}
              className="contact-image"
              src="gmail.svg"
              alt="Contact Us"
            />
            <a href="">eakintunde51@gmail</a>
          </div>
          <div className="flex gap-4">
            <img
              height={25}
              width={25}
              className="contact-image"
              src="location.svg"
              alt="Contact Us"
            />
            <a href="">10 folorunsho St, bada Ayobo Lagos</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
