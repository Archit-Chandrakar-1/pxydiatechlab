import React from 'react';
import Careers from '../components/Careers'; // Adjust path if necessary

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-black pt-16"> {/* Add padding top for fixed header if you have one */}
      <Careers />
    </div>
  );
};

export default CareerPage;