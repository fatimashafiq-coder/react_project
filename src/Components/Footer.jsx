import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
function Footer() {
  return (
    <>
      <div className="footer-container footer-upper">
        <ul className="footer-links left-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        <div className="footer-center">
          <NavLink to="/">
            <img src={logo} alt="logo" className="footer-logo" />
          </NavLink>
          <div className="footer-icons">
            <FaLinkedin className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <ul className="footer-links right-links">
          <li><NavLink to="/work">Work</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <footer className="footer">
        <p>Copyright © 2024 All Rights Reserved. Powered By Nerdzilla Tech</p>
      </footer>
    </>
  );
}

export default Footer;
