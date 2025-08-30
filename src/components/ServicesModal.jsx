import { X, CheckCircle } from 'lucide-react';

export default function ServicesModal({ index, closeModal }) {
  const services = [
    {
      title: 'Frontend Development',
      description: 'I create responsive and visually appealing user interfaces with modern web technologies and over 3 years of experience delivering quality solutions.',
      items: [
        'HTML, CSS, and JavaScript',
        'React.js and Next.js',
        'Responsive Web Design',
        'Cross-Browser Compatibility',
        'Performance Optimization',
      ],
    },
    {
      title: 'Backend Development',
      description: 'I develop robust and scalable server-side applications to power your web solutions with secure and efficient architectures.',
      items: [
        'Node.js and Express.js',
        'Database Design (SQL/NoSQL)',
        'API Development and Integration',
        'Authentication and Authorization',
        'Server Deployment and Maintenance',
      ],
    },
    {
      title: 'Figma Design',
      description: 'I design user-friendly interfaces and prototypes using Figma, creating seamless user experiences with modern design principles.',
      items: [
        'Wireframing and Prototyping',
        'UI/UX Design',
        'Collaborative Design Workflow',
        'Interactive Mockups',
        'Design System Creation',
      ],
    },
    {
      title: 'Canva Design',
      description: 'I create visually appealing graphics and marketing materials using Canva, helping brands stand out with professional designs.',
      items: [
        'Social Media Graphics',
        'Marketing Materials',
        'Custom Templates',
        'Branding Assets',
        'Presentation Design',
      ],
    },
    {
      title: 'Hardware Troubleshooting',
      description: 'I diagnose and resolve hardware-related issues for optimal system performance, ensuring your technology runs smoothly and efficiently.',
      items: [
        'PC Assembly and Repairs',
        'Peripheral Device Setup',
        'Hardware Upgrades',
        'Diagnostics and Testing',
        'Performance Optimization',
      ],
    },
    {
      title: 'IT Management and Support',
      description: 'I provide comprehensive technical support to resolve software and hardware issues efficiently, minimizing downtime for your business.',
      items: [
        'Software Installation and Updates',
        'Troubleshooting Technical Issues',
        'System Maintenance',
        'User Training and Support',
        'Remote Assistance',
      ],
    },
    {
      title: 'Network Design and Maintenance',
      description: 'I design and maintain reliable network infrastructures for businesses, ensuring secure and scalable connectivity solutions.',
      items: [
        'Network Setup and Configuration',
        'Troubleshooting Network Issues',
        'Security Implementation',
        'Performance Monitoring',
        'Scalable Network Solutions',
      ],
    },
  ];

  const service = services[index];

  if (!service) return null;

  return (
    <div className="services-modal fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[100] opacity-100 visible backdrop-blur-sm animate-in fade-in duration-300">
      <div className="services-modal-content bg-gray-800 w-full max-w-lg rounded-xl p-8 pt-16 relative text-center transform transition-all duration-300 animate-in zoom-in-95 shadow-2xl border border-gray-700">
        {/* Close Button */}
        <button 
          className="absolute top-6 right-6 text-green-500 hover:text-green-400 transition-colors duration-200 hover:scale-110 transform"
          onClick={closeModal}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <h3 className="services-modal-title text-2xl font-semibold mb-3 text-white">
            {service.title}
          </h3>
          <p className="services-modal-description text-gray-300 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Services List */}
        <div className="services-modal-services">
          <h4 className="text-green-400 font-medium mb-4 text-left">What's Included:</h4>
          <ul className="grid gap-3 text-left">
            {service.items.map((item, i) => (
              <li 
                key={i} 
                className="services-modal-service flex items-start gap-3 group hover:bg-gray-700/30 rounded-lg p-2 transition-all duration-200"
              >
                <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <p className="services-modal-info text-sm text-gray-200 group-hover:text-white transition-colors duration-200">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-green-400 text-sm font-medium">
            Ready to get started? Let's discuss your project!
          </p>
        </div>
      </div>
    </div>
  );
}