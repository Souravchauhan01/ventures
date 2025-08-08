import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About GRMS Ventures</h1>

      <p style={styles.description}>
        <strong>GRMS Ventures</strong> is a premium software solutions company driven by a passion for innovation. 
        With a talented team of developers, designers, and technology strategists, we craft digital experiences that 
        help businesses grow, scale, and succeed. Our services span custom web and app development, AI integration, 
        cloud transformation, and digital consulting — all delivered with excellence.
      </p>

      {/* Vision + Mission */}
      <div style={styles.cardGrid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🚀 Our Vision</h2>
          <p style={styles.cardText}>
            To set the benchmark in delivering transformative technology solutions that drive growth 
            and positive change for businesses worldwide.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🎯 Our Mission</h2>
          <p style={styles.cardText}>
            Empower organizations by building smart, secure, and scalable digital ecosystems that create real value 
            and lasting impact.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <h2 style={styles.subHeading}>Our Core Values</h2>
      <div style={styles.valueGrid}>
        {["💡 Innovation", "🤝 Integrity", "🌟 Excellence", "⚡ Agility", "📈 Impact", "🌍 Sustainability"].map((value, index) => (
          <div key={index} style={styles.valueCard}>{value}</div>
        ))}
      </div>

      {/* Why Choose Us */}
      <h2 style={styles.subHeading}>Why Choose GRMS Ventures?</h2>
      <div style={styles.cardGrid}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>✨ Tailored Solutions</h3>
          <p style={styles.cardText}>Every solution is customized to meet your unique business needs and goals.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🔒 Security First</h3>
          <p style={styles.cardText}>We prioritize robust security standards to protect your data and systems.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🚀 Scalable Tech</h3>
          <p style={styles.cardText}>Our solutions are built to scale with your business as it grows.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🤝 Dedicated Support</h3>
          <p style={styles.cardText}>Enjoy round-the-clock assistance from our expert support team.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px 20px",
    color: "#f1f1f1",
    textAlign: "center",
    background: "rgba(0,0,0,0.6)",
    borderRadius: "10px",
    margin: "20px",
  },
  heading: {
    fontSize: "3rem",
    color: "#00f0ff",
    fontWeight: "700",
    marginBottom: "20px",
  },
  subHeading: {
    color: "#00f0ff",
    fontWeight: "600",
    marginBottom: "20px",
  },
  description: {
    maxWidth: "900px",
    margin: "0 auto 40px auto",
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#ddd"
  },
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "60px"
  },
  card: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "300px",
    textAlign: "left",
    transition: "transform 0.3s ease",
  },
  cardTitle: {
    color: "#00f0ff",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#ccc"
  },
  valueGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "60px",
  },
  valueCard: {
    background: "rgba(255,255,255,0.1)",
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "1rem",
    color: "#fff",
  },
};

export default About;
