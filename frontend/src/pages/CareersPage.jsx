import React from 'react';
import { Briefcase, Users, TrendingUp, DollarSign, Mail, ArrowRight } from 'lucide-react';

const CareersPage = () => {
  const positions = [
    { title: "Frontend Developer", type: "Full-time", location: "Remote / India" },
    { title: "Backend Developer", type: "Full-time", location: "Remote / India" },
    { title: "UI/UX Designer", type: "Full-time", location: "Remote / India" },
    { title: "Marketing Executive", type: "Full-time", location: "India" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="/commercehub_careers_hero_1775707392594.png" 
          alt="Careers at CommerceHub" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-black text-white mb-6 uppercase tracking-tight">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Build the future of ecommerce with us. We're looking for passionate individuals to help us redefine online shopping.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Why Work With Us?</h2>
          <div className="w-24 h-2 bg-black mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Users className="w-10 h-10" />, title: "Friendly Environment", desc: "Collaborative and supportive workspace where everyone's voice is heard." },
            { icon: <TrendingUp className="w-10 h-10" />, title: "Growth Opportunities", desc: "We invest in your career path with mentorship and learning resources." },
            { icon: <DollarSign className="w-10 h-10" />, title: "Competitive Salary", desc: "Industry-leading compensation packages and comprehensive benefits." }
          ].map((benefit, idx) => (
            <div key={idx} className="text-center p-8 bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6 text-black">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4 uppercase">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-16 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6">
            {positions.map((job, idx) => (
              <div key={idx} className="group bg-white/5 border border-white/10 p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/10 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-400 uppercase tracking-widest font-semibold">
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest bg-white text-black px-6 py-3 hover:bg-gray-200 transition-colors self-start md:self-center">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Mail className="w-16 h-16 mx-auto mb-8 text-black opacity-20" />
          <h2 className="text-3xl font-black uppercase mb-6">How to Apply</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't see a position that fits? Send your resume to our talent team and we'll keep you in mind for future openings.
          </p>
          <a 
            href="mailto:careers@commercehub.com" 
            className="text-2xl font-bold text-black border-b-4 border-black pb-2 hover:opacity-70 transition-opacity"
          >
            careers@commercehub.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
