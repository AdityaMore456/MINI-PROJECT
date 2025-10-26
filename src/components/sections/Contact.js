import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

export default function Contact({ addNotification }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', department: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      addNotification(`Thank you ${formData.name}! Our team will contact you within 24 hours.`, 'success');
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', department: '', message: '' });
      }, 2000);
    }, 1000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">We're here to help with your healthcare needs</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  onClick={() => addNotification('Address copied to clipboard!', 'success')}>
                  <div className="bg-blue-100 p-3 rounded-xl"><MapPin className="w-6 h-6 text-blue-600" /></div>
                  <div><h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">123 Medical Center Drive<br/>Health City, HC 12345</p></div>
                </div>
                <div className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  onClick={() => addNotification('Phone number ready to call!', 'success')}>
                  <div className="bg-green-100 p-3 rounded-xl"><Phone className="w-6 h-6 text-green-600" /></div>
                  <div><h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">Main: +1 (555) 123-4567<br/>Emergency: 911</p></div>
                </div>
                <div className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  onClick={() => addNotification('Email address copied!', 'success')}>
                  <div className="bg-purple-100 p-3 rounded-xl"><Mail className="w-6 h-6 text-purple-600" /></div>
                  <div><h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@medicareplus.com<br/>support@medicareplus.com</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-xl"><Clock className="w-6 h-6 text-orange-600" /></div>
                  <div><h4 className="font-semibold text-gray-800 mb-1">Working Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM<br/>Sat-Sun: 9:00 AM - 5:00 PM</p></div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Emergency?</h3>
              <p className="mb-6">For medical emergencies, call our 24/7 emergency line immediately.</p>
              <button onClick={() => addNotification('Emergency services contacted! Help is on the way.', 'success')}
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors w-full">
                Call 911
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" required value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" required value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" required value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                  <select required value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors">
                    <option value="">Select Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="general">General Medicine</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="surgery">Surgery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea required value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."></textarea>
                </div>
                <button type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
