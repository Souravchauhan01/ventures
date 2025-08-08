import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (type) => {
    const contentMap = {
      terms: {
        title: 'Terms of Service',
        content: `
          GRMS Ventures offers digital marketing, SEO, UI/UX, app & web development, and CRM solutions. 
          By using our services, you agree to our payment terms, project timelines, intellectual property agreements, and non-disclosure clauses.
          Clients must provide accurate information and comply with all local and international digital standards.
        `,
      },
      privacy: {
        title: 'Privacy Policy',
        content: `
          We value your privacy. GRMS Ventures collects necessary data to improve user experience and project outcomes.
          This includes contact details, project specs, and analytics data. We never sell your data and ensure secure handling of your information.
          You can request data deletion or updates anytime.
        `,
      },
    };

    setModalContent(contentMap[type]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <>
      <style>
        {`
        .footer {
          padding: 4rem 1.5rem 2rem;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          color: #E0E6F1;
        }
        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-column h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #fff;
          position: relative;
        }
        .footer-column h3::after {
          content: '';
          width: 40px;
          height: 3px;
          background: linear-gradient(to right, #00A3FF, #E8008A);
          position: absolute;
          bottom: -8px;
          left: 0;
        }
        .footer-description {
          font-size: 0.95rem;
          color: #94a3b8;
        }
        .footer-links li {
          margin: 0.6rem 0;
        }
        .footer-links a {
          color: #E0E6F1;
          text-decoration: none;
          transition: 0.3s;
        }
        .footer-links a:hover {
          color: #00A3FF;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1.2rem;
        }
        .social-icon {
          color: #E0E6F1;
          font-size: 1.2rem;
          transition: 0.3s;
        }
        .social-icon:hover {
          color: #00A3FF;
        }
        .footer-contact p {
          margin: 0.3rem 0;
          color: #94a3b8;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.85rem;
          color: #94a3b8;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 1rem;
        }
          a {
  text-decoration: none; /* Removes underline */
  color: inherit;        /* Uses the parent element's color */
}

a:hover {
  color: blue;        /* Optional: maintain same color on hover */
  text-decoration: none; /* Optional: ensure no underline on hover */
  
}

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: #121212;
          color: #fff;
          padding: 2rem;
          max-width: 600px;
          width: 90%;
          border-radius: 10px;
          position: relative;
        }
        .modal-content h2 {
          margin-top: 0;
          color: #00A3FF;
        }
        .modal-content p {
          line-height: 1.6;
          color: #ccc;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
        }
        `}
      </style>

      <footer className="footer">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-column">
            <h2 className="footer-logo">GRMS Ventures</h2>
            <p className="footer-description">
              We build, market, and grow your digital presence with custom-built websites, mobile apps, CRM tools, and powerful marketing strategies.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaGithub /></a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">SEO Optimization</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Web & App Development</a></li>
              <li><a href="#">CRM Integration</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><button onClick={() => openModal('terms')} style={{ background: 'none', border: 'none', color: '#E0E6F1', cursor: 'pointer' }}>Terms of Service</button></li>
              <li><button onClick={() => openModal('privacy')} style={{ background: 'none', border: 'none', color: '#E0E6F1', cursor: 'pointer' }}>Privacy Policy</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <p>Tech Valley, India</p>
            <p><a href="mailto:info@grmsventures.com" className='text-decoration: "none"'>info@grmsventures.com</a></p>
            <p><a href="tel:+919876543210">+91 98765 43210</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} GRMS Ventures. All rights reserved.
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
