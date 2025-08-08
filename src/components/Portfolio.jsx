import React, { useState } from 'react';
import img1 from "../public/onlychess/onlychess1.png";
import img2 from "../public/onlychess/onlychess2.png";
import img3 from "../public/onlychess/onlychess3.png";
import img4 from "../public/onlychess/onlychess4.png";
import img5 from "../public/onlychess/onlychess5.png";
import img6 from "../public/karni/karni1.png";
import img7 from "../public/karni/karni2.png";
import img8 from "../public/karni/karni3.png";
import img9 from "../public/karni/karni4.png";
import img10 from "../public/karni/karni5.png";
import img11 from "../public/chessprix/prix1.png";
import img12 from "../public/chessprix/prix2.png";
import img13 from "../public/chessprix/prix3.png";
import img14 from "../public/chessprix/prix4.png";
import img15 from "../public/chessprix/prix5.png";

const Portfolio = () => {
  const [modalImage, setModalImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

const projects = [
  {
    title: 'ONLY CHESS ACADEMY',
    desc: 'A comprehensive CRM built for managing students, batches, tasks, and attendance specifically for a chess academy.',
    link: 'https://www.onlychessacademy.com/',
    images: [img1, img2, img3, img4, img5],
    tags: ['Next', 'Node.js', ]
  },
  {
    title: 'Karni Packers And Movers',
    desc: 'A logistics service website allowing users to book packers and movers online with city-wise service and admin management.',
    link: 'https://www.karnipackersandmover.com/',
    images: [img6, img7, img8, img9, img10],
    tags: ['Next', ]
  },
  {
    title: 'CHESSPRIX',
    desc: 'An online chess tournament platform featuring registration, event management, and player progress tracking.',
    link: "https://www.chessprix.com/",
    images: [img11, img12, img13, img14, img15],
    tags: ['Next', "node.js"]
  },
];


  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Projects</h1>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.imageGrid}>
              {project.images.map((img, i) => (
                <div 
                  key={i}
                  style={styles.imageContainer}
                  onMouseEnter={() => setHoveredIndex(`${index}-${i}`)}
                  onMouseLeave={() => setHoveredIndex(null)}
                   onClick={() => openModal(img)} 
                >
                  <img
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    style={{
                      ...styles.image,
                      ...(hoveredIndex === `${index}-${i}` ? styles.imageHover : {}),
                    }}
                    onClick={() => openModal(img)}
                  />
                  {hoveredIndex === `${index}-${i}` && (
                    <div style={styles.imageOverlay}>
                      <span style={styles.zoomIcon}>🔍</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={styles.content}>
              <h2 style={styles.title}>{project.title}</h2>
              <p style={styles.desc}>{project.desc}</p>
              <div style={styles.tagsContainer}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={styles.tag}>{tag}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.button}
              >
                Visit Project
                <span style={styles.buttonArrow}>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {modalImage && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeModal}>×</button>
            <img src={modalImage} alt="Preview" style={styles.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#fff',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#00f0ff',
    textAlign: 'center',
    fontWeight: '700',
    textShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2.5rem',
    '@media (min-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  card: {
    background: 'rgba(30, 30, 40, 0.8)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '0.5rem',
    padding: '0.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  imageContainer: {
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  imageHover: {
    transform: 'scale(1.05)',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 240, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    transition: 'opacity 0.3s ease',
  },
  zoomIcon: {
    fontSize: '2rem',
    color: 'white',
  },
  content: {
    padding: '1.5rem',
    textAlign: "center",
  },
  title: {
    fontSize: '1.5rem',
    color: '#00f0ff',
    margin: '0 0 1rem 0',
    fontWeight: '600',
  },
  desc: {
    fontSize: '1rem',
    color: '#ddd',
    marginBottom: '1.25rem',
    lineHeight: '1.6',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tag: {
    background: 'rgba(0, 240, 255, 0.2)',
    color: '#00f0ff',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '500',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#00f0ff',
    color: '#111',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#00d0e0',
      transform: 'translateY(-2px)',
    },
  },
  buttonArrow: {
    transition: 'transform 0.3s ease',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(5px)',
  },
  modalContent: {
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
  },
  modalImage: {
    maxWidth: '100%',
    maxHeight: '80vh',
    borderRadius: '8px',
    boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
  },
  closeButton: {
    position: 'absolute',
    top: '-40px',
    right: '0',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '2rem',
    cursor: 'pointer',
    ':hover': {
      color: '#00f0ff',
    },
  },
};

export default Portfolio;