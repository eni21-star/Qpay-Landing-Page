import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Generate QR",
      description: "Open the app and create a secure QR code instantly, no internet needed.",
    },
    {
      number: "2",
      title: "Merchant Scans",
      description: "The merchant scans your code with any camera. Works completely offline.",
    },
    {
      number: "3",
      title: "Payment Confirmed",
      description: "Both parties get instant confirmation. Fast, secure, done.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            How it works
          </h2>
          <div className="w-16 h-1 bg-customOrange mx-auto rounded-full"></div>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto gap-12 md:gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-gray-200 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center w-full md:w-1/3 group"
            >
              {/* Connector Line (Mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute left-5 top-12 w-[1px] h-full border-l-2 border-dashed border-gray-200 z-0"></div>
              )}

              {/* Step Circle */}
              <div className="flex-shrink-0 w-10 h-10 md:w-20 md:h-20 rounded-full bg-customOrange text-white flex items-center justify-center font-heading text-lg md:text-3xl font-bold mb-0 md:mb-8 mr-6 md:mr-0 shadow-lg shadow-orange-200 transition-transform group-hover:scale-110 duration-300">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="flex flex-col md:items-center">
                <h3 className="font-heading text-xl md:text-2xl mb-2 md:mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-slate-500 text-sm md:text-lg leading-relaxed md:max-w-[280px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
