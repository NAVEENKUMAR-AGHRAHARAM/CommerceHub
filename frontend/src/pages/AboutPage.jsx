import React from 'react';
import { Target, Eye, CheckCircle2, ShoppingBag, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="/commercehub_about_hero_1775707348664.png" 
          alt="CommerceHub Workspace" 
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
            Commerce<span className="text-gray-400">Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Your trusted online shopping destination for premium electronics, fashion, and lifestyle essentials.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8 p-12 bg-gray-50 border border-gray-100">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tight">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To make online shopping simple, fast, and reliable for everyone. We believe that quality should be accessible, and every transaction should be built on trust.
            </p>
          </div>
          <div className="space-y-8 p-12 bg-black text-white">
            <div className="w-16 h-16 bg-white text-black flex items-center justify-center">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tight">Our Vision</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To become one of the leading ecommerce platforms globally, known for our unwavering commitment to customer satisfaction and premium product curation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-20 uppercase tracking-tighter">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <ShoppingBag className="w-10 h-10" />, title: "Wide Range", desc: "Curated collection of top-tier brands across various categories." },
              { icon: <Truck className="w-10 h-10" />, title: "Fast Delivery", desc: "Reliable shipping partners ensuring your orders reach you in record time." },
              { icon: <ShieldCheck className="w-10 h-10" />, title: "Secure Payments", desc: "Industry-leading encryption standards to keep your data safe." },
              { icon: <RefreshCw className="w-10 h-10" />, title: "Easy Returns", desc: "Hassle-free 7-day return policy because your peace of mind matters." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-10 shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="text-black mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
