import React from 'react';
import { Truck, Clock, CreditCard, ExternalLink, AlertTriangle } from 'lucide-react';

const ShippingPage = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-black mb-16 text-center uppercase tracking-tighter">Shipping Information</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Delivery Time */}
          <div className="bg-gray-50 p-10 border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-8">
              <Clock className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold uppercase mb-4 tracking-tight">Delivery Time</h2>
            <p className="text-gray-600 leading-relaxed">
              We deliver across India with fast and reliable service. Orders are typically delivered within <span className="text-black font-bold">3–7 business days</span>.
            </p>
          </div>

          {/* Shipping Charges */}
          <div className="bg-gray-50 p-10 border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-8">
              <CreditCard className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold uppercase mb-4 tracking-tight">Shipping Charges</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="text-black font-bold">FREE SHIPPING</span> on all orders above ₹499.
              </p>
              <div className="w-12 h-px bg-gray-300 mx-auto"></div>
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                ₹50 charge for orders below ₹499.
              </p>
            </div>
          </div>
        </div>

        {/* Tracking & Delays */}
        <div className="space-y-8">
          <div className="p-8 border-2 border-black">
            <div className="flex items-start gap-6">
              <ExternalLink className="w-8 h-8 text-black shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-black uppercase mb-3 tracking-tight">Track Your Order</h3>
                <p className="text-gray-600 leading-relaxed">
                  Once your order is shipped, you will receive a unique tracking link via <span className="text-black font-semibold">SMS/Email</span>. You can use this link to monitor your shipment's journey in real-time.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-black text-white">
            <div className="flex items-start gap-6">
              <AlertTriangle className="w-8 h-8 text-white shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-black uppercase mb-3 tracking-tight">Possible Delays</h3>
                <p className="text-gray-400 leading-relaxed">
                  While we strive for timeliness, delivery may occasionally be delayed due to public holidays, extreme weather, or unforeseen circumstances. We appreciate your patience during such times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
