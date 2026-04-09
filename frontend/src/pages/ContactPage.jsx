import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you! If you have any questions, concerns, or feedback, feel free to reach out.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-1">Our support team is here to help.</p>
              <a href="mailto:support@commercehub.com" className="text-black font-semibold hover:underline">
                support@commercehub.com
              </a>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-1">Mon-Sat, 9:00 AM – 7:00 PM</p>
              <a href="tel:+919876543210" className="text-black font-semibold hover:underline">
                +91 9876543210
              </a>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-1">Our headquarters in India.</p>
              <address className="text-black font-semibold not-italic">
                India
              </address>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-10 border border-gray-100 shadow-xl">
            <h2 className="text-3xl font-black mb-8 text-gray-900 uppercase">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">FullName</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-black text-white px-8 py-4 font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
