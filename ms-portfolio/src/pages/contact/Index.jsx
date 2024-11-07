// src/pages/contact/index.jsx
import React from 'react';
import Layout from '../../components/layout';                // Relative path
import ContactForm from '../../components/forms/contact-form'; // Relative path
import './index.scss';  // Local import stays the same

const Contact = () => {
  return (
    <Layout
      pageTitle="contact"
      pageDescription="let's start a conversation :[)"
      titleAlignment="text-left"
    >
      <main className="contact-container text-center">
        <ContactForm />
      </main>
    </Layout>
  );
};

export default Contact;