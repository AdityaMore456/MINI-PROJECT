import React from 'react';
import { Shield, Clock, Users, Award, Heart, Activity } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Shield, title: 'Advanced Security', desc: 'HIPAA compliant data protection with encrypted systems' },
    { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock medical support and emergency care' },
    { icon: Users, title: 'Expert Team', desc: 'Highly qualified medical professionals with years of experience' },
    { icon: Award, title: 'Certified Excellence', desc: 'Internationally accredited facility with quality standards' },
    { icon: Heart, title: 'Patient-Centered', desc: 'Compassionate personalized care focused on your needs' },
    { icon: Activity, title: 'Quick Response', desc: 'Rapid emergency services with advanced medical support' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600">Excellence in every aspect of healthcare delivery</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
