import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faQrcode, faCircleCheck, faSignal, faBolt, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

import cart from "../assets/cart.svg";
import icons from "../assets/cons.svg";
import shop from "../assets/shop.svg";
import phone2 from "./images/two phones.png";
import cardWallet from "./images/card_wallet.png";
import cardMerchant from "./images/card_merchant.png";
import cardSecurity from "./images/card_security.png";
// Step 1: Enter Amount | Step 2: Merchant Scans (QR) | Step 3: Payment Confirmed
const screenStep1 = "/screen2.jpg";
const screenStep2 = "/screen33.jpg";
const screenStep3 = "/screen_1.jpg";



gsap.registerPlugin(ScrollTrigger);

const AboutMyThrift = () => {
  const [visibleCards, setVisibleCards] = useState({ card1: false, card2: false, card3: false });
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const pinContainerRef = useRef(null);
  const leftTextRef = useRef([]);
  const rightScreensRef = useRef([]);
  const dotsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Cards animation
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, scale: 0.9, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current[0],
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2. Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // 3. How It Works Pinned ScrollTrigger
      if (pinContainerRef.current) {
        gsap.set(leftTextRef.current[1], { opacity: 0, y: 30 });
        gsap.set(leftTextRef.current[2], { opacity: 0, y: 30 });
        gsap.set(rightScreensRef.current[1], { yPercent: 100 });
        gsap.set(rightScreensRef.current[2], { yPercent: 100 });
        gsap.set(dotsRef.current[0], { backgroundColor: "#F9541D", width: 12, height: 12, boxShadow: "0 0 0 4px #FFEDD5", marginLeft: -5 });
        gsap.set(dotsRef.current[1], { backgroundColor: "#FED7AA", width: 8, height: 8, boxShadow: "0 0 0 0px #FFEDD5", marginLeft: -3 });
        gsap.set(dotsRef.current[2], { backgroundColor: "#FED7AA", width: 8, height: 8, boxShadow: "0 0 0 0px #FFEDD5", marginLeft: -3 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          }
        });

        // Step 1 -> 2
        tl.to(leftTextRef.current[0], { y: -30, opacity: 0, duration: 0.3 }, 0.1)
          .to(leftTextRef.current[1], { y: 0, opacity: 1, duration: 0.3 }, 0.5)
          .to(rightScreensRef.current[0], { yPercent: -100, duration: 1, ease: "power2.inOut" }, 0)
          .to(rightScreensRef.current[1], { yPercent: 0, duration: 1, ease: "power2.inOut" }, 0)
          .to(dotsRef.current[0], { backgroundColor: "#FED7AA", width: 8, height: 8, boxShadow: "0 0 0 0px #FFEDD5", marginLeft: -3, duration: 0.3 }, 0.1)
          .to(dotsRef.current[1], { backgroundColor: "#F9541D", width: 12, height: 12, boxShadow: "0 0 0 4px #FFEDD5", marginLeft: -5, duration: 0.3 }, 0.5);

        // Step 2 -> 3
        tl.to(leftTextRef.current[1], { y: -30, opacity: 0, duration: 0.3 }, 1.1)
          .to(leftTextRef.current[2], { y: 0, opacity: 1, duration: 0.3 }, 1.5)
          .to(rightScreensRef.current[1], { yPercent: -100, duration: 1, ease: "power2.inOut" }, 1)
          .to(rightScreensRef.current[2], { yPercent: 0, duration: 1, ease: "power2.inOut" }, 1)
          .to(dotsRef.current[1], { backgroundColor: "#FED7AA", width: 8, height: 8, boxShadow: "0 0 0 0px #FFEDD5", marginLeft: -3, duration: 0.3 }, 1.1)
          .to(dotsRef.current[2], { backgroundColor: "#F9541D", width: 12, height: 12, boxShadow: "0 0 0 4px #FFEDD5", marginLeft: -5, duration: 0.3 }, 1.5);
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <style>{`
        @keyframes drawSlash {
          from { stroke-dashoffset: 40; opacity: 0; }
          to { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes glowOrange {
          0%, 100% { filter: drop-shadow(0 0 3px #F9541D) brightness(1); }
          50% { filter: drop-shadow(0 0 8px #F9541D) brightness(1.2); }
        }
        @keyframes speedLine {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes floatParticle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-40px) scale(0.5); opacity: 0; }
        }
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes boltEntrance {
          0% { transform: scale(0.3) rotate(-20deg); opacity: 0; }
          70% { transform: scale(1.1) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0) rotateX(10deg) rotateY(-15deg); }
          50% { transform: translateY(-15px) rotateX(8deg) rotateY(-12deg); }
        }

        .is-visible .slash-line-premium {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: drawSlash 0.7s cubic-bezier(0.65, 0, 0.35, 1) forwards, glowOrange 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .is-visible .speed-line {
          animation: speedLine 1.5s linear infinite;
        }
        .is-visible .bolt-premium {
          animation: boltEntrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .is-visible .particle {
          animation: floatParticle 2s ease-out infinite;
        }
        .is-visible .orbit-container {
          animation: orbitRotate 10s linear infinite;
        }
        .is-visible .circle-draw-premium {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          animation: drawSlash 0.8s ease-out forwards;
        }
        .is-visible .check-draw-premium {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: drawSlash 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 0.8s;
        }
        .is-visible .phone-mockup {
          animation: phoneFloat 4s ease-in-out infinite;
        }
      `}</style>
      {/* How It Works Section */}
      <section id="about-us" className="bg-white pt-14 md:pt-16 -mt-[1px] relative z-10">
        {/* Eyebrow & Title - Scrolls Normally */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-10 md:mb-16 text-center" ref={titleRef}>
          <p className="text-customOrange text-xs md:text-sm font-bold tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 font-bold mb-4">Three Steps. Zero Internet.</h2>
          <p className="font-body text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            No signal needed at any step. QPay handles everything offline, start to finish.
          </p>
        </div>

        {/* Pinned Scroll Section */}
        <div ref={pinContainerRef} className="h-screen w-full relative overflow-hidden bg-white flex flex-col justify-center border-t border-gray-100">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-6 flex flex-row items-center justify-between gap-4 md:gap-8">
            {/* Left side fixed text column */}
            <div className="w-[45%] md:w-[40%] flex relative h-[300px] md:h-[350px]">
              {/* Vertical Progress Line */}
              <div className="absolute left-0 top-2 bottom-2 w-0 border-l-2 border-dashed border-orange-200 flex flex-col justify-between">
                <div ref={el => dotsRef.current[0] = el} className="rounded-full" />
                <div ref={el => dotsRef.current[1] = el} className="rounded-full" />
                <div ref={el => dotsRef.current[2] = el} className="rounded-full" />
              </div>
              
              {/* Text Container */}
              <div className="ml-6 md:ml-10 relative w-full h-full">
                {/* Step 1 Text */}
                <div ref={el => leftTextRef.current[0] = el} className="absolute inset-0 flex flex-col justify-center">
                  <div className="absolute -top-3 -left-[5px] md:-top-5 md:-left-[10px] z-0 text-[80px] sm:text-[120px] md:text-[180px] font-extrabold text-orange-50 select-none pointer-events-none leading-none">01</div>
                  <div className="relative z-10">
                    <div>
                      <span className="bg-orange-50 text-customOrange text-[10px] sm:text-xs md:text-sm font-bold px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full">Step 01</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] mt-2 md:mt-3 mb-2 md:mb-4">Enter Your Amount</h3>
                    <p className="text-xs sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-sm mb-3 md:mb-6">
                      Open QPay and type what you're paying. Works with zero bars, zero internet, zero waiting.
                    </p>
                    <div className="bg-orange-50 border-l-2 md:border-l-4 border-customOrange rounded-r-lg md:rounded-r-xl px-2 md:px-4 py-1.5 md:py-3 mb-3 md:mb-6 w-fit">
                      <span className="text-customOrange text-[10px] md:text-sm font-semibold">⚡ Generates QR in &lt;1s</span>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <span className="bg-orange-100 text-orange-700 rounded-full px-2 sm:px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold">Works offline</span>
                      <span className="bg-orange-100 text-orange-700 rounded-full px-2 sm:px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold">No bars needed</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 Text */}
                <div ref={el => leftTextRef.current[1] = el} className="absolute inset-0 flex flex-col justify-center">
                  <div className="absolute -top-3 -left-[5px] md:-top-5 md:-left-[10px] z-0 text-[80px] sm:text-[120px] md:text-[180px] font-extrabold text-orange-50 select-none pointer-events-none leading-none">02</div>
                  <div className="relative z-10">
                    <div>
                      <span className="bg-orange-50 text-customOrange text-[10px] sm:text-xs md:text-sm font-bold px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full">Step 02</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] mt-2 md:mt-3 mb-2 md:mb-4">Your QR Generates Instantly</h3>
                    <p className="text-xs sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-sm mb-3 md:mb-6">
                      QPay creates a secure, encrypted code directly on your device. No network needed to generate it.
                    </p>
                    <div className="bg-orange-50 border-l-2 md:border-l-4 border-customOrange rounded-r-lg md:rounded-r-xl px-2 md:px-4 py-1.5 md:py-3 mb-3 md:mb-6 w-fit">
                      <span className="text-customOrange text-[10px] md:text-sm font-semibold">🔒 Encrypted on-device</span>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <span className="bg-orange-100 text-orange-700 rounded-full px-2 sm:px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold">Encrypted instantly</span>
                      <span className="bg-orange-100 text-orange-700 rounded-full px-2 sm:px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold">On-device only</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 Text */}
                <div ref={el => leftTextRef.current[2] = el} className="absolute inset-0 flex flex-col justify-center">
                  <div className="absolute -top-3 -left-[5px] md:-top-5 md:-left-[10px] z-0 text-[80px] sm:text-[120px] md:text-[180px] font-extrabold text-orange-50 select-none pointer-events-none leading-none">03</div>
                  <div className="relative z-10">
                    <div>
                      <span className="bg-orange-50 text-customOrange text-[10px] sm:text-xs md:text-sm font-bold px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full">Step 03</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] mt-2 md:mt-3 mb-2 md:mb-4">Merchant Scans. Done.</h3>
                    <p className="text-xs sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-sm mb-3 md:mb-6">
                      They scan your code, it confirms in seconds. Payment complete — even in a dead zone.
                    </p>
                    <div className="bg-orange-50 border-l-2 md:border-l-4 border-customOrange rounded-r-lg md:rounded-r-xl px-2 md:px-4 py-1.5 md:py-3 mb-3 md:mb-6 w-fit">
                      <span className="text-customOrange text-[10px] md:text-sm font-semibold">✓ Confirms without internet</span>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <span className="bg-orange-100 text-orange-700 rounded-full px-2 sm:px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold">Confirms in seconds</span>
                      <span className="bg-orange-100 text-orange-700 rounded-full px-2 sm:px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold">No bank alert wait</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side fixed visual column */}
            <div className="w-[50%] md:w-[55%] flex justify-center items-center">
              <div className="rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[3rem] border-[2px] md:border-[3px] border-gray-200 shadow-[0_32px_64px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] bg-white overflow-hidden w-[160px] sm:w-[220px] md:w-[300px] h-[350px] sm:h-[480px] md:h-[660px] relative">
                {/* Dynamic Screens — images extend beyond container, overflow-hidden crops the black bezels */}
                <div ref={el => rightScreensRef.current[0] = el} className="absolute inset-0 w-full h-full bg-white overflow-hidden">
                  <img src={screenStep1} alt="Enter Amount Screen" className="absolute object-cover object-top" style={{ top: '-2px', left: '-2%', width: '110%', height: 'calc(100% + 6px)' }} />
                </div>
                <div ref={el => rightScreensRef.current[1] = el} className="absolute inset-0 w-full h-full bg-white overflow-hidden">
                  <img src={screenStep2} alt="Merchant QR Screen" className="absolute object-cover object-top" style={{ top: '-2px', left: '-2%', width: '110%', height: 'calc(100% + 6px)' }} />
                </div>
                <div ref={el => rightScreensRef.current[2] = el} className="absolute inset-0 w-full h-full bg-white overflow-hidden">
                  <img src={screenStep3} alt="Payment Confirmed Screen" className="absolute object-cover object-top" style={{ top: '-2px', left: '-2%', width: '110%', height: 'calc(100% + 6px)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-[#F7F7F7] pt-16 md:pt-24 pb-14 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Wave Transition from top (orange coming down into light gray) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[40px] md:h-[80px] fill-white">
            <path d="M1200,0H0v60c0,0,131-40,277-38s207,32,319,33s181-25,298-31S1200,60,1200,60V0z"></path>
          </svg>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4 relative z-10 pt-10"
        >
          <p className="text-customOrange text-xs font-semibold tracking-widest uppercase mb-3">WHY QPAY</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
            <span className="text-gray-900">Why QPay Works Where Others </span>
            <span className="text-customOrange">Fail</span>
          </h2>
        </motion.div>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10"
        >
          {/* Card 1 */}
          <motion.div
            onViewportEnter={() => setVisibleCards(prev => ({ ...prev, card1: true }))}
            onViewportLeave={() => setVisibleCards(prev => ({ ...prev, card1: false }))}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
            whileHover={{ y: -10, borderColor: "rgba(249,84,29,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
            className={`flex flex-col bg-white border border-gray-100 shadow-sm rounded-2xl md:rounded-[2.5rem] p-5 sm:p-6 md:p-8 backdrop-blur-sm transition-all duration-500 ${visibleCards.card1 ? 'is-visible' : ''}`}
          >
            <div className="bg-customOrange/10 rounded-2xl w-14 h-14 flex items-center justify-center mb-8 shadow-inner">
              <FontAwesomeIcon icon={faSignal} className="text-customOrange text-2xl" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl mb-3 md:mb-4 text-gray-900 font-bold">Internet Not Required.</h3>
            <p className="font-body text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6 md:mb-8 flex-grow">
              Out of data, poor signal, no WiFi — irrelevant. QPay generates your payment entirely on your device. Internet was never part of the equation.
            </p>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-[#0A0A0B] p-5 md:p-8 flex flex-col items-center justify-center min-h-[200px] md:min-h-[260px] mt-4 relative border border-white/5 shadow-2xl group" style={{ perspective: '1000px' }}>
              {/* Premium Background Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-customOrange/10 blur-[60px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                {/* Floating Phone Frame */}
                <div className="relative w-[110px] h-[190px] bg-[#1A1A1E] rounded-[2.2rem] border-[3px] border-[#2A2A2E] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] phone-mockup flex items-center justify-center overflow-hidden">
                  {/* Screen Content */}
                  <div className="absolute inset-1.5 bg-gradient-to-b from-[#0F0F11] to-[#050505] rounded-[1.8rem] flex flex-col items-center justify-center p-4">
                    {/* High-End Offline Symbol */}
                    <div className="relative">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                        <path d="M1 8.5C5 4.5 10 4 12 4C14 4 19 4.5 23 8.5M3.5 12C6.5 9 10 8.5 12 8.5C14 8.5 17.5 9 20.5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.2" />
                        <path d="M6 15.5C8 13.5 10.5 13 12 13C13.5 13 16 13.5 18 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.2" />
                        <circle cx="12" cy="19" r="1.5" fill="white" fillOpacity="0.2" />
                        {/* Bold Premium Slash */}
                        <line x1="2" y1="22" x2="22" y2="2" stroke="#F9541D" strokeWidth="2.5" strokeLinecap="round" className="slash-line-premium" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Speaker Grill */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#2A2A2E] rounded-full" />
                </div>

                {/* Floating Abstract Shards */}
                <div className="absolute -left-4 top-1/4 w-3 h-3 bg-customOrange/20 rotate-12 blur-[1px] group-hover:translate-y-[-10px] transition-transform duration-1000" />
                <div className="absolute -right-2 bottom-1/3 w-2 h-2 bg-white/10 -rotate-45 blur-[0.5px] group-hover:translate-y-[10px] transition-transform duration-1000" />
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Visually Staggered (offset) */}
          <motion.div
            onViewportEnter={() => setVisibleCards(prev => ({ ...prev, card2: true }))}
            onViewportLeave={() => setVisibleCards(prev => ({ ...prev, card2: false }))}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
            whileHover={{ y: -10, borderColor: "rgba(249,84,29,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
            className={`flex flex-col bg-white border border-gray-100 shadow-sm rounded-2xl md:rounded-[2.5rem] p-5 sm:p-6 md:p-8 backdrop-blur-sm transition-all duration-500 md:mt-12 ${visibleCards.card2 ? 'is-visible' : ''}`}
          >
            <div className="bg-customOrange/10 rounded-2xl w-14 h-14 flex items-center justify-center mb-8 shadow-inner">
              <FontAwesomeIcon icon={faBolt} className="text-customOrange text-2xl" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl mb-3 md:mb-4 text-gray-900 font-bold">Zero Wait Time.</h3>
            <p className="font-body text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6 md:mb-8 flex-grow">
              Scan and it's confirmed. No spinning wheel, no 'transaction processing', no staring at your screen. QPay confirms in under 3 seconds. Every time.
            </p>
            <div className="bg-gradient-to-br from-orange-500 via-customOrange to-orange-600 p-5 md:p-8 flex flex-col items-center justify-center min-h-[180px] md:min-h-[200px] rounded-2xl overflow-hidden mt-4 relative shadow-2xl group">
              {/* Energy Speed Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="absolute h-px bg-white speed-line" style={{ top: `${20 * i + 10}%`, width: '40px', left: '-50px', animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>

              <div className="relative flex items-center justify-center scale-110">
                {/* Tech Brackets */}
                <div className="absolute -inset-8 border-t border-l border-white/20 w-4 h-4 rounded-tl-sm" />
                <div className="absolute -inset-8 border-t border-r border-white/20 w-4 h-4 rounded-tr-sm right-[-32px]" />
                <div className="absolute -inset-8 border-b border-l border-white/20 w-4 h-4 rounded-bl-sm bottom-[-32px]" />
                <div className="absolute -inset-8 border-b border-r border-white/20 w-4 h-4 rounded-br-sm right-[-32px] bottom-[-32px]" />

                <div className="absolute w-24 h-24 border border-white/30 rounded-full pulse-ring" style={{ animationDelay: '0.1s' }} />
                <div className="absolute w-32 h-32 border border-white/10 rounded-full pulse-ring" style={{ animationDelay: '0.3s' }} />
                
                <svg width="60" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="bolt-premium relative z-10 drop-shadow-lg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" />
                  <path d="M13 2L8 14H12L11 22L13 2Z" fill="rgba(255,255,255,0.2)" />
                </svg>
              </div>

              <div className="mt-8 flex items-baseline gap-1 bg-black/10 backdrop-blur-sm px-3 py-1 rounded-md border border-white/10">
                <span className="text-white text-lg font-mono font-bold">2.8</span>
                <span className="text-white/70 text-[10px] font-mono tracking-widest uppercase">SEC</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            onViewportEnter={() => setVisibleCards(prev => ({ ...prev, card3: true }))}
            onViewportLeave={() => setVisibleCards(prev => ({ ...prev, card3: false }))}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
            whileHover={{ y: -10, borderColor: "rgba(249,84,29,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
            className={`flex flex-col bg-white border border-gray-100 shadow-sm rounded-2xl md:rounded-[2.5rem] p-5 sm:p-6 md:p-8 backdrop-blur-sm transition-all duration-500 ${visibleCards.card3 ? 'is-visible' : ''}`}
          >
            <div className="bg-customOrange/10 rounded-2xl w-14 h-14 flex items-center justify-center mb-8 shadow-inner">
              <FontAwesomeIcon icon={faShieldHalved} className="text-customOrange text-2xl" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl mb-3 md:mb-4 text-gray-900 font-bold">Zero Failed Transactions.</h3>
            <p className="font-body text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6 md:mb-8 flex-grow">
              Every payment that leaves your phone arrives. No network drop mid-transfer, no failed debits, no money stuck in limbo. Sent means received.
            </p>
            <div className="bg-gradient-to-br from-gray-50 via-orange-50/30 to-white p-5 md:p-8 flex flex-col items-center justify-center min-h-[180px] md:min-h-[200px] rounded-2xl overflow-hidden mt-4 relative border border-orange-100 shadow-xl group">
              {/* Floating Success Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="absolute w-1 h-1 bg-customOrange rounded-full particle" style={{ left: `${15 * i + 10}%`, bottom: '20%', animationDelay: `${i * 0.4}s` }} />
                ))}
              </div>

              <div className="relative flex items-center justify-center">
                {/* Orbiting Ring */}
                <div className="absolute w-28 h-28 border border-dashed border-customOrange/20 rounded-full orbit-container" />
                <div className="absolute w-28 h-28 orbit-container">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-customOrange rounded-full shadow-[0_0_8px_#F9541D]" />
                </div>

                <div className="relative bg-white rounded-full p-6 shadow-2xl border border-orange-50">
                  <svg width="60" height="60" viewBox="0 0 100 100" className="confirm-svg-premium relative z-10">
                    <circle cx="50" cy="50" r="42" stroke="#F9541D" strokeWidth="1.5" fill="none" className="circle-draw-premium" strokeDasharray="5 5" opacity="0.3" />
                    <circle cx="50" cy="50" r="38" stroke="#F9541D" strokeWidth="2" fill="none" className="circle-draw-premium" />
                    <path d="M32 52L46 66L72 34" stroke="#F9541D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="check-draw-premium" />
                  </svg>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center gap-1">
                <div className="h-px w-8 bg-customOrange/20 mb-1" />
                <span className="text-customOrange text-[10px] font-bold tracking-[0.25em] uppercase">Verified Arrival</span>
              </div>
            </div>
          </motion.div>
        </motion.div>



        {/* Wave Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 transform rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[40px] md:h-[80px] fill-white">
            <path d="M1200,0H0v60c0,0,131-40,277-38s207,32,319,33s181-25,298-31S1200,60,1200,60V0z"></path>
          </svg>
        </div>
      </section>

     
    </div>
  );
};

export default AboutMyThrift;
