import React, { useState } from 'react';
import Layout from '@components/layout/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Layout 
      pageTitle="contact" 
      pageDescription="let's start a conversation :[)"
    >
      <main className="contact-container text-center">      
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="telephone"
              placeholder="Telephone Number"
              value={formData.telephone}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </Layout>
  );
};

export default Contact;