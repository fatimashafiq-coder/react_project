import React from 'react';
import { Formik, Form, Field } from 'formik';
import contact from '../assets/contact.png';
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

          <div className="contact-icons">
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              message: ''
            }}
            onSubmit={(values, { resetForm }) => {
              console.log('Form Data:', values);
              alert('Form submitted successfully!');
              resetForm();
            }}
          >
            {() => (
              <Form>
                <div className="form-row">
                  <div className="form-group">
                    <Field type="text" name="firstName" placeholder=" " required />
                    <label>First Name</label>
                  </div>
                  <div className="form-group">
                    <Field type="text" name="lastName" placeholder=" " required />
                    <label>Last Name</label>
                  </div>
                </div>

                <div className="form-group">
                  <Field type="email" name="email" placeholder=" " required />
                  <label>Email</label>
                </div>

                <div className="form-group">
                  <Field as="textarea" name="message" rows="4" placeholder=" " required />
                  <label>Message</label>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Contact;
