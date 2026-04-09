import React from 'react';
import { CreditCard, Smartphone, Landmark, Wallet, ShieldCheck, Lock, CheckCircle } from 'lucide-react';

const PaymentsPage = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-6xl font-black mb-16 text-center uppercase tracking-tighter">Payment Methods</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Secure Ways to Pay</h2>
            <div className="space-y-6">
              {[
                { icon: <Smartphone className="w-6 h-6" />, title: "UPI", desc: "Google Pay, PhonePe, Paytm, and other BHIM apps." },
                { icon: <CreditCard className="w-6 h-6" />, title: "Cards", desc: "Visa, MasterCard, and RuPay (Credit & Debit)." },
                { icon: <Landmark className="w-6 h-6" />, title: "Net Banking", desc: "Direct payment from all major Indian banks." },
                { icon: <Wallet className="w-6 h-6" />, title: "Wallets", desc: "Digital wallets like MobiKwik, Freecharge, etc." }
              ].map((method, idx) => (
                <div key={idx} className="flex gap-6 p-6 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all">
                  <div className="shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-wider">{method.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{method.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white p-12 flex flex-col justify-center">
            <ShieldCheck className="w-16 h-16 mb-8 text-white opacity-40" />
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">Your Security is Our Priority</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Every transaction on CommerceHub is protected with industry-standard encryption technology. We do not store your full payment details, ensuring your financial information remains private.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                <Lock className="w-5 h-5" /> SSL Encrypted
              </div>
              <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                <CheckCircle className="w-5 h-5" /> PCI-DSS Compliant
              </div>
            </div>
          </div>
        </div>

        {/* Note Section */}
        <div className="bg-gray-100 p-10 text-center border-l-8 border-black">
          <h3 className="text-xl font-bold uppercase mb-4">Note on Cash on Delivery</h3>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            "Cash on Delivery (COD) may be available for selected locations. You can check availability by entering your PIN code on the product details page or during checkout."
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
