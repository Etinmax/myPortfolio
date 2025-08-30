'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Sidebar({ isOpen, toggleSidebar }) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    console.log('Sidebar rendered, isOpen:', isOpen);

    const navHighlighter = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      if (!sections.length) {
        console.warn('No sections with IDs found in the DOM');
        return;
      }

      // Find which section is currently in view
      let currentSection = 'home'; // Default to home
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150; // Increased offset for better detection
        const sectionId = current.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
      });

      // Update active section state
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        console.log(`Active section changed to: ${currentSection}`);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          navHighlighter();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleLoad = () => {
      // Initial call after a short delay
      setTimeout(navHighlighter, 100);
      window.addEventListener('scroll', scrollHandler);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('load', handleLoad);
    };
  }, [activeSection]);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    
    // Smooth scroll to section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile sidebar
    if (toggleSidebar && window.innerWidth < 768) {
      setTimeout(() => toggleSidebar(), 300);
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'work', label: 'Work', icon: '💼' },
    { id: 'services', label: 'Services', icon: '🛠️' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-gray-900 border-r border-gray-800 transition-all duration-300 z-50 ${
        isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'
      } md:translate-x-0 md:w-24 ${!isOpen ? 'hidden md:block' : ''}`}
    >
      <nav className="nav h-full relative">
        {/* Logo/Avatar - Desktop only */}
        <div className="absolute top-7 left-1/2 -translate-x-1/2 w-7 h-7 border-2 border-green-500 rounded-full hidden md:flex items-center justify-center shadow-lg">
          <Link href="#home" className="text-white font-bold text-lg">
            <Image src="/logo.png" alt="Logo" className="w-5 h-5 rounded-full object-cover" />
          </Link>
        </div>

        {/* Close button - Mobile only */}
        <div className="absolute top-4 right-5 md:hidden">
          <button 
            onClick={toggleSidebar}
            className="text-2xl text-green-500 cursor-pointer hover:text-green-400 transition-colors duration-200"
          >
            ✕
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="nav-menu h-full flex items-center">
          {/* Mobile Layout */}
          <ul className="nav-list md:hidden flex flex-col gap-2 items-start pl-8 w-full">
            {navigationItems.map((item) => (
              <li key={item.id} className="nav-item w-full">
                <button
                  onClick={() => handleLinkClick(item.id)}
                  className={`nav-link capitalize font-medium py-3 px-4 hover:bg-gray-800 rounded-lg transition-all duration-200 flex items-center gap-3 w-full text-left ${
                    activeSection === item.id 
                      ? 'text-green-400 bg-gray-800 border-l-4 border-green-500' 
                      : 'text-gray-300 hover:text-green-400'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Layout - Rotated */}
          <ul className="nav-list hidden md:flex flex-row-reverse gap-8 items-center justify-center w-full h-screen"
              style={{ 
                transform: 'rotate(-90deg)',
                transformOrigin: 'center center'
              }}>
            {navigationItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  onClick={() => handleLinkClick(item.id)}
                  className={`nav-link capitalize font-medium relative group whitespace-nowrap transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-green-400' 
                      : 'text-gray-100 hover:text-green-500'
                  }`}
                >
                  {item.label}
                  
                  {/* Original dot indicator - positioned like the original */}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-500 rounded-full ${
                    activeSection === item.id 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                  style={{
                    transition: 'opacity 0.2s ease',
                    width: '6px',
                    height: '6px',
                    minWidth: '6px',
                    minHeight: '6px'
                  }}></span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Share icon - Desktop only */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:block">
          <button className="text-green-500 text-xl cursor-pointer hover:text-green-400 transition-all duration-200 hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .nav-link:hover::before {
          left: 100%;
        }
        
        /* Fix for indicator sizing */
        .nav-link span {
          flex-shrink: 0;
        }
        
        /* Prevent layout shifts */
        .nav-item {
          position: relative;
        }
      `}</style>
    </aside>
  );
}
{/*'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar({ isOpen, toggleSidebar }) {
  useEffect(() => {
    console.log('Sidebar rendered, isOpen:', isOpen);

    const navHighlighter = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      if (!sections.length) {
        console.warn('No sections with IDs found in the DOM');
        return;
      }

      // Clear all active states first
      const allLinks = document.querySelectorAll('.nav-link');
      allLinks.forEach(link => link.classList.remove('active-link'));

      // Find which section is currently in view
      let currentSection = null;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
      });

      // If we found a current section, highlight its link
      if (currentSection) {
        const link = document.querySelector(`a[href="#${currentSection}"].nav-link`);
        if (link) {
          link.classList.add('active-link');
          console.log(`Added active-link to: ${currentSection}`);
        }
      }
    };

    const handleLinkClick = (sectionId) => {
      // Clear all active states
      const allLinks = document.querySelectorAll('.nav-link');
      allLinks.forEach(link => link.classList.remove('active-link'));
      
      // Add active to clicked link
      const clickedLink = document.querySelector(`a[href="#${sectionId}"].nav-link`);
      if (clickedLink) {
        clickedLink.classList.add('active-link');
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          navHighlighter();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleLoad = () => {
      // Initial call after a short delay
      setTimeout(navHighlighter, 100);
      window.addEventListener('scroll', scrollHandler);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Store handleLinkClick in window for access from onClick handlers
    window.handleSidebarLinkClick = handleLinkClick;

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('load', handleLoad);
      delete window.handleSidebarLinkClick;
    };
  }, []);

  const handleMobileLinkClick = (item) => {
    if (window.handleSidebarLinkClick) {
      window.handleSidebarLinkClick(item);
    }
    if (toggleSidebar) {
      toggleSidebar();
    }
  };

  const handleDesktopLinkClick = (item) => {
    if (window.handleSidebarLinkClick) {
      window.handleSidebarLinkClick(item);
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-gray-900 border-r border-gray-800 transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'
      } md:translate-x-0 md:w-24 ${!isOpen ? 'hidden md:block' : ''}`}
    >
      <nav className="nav h-full relative ">
        {/* Logo/Avatar - Desktop only */}
        {/*<div className=" absolute top-7 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full hidden md:flex items-center justify-center">
          <Link href="#" className="text-white font-bold text-lg">
            M
          </Link>
        </div>*/}

        {/* Close button - Mobile only */}
        {/*<div className="absolute top-4 right-5 md:hidden">
          <button 
            onClick={toggleSidebar}
            className="text-xl text-green-500 cursor-pointer hover:text-green-400"
          >
            ✕
          </button>
        </div>*/}

        {/* Navigation Menu */}
        {/*<div className="nav-menu h-full flex items-center">*/}
          {/* Mobile Layout */}
          {/*<ul className="nav-list md:hidden flex flex-col gap-4 items-start pl-8 w-full">
            {['home', 'about', 'skills', 'work', 'services', 'contact'].map((item) => (
              <li key={item} className="nav-item">
                <Link
                  href={`#${item}`}
                  className="nav-link capitalize text-gray-100 font-medium py-2 hover:text-green-500 block transition-colors duration-200"
                  onClick={() => handleMobileLinkClick(item)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>*/}

          {/* Desktop Layout - Rotated */}
          {/*<ul className="nav-list hidden md:flex flex-row-reverse gap-8 items-center justify-center w-full h-screen"
              style={{ 
                transform: 'rotate(-90deg)',
                transformOrigin: 'center center'
              }}>
            {['home', 'about', 'skills', 'work', 'services', 'contact'].map((item) => (
              <li key={item} className="nav-item">
                <Link
                  href={`#${item}`}
                  className="nav-link capitalize text-gray-100 font-medium hover:text-green-500 relative group whitespace-nowrap transition-colors duration-200"
                  onClick={() => handleDesktopLinkClick(item)}
                >
                  {item}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Share icon - Desktop only */}
        {/*<div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:block">
          <button className="text-green-500 text-xl cursor-pointer hover:text-green-400">
            📤
          </button>
        </div>
      </nav>
    </aside>
  );
}*/}

