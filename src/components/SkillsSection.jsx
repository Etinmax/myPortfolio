'use client';

import { useState } from 'react';
import { Code, Palette, Server, ChevronDown, MonitorCog } from 'lucide-react';
import { title } from 'process';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillsData = {
    frontend: [
      { name: 'HTML', percentage: 90 },
      { name: 'CSS', percentage: 80 },
      { name: 'Javascript', percentage: 60 },
      { name: 'React', percentage: 85 },
      { name: 'Next.js', percentage: 70 },
      { name: 'Tailwind CSS', percentage: 75 },

    ],
    design: [
      { name: 'Figma', percentage: 50 },
      { name: 'Canva', percentage: 80 },
      { name: 'PhotoShop', percentage: 70 },
    ],
    backend: [
      { name: 'Mongoose', percentage: 80 },
      { name: 'Expressjs', percentage: 80 },
      { name: 'PostgreSQL', percentage: 70 },
      { name: 'Firebase', percentage: 75 },
      { name: 'Supabase', percentage: 75 },
      { name: 'Node.js', percentage: 80 },

    ],
    technical:[
     {name:'Hardware & Software Support', percentage:80},
     {name:'Networking & Sys. Admin', percentage:75},
     {name:'Email & Collaboration Tools', percentage:85},
     {name:'Database Management', percentage:90},
      {name:'Cloud and Virtualization', percentage:50},
      {name:'Cybersecurity', percentage:60},

    ]

  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title" data-heading="My Abilities">My Experience</h2>
      <div className="skills-container container mx-auto px-4 grid md:grid-cols-2 gap-12 justify-center sm:w-11/12">
        <div className="skills-tabs space-y-6">
          {[
            { target: 'frontend', icon: Code, title: 'Frontend Developer', subtitle: 'More than 3 years' },
            { target: 'design', icon: Palette, title: 'Design', subtitle: 'More than 4 years' },
            { target: 'backend', icon: Server, title: 'Backend Developer', subtitle: 'More than 2 years' },
            {target: 'technical',icon: MonitorCog, title:'Technical Support', subtitle: 'More than 5 years'},
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <div
                key={tab.target}
                className={`skills-header flex items-center cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                  activeTab === tab.target 
                    ? 'skills-active bg-gray-800 border border-green-500/30' 
                    : 'hover:bg-gray-900'
                }`}
                onClick={() => setActiveTab(tab.target)}
              >
                <IconComponent size={28} className="text-green-500 mr-3 flex-shrink-0" />
                <div className="flex-grow">
                  <h1 className="skills-title text-xl font-medium">{tab.title}</h1>
                  <span className="skills-subtitle text-sm text-gray-400">{tab.subtitle}</span>
                </div>
                <ChevronDown 
                  size={24} 
                  className={`text-green-500 transition-transform duration-300 ${
                    activeTab === tab.target ? 'rotate-180' : ''
                  }`} 
                />
              </div>
            );
          })}
        </div>
        
        <div className="skills-content">
          {Object.entries(skillsData).map(([key, skills]) => (
            <div 
              key={key} 
              className={`skills-group transition-all duration-500 ${
                activeTab === key ? 'skills-active opacity-100' : 'hidden opacity-0'
              }`} 
              id={key}
            >
              <div className="skills-list grid gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skills-data"
                    style={{
                      animation: activeTab === key ? `slideInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                    }}
                  >
                    <div className="skills-titles flex justify-between mb-2">
                      <h3 className="skills-name text-base font-medium">{skill.name}</h3>
                      <span className="skills-number text-sm text-green-400 font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="skills-bar bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="skills-percentage bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: activeTab === key ? `${skill.percentage}%` : '0%',
                          transitionDelay: activeTab === key ? `${index * 0.1}s` : '0s'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}