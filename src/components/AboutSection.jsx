import { Award, Briefcase, Headphones, Navigation, Download } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import DownloadCV from './DownloadCV';
import Image from 'next/image'

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3,
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [elementRef, isVisible];
};

// Counter animation component
const AnimatedCounter = ({ end, duration = 2000, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startValue = 0;
    const endValue = parseInt(end);

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span>{count}{suffix}</span>;
};

export default function AboutSection() {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  const [contentRef, isContentVisible] = useIntersectionObserver();

  const statsData = [
    { icon: Award, title: 'Experience', value: '10', suffix: ' + Years' },
    { icon: Briefcase, title: 'Completed', value: '60', suffix: ' + Projects' },
    { icon: Headphones, title: 'Support', subtitle: 'Online 24/7' },
  ];

  return (
    <section id="about" className="section py-20">
      <h2 className="section-title" data-heading="My Intro">About me</h2>
      <div className="about-container container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/aipicbg.png" 
                alt="Maxwell - Fullstack Developer" 
                className="about-img w-full h-full object-cover rounded-2xl" 
              />
               
              <div className="relative w-full h-full">
 
</div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/5 rounded-full blur-2xl"></div>
          </div>

          {/* Content Section */}
          <div 
            ref={contentRef}
            className={`about-data transition-all duration-1000 ${
              isContentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="about-heading text-2xl lg:text-3xl font-bold text-white leading-tight">
                  Hi, I'm <span className="text-green-500">Maxwell</span>, based in Nigeria.
                </h3>
              <p className="about-description text-gray-300 leading-relaxed text-base lg:text-lg text-justify">
                A Computer Science graduate and the founder of 
      <Link
        href="https://www.troybit.com.ng"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-400 transition-colors duration-200 ml-1.5"
      >
         Troybit Systems 
      </Link>
     , an IT startup focused on delivering innovative digital solutions. With
      over 10 years of experience across roles in IT support, system
      administration, and web design, I've built a strong foundation in both
      technology and problem-solving. My certifications — including Google IT
      Support, Web Development (Udemy), Backend Development (Axia Africa) and
      Full Stack Development (Next College) — complement my hands-on expertise.
      Today, I specialize in fullstack development, building modern, scalable
      applications with Next.js, React, Prisma, PostgreSQL, MongoDB, and
      Git/GitHub. My journey reflects a passion for creating technology that not
      only works but truly empowers businesses and people.
    </p>
              </div>

              {/* Stats Cards */}
              <div 
                ref={statsRef}
                className="about-info grid grid-cols-1 sm:grid-cols-3 gap-4 py-8"
              >
                {statsData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index} 
                      className={`about-box group text-center bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-green-500/30 hover:bg-gray-700/60 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 ${
                        isStatsVisible 
                          ? `animate-in slide-in-from-bottom-4 duration-700 delay-${index * 150}` 
                          : 'opacity-0'
                      }`}
                    >
                      <div className="flex justify-center mb-3">
                        <div className="p-3 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors duration-300">
                          <IconComponent 
                            size={28} 
                            className="text-green-500 group-hover:text-green-400 transition-all duration-300 group-hover:scale-110" 
                          />
                        </div>
                      </div>
                      <h3 className="about-title text-lg font-semibold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="about-subtitle text-sm text-gray-400 font-medium">
                        {item.value ? (
                          <AnimatedCounter 
                            end={item.value} 
                            suffix={item.suffix} 
                            isVisible={isStatsVisible}
                            duration={2000 + index * 200}
                          />
                        ) : (
                          item.subtitle
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="about-buttons flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="#contact" 
                  className="button group inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
                >
                  <Navigation 
                    size={18} 
                    className="button-icon group-hover:scale-110 transition-transform duration-300" 
                  />
                  Contact me
                </Link>
                <Link
                  href="#contact"
                  className="button group inline-flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 hover:-translate-y-0.5 border border-gray-600 hover:border-gray-500"
                >
                  <Download 
                    size={18} 
                    className="button-icon group-hover:scale-110 transition-transform duration-300" 
                  />
                  <DownloadCV />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}