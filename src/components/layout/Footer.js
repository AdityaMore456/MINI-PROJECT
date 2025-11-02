import React from 'react';
import { Activity, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ setActivePage, smoothScroll, addNotification }) {
  const handleNavClick = (item) => {
    setActivePage(item.toLowerCase());
    if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => smoothScroll(item.toLowerCase()), 100);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-xl">
                <Activity className="w-8 h-8" />
              </div>
              <span className="text-2xl font-bold">HealthCare+</span>
            </div>
            <p className="text-gray-300 mb-6">Providing world-class healthcare services with compassion and excellence.</p>
            <div className="flex space-x-4">
              {['F', 'T', 'I', 'L'].map((social, idx) => (
                <button key={idx} onClick={() => addNotification('Social media link clicked!', 'success')}
                  className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-all transform hover:scale-110">
                  <span className="font-bold">{social}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 inline-block transform transition-transform">
                    → {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              {['Emergency Care', 'Cardiology', 'Neurology', 'Pediatrics', 'Surgery'].map((service) => (
                <li key={service}
                  className="hover:text-white cursor-pointer transition-colors hover:translate-x-2 inline-block transform transition-transform"
                  onClick={() => addNotification(`Learn more about our ${service} services. Click 'Services' in the menu!`, 'success')}>
                  → {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 cursor-pointer hover:text-blue-300 transition-colors"
                onClick={() => addNotification('Address copied!', 'success')}>
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">FLat no. 104, Akshar Empire, Jaybhave Nagar, Nashik - 422009 </span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer hover:text-blue-300 transition-colors"
                onClick={() => addNotification('Phone ready to call!', 'success')}>
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 7709504187</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer hover:text-blue-300 transition-colors"
                onClick={() => addNotification('Email copied!', 'success')}>
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">adityam.etc_ioe@bkc.met.edu</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 HealthCare+. All rights reserved. Developed with ❤️ for better healthcare.</p>
        </div>
      </div>  
    </footer>
  );
}
