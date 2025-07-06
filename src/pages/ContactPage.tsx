
import React from 'react';
import Contact from '../components/Contact'; // Adjust path if necessary

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black pt-16"> {/* Add padding top for fixed header if you have one */}
      <Contact />
    </div>
  );
};

export default ContactPage;