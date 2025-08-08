import React, { useState } from 'react';

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      title: 'Web Development', 
      desc: 'We build fast, secure, SEO-friendly websites that scale with your business growth.', 
      details: 'Our web development services cover everything from landing pages to complex web apps, using technologies like React, Next.js, Node.js, and PHP. We ensure your site is mobile-friendly, accessible, and optimized for search engines.',
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      title: 'App Development', 
      desc: 'Cross-platform apps with stunning UI and flawless performance to engage your audience.', 
      details: 'We develop native and hybrid apps for iOS and Android using React Native, Flutter, and Swift. Our apps are designed to deliver seamless performance and excellent user experience.',
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      title: 'Digital Marketing', 
      desc: 'From social media to SEO, our marketing strategies drive traffic, boost conversions, and build your brand online.', 
      details: 'Our digital marketing services include SEO, PPC, content marketing, email campaigns, and social media management. We create custom strategies tailored to your target audience.',
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      title: 'UI/UX Design', 
      desc: 'Sleek, user-centered interfaces that deliver intuitive experiences.', 
      details: 'Our design team creates wireframes, prototypes, and high-fidelity designs using tools like Figma and Adobe XD, ensuring every element is purposeful and engaging.',
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      title: 'Cloud Solutions', 
      desc: 'Secure, scalable cloud services that enhance performance and reduce costs.', 
      details: 'We provide AWS, Azure, and GCP cloud solutions for hosting, storage, and app deployment, ensuring security, scalability, and cost-efficiency.',
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      title: 'E-Commerce Solutions', 
      desc: 'Custom online stores built for conversions.', 
      details: 'We develop robust e-commerce platforms with features like product management, payment gateways, and analytics using Shopify, WooCommerce, or custom solutions.',
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      title: 'Branding & Identity', 
      desc: 'Create memorable brands that resonate.', 
      details: 'We design logos, style guides, and messaging frameworks that capture your brand essence and connect with your audience.',
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      title: 'Technical Support', 
      desc: 'Reliable 24/7 technical assistance.', 
      details: 'We provide server monitoring, bug fixes, performance optimization, and emergency support to keep your systems running smoothly.',
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      title: 'Data & Analytics', 
      desc: 'Turn data into actionable insights.', 
      details: 'Our analytics services help you track KPIs, build dashboards, and analyze trends for better decision-making.',
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      title: 'Cybersecurity', 
      desc: 'Protect your digital assets.', 
      details: 'We provide security audits, penetration testing, firewall setup, and ongoing threat monitoring to safeguard your systems.',
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      title: 'Video Production', 
      desc: 'Captivate your audience with high-quality videos.', 
      details: 'From promotional videos to training materials, our production team delivers compelling visual content that tells your story.',
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      title: 'Consulting Services', 
      desc: 'Strategic guidance for long-term success.', 
      details: 'We offer business analysis, IT consulting, and digital transformation services to help you grow and adapt.',
      image: 'https://via.placeholder.com/300x200', 
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <div style={styles.grid}>
        {services.map((s, index) => (
          <div key={index} style={styles.card}>
            <img src={s.image} alt={s.title} style={styles.image} />
            <h2 style={styles.title}>{s.title}</h2>
            <p style={styles.desc}>{s.desc}</p>
            <button style={styles.button} onClick={() => openModal(s)}>Learn More</button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.details}</p>
            <button style={styles.modalButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    background: 'rgba(0,0,0,0.6)',
    borderRadius: '10px',
    margin: '20px',
    color: '#fff',
    textAlign: 'center'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#00f0ff'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  },
  card: {
    background: 'rgba(255,255,255,0.1)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '250px',
    color: '#fff',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px'
  },
  title: {
    fontSize: '1.5rem',
    color: '#00f0ff',
    margin: '10px 0'
  },
  desc: {
    fontSize: '1rem',
    color: '#ddd',
    marginBottom: '10px'
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#00f0ff',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalContent: {
    background: "rgba(0,0,0,0.5)",
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '500px',
    textAlign: 'left',
    color: '#fff',
  },
  modalButton: {
    marginTop: '20px',
    padding: '8px 16px',
    backgroundColor: '#00f0ff',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Service;
