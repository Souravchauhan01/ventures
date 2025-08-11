import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const companyPhoneNumber = '+1234567890'; // Replace with your number

    return (
        <>
            <style>
                {`
                .main-header {
                    position: sticky;
                    top: 0;
                    width: 100%;
                    z-index: 1000;
                    background: linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0));
                    transition: background-color 0.3s ease;
                }
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 2rem;
                    height: 70px;
                }
                .nav-logo {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                }
                .nav-logo img {
                    height: 40px;
                    width: 40px;
                    border-radius: 50%;
                }
                .company-name {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #fff;
                    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
                }
                .nav-menu {
                    display: flex;
                    list-style: none;
                    gap: 2.5rem;
                }
                .nav-link {
                    text-decoration: none;
                    color: #fff;
                    font-weight: bold;
                    font-size: 1.1rem;
                    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
                    transition: color 0.3s ease;
                }
                .nav-link:hover {
                    color: #ffc107;
                }
                .cta-button {
                    text-decoration: none;
                    color: #fff;
                    background-color: #007BFF;
                    padding: 10px 20px;
                    border-radius: 20px;
                    font-weight: bold;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                }
                .cta-button:hover {
                    background-color: #0056b3;
                    transform: scale(1.05);
                }
                .desktop-cta {
                    display: block;
                }
                .mobile-cta {
                    display: none;
                    text-align: center;
                    width: 40%;
                    margin-top: 2rem;
                }
                .hamburger-menu {
                    display: none;
                    cursor: pointer;
                    flex-direction: column;
                    gap: 5px;
                    z-index: 1001;
                }
                .bar {
                    display: block;
                    width: 25px;
                    height: 3px;
                    background-color: #fff;
                    border-radius: 2px;
                    transition: all 0.3s ease-in-out;
                }
                .sidebar {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 250px;
                    height: 100vh;
                    background-color: rgba(20, 20, 20, 0.95);
                    backdrop-filter: blur(10px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 5rem;
                    transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
                    z-index: 999;
                }
                .sidebar.is-open {
                    right: 0;
                }
                .sidebar-menu {
                    list-style: none;
                    width: 100%;
                    text-align: center;
                }
                .sidebar-item {
                    margin: 1.5rem 0;
                }
                .sidebar-link {
                    text-decoration: none;
                    color: #fff;
                    font-size: 1.5rem;
                }
                @media (max-width: 768px) {
                    .nav-menu, .desktop-cta {
                        display: none;
                    }
                    .hamburger-menu {
                        display: flex;
                    }
                    .mobile-cta {
                        display: block;
                    }
                    .navbar {
                        padding: 1rem;
                    }
                    .hamburger-menu.is-active .bar:nth-child(2) {
                        opacity: 0;
                    }
                    .hamburger-menu.is-active .bar:nth-child(1) {
                        transform: translateY(8px) rotate(45deg);
                    }
                    .hamburger-menu.is-active .bar:nth-child(3) {
                        transform: translateY(-8px) rotate(-45deg);
                    }
                }
                `}
            </style>

            <header className="main-header">
                <nav className="navbar">
                    <Link to="/" className="nav-logo">
                        <img src="https://via.placeholder.com/40" alt="Company Logo" />
                        <span className="company-name">GRMS Ventures</span>
                    </Link>

                    <ul className="nav-menu">
                      <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/service" className="nav-link">Services</Link></li>
                        <li className="nav-item"><Link to="/meet-us" className="nav-link">Meet Us</Link></li>
                        <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
                    </ul>

                    <a href={`tel:${companyPhoneNumber}`} className="cta-button desktop-cta">Call Now</a>

                    <div 
                        className={`hamburger-menu ${isSidebarOpen ? 'is-active' : ''}`} 
                        onClick={toggleSidebar}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </header>

            <div className={`sidebar ${isSidebarOpen ? 'is-open' : ''}`}>
                <ul className="sidebar-menu">
                  <li className="sidebar-item">
                        <Link to="/home" className="sidebar-link" onClick={toggleSidebar}>Home</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/about" className="sidebar-link" onClick={toggleSidebar}>About</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/service" className="sidebar-link" onClick={toggleSidebar}>Services</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/meet-us" className="sidebar-link" onClick={toggleSidebar}>Meet Us</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/portfolio" className="sidebar-link" onClick={toggleSidebar}>Portfolio</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/contact" className="sidebar-link" onClick={toggleSidebar}>Contact Us</Link>
                    </li>
                </ul>
                <a href={`tel:${companyPhoneNumber}`} className="cta-button mobile-cta">Call Now</a>
            </div>
        </>
    );
};

export default Navbar;
