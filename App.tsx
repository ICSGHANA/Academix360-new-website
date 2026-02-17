
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import DemoModal from './components/DemoModal';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen relative">
      <Navbar onOpenDemo={openDemoModal} />
      
      <main>
        <Hero onOpenDemo={openDemoModal} />
        <Benefits />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing onOpenDemo={openDemoModal} />
        <Contact />
        <CTA onOpenDemo={openDemoModal} />
      </main>

      <Footer />
      
      <FloatingWhatsApp />
      <ScrollToTop />
      
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
};

export default App;
