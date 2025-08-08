import React from "react";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "50px 20px",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        background: "rgba(0,0,0,0.6)",
        backgroundImage: "url('./assets/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        textAlign: "center",
        borderRadius: "10px",
        margin: "20px"
      }}
    >
      {/* Hero Section */}
      <section style={{ maxWidth: "1200px", margin: "auto", padding: "80px 20px" }}>
        <h1 style={styles.heroHeading}>Building Tomorrow’s Digital Experiences Today</h1>
        <p style={styles.heroText}>
          We deliver cutting-edge, tailor-made solutions for web, mobile, AI, and enterprise — 
          empowering your business to lead in the digital age.
        </p>
        <button style={styles.buttonPrimary}>Get Started</button>
      </section>

      {/* Services Section */}
      <section style={{ marginTop: "80px" }}>
        <h2 style={styles.sectionHeading}>Our Services</h2>
        <div style={styles.flexWrap}>
          {[
            { title: "Web Solutions", desc: "Custom web apps with high performance and scalability." },
            { title: "AI & ML Development", desc: "Smart apps with predictive analytics and automation." },
            { title: "Mobile Apps", desc: "Elegant, user-centric mobile apps for iOS & Android." },
            { title: "Cloud Services", desc: "Cloud-native systems with top-notch security." },
            { title: "UI/UX Design", desc: "Luxury interfaces crafted for engagement." },
            { title: "E-commerce", desc: "Premium online stores built for conversion." },
          ].map((service, idx) => (
            <div key={idx} style={styles.card}>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ marginTop: "100px" }}>
        <h2 style={styles.sectionHeading}>Why Choose Us</h2>
        <div style={styles.flexWrap}>
          {[
            "Tailored solutions for your unique vision",
            "Expert team with decades of combined experience",
            "Agile development for faster time-to-market",
            "Robust security and compliance focus",
            "Ongoing support and partnerships",
            "Transparent communication and reporting"
          ].map((point, idx) => (
            <div key={idx} style={styles.card}>
              <p style={{ fontSize: "1.1rem" }}>✅ {point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section style={{ marginTop: "100px" }}>
        <h2 style={styles.sectionHeading}>Our Process</h2>
        <div style={styles.flexWrap}>
          {["Discovery & Consultation", "Design & Prototyping", "Development & Testing", "Deployment & Support"].map(
            (step, idx) => (
              <div key={idx} style={styles.card}>
                <h3>{step}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ marginTop: "100px" }}>
        <h2 style={styles.sectionHeading}>Client Testimonials</h2>
        <div style={styles.flexWrap}>
          {[
            { name: "Raj P.", text: "Their attention to detail and luxury design made us stand out!" },
            { name: "Maya S.", text: "We trust them with all our digital projects — true professionals." },
            { name: "Leo D.", text: "From idea to launch, they delivered beyond expectations." }
          ].map((review, idx) => (
            <div key={idx} style={styles.card}>
              <p style={{ fontStyle: "italic" }}>"{review.text}"</p>
              <p style={{ color: "#00f0ff", fontWeight: "600", marginTop: "10px" }}>- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ marginTop: "80px" }}>
        <button style={styles.buttonPrimary } onClick={() => navigate('/contact')}>Book Your Free Consultation</button>
      </section>
    </div>
  );
};

// STYLES
const styles = {
  heroHeading: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "#00f0ff",
    textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
    marginBottom: "20px"
  },
  heroText: {
    fontSize: "1.2rem",
    color: "#ddd",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "auto",
    marginBottom: "40px"
  },
  buttonPrimary: {
    padding: "10px 30px",
    backgroundColor: "#00f0ff",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  sectionHeading: {
    fontSize: "2rem",
    color: "#00f0ff",
    marginBottom: "30px",
    textShadow: "2px 2px 8px rgba(0,0,0,0.7)"
  },
  flexWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "10px"
  },
  card: {
    background: "rgba(255,255,255,0.1)",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "250px",
    color: "#fff",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    transition: "transform 0.3s ease",
  },
  cardTitle: {
    fontSize: "1.4rem",
    color: "#00f0ff",
    marginBottom: "10px"
  },
  cardDesc: {
    fontSize: "1rem",
    color: "#ddd"
  }
};

export default LandingPage;
