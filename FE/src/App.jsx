import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ServicesGrid from './components/ServicesGrid';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import PortfolioShowcase from './components/PortfolioShowcase';
import TechEcosystem from './components/TechEcosystem';
import PreFooterCallout from './components/PreFooterCallout';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-cobalt-600 selection:text-white ${
      isDark ? 'bg-[#0b0f17] text-slate-100' : 'bg-[#f6f7f5] text-[#172129]'
    }`}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <main>
        {activeTab === 'home' && (
          <>
            <HeroBanner setActiveTab={setActiveTab} isDark={isDark} />
            <FeaturedCaseStudy setActiveTab={setActiveTab} isDark={isDark} />
            <ServicesGrid isDark={isDark} />
            <TechEcosystem isDark={isDark} />
            <PortfolioShowcase isDark={isDark} />
            <ContactForm isDark={isDark} />
            <PreFooterCallout setActiveTab={setActiveTab} isDark={isDark} />
          </>
        )}

        {activeTab === 'services' && (
          <div className="pt-24">
            <ServicesGrid isDark={isDark} />
            <TechEcosystem isDark={isDark} />
            <PreFooterCallout setActiveTab={setActiveTab} isDark={isDark} />
          </div>
        )}

        {activeTab === 'work' && (
          <div className="pt-24">
            <FeaturedCaseStudy setActiveTab={setActiveTab} isDark={isDark} />
            <PortfolioShowcase isDark={isDark} />
            <PreFooterCallout setActiveTab={setActiveTab} isDark={isDark} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-24">
            <ContactForm isDark={isDark} />
          </div>
        )}
      </main>

      <Footer setActiveTab={setActiveTab} isDark={isDark} />
    </div>
  );
}
