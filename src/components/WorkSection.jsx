'use client';

import { useEffect, useRef, useState } from 'react';

export default function WorkSection({ setPortfolioItem }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  const containerRef = useRef(null);

  const portfolioItems = [
    {
      id: 1,
      category: 'web',
      img: '/mockup/biz.png',
      title: 'Business Web Design',
      subtitle: 'Modern Corporate Website',
      details: {
        title: 'The services we provide for design',
        description: 'A corporate website design project showcasing modern aesthetics and user-friendly interfaces.',
        info: [
          { label: 'Created', value: '22 Apr 2025' },
          { label: 'Technologies', value: 'React, Next.js, Tailwind' },
          { label: 'Role', value: 'Frontend Developer' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
    {
      id: 2,
      category: 'app',
      img: '/mockup/storage.png',
      title: 'Cloud Storage App',
      subtitle: 'Web App Interface',
      details: {
        title: 'Web App  Design & App Maintain',
        description: 'A stylish cloud storage web app interface displayed on a PC',
        info: [
          { label: 'Created', value: '15 Apr 2024' },
          { label: 'Technologies', value: 'React Native, Python, HTML, CSS' },
          { label: 'Role', value: 'Frontend Developer' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
    {
      id: 3,
      category: 'design',
      img: '/mockup/storage.png',
      title: 'Travel App Brand',
      subtitle: 'Logo & Brand Identity',
      details: {
        title: 'Logo Design Creativity & Application',
        description: 'Three smartphone screens displaying a beautifully designed travel booking application interface',
        info: [
          { label: 'Created', value: '10 Apr 2025' },
          { label: 'Technologies', value: 'Adobe Creative Suite' },
          { label: 'Role', value: 'Brand Designer' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
    {
      id: 4,
      category: 'app',
      img: '/mockup/biz.png',
      title: 'Task Management App',
      subtitle: 'Task Tracking App',
      details: {
        title: 'Web App Landing Design & Services',
        description: 'Modern task management website interface design featuring a bold and energetic visual layout',
        info: [
          { label: 'Created', value: '4 Apr 2025' },
          { label: 'Technologies', value: 'React, Firebase' },
          { label: 'Role', value: 'Frontend Developer' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
    {
      id: 5,
      category: 'web',
      img: '/mockup/biz.png',
      title: 'Hotel Management App',
      subtitle: 'Web Application',
      details: {
        title: 'Design for Technology & Services',
        description: 'An app design that is clean, functional, and ideal for users looking to manage their hotel bookings and services',
        info: [
          { label: 'Created', value: '28 Mar 2025' },
          { label: 'Technologies', value: 'Next.js, Express.js' },
          { label: 'Role', value: 'Fullstack Developer' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
    {
      id: 6,
      category: 'design',
      img: '/mockup/storage.png',
      title: 'Students Attendance App',
      subtitle: 'Web App Design',
      details: {
        title: 'App for Technology & Services',
        description: 'An app design that is clean and modern, making attendance tracking easy',
        info: [
          { label: 'Created', value: '20 Mar 2025' },
          { label: 'Technologies', value: 'Nextjs, Expressjs' },
          { label: 'Role', value: 'Full Stack Developer' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
  ];

  // Filter items based on active filter
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Dev' },
    { key: 'app', label: 'Technical' },
    { key: 'design', label: 'Design' },
  ];

  return (
    <section id="work" className="section py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title text-center mb-16" data-heading="My Portfolio">
          <span className="text-3xl font-bold text-white">Recent Works</span>
        </h2>
        
        {/* Filter Buttons */}
        <div className="work-filters flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.key
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                  : 'text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white border border-gray-700'
              }`}
              onClick={() => handleFilterClick(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div 
          className="work-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={containerRef}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="work-card group bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-green-500/30"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="work-img w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.subtitle}
                  </p>
                </div>

                {/* Action Button */}
                <button
                  className="work-button flex items-center gap-2 text-green-500 font-medium cursor-pointer group-hover:text-green-400 transition-colors duration-300"
                  onClick={() => setPortfolioItem(item)}
                >
                  <span>View Details</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {/* Hidden details for compatibility */}
                <div className="portfolio-item-details hidden">
                  {JSON.stringify(item.details)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg">
              No projects found for this category.
            </div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .work-card {
          animation-fill-mode: both;
        }

        /* Smooth transitions for filtered items */
        .work-container {
          transition: all 0.3s ease;
        }

        /* Enhanced hover effects */
        .work-card:hover .work-img {
          filter: brightness(1.1);
        }
      `}</style>
    </section>
  );
}

{/*'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import mixitup only on the client side
const MixItUp = dynamic(() => import('mixitup'), { ssr: false });

export default function WorkSection({ setPortfolioItem }) {
  const mixerRef = useRef(null);
  const mixerInstance = useRef(null);

  useEffect(() => {
    // Ensure mixitup is only initialized in the browser
    if (typeof window !== 'undefined' && mixerRef.current) {
      // Initialize mixitup and store the instance
      mixerInstance.current = MixItUp(mixerRef.current, {
        selectors: { target: '.work-card' },
        animation: { duration: 300 },
      });
    }

    // Cleanup on component unmount
    return () => {
      if (mixerInstance.current && typeof mixerInstance.current.destroy === 'function') {
        mixerInstance.current.destroy();
      }
    };
  }, []);

  const handleFilterClick = (e) => {
    document.querySelectorAll('.work-item').forEach((item) => item.classList.remove('active-work'));
    e.target.classList.add('active-work');
  };

  const portfolioItems = [
    {
      category: 'web',
      img: '/mockup/biz.png',
      title: 'Web Design',
      details: {
        title: 'The services we provide for design',
        description: 'Two smartphones displaying a sleek, dark-themed dashboard interface',
        info: [
          { label: 'Created', value: '22 Apr 2025' },
          { label: 'Technologies', value: 'html css' },
          { label: 'Role', value: 'frontend' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
    {
      category: 'app',
      img: '/mockup/mobile.png',
      title: 'App Design',
      details: {
        title: 'Mobile App Landing Design & App Maintain',
        description: 'A stylish burger restaurant mobile app interface displayed on two smartphones',
        info: [
          { label: 'Created', value: '15 Apr 2025' },
          { label: 'Technologies', value: 'html css' },
          { label: 'Role', value: 'frontend' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
    {
      category: 'design',
      img: '/mockup/storage.png',
      title: 'Brand Design',
      details: {
        title: 'Logo Design Creativity & Application',
        description: 'Three smartphone screens displaying a beautifully designed travel booking application interface',
        info: [
          { label: 'Created', value: '10 Apr 2025' },
          { label: 'Technologies', value: 'html css' },
          { label: 'Role', value: 'frontend' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
    {
      category: 'app',
      img: '/mockup/biz.png',
      title: 'App Design',
      details: {
        title: 'Mobile App Landing Design & Services',
        description: 'Modern workout website interface design featuring a bold and energetic visual layout',
        info: [
          { label: 'Created', value: '4 Apr 2025' },
          { label: 'Technologies', value: 'html css' },
          { label: 'Role', value: 'frontend' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
    {
      category: 'web',
      img: '/images/work-5.png',
      title: 'Brand Design',
      details: {
        title: 'Design for Technology & Services',
        description: 'An app design that is clean, functional, and ideal for gamers looking to manage their digital assets and purchases',
        info: [
          { label: 'Created', value: '28 Mar 2025' },
          { label: 'Technologies', value: 'html css' },
          { label: 'Role', value: 'frontend' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
    {
      category: 'design',
      img: '/images/work-6.png',
      title: 'Web Design',
      details: {
        title: 'App for Technology & Services',
        description: 'An app design that is clean and modern, making food browsing and ordering easy',
        info: [
          { label: 'Created', value: '20 Mar 2025' },
          { label: 'Technologies', value: 'html css' },
          { label: 'Role', value: 'frontend' },
          { label: 'View', value: 'www.domain.com', href: '#' },
        ],
      },
    },
  ];

  return (
    <section id="work" className="section">
      <h2 className="section-title" data-heading="My Portfolio">Recent Works</h2>
      <div className="work-filters flex justify-center gap-3 mb-8">
        {['all', 'web', 'app', 'design'].map((filter) => (
          <span
            key={filter}
            className={`work-item cursor-pointer px-3 py-1 rounded-lg ${filter === 'all' ? 'active-work bg-green-500 text-white' : 'text-gray-100'}`}
            data-filter={filter === 'all' ? 'all' : `.${filter}`}
            onClick={handleFilterClick}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </span>
        ))}
      </div>
      <div className="work-container container mx-auto px-4  grid md:grid-cols-3 gap-6" ref={mixerRef}>
        {portfolioItems.map((item, index) => (
          <div key={index} className={`work-card ${item.category} bg-gray-800 p-5 rounded-lg`}>
            <img src={item.img} alt="" className="work-img rounded-lg mb-4" />
            <h3 className="work-title text-base font-medium mb-2">{item.title}</h3>
            <span
              className="work-button text-green-500 text-sm flex items-center gap-1 cursor-pointer"
              onClick={() => setPortfolioItem(item)}
            >
              Demo <i className="uil uil-arrow-right work-button-icon"></i>
            </span>
            <div className="portfolio-item-details hidden">{JSON.stringify(item.details)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}*/}