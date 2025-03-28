import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope } from "react-icons/fa";
import Logo from "../../assets/logo.png"; // Update with your logo path
import "./Navbar.css";

export const MenuLinks = [
  {
    id: 1,
    name: "Website Design",
    link: "/#website-design",
    icon: <FaHome />
  },
  {
    id: 2,
    name: "Graphic Design",
    link: "/#graphic-design",
    // icon: <FaUser />
  },
  {
    id: 3,
    name: "Content Writing",
    link: "/#shopify-stores",
    // icon: <FaBriefcase />
  },
  {
    id: 4,
    name: "About Us",
    link: "/#brands",
    // icon: <FaCode />
  },

];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(event.target) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/" className="logo">
            <img src={Logo} alt="Logo" className="logo-img" />
          </a>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {MenuLinks.map(({ id, name, link, icon }) => (
              <li key={id} className="nav-item">
                <a 
                  href={link} 
                  className="nav-link"
                  onClick={toggleMobileMenu}
                >
                  {icon}
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Move Contact Us Button Here */}
          <a href="/#contact" className="contact-us-btn">
            <span className="contact-text">Contact Us</span>
          </a>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;