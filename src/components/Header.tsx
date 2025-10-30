import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import dessinLogo from '../assets/dessinlogo.png';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <header className="header">
      <div className="logo-container" onClick={() => handleNavigation("/home")}>
        <img
          src={dessinLogo}
          alt="Dessin Logo"
          className="logo-img"
        />
        <span className="logo-text">Greens Life</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav">
        <ul>
          <li><a href="#home" onClick={() => handleNavigation('/home')}>Home</a></li>
          <li><a href="#projects" onClick={() => handleNavigation('/projects')}>Our Projects</a></li>
          <li><a href="#about" onClick={() => handleNavigation('/about')}>About</a></li>
          <li><a href="#contact" onClick={() => handleNavigation('/contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <ul>
            <li><a href="#home" onClick={() => handleNavigation('/home')}>Home</a></li>
            <li><a href="#projects" onClick={() => handleNavigation('/projects')}>Our Projects</a></li>
            <li><a href="#about" onClick={() => handleNavigation('/about')}>About</a></li>
            <li><a href="#contact" onClick={() => handleNavigation('/contact')}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
