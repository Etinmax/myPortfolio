"use client";

import { Facebook, Instagram, Twitter, Github, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-white">Maxwell Etinosa</h2>
              <p className="text-green-400 font-medium">Founder & Fullstack Developer</p>

              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-green-400" />
                <a href="mailto:maxwelletinosa@gmail.com" className="hover:text-green-400 transition-colors">
                  maxwelletinosa@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-green-400" />
                <a href="tel:+2341234567890" className="hover:text-green-400 transition-colors">
                  +234 (0) 703 3303 551
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>Benin City, Edo State, Nigeria</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Portfolio", href: "#work" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 
                        hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {["Web Development", "Mobile Apps", "UI/UX Design", "Consulting"].map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 hover:text-green-400 transition-colors cursor-default">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-4 pt-4 lg:border-t-hidden border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
              <div>
                <h4 className="text-white font-semibold mb-2">Follow Me</h4>
                <p className="text-gray-400 text-sm">Stay connected for updates and insights</p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/etinosa.esezobor.3", label: "Facebook" },
                  { icon: Instagram, href: "https://www.instagram.com/official_etinosa/", label: "Instagram" },
                  { icon: Twitter, href: "https://www.x.com/EtinosaMaxville", label: "Twitter" },
                  { icon: Github, href: "https://github.com/etinmax", label: "Github" },

                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-800 rounded-lg border border-gray-700 
                      hover:border-green-400 hover:bg-gray-700 transition-all duration-300 
                      hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 bg-gray-900/50">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear}{" "}
                <span className="text-green-400 font-semibold hover:text-green-300 transition-colors">
                 <a href="https://www.troybit.com.ng">TroyBit Systems</a>
                </span>
                . All rights reserved.
              </p>

              <div className="flex items-center gap-6 justify-center md:justify-end">
                <a href="#privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                  Terms of Service
                </a>
                <button
                  onClick={scrollToTop}
                  className="group p-2 bg-green-500 hover:bg-green-400 rounded-full 
                    transition-all duration-300 hover:scale-110 
                    hover:shadow-lg hover:shadow-green-500/25"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
