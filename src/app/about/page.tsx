"use client";

import "../styles/about.css";
import { motion } from "framer-motion";
// import { useEffect, useState} from "react";
import { useRouter } from "next/navigation";

export default function AboutUsPage() {
  const router = useRouter();

  const handleClickShopCollection = () => {
    router.push("/");
  };
  return (
    <div className="about-container">
      <section className="hero-banner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title flex">
            Welcome to
            <p className="ml-5">
              <span className="logo">K</span>ubi<span className="logo">B</span>
              uy
            </p>
          </h1>
          <p className="hero-subtitle">
            Where little adventures begin in the comfiest, cutest clothes &
            accessories.
          </p>
          <motion.button
            onClick={handleClickShopCollection}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Shop Our Collection
          </motion.button>
        </motion.div>

        <div className="decorative-bubble bubble-yellow"></div>
        <div className="decorative-bubble bubble-blue"></div>
        <div className="decorative-bubble bubble-pink"></div>
      </section>

      <section className="our-story-section">
        <div className="container">
          <div className="story-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="story-text"
            >
              <h2 className="section-heading">Our Story</h2>
              <p className="section-paragraph">
                kubiBuy started with a simple dream: to make shopping for kids'
                clothes joyful, easy, and safe for parents, while ensuring every
                little one feels happy and comfortable in what they wear.
              </p>
              <p className="section-paragraph">
                Founded by parents who know the struggle of finding clothes that
                are both adorable *and* durable, we carefully select every item
                for its quality, safety, and undeniable cuteness factor.
              </p>
              <p className="section-paragraph">
                We believe playtime shouldn't be limited by itchy tags or boring
                designs. That's why kubiBuy offers vibrant colors, soft fabrics,
                and styles that let imaginations run wild.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="story-image-container"
            >
              <img
                src="/banner5.jpg"
                alt="Happy children playing in kubiBuy clothes"
                className="story-image"
              />
              <div className="image-border"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-heading text-center"
          >
            Why Parents (& Kids!) Love kubiBuy
          </motion.h2>
          <div className="features-grid">
            {[
              {
                title: "Safety First, Always",
                desc: "Every item meets strict international safety standards. Non-toxic dyes, secure buttons, and soft seams guaranteed.",
                icon: "🛡️",
              },
              {
                title: "Playful & Practical",
                desc: "Bright, vibrant colors and fun patterns kids adore, made with durable fabrics that survive countless adventures.",
                icon: "🎨",
              },
              {
                title: "Easy for Parents",
                desc: "Simple navigation, fast shipping, and hassle-free returns. Because parenting is hard enough!",
                icon: "👩‍👧‍👦",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="feature-card"
              >
                <span className="feature-icon">{item.icon}</span>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-description">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-heading text-center"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mission-text"
          >
            To spark joy in every child and build trust with every parent,
            delivering delightful, safe, and stylish children's wear that makes
            everyday moments special.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mascot-container"
          >
            <img
              src="/mascot.JPG"
              alt="kubiBuy mascot smiling"
              className="mascot-image"
            />
            <p className="mascot-caption">Join the kubiBuy Family Today!</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
