import React from 'react';

const MeetUs = () => {
  const team = [
    { name: 'Sourav Singh Chauhan', icon: '👨‍💻' },
    { name: 'Muskan Panwar', icon: '👩‍💼' },
    { name: 'Gaurav Sharma', icon: '👨' },
    { name: 'Rustam Ali', icon: '🧑‍💼' },
  ];

  const infoCards = [
    {
      title: 'Our Mission',
      content: `At our core, we aim to revolutionize how businesses grow by blending cutting-edge software development with data-driven digital marketing strategies. Whether it's building responsive websites, user-friendly mobile apps, or driving traffic through Google Ads and SEO, our mission is to empower brands with intelligent, scalable, and performance-oriented digital solutions that drive real-world results.`,
    },
    {
      title: 'Our Vision',
      content: `To be a global leader in digital innovation, recognized for transforming ambitious ideas into real digital experiences. We envision a future where businesses of all sizes leverage custom web platforms, advanced CRM systems, and strategic marketing campaigns to engage their customers, automate operations, and accelerate growth — all under one roof.`,
    },
    {
      title: 'Our Values',
      content: `🚀 Innovation First – We constantly evolve with technology to deliver cutting-edge solutions.\n
🤝 Client Success – Your growth is our priority, and we treat every project like it's our own.\n
🔒 Transparency – We build trust through clear communication, reporting, and processes.\n
📈 Result-Driven – Everything we build and market is designed to deliver performance.`
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Meet Us</h1>

      <div style={styles.grid}>
        {infoCards.map((card, index) => (
          <div key={index} style={styles.infoCard}>
            <h2 style={styles.cardTitle}>{card.title}</h2>
            <p style={styles.cardContent}>{card.content}</p>
          </div>
        ))}
      </div>

      <h2 style={styles.heading}>Our Team</h2>
      <div style={styles.grid}>
        {team.map((member) => (
          <div key={member.name} style={styles.simpleCard}>
            <div style={styles.icon}>{member.icon}</div>
            <h3 style={styles.name}>{member.name}</h3>
          </div>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .grid-responsive {
              flex-direction: column !important;
              align-items: center !important;
            }

            .card {
              max-width: 90% !important;
            }

            h1, h2 {
              font-size: 1.5rem !important;
            }

            p {
              font-size: 0.95rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    background: 'rgba(0,0,0,0.6)',
    borderRadius: '10px',
    margin: '20px auto',
    color: '#fff',
    textAlign: 'center',
    maxWidth: '1200px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#00f0ff',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '40px',
  },
  infoCard: {
    background: 'rgba(255,255,255,0.08)',
    padding: '20px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '350px',
    textAlign: 'left',
    whiteSpace: 'pre-line',
    boxSizing: 'border-box',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#00f0ff',
    marginBottom: '10px',
  },
  cardContent: {
    fontSize: '1rem',
    color: '#ddd',
  },
  simpleCard: {
    background: 'rgba(255,255,255,0.08)',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '200px',
    width: '100%',
    textAlign: 'center',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '10px',
  },
  name: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#00f0ff',
  },
};

export default MeetUs;
