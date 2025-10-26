import React from 'react';
import { Heart, Brain, Eye, Bone, Syringe, Pill } from 'lucide-react';

export default function Departments({ addNotification }) {
  const departments = [
    { icon: Heart, name: 'Cardiology', specialists: 45, color: 'bg-red-500' },
    { icon: Brain, name: 'Neurology', specialists: 38, color: 'bg-purple-500' },
    { icon: Eye, name: 'Ophthalmology', specialists: 32, color: 'bg-blue-500' },
    { icon: Bone, name: 'Orthopedics', specialists: 41, color: 'bg-orange-500' },
    { icon: Syringe, name: 'Surgery', specialists: 55, color: 'bg-green-500' },
    { icon: Pill, name: 'Pharmacy', specialists: 28, color: 'bg-pink-500' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Departments</span>
          </h2>
          <p className="text-xl text-gray-600">Specialized care across multiple medical disciplines</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {departments.map((dept, idx) => (
            <div key={idx} 
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center"
              onClick={() => addNotification(`${dept.name} department has ${dept.specialists} specialists available. Book your appointment now!`, 'success')}>
              <div className={`w-16 h-16 ${dept.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <dept.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{dept.name}</h3>
              <p className="text-sm text-gray-600">{dept.specialists} Specialists</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
