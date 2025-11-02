import React from 'react';
import { ArrowRight, Calendar, Shield, Award } from 'lucide-react';

export default function Hero({ setShowBookingModal, addNotification }) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 -top-20 -left-20 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 -bottom-20 -right-20 animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full animate-fade-in">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold">Award Winning Healthcare</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up">
              Your Health, Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Priority
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Experience world-class medical care with cutting-edge technology and compassionate professionals dedicated to your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <button onClick={() => setShowBookingModal(true)}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="w-6 h-6" />
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => addNotification('Emergency services available 24/7. Call 911 for immediate assistance.', 'success')}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                Emergency: 911
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Shield, label: '24/7 Care', value: 'Always Available' },
                { icon: Award, label: 'Expert Doctors', value: '500+ Specialists' },
                { icon: Calendar, label: 'Easy Booking', value: 'Quick & Simple' }
              ].map((item, idx) => (
                <div key={idx} className="text-center animate-fade-in-up" style={{animationDelay: `${0.6 + idx * 0.1}s`}}>
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 transform hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-800">{item.label}</p>
                  <p className="text-sm text-gray-600">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <img src="/images/hero/hospital-main.webp" alt="Modern Hospital Facility"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex-col items-center justify-center text-white">
                  <div className="text-6xl mb-4">���</div>
                  <h3 className="text-3xl font-bold mb-2">Modern Facility</h3>
                  <p className="text-lg mb-4">State-of-the-art equipment</p>
                  <div className="flex justify-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-lg">
                      <p className="text-2xl font-bold">500+</p>
                      <p className="text-sm">Doctors</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-lg">
                      <p className="text-2xl font-bold">50K+</p>
                      <p className="text-sm">Patients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform rotate-6 blur-xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
