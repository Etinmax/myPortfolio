'use client';

import Sidebar from '../components/Sidebar';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import QualificationSection from '../components/QualificationSection';
import SkillsSection from '../components/SkillsSection';
import WorkSection from '../components/WorkSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PortfolioPopup from '../components/PortfolioPopup';
import ServicesModal from '../components/ServicesModal';
import { useState } from 'react';
import Testimonials from '@/components/Testimonials';
import { Menu } from "lucide-react";


export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [portfolioItem, setPortfolioItem] = useState(null);
const [activeModal, setActiveModal] = useState<number | null>(null);

  const toggleSidebar = () => {
    console.log('Toggling sidebar, current state:', isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const togglePortfolioPopup = (item = null) => setPortfolioItem(item);
const toggleServicesModal = (index: number | null) => setActiveModal(index);

  return (
    <div className="relative min-h-screen">
      {/*<div className="fixed right-6 top-8 z-50 md:hidden">
        <button onClick={toggleSidebar} className="p-2 bg-green-500 text-white rounded">
          <i className="uil uil-bars text-xl"></i>
        </button>
      </div>*/}
      <div className="fixed right-6 top-8 z-50 md:hidden">
  <button
    onClick={toggleSidebar}
    className="p-2 bg-green-500 text-white rounded"
  >
    <Menu className="w-6 h-6" />
  </button>
</div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="ml-0 md:ml-24 min-h-screen">
        <HomeSection />
        <AboutSection />
        <QualificationSection />
        <SkillsSection />
        <WorkSection setPortfolioItem={togglePortfolioPopup} />
        <ServicesSection toggleModal={toggleServicesModal} />
        {/*<TestimonialsSection />*/}
        <Testimonials />
        <ContactSection />
        <Footer />
      </main>
      {portfolioItem && <PortfolioPopup item={portfolioItem} closePopup={() => togglePortfolioPopup(null)} />}
      {activeModal !== null && <ServicesModal index={activeModal} closeModal={() => setActiveModal(null)} />}
    </div>
  );
}