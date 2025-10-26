import React from 'react';
import { Heart, Brain, Activity, Stethoscope, Truck, User, ArrowRight } from 'lucide-react';

const servicesData = [
  { icon: Heart, title: 'Cardiology', desc: 'Advanced heart care with cutting-edge technology and experienced cardiologists', 
    color: 'from-red-500 to-pink-500', details: 'Our cardiology department features state-of-the-art equipment including ECG, Echo, and cardiac catheterization labs.' },
  { icon: Brain, title: 'Neurology', desc: 'Expert neurological care and treatment for brain and nerve disorders', 
    color: 'from-purple-500 to-indigo-500', details: 'Specialized care for stroke, epilepsy, Parkinson\'s, and other neurological conditions with advanced imaging.' },
  { icon: Activity, title: 'Emergency Care', desc: '24/7 emergency medical services with rapid response team', 
    color: 'from-orange-500 to-red-500', details: 'Round-the-clock emergency care with trauma specialists, ICU, and advanced life support systems.' },
  { icon: Stethoscope, title: 'General Medicine', desc: 'Comprehensive primary healthcare for all age groups', 
    color: 'from-blue-500 to-cyan-500', details: 'Complete medical check-ups, preventive care, and treatment for common illnesses and chronic conditions.' },
  { icon: Truck, title: 'Ambulance Service', desc: 'Rapid response emergency transport with medical equipment', 
    color: 'from-green-500 to-teal-500', details: 'Fully equipped ambulances with paramedics available 24/7 for emergency medical transportation.' },
  { icon: User, title: 'Pediatrics', desc: 'Specialized care for infants, children, and adolescents', 
    color: 'from-yellow-500 to-orange-500', details: 'Child-friendly environment with pediatric specialists for vaccinations, growth monitoring, and illness care.' }
];

export default function Services({ setSelectedService }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive healthcare solutions tailored to your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div key={idx}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedService(service)}>
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
              <button className="text-blue-600 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
