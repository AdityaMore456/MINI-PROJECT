import React from 'react';
import { Users, Award, Activity, Heart } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Patients' },
    { icon: Award, value: '500+', label: 'Expert Doctors' },
    { icon: Activity, value: '25+', label: 'Modern Facilities' },
    { icon: Heart, value: '100K+', label: 'Successful Treatments' }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center text-white transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center">
                <stat.icon className="w-10 h-10" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
