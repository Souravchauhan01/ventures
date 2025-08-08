import React, { useState } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/mpwrldkq", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        // background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      {/* Contact Form */}
      <div style={glassCardStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        {submitted ? (
          <p style={{ color: "#00ffae", fontWeight: "bold", textAlign: "center" }}>
            ✅ Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Full Name" required style={inputStyle} />
            <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
            <textarea name="message" placeholder="Your Message" rows="5" required style={inputStyle}></textarea>
            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
        )}
      </div>

      {/* Address + Location */}
      <div style={glassCardStyle}>
        <h2 style={headingStyle}>Get in Touch</h2>
        <p style={infoStyle}><strong>🏢 Address:</strong> 123, Royale Street, New Delhi, India</p>
        <p style={infoStyle}><strong>📧 Email:</strong> contact@GRMS Ventures.in</p>
        <p style={infoStyle}><strong>📞 Phone:</strong> +91 98765 43210</p>
        <div style={{ marginTop: "20px", borderRadius: "14px", overflow: "hidden", boxShadow: "0 0 25px rgba(255, 215, 0, 0.3)" }}>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112095.82515542086!2d77.10249065!3d28.7040593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce37330000001%3A0xf51e1ed97a1186ff!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1629912226843!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// ✨ Styles
const glassCardStyle = {
  flex: "1 1 420px",
  maxWidth: "520px",
  background: "rgba(255, 255, 255, 0.07)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  padding: "40px 30px",
  borderRadius: "20px",
  color: "#fff",
  boxShadow: "0 0 40px rgba(255, 215, 0, 0.1)",
};

const headingStyle = {
  fontSize: "2.2rem",
  marginBottom: "30px",
  color: "#FFD700",
  fontWeight: "700",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  margin: "12px 0",
  borderRadius: "10px",
  border: "none",
  fontSize: "1rem",
  background: "#1f1f1f",
  color: "#fff",
  outline: "none",
  transition: "all 0.3s",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#FFD700",
  color: "#000",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
  marginTop: "15px",
  transition: "0.3s ease",
};

const infoStyle = {
  fontSize: "1.1rem",
  marginBottom: "10px",
  lineHeight: "1.5",
};

export default ContactPage;
