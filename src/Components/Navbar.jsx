import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/work', label: 'Works' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <ul className={`nav-link ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={link.path || index}>
              <NavLink to={link.path} className="link">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='search'>
          <FaSearch className="fa-solid fa-magnifying-glass" />
        </div>

        <div className={`lines ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}

    </div>
  )
}
export default Navbar;