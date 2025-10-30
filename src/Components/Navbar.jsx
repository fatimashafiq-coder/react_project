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

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div> 

        <ul className={`nav-link ${menuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" className='link'>Home</NavLink></li>
          <li><NavLink to="/about" className='link'>About</NavLink></li>
          <li><NavLink to="/work" className='link'>Works</NavLink></li>
          <li><NavLink to="/contact" className='link'>Contact</NavLink></li>
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