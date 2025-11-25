import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart } from 'lucide-react';
import logoImage from 'figma:asset/25b3cb45a9ea19bb8f252c76e5550f3008379dad.png';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Get Involved', href: '#get-involved' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#5B8A8D] to-[#4a7174] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoImage} alt="Vidhata Logo" className="h-12 w-12" />
              <span className="text-2xl">Vidhata</span>
            </div>
            <p className="text-white/90 mb-4 max-w-md">
              Empowering underserved students across Nepal through structured non-academic 
              learning that fosters holistic development and creates lasting impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#EA8166] transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-4 text-lg">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-[#F0C78A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="mb-4 text-lg">Stay Updated</h5>
            <p className="text-white/80 mb-4 text-sm">
              Subscribe to our newsletter for updates on our programs and impact.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/10 text-white placeholder-white/60 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#EA8166] border border-white/20"
              />
              <button className="px-4 py-2 bg-[#EA8166] hover:bg-[#d97359] rounded-r-lg transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/80 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Vidhata. All rights reserved.
          </p>
          <p className="text-white/80 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-[#EA8166]" /> for students across Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
