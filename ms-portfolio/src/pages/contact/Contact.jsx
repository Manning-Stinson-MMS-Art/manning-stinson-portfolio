// Contact.jsx
import React from 'react';
import Layout from '@components/layout/Layout';
import ContactForm from '@components/contact-form/ContactForm';  // Add this import
import './Contact.scss';

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