import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Features from './components/sections/Features';
import Stats from './components/sections/Stats';
import Departments from './components/sections/Departments';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import NotificationToast from './components/ui/NotificationToast';
import BookingModal from './components/ui/BookingModal';
import ServiceModal from './components/ui/ServiceModal';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [notifications, setNotifications] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const addNotification = (message, type = 'success') => {
    const newNotif = { id: Date.now(), message, type };
    setNotifications(prev => [...prev, newNotif]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotif.id));
    }, 5000);
  };

  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage}
        smoothScroll={smoothScroll}
        setShowBookingModal={setShowBookingModal}
        notifications={notifications}
      />
      
      <NotificationToast notifications={notifications} />
      
      <BookingModal 
        showBookingModal={showBookingModal}
        setShowBookingModal={setShowBookingModal}
        addNotification={addNotification}
      />
      
      <ServiceModal 
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        setShowBookingModal={setShowBookingModal}
      />
      
      {activePage === 'home' && (
        <>
          <Hero setShowBookingModal={setShowBookingModal} addNotification={addNotification} />
          <Stats />
          <Services setSelectedService={setSelectedService} />
          <Features />
          <Departments addNotification={addNotification} />
          <Testimonials />
          <Contact addNotification={addNotification} />
        </>
      )}
      
      {activePage === 'services' && (
        <>
          <div className="h-20"></div>
          <Services setSelectedService={setSelectedService} />
        </>
      )}
      
      {activePage === 'about' && (
        <>
          <div className="h-20"></div>
          <Features />
        </>
      )}
      
      {activePage === 'contact' && (
        <>
          <div className="h-20"></div>
          <Contact addNotification={addNotification} />
        </>
      )}
      
      <Footer setActivePage={setActivePage} smoothScroll={smoothScroll} addNotification={addNotification} />
    </div>
  );
}

export default App;
