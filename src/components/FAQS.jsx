import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faCircleInfo,
  faCircleQuestion,
  faGaugeHigh,
  faQrcode,
  faShieldHalved,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { openContactModal } from '../utils/contactModal';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: faCircleInfo,
      question: "What is QPay?",
      answer: "QPay is a payment app that lets you send and receive money with zero internet. You generate a QR code on your phone, no signal needed, and the merchant scans it. Done.",
    },
    {
      icon: faQrcode,
      question: "How does the offline QR code work?",
      answer: "You open QPay, enter the amount, and your phone creates a secure QR code instantly, all on device. The merchant scans it with their QPay app, and the payment confirms in seconds. Neither of you needs internet at any point.",
    },
    {
      icon: faShieldHalved,
      question: "Are offline payments secure?",
      answer: "Yes. Every QR code is encrypted directly on your device using the same standard banks use. Nothing travels over the internet during the payment, so there's nothing to intercept.",
    },
    {
      icon: faUsers,
      question: "Who can use QPay?",
      answer: "Anyone in Nigeria. If you're a buyer passing through a dead zone, QPay works. If you're a market merchant tired of failed transfers, QPay works. Download free on iOS and Android.",
    },
    {
      icon: faGaugeHigh,
      question: "Is there a limit to offline payments?",
      answer: "Offline QR codes have a temporary limit for security. This resets automatically the next time your phone connects to internet. Your transaction history and balance sync instantly when you're back online.",
    }
  ];

  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3, 5);

  const AccordionItem = ({ faq, index }) => {
    const isOpen = openIndex === index;
    
    return (
      <div
        className={`mb-3 overflow-hidden rounded-2xl border bg-white shadow-sm transition-colors duration-200 ${
          isOpen ? 'border-orange-200' : 'border-gray-100'
        }`}
      >
        <button 
          onClick={() => toggleAccordion(index)} 
          className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-left sm:p-5"
          aria-expanded={isOpen}
        >
          <div className="flex min-w-0 items-center">
            <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-50 text-sm text-customOrange sm:mr-4">
              <FontAwesomeIcon icon={faq.icon} />
            </div>
            <span className={`text-sm font-semibold leading-snug sm:text-base ${isOpen ? 'text-customOrange' : 'text-gray-900'}`}>
              {faq.question}
            </span>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`flex-shrink-0 text-sm transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-customOrange' : 'text-gray-300'
            }`}
          />
        </button>
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-4 pb-4 pt-0 sm:px-5 sm:pb-5">
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white w-full mx-auto px-4 sm:px-6 py-12 md:py-24" id="faq-section">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <span className="text-customOrange text-xs font-semibold tracking-widest uppercase mb-2">GOT QUESTIONS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mt-2 mb-4">Everything You Need to Know</h2>
          <p className="text-gray-500 text-center text-sm sm:text-base md:text-lg max-w-xl mx-auto">No jargon. Just real answers about how QPay works.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-0 relative items-start">
          {/* Left Column */}
          <div className="flex flex-col space-y-0">
            {leftFaqs.map((faq, idx) => (
              <AccordionItem key={idx} faq={faq} index={idx} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col mt-8 md:mt-0 md:sticky md:top-8">
            {rightFaqs.map((faq, idx) => (
              <AccordionItem key={idx + 3} faq={faq} index={idx + 3} />
            ))}
            
            {/* CTA Card */}
            <div className="bg-customOrange rounded-3xl p-6 sm:p-8 mt-8 text-white flex flex-col items-start">
              <FontAwesomeIcon icon={faCircleQuestion} className="text-white/50 text-4xl mb-4" />
              <h3 className="text-white font-bold text-lg">Still have questions?</h3>
              <p className="text-white/70 text-sm mb-6">Reach out, we reply fast.</p>
              <button
                onClick={openContactModal}
                className="bg-white text-customOrange font-semibold px-6 py-3 rounded-full text-sm hover:bg-orange-50 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
