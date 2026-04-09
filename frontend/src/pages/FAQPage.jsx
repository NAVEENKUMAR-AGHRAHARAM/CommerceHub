import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a unique tracking link via SMS and email. You can use this link to track your order in real-time until it reaches your doorstep."
    },
    {
      question: "What payment methods are available?",
      answer: "We support a wide range of secure payment options including UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards (Visa, MasterCard, RuPay), Net Banking from all major banks, and various digital wallets."
    },
    {
      question: "Can I return a product?",
      answer: "Yes, you can return most products within 7 days of delivery. The product must be unused and in its original packaging with all tags intact. A refund will be processed after a successful quality inspection."
    },
    {
      question: "How long does delivery take?",
      answer: "Typically, orders are delivered within 3–7 business days across India. However, delivery times may vary slightly based on your location and external factors like holidays."
    },
    {
      question: "Is Cash on Delivery available?",
      answer: "Yes, Cash on Delivery (COD) is available for selected locations across India. You can check the availability of COD for your area by entering your PIN code on the product details page."
    }
  ];

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 opacity-10" />
          <h1 className="text-6xl font-black uppercase tracking-tighter">Frequently Asked Questions</h1>
          <p className="text-gray-500 mt-4 uppercase tracking-[0.2em] text-sm font-bold">Find answers to common questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 transition-all duration-300 ${openIndex === index ? 'border-black' : 'border-gray-100 hover:border-gray-200'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
              >
                <span className="text-xl font-bold uppercase tracking-tight">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-8 pt-0 text-gray-600 leading-relaxed text-lg border-t border-gray-50 mx-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Section */}
        <div className="mt-20 p-12 bg-black text-white text-center">
          <h2 className="text-3xl font-black uppercase mb-4 tracking-tight">Still have questions?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            If you couldn't find the answer you were looking for, please don't hesitate to contact our dedicated support team.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-black px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
