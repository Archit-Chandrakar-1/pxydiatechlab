import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutUs';
import AdminDashboard from './pages/AdminDashboard';
import ClientPage from './pages/ClientPage';
import CareerPage from './pages/CareerPage';
import BlogsPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/clients" element={<ClientPage />} />
                <Route path="/careers" element={<CareerPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;