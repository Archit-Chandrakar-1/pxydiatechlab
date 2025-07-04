import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Careers from '../components/Careers';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Careers />
      <Blogs />
      <Contact />
    </>
  );
};

export default Home;