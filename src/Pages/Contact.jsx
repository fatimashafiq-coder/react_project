import contact from '../assets/contact.png';
import ContactForm from '../Components/ContactForm';
import '../Components/Contact.css';
function Contact() {
  return (
    <>
      <div className="hero-img">
        <img src={contact} alt="ContactImg" />
      </div>
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <p className="contact-subtitle">CONTACT</p>
          <h1>Get In Touch</h1>
          <div className="contact-info">
            <div className="info-box">
              <h3>Residing</h3>
              <p>Daegu<br />South Korea</p>
            </div>
            <div className="info-box">
              <h3>State Side Home</h3>
              <p>Minnesota<br />USA</p>
            </div>
          </div>
          <div className="extra-info">
            <p>randon.sommars@gmail.com</p>
            <p>Kakao: RandonScott</p>
          </div>
        </div>
        {/* Right Side */}
        <div className="contact-right">
         <ContactForm/>
        </div>
      </div>
    </>
  );
}

export default Contact;
