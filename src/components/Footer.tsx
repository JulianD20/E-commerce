import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">MarketPlace</h3>
            <p className="text-gray-300 text-sm leading-6">
              Your premier destination for quality products from trusted vendors worldwide. 
              Discover, shop, and enjoy seamless e-commerce experience.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', action: () => alert('About Us page - Coming soon!') },
                { name: 'Planes y Precios', action: () => window.location.hash = '#pricing' },
                { name: 'Contact', action: () => alert('Contact page - Coming soon!') },
                { name: 'Privacy Policy', action: () => alert('Privacy Policy - Coming soon!') },
                { name: 'Terms of Service', action: () => alert('Terms of Service - Coming soon!') },
                { name: 'FAQ', action: () => alert('FAQ page - Coming soon!') },
                { name: 'Support', action: () => alert('Support page - Coming soon!') }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    onClick={link.action} // Aquí es donde pones el onClick dentro de JSX
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <ul className="space-y-2">
              {[
                { name: 'Electronics', action: () => alert('Electronics category - Coming soon!') },
                { name: 'Fashion', action: () => alert('Fashion category - Coming soon!') },
                { name: 'Home & Garden', action: () => alert('Home & Garden category - Coming soon!') },
                { name: 'Sports', action: () => alert('Sports category - Coming soon!') },
                { name: 'Beauty', action: () => alert('Beauty category - Coming soon!') },
                { name: 'Books', action: () => alert('Books category - Coming soon!') }
              ].map((category) => (
                <li key={category.name}>
                  <button
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    onClick={category.action} // Aquí también pones el onClick dentro de JSX
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">support@marketplace.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">123 Commerce St, New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MarketPlace. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => alert('Privacy Policy - Coming soon!')}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy
              </button>
              <button 
                onClick={() => alert('Terms of Service - Coming soon!')}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms
              </button>
              <button 
                onClick={() => alert('Cookie Policy - Coming soon!')}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
