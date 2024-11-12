import React from 'react';
import Layout from '@components/layout/Index';
import ContactForm from '@components/forms/contact-form/Index';
import './index.scss';

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