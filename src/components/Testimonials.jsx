import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const statPills = [
    { text: "4,200+ active users" },
    { text: "Available in 12+ Nigerian cities" },
    { text: "4.9 ★ average rating" },
  ];

  const testimonials = [
    {
      quote: "I sell fabrics at Tejuosho and network never cooperates. QPay changed everything — my customers just scan and we move on. No drama.",
      name: "Funmi Adeyemi",
      role: "Fabric Trader · Tejuosho Market, Lagos",
      avatar: "https://i.pravatar.cc/100?img=47",
      delay: 0,
      isHero: true,
      marginTop: "mt-0",
    },
    {
      quote: "Sent money to my sister in Enugu during NEPA and no network. She got it instantly. I didn't even believe it worked.",
      name: "Chidi Okafor",
      role: "Student · University of Nigeria, Nsukka",
      avatar: "https://i.pravatar.cc/100?img=12",
      delay: 0.15,
      isHero: false,
      marginTop: "md:mt-16",
    },
    {
      quote: "As a dispatch rider I'm always in areas with no signal. QPay is the only app that doesn't frustrate me.",
      name: "Segun Balogun",
      role: "Dispatch Rider · Ibadan",
      avatar: "https://i.pravatar.cc/100?img=33",
      delay: 0.3,
      isHero: false,
      marginTop: "md:mt-8",
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Heading Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-customOrange text-xs font-semibold tracking-widest uppercase text-center mb-3">
            REAL PEOPLE. REAL PAYMENTS.
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center leading-tight max-w-3xl mx-auto">
            Nigerians Are Already Paying Offline.
          </h2>
        </motion.div>

        {/* Floating Social Proof Strip */}
        <div className="flex justify-center gap-2 sm:gap-4 flex-wrap mb-10 md:mb-16">
          {statPills.map((pill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-100 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-customOrange animate-pulse" />
              <span className="text-gray-600 text-xs sm:text-sm font-medium">{pill.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: item.delay, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(249,84,29,0.15)" }}
              className={`group flex flex-col bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden transition-all duration-500 ${item.marginTop} ${
                item.isHero 
                  ? "shadow-[0_16px_60px_rgba(249,84,29,0.10)] border border-orange-100" 
                  : "shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100"
              }`}
              style={item.isHero ? { background: "linear-gradient(135deg, #FFF5F0 0%, #FFFFFF 60%)" } : {}}
            >
              {/* Large decorative quote mark */}
              <div className="text-[120px] font-serif text-orange-50 group-hover:text-orange-100 transition-colors duration-300 leading-none select-none pointer-events-none absolute -top-2 right-4">
                "
              </div>

              {/* Star rating row */}
              <div className="text-customOrange text-sm mb-5 flex gap-0.5 relative z-10">
                ★★★★★
              </div>

              {/* Quote text */}
              <p className="text-gray-800 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-6 md:mb-8 relative z-10 flex-grow">
                "{item.quote}"
              </p>

              {/* Bottom author row */}
              <div className="flex items-center gap-4 mt-auto relative z-10">
                <motion.img
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: item.delay + 0.3 }}
                  viewport={{ once: true }}
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
                />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-bold text-sm">{item.name}</span>
                  <span className="text-gray-400 text-xs mt-0.5">{item.role}</span>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-customOrange to-orange-300 mt-6 relative z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[40px] md:h-[80px] fill-customOrange">
          <path d="M1200,0H0v60c0,0,131-40,277-38s207,32,319,33s181-25,298-31S1200,60,1200,60V0z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
