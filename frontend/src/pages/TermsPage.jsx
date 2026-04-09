import React from 'react';
import { Scale, AlertCircle, RefreshCw, FileCheck } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8 text-black opacity-20">
          <Scale className="w-12 h-12" />
          <div className="h-px bg-black grow"></div>
        </div>
        <h1 className="text-6xl font-black mb-16 uppercase tracking-tighter">Terms of Use</h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-12">
          <section>
            <p className="text-xl leading-relaxed font-light">
              By accessing and using the CommerceHub website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
            </p>
          </section>

          <section className="bg-gray-50 p-12 border border-gray-100 space-y-8">
            <h2 className="text-3xl font-black text-black uppercase tracking-tight flex items-center gap-4">
              <FileCheck className="w-8 h-8 opacity-20" /> User Responsibilities
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                "You must provide accurate, current, and complete information during registration and checkout.",
                "You agree not to misuse the website for any fraudulent or illegal activities.",
                "All content on this website, including text, images, and logos, remains the exclusive property of CommerceHub."
              ].map((text, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center shrink-0 font-bold">0{idx + 1}</div>
                  <p className="text-gray-700 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-black text-black uppercase tracking-tight flex items-center gap-4">
              <AlertCircle className="w-8 h-8 opacity-20" /> Orders & Cancellations
            </h2>
            <p>
              CommerceHub reserves the right to refuse or cancel any order at our sole discretion, including for reasons such as product errors, inaccuracies in pricing, or suspected fraudulent activity.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-black text-black uppercase tracking-tight flex items-center gap-4">
              <RefreshCw className="w-8 h-8 opacity-20" /> Policy Updates
            </h2>
            <p>
              We may update these terms at any time without prior notice. Continued use of the website following any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically.
            </p>
          </section>

          <div className="pt-16 border-t border-gray-100 flex justify-between items-center text-xs uppercase tracking-[0.3em] font-bold text-gray-400">
            <span>Last Updated: April 2026</span>
            <span>CommerceHub Legal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
