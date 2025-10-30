import React from 'react';
import header from '../assets/header.jpg'; 
import '../Components/Home.css';

function Home() {
  return (
    <div className="hero-img">
      <img src={header} alt="header" />
    </div>
  );
}

export default Home;
