import { Twitter, Instagram, Facebook, Github,User, MessageCircle, Phone, Mail } from 'lucide-react';

export default function HomeSection() {
  return (
    <section id="home" className="home lg:bg-[url('/2aii.png')] bg-cover bg-center min-h-screen flex items-center bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 w-full">
        
        {/* Social Links - Fixed positioning for mobile */}
        <div className="home-social fixed top-1/2 right-0 -translate-y-1/2 z-10 sm:relative sm:top-0 sm:right-0 sm:transform-none sm:flex sm:items-center sm:gap-6 sm:mb-8">
          {/* Mobile: Vertical layout */}
          <div className="flex flex-col items-center gap-4 sm:hidden">
            <span className="home-social-follow font-medium text-xs writing-vertical-rl rotate-90 mb-4">Follow Me</span>
            <div className="flex flex-col gap-4">
              {[
               { name: 'twitter', icon: Twitter, url: 'https://www.x.com/EtinosaMaxville' },
                { name: 'instagram', icon: Instagram, url: 'https://www.instagram.com/official_etinosa/' },
                { name: 'facebook', icon: Facebook, url: 'https://www.facebook.com/etinosa.esezobor.3' },
                { name: 'github', icon: Github, url: 'https://github.com/etinmax' }
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    className="home-social-link text-gray-200 text-lg hover:-translate-x-1 transition-transform"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Desktop: Horizontal layout */}
          <div className="hidden sm:flex items-center gap-6 mt-5">
            <span className="home-social-follow font-medium relative after:content-[''] after:absolute after:w-4 after:h-0.5 after:bg-gray-200 after:right-[-45%] after:top-1/2">
              Follow Me
            </span>
            <div className="home-social-links flex gap-4 sm:px-6">
              {[
                { name: 'twitter', icon: Twitter, url: 'https://www.x.com/EtinosaMaxville' },
                { name: 'instagram', icon: Instagram, url: 'https://www.instagram.com/official_etinosa/' },
                { name: 'facebook', icon: Facebook, url: 'https://www.facebook.com/etinosa.esezobor.3' },
                { name: 'github', icon: Github, url: 'https://github.com/etinmax' }

              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.name} 
                    href={social.url}
                    target="_blank" 
                    className="home-social-link text-gray-200 text-lg hover:-translate-y-1 transition-transform"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh] sm:min-h-[60vh]">
          
          {/* Left Column - Text Content */}
          <div className="home-data order-2 lg:order-1 text-center lg:text-left px-4 sm:px-0">
            <h1 className="home-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm Maxwell
            </h1>
            <h3 className="home-subtitle text-xl sm:text-2xl lg:text-3xl font-medium mb-4 text-green-500">
              Founder & Fullstack Developer 
            </h3>
            <p className="home-description text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-8 text-gray-300 leading-relaxed">
              With  ten years experience in IT, I create modern, scalable web applications and digital solutions that help businesses grow.
            </p>
            <a href="#about" className="button inline-flex items-center gap-2">
              <User size={18} className="button-icon" /> More About me!
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end sm:hidden">
            <img 
              src="/aipic.png" 
              alt="Maxwell" 
              className="home-img w-48 sm:w-56 lg:w-64 xl:w-60 max-w-full h-70"
            />
          </div>
        </div>

     {/* Contact Info - Bottom */}
<div className="my-info flex justify-center mt-8 sm:mt-12 px-4 sm:px-0">
  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
    {[
      { icon: MessageCircle, title: 'Messenger', subtitle: 'Etinosa Esezobor' },
      { icon: Phone, title: 'Whatsapp', subtitle: '+234 703 3303 551' },
      { icon: Mail, title: 'Email', subtitle: 'maxwelletinosa@gmail.com' },
    ].map((item, index) => {
      const IconComponent = item.icon;
      return (
        <div
          key={index}
          className="info-item flex items-center gap-2 sm:gap-4"
        >
          <IconComponent
            size={28}
            className="text-green-500 flex-shrink-0 sm:w-8 sm:h-8"
          />
          <div className="text-left">
            <h3 className="info-title text-sm sm:text-base font-medium text-white">
              {item.title}
            </h3>
            <span className="info-subtitle text-xs sm:text-sm text-gray-400">
              {item.subtitle}
            </span>
          </div>
        </div>
      );
    })}
  </div>
</div>




      </div>
    </section>
  );
}