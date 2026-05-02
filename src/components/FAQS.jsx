import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: "fa-circle-info",
      question: "What is QPay?",
      answer: "QPay is a payment app that lets you send and receive money with zero internet. You generate a QR code on your phone — no signal needed — and the merchant scans it. Done.",
    },
    {
      icon: "fa-qrcode",
      question: "How does the offline QR code work?",
      answer: "You open QPay, enter the amount, and your phone creates a secure QR code instantly — all on-device. The merchant scans it with their QPay app, and the payment confirms in seconds. Neither of you needs internet at any point.",
    },
    {
      icon: "fa-shield-halved",
      question: "Are offline payments secure?",
      answer: "Yes. Every QR code is encrypted directly on your device using the same standard banks use. Nothing travels over the internet during the payment, so there's nothing to intercept.",
    },
    {
      icon: "fa-users",
      question: "Who can use QPay?",
      answer: "Anyone in Nigeria. If you're a buyer passing through a dead zone, QPay works. If you're a market merchant tired of failed transfers, QPay works. Download free on iOS and Android.",
    },
    {
      icon: "fa-gauge-high",
      question: "Is there a limit to offline payments?",
      answer: "Offline QR codes have a temporary limit for security — this resets automatically the next time your phone connects to internet. Your transaction history and balance sync instantly when you're back online.",
    }
  ];

  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3, 5);

  const AccordionItem = ({ faq, index, isLeft }) => {
    const isOpen = openIndex === index;
    
    return (
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: isLeft ? index * 0.1 : (index - 3) * 0.1 }}
        className={`rounded-2xl border mb-3 overflow-hidden shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-300 ${isOpen ? 'border-orange-200 bg-orange-50/30 shadow-md' : 'border-gray-100 bg-white'}`}
      >
        <button 
          onClick={() => toggleAccordion(index)} 
          className="p-5 cursor-pointer flex justify-between items-center w-full text-left"
        >
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center mr-4 flex-shrink-0 text-customOrange text-sm">
              <i className={`fa-solid ${faq.icon}`}></i>
            </div>
            <span className={`text-base ${isOpen ? 'text-customOrange font-bold' : 'text-gray-900 font-semibold'}`}>
              {faq.question}
            </span>
          </div>
          <i 
            className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 flex-shrink-0 ${isOpen ? 'text-customOrange rotate-180' : 'text-gray-300'}`}
          ></i>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-0">
                <div className="border-t border-gray-50 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section className="bg-white w-full mx-auto px-4 sm:px-6 py-12 md:py-24" id="faq-section">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <span className="text-customOrange text-xs font-semibold tracking-widest uppercase mb-2">GOT QUESTIONS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mt-2 mb-4">Everything You Need to Know</h2>
          <p className="text-gray-500 text-center text-sm sm:text-base md:text-lg max-w-xl mx-auto">No jargon. Just real answers about how QPay works.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-0 relative items-start">
          {/* Left Column */}
          <div className="flex flex-col space-y-0">
            {leftFaqs.map((faq, idx) => (
              <AccordionItem key={idx} faq={faq} index={idx} isLeft={true} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col mt-8 md:mt-0 sticky top-8">
            {rightFaqs.map((faq, idx) => (
              <AccordionItem key={idx + 3} faq={faq} index={idx + 3} isLeft={false} />
            ))}
            
            {/* CTA Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-customOrange rounded-3xl p-8 mt-8 text-white flex flex-col items-start"
            >
              <i className="fa-solid fa-circle-question text-white/50 text-4xl mb-4"></i>
              <h3 className="text-white font-bold text-lg">Still have questions?</h3>
              <p className="text-white/70 text-sm mb-6">Reach out — we reply fast.</p>
              <button className="bg-white text-customOrange font-semibold px-6 py-3 rounded-full text-sm hover:bg-orange-50 transition-colors">
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

