import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, Bell } from 'lucide-react';

export default function Header({ activePage, setActivePage, smoothScroll, setShowBookingModal, notifications }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => smoothScroll(id), 100);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MediCare+
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)}
                className={`text-lg font-medium transition-all duration-300 ${
                  activePage === item.id ? 'text-blue-600 scale-110' : 'text-gray-700 hover:text-blue-600'
                }`}>
                {item.name}
              </button>
            ))}
            <button onClick={() => setShowBookingModal(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Book Appointment
            </button>
            <button className="relative p-2">
              <Bell className="w-6 h-6 text-gray-700" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </button>
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-white rounded-b-xl shadow-lg">
            {navigation.map((item) => (
              <button key={item.id}
                onClick={() => { handleNavClick(item.id); setMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activePage === item.id ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                }`}>
                {item.name}
              </button>
            ))}
            <button onClick={() => { setShowBookingModal(true); setMobileMenuOpen(false); }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold mt-2">
              Book Appointment
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
