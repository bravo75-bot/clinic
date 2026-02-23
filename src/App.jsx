import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Doctor from './components/Doctor';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Doctor />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
