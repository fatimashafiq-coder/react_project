import './AboutShowcase.css';
import AboutCommunication from './AboutCommunication';
import image_one from '../assets/image_one.jpg';
import image_two from '../assets/image_two.png';
import one from '../assets/one.jpg';

function AboutShowcase() {
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
      <AboutCommunication heading="Communication" />
      <AboutCommunication heading="ReSearch" />
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
export default AboutShowcase;