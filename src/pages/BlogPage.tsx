// BlogsPage.tsx
import React from 'react';
import Blogs from '../components/Blogs'; // Adjust path if necessary

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-black pt-16"> {/* Add padding top for fixed header if you have one */}
      <Blogs />
    </div>
  );
};

export default BlogsPage;