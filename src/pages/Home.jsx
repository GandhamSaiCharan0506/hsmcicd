import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">

      {/* ===== HERO ===== */}
      <section className="hero-pro">
        <div className="hero-pro-content">
          <h1>Redefining Digital Healthcare</h1>
          <p>
            Experience a modern hospital platform where booking, treatment,
            and recovery are seamlessly connected.
          </p>

          <div className="hero-pro-actions">
            <Link to="/signup" className="primary-btn">Book Appointment</Link>
            <Link to="/about" className="secondary-btn">Explore Hospital</Link>
          </div>
        </div>

        <div className="hero-pro-glow"></div>
      </section>

      {/* ===== ROLE ACCESS ===== */}
      <section className="portal-section">
        <h2>Choose Your Portal</h2>
        <p className="portal-subtext">
          Access tools tailored to your role in the healthcare journey.
        </p>

        <div className="portal-grid">
          <div className="portal-card admin">
            <h3>Admin</h3>
            <p>Monitor operations and hospital analytics.</p>
            <Link to="/login" className="portal-btn">Admin Login</Link>
          </div>

          <div className="portal-card doctor">
            <h3>Doctor</h3>
            <p>Manage appointments and patient records.</p>
            <Link to="/login" className="portal-btn">Doctor Login</Link>
          </div>

          <div className="portal-card patient">
            <h3>Patient</h3>
            <p>Book visits and track your health journey.</p>
            <Link to="/signup" className="portal-btn">Register</Link>
          </div>
        </div>
      </section>

      {/* ===== QUICK ACTIONS ===== */}
      <section className="action-panel">
        <h2>Quick Actions</h2>

        <div className="action-grid">
          <Link to="/departments" className="action-card">
            🏥 Explore Departments
          </Link>

          <Link to="/doctors" className="action-card">
            🩺 Meet Doctors
          </Link>

          <Link to="/contact" className="action-card">
            📞 Contact Support
          </Link>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="trust-strip">
        <div className="trust-item">
          <h3>50K+</h3>
          <p>Patients Treated</p>
        </div>

        <div className="trust-item">
          <h3>120+</h3>
          <p>Medical Experts</p>
        </div>

        <div className="trust-item">
          <h3>15+</h3>
          <p>Departments</p>
        </div>

        <div className="trust-item">
          <h3>98%</h3>
          <p>Satisfaction Rate</p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="cta-modern">
        <h2>Your Health, Simplified</h2>
        <p>Join CityCare today and experience next-generation healthcare.</p>
        <Link to="/signup" className="primary-btn">Get Started</Link>
      </section>

    </div>
  );
};

export default Home;
