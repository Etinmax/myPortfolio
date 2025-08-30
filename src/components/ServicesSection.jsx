import { 
  Layout, 
  Server, 
  Figma, 
  Palette, 
  Monitor, 
  Headset, 
  Wifi,
  ArrowRight 
} from 'lucide-react';

export default function ServicesSection({ toggleModal }) {
  const services = [
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'I create responsive and visually appealing user interfaces with modern web technologies.',
      items: [
        'HTML, CSS, and JavaScript',
        'React.js and Next.js',
        'Responsive Web Design',
        'Cross-Browser Compatibility',
        'Performance Optimization',
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'I develop robust and scalable server-side applications to power your web solutions.',
      items: [
        'Node.js and Express.js',
        'Database Design (SQL/NoSQL)',
        'API Development and Integration',
        'Authentication and Authorization',
        'Server Deployment and Maintenance',
      ],
    },
    {
      icon: Figma,
      title: 'Figma Design',
      description: 'I design user-friendly interfaces and prototypes using Figma.',
      items: [
        'Wireframing and Prototyping',
        'UI/UX Design',
        'Collaborative Design Workflow',
        'Interactive Mockups',
        'Design System Creation',
      ],
    },
    {
      icon: Palette,
      title: 'Canva Design',
      description: 'I create visually appealing graphics and marketing materials using Canva.',
      items: [
        'Social Media Graphics',
        'Marketing Materials',
        'Custom Templates',
        'Branding Assets',
        'Presentation Design',
      ],
    },
    {
      icon: Monitor,
      title: 'Hardware Troubleshooting',
      description: 'I diagnose and resolve hardware-related issues for optimal system performance.',
      items: [
        'PC Assembly and Repairs',
        'Peripheral Device Setup',
        'Hardware Upgrades',
        'Diagnostics and Testing',
        'Performance Optimization',
      ],
    },
    {
      icon: Headset,
      title: 'IT Management and Support',
      description: 'I provide technical support to resolve software and hardware issues efficiently.',
      items: [
        'Software Installation and Updates',
        'Troubleshooting Technical Issues',
        'System Maintenance',
        'User Training and Support',
        'Remote Assistance',
      ],
    },
    {
      icon: Wifi,
      title: 'Network Design and Maintenance',
      description: 'I design and maintain reliable network infrastructures for businesses.',
      items: [
        'Network Setup and Configuration',
        'Troubleshooting Network Issues',
        'Security Implementation',
        'Performance Monitoring',
        'Scalable Network Solutions',
      ],
    },
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title" data-heading="Services">What I Offer</h2>
      <div className="services-container container mx-auto px-4 grid md:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={index} 
              className="services-content relative bg-gray-800 p-6 pt-20 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 group border border-gray-700 hover:border-green-500/50"
            >
              <div className="absolute top-6 left-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <div className="bg-gray-700 p-4 rounded-xl group-hover:bg-gray-600 transition-colors duration-300">
                  <IconComponent className="text-green-500 w-8 h-8 group-hover:text-green-400 transition-colors duration-300" />
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="services-title text-xl font-medium mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                  {service.title.split('<br>').join(' ')}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              
              <button 
                className="services-button text-green-500 text-sm flex items-center gap-2 cursor-pointer hover:text-green-400 transition-all duration-300 group-hover:gap-3 font-medium"
                onClick={() => toggleModal(index)}
              >
                View More 
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-500/20 via-transparent to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}