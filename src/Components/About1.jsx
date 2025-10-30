import React from 'react';
import './About1.css';
import { FaSearch } from 'react-icons/fa';
import image_one from '../assets/image_one.jpg';
import image_two from '../assets/image_two.png';
import one from '../assets/one.jpg';

function About1() {
  return (
    <>
      {/* 4th Section - What I Can Offer */}
      <div className="about-container">
        <div className="about-left">
          <p>WHAT I CAN OFFER</p>
          <h1>Fresh eyes, designing for the future.</h1>
        </div>

        <div className="divider2"></div>

        <div className="about-right">
          <p>
            While new to the UX/UI field, I bring a wealth of experience from the education field,
            along with a relentless passion for design and a drive to learn and excel.
          </p>
        </div>
      </div>

      {/* 5th Section - Skills / Cards */}
      <div className="skill-box">
        <div className="skill-card">
          <div className="icon">
            <FaSearch className="fas fa-users" />
          </div>
          <h2>Communication & <br /> Collaboration</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus quasi facere cumque fuga.
            Recusandae ducimus voluptates corporis porro consectetur neque iure beatae impedit veniam ratione.
          </p>
        </div>

        <div className="skill-card">
          <div className="icon">
            <FaSearch className="fas fa-users" />
          </div>
          <h2>User Research</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque beatae culpa reiciendis sapiente illum
            minima dolorum dolor reiciendis sapiente illum minima dolorum dolor.
          </p>
        </div>
      </div>

      {/* 6th Section - My Work */}
      <div className="mywork">
        <p>MY WORK</p>
        <h1>The projects I've been <br /> working on.</h1>
      </div>

      {/* 7th Section - Work Images */}
      <div className="image-section">
        <div className="image-box left">
          <img src={image_one} alt="Project One" />
        </div>
        <div className="image-box right">
          <img src={image_two} alt="Project Two" />
        </div>
      </div>

      {/* 8th Section - Testimonials */}
      <div className="testimonial-section">
        <div className="mywork testimonial">
          <p>TESTIMONIALS</p>
          <h1>Colleague / Client Feedback</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam molestiae, expedita, natus ut, exercitationem dolore aperiam sequi qui dolores aliquid.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>

        <div className="testimonial-person">
          <img src={one} alt="Keum Hyun-Ah" className="testimonial-img" />
          <div className="person-info">
            <h3>Keum Hyun-Ah</h3>
            <p>Freelancer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About1;
