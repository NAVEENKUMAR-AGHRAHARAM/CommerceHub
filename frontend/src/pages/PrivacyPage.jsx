import React from 'react';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8 text-black opacity-20">
          <Shield className="w-12 h-12" />
          <div className="h-px bg-black grow"></div>
        </div>
        <h1 className="text-6xl font-black mb-16 uppercase tracking-tighter">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-12">
          <section>
            <p className="text-xl leading-relaxed font-light">
              At CommerceHub, we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-black text-black uppercase tracking-tight flex items-center gap-4">
              <FileText className="w-8 h-8 opacity-20" /> Information We Collect
            </h2>
            <p>To provide you with a seamless shopping experience, we collect the following information:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              {['Full Name', 'Email Address', 'Phone Number', 'Shipping & Billing Address'].map((item, idx) => (
                <li key={idx} className="bg-gray-50 p-4 border-l-4 border-black font-bold uppercase tracking-wider text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-black text-black uppercase tracking-tight flex items-center gap-4">
              <Eye className="w-8 h-8 opacity-20" /> How We Use Your Data
            </h2>
            <p>Your information is used solely for the purpose of enhancing your experience with us:</p>
            <div className="grid grid-cols-1 gap-4">
              {[
                "To process and fulfill your orders accurately.",
                "To improve our products, services, and website functionality.",
                "To communicate important service updates and promotional offers (with your consent)."
              ].map((text, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-black mt-2.5 shrink-0"></div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-black text-white p-12 space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-4">
              <Lock className="w-8 h-8 text-white opacity-40" /> Security & Trust
            </h2>
            <p className="text-gray-400 text-lg">
              We employ state-of-the-art security systems to ensure your data is always protected. We maintain a strict policy against selling or sharing your personal information with third parties for their marketing purposes.
            </p>
            <div className="pt-6 border-t border-white/10 text-xs uppercase tracking-[0.3em] font-bold text-gray-500">
              Your trust is our most valuable asset.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
