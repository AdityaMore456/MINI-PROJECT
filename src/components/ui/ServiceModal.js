import React from 'react';
import { X, Clock, Users, Award } from 'lucide-react';

export default function ServiceModal({ selectedService, setSelectedService, setShowBookingModal }) {
  if (!selectedService) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center`}>
              <selectedService.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{selectedService.title}</h2>
              <p className="text-gray-600">{selectedService.desc}</p>
            </div>
          </div>
          <button onClick={() => setSelectedService(null)} className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">About This Service</h3>
            <p className="text-gray-600 leading-relaxed">{selectedService.details}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl">
              <Clock className="w-8 h-8 text-blue-600 mb-2" />
              <p className="font-semibold text-gray-800">24/7 Available</p>
              <p className="text-sm text-gray-600">Round the clock service</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <Users className="w-8 h-8 text-green-600 mb-2" />
              <p className="font-semibold text-gray-800">Expert Team</p>
              <p className="text-sm text-gray-600">Experienced specialists</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl">
              <Award className="w-8 h-8 text-purple-600 mb-2" />
              <p className="font-semibold text-gray-800">Certified</p>
              <p className="text-sm text-gray-600">International standards</p>
            </div>
          </div>
          <button onClick={() => { setSelectedService(null); setShowBookingModal(true); }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Book Appointment for {selectedService.title}
          </button>
        </div>
      </div>
    </div>
  );
}
