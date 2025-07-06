import React from 'react';
import Clients from '../components/Clients'; // Adjust path if necessary

const ClientPage = () => {
  return (
    <div className="min-h-screen bg-black pt-16"> {/* Add padding top for fixed header if you have one */}
      <Clients />
    </div>
  );
};

export default ClientPage;