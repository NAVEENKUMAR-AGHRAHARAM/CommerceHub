import React from 'react';
import { XCircle, RotateCcw, CreditCard, Mail, CheckCircle2 } from 'lucide-react';

const ReturnsPage = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-6xl font-black mb-16 text-center uppercase tracking-tighter">Cancellation & Returns</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cancellation */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 p-10 border border-gray-100 h-full">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-8">
                <XCircle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold uppercase mb-4 tracking-tight">Order Cancellation</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  You can cancel your order within <span className="text-black font-bold">24 hours</span> of placing it.
                </p>
                <div className="p-4 bg-red-50 text-red-600 text-sm font-bold uppercase tracking-widest border border-red-100">
                  Note: Once the order is shipped, cancellation is not allowed.
                </div>
              </div>
            </div>
          </div>

          {/* Policy & Refund */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-black text-white p-12 relative overflow-hidden">
              <RotateCcw className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none" />
              <h2 className="text-4xl font-black uppercase mb-8 relative z-10">Returns Policy</h2>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0 font-black">1</div>
                  <p className="text-gray-300 text-lg">Product must be returned within <span className="text-white font-bold">7 days</span> of delivery.</p>
                </div>
                <div className="flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0 font-black">2</div>
                  <p className="text-gray-300 text-lg">The product must be <span className="text-white font-bold">unused</span> and in its <span className="text-white font-bold">original packaging</span>.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-12 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-24 h-24 bg-white shadow-xl flex items-center justify-center shrink-0">
                  <CreditCard className="w-10 h-10 text-black" />
                </div>
                <div>
                  <h2 className="text-3xl font-black uppercase mb-4 tracking-tight">Refund Process</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Once we receive your returned product, it will undergo a thorough quality inspection. After inspection approval, your refund will be processed.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black">
                    <CheckCircle2 className="w-5 h-5" /> Credited within 5–7 business days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Call-to-action */}
        <div className="mt-16 text-center border-t border-gray-200 pt-16">
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-4 font-bold">Still have questions?</p>
          <a 
            href="mailto:support@commercehub.com" 
            className="flex items-center justify-center gap-3 text-2xl font-black hover:opacity-70 transition-opacity"
          >
            <Mail className="w-8 h-8" /> support@commercehub.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPage;
