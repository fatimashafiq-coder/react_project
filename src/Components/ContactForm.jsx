import React from 'react';
import './ContactForm.css';
import * as Yup from 'yup';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

function ContactForm() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('Form Data:', values);
          alert('Form submitted successfully!');
          resetForm();
        }}
      >
        <FormikForm>
          <div className="form-row">
            <div className="form-group">
              <Field type="text" name="firstName" placeholder=" " />
              <label>First Name</label>
              <ErrorMessage name="firstName" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <Field type="text" name="lastName" placeholder=" " />
              <label>Last Name</label>
              <ErrorMessage name="lastName" component="div" className="error-message" />
            </div>
          </div>

          <div className="form-group">
            <Field type="email" name="email" placeholder=" " />
            <label>Email</label>
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <Field as="textarea" name="message" rows="4" placeholder=" " />
            <label>Message</label>
            <ErrorMessage name="message" component="div" className="error-message" />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </FormikForm>
      </Formik>
    </>
  );
}

export default ContactForm;
