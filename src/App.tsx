import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandManifesto } from './components/BrandManifesto';
import { ServicesSection } from './components/ServicesSection';
import { SelectedWork } from './components/SelectedWork';
import { StrategicApproach } from './components/StrategicApproach';
import { IndustryExperience } from './components/IndustryExperience';
import { EditorialInsights } from './components/EditorialInsights';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  const handleOpenContact = (defaultType?: string) => {
    if (defaultType) {
      // Map service name if needed or pass directly
      setSelectedServiceForContact(defaultType);
    }
    
    // Smooth scroll to the contact form section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAF8F5] font-sans selection:bg-[#AAE41B] selection:text-black antialiased relative">
      {/* Global Header Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Experience Stream */}
      <main id="main-content" className="relative w-full overflow-x-hidden">
        {/* 1. Hero Section with dynamic slides & London clock */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. Brand Manifesto & High-energy Marquee Ribbons */}
        <BrandManifesto onOpenContact={handleOpenContact} />

        {/* 3. 7 Core Capabilities & Interactive Service Stage */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* 4. Selected Work with Verified Impact Stats & Case Study Modals */}
        <SelectedWork onOpenContact={handleOpenContact} />

        {/* 5. 4-Stage Strategic Approach Sequencer */}
        <StrategicApproach onOpenContact={handleOpenContact} />

        {/* 6. Industry Experience & Cross-Sector Partner Pillars */}
        <IndustryExperience />

        {/* 7. The Editorial Desk & In-App Article Reader */}
        <EditorialInsights />

        {/* 8. High-Impact Final Call To Action */}
        <FinalCTA onOpenContact={handleOpenContact} />

        {/* 9. Accessible Client Inquiry & Contact Suite */}
        <ContactSection preselectedService={selectedServiceForContact} />
      </main>

      {/* Global Comprehensive Footer */}
      <Footer onOpenContact={handleOpenContact} />
    </div>
  );
}

export default App;
