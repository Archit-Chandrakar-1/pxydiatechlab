// AboutPage.tsx
import React from 'react';
import About from '../components/About'; // Adjust path if necessary

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black pt-16"> {/* Add padding top for fixed header if you have one */}
      <About />
    </div>
  );
};

export default AboutPage; 