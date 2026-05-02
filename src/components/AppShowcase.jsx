import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import screenSplash from "./images/screens/screen_splash.png";
// Step 1: Enter Amount | Step 2: Merchant Scans (QR) | Step 3: Payment Confirmed
const screenStep1 = "/screen2.jpg";
const screenStep2 = "/screen33.jpg";
const screenStep3 = "/screen_1.jpg";

const screens = [
  { src: screenSplash, label: "Onboarding" },
  { src: "/lean/Hidden balance.png", label: "Dashboard" },
  { src: screenStep1, label: "Enter Amount" },
  { src: screenStep2, label: "Merchant QR" },
  { src: screenStep3, label: "Payment Confirmed" },
  { src: "/lean/Default1.png", label: "Merchant Dashboard" },
];

const pills = [
  "Bank-Grade Security",
  "Instant QR",
  "No Bank App Needed",
  "Works Everywhere",
  "Zero Connectivity",
];

const AppShowcase = () => {
  const stripRef = useRef(null);
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);
  const pillTweenRef = useRef(null);

  useEffect(() => {
    // 1. Marquee animation
    if (marqueeRef.current) {
      pillTweenRef.current = gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }

    // 2. Phone Strip auto-scroll via Ticker
    let xPos = 0;
    const speed = 1.6; // pixels per frame
    const strip = stripRef.current;
    let halfWidth = 0;

    const tick = () => {
      if (!strip) return;
      // Calculate half width dynamically in case of late layout calculation
      if (!halfWidth) halfWidth = strip.scrollWidth / 2;
      
      xPos -= speed;
      if (Math.abs(xPos) >= halfWidth) {
        xPos = 0; // instant reset — imperceptible because it's exactly half
      }
      gsap.set(strip, { x: xPos });
    };

    if (strip) {
      gsap.ticker.add(tick);
    }

    return () => {
      gsap.ticker.remove(tick);
      if (pillTweenRef.current) pillTweenRef.current.kill();
    };
  }, []);

  return (
    <section
      className="relative bg-customOrange overflow-x-hidden overflow-y-visible pt-12 md:pt-20 pb-[40px] md:pb-[60px]"
      id="app-showcase"
    >


      {/* Fixed Header */}
      <div className="relative z-10 w-full text-center mb-16">
        <div className="px-6">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-extrabold leading-tight">
            Every Screen.{" "}
            <span style={{ color: "rgba(255,255,255,0.75)" }}>Offline Ready.</span>
          </h2>
          <p className="font-body mt-3 md:mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed px-4">
            From onboarding to instant payment — QPay works completely offline.
          </p>
        </div>

        {/* Marquee Strip */}
        <div className="mt-6 md:mt-10 overflow-hidden relative w-full">
          <div
            ref={marqueeRef}
            className="flex flex-row w-max"
          >
            {[...Array(10)].map((_, setIndex) => (
              <div key={`pill-set-${setIndex}`} className="flex gap-4 px-2">
                {pills.map((pill, i) => (
                  <span
                    key={`pill-${setIndex}-${i}`}
                    className="bg-white text-gray-800 border border-gray-200 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone Strip */}
      <div className="relative w-full pb-[48px]">
        <div
          ref={stripRef}
          className="flex flex-row w-max"
        >
          {/* Set 1 */}
          <div className="flex flex-row items-end gap-8 px-4">
            {screens.map((screen, i) => (
              <div
                key={`screen1-${i}`}
                className="relative flex-shrink-0 w-[160px] h-[340px] sm:w-[190px] sm:h-[400px] md:w-[220px] md:h-[460px]"
              >
                {/* Phone Frame */}
                <div 
                  className="relative w-full h-full rounded-[2.8rem] border-[3px] border-white/20 overflow-hidden bg-white"
                  style={{ boxShadow: "0 0 0 2px rgba(255,255,255,0.15), 0 24px 48px rgba(0,0,0,0.3)" }}
                >
                  {/* Screen Image */}
                  <img
                    src={screen.src}
                    alt={screen.label}
                    className="w-full h-full object-cover block"
                    style={{ transform: 'scale(1.06)' }}
                  />
                </div>

                {/* Label */}
                <p className="text-center text-sm mt-4 text-white/60 font-medium">
                  {screen.label}
                </p>
              </div>
            ))}
          </div>

          {/* Set 2 */}
          <div className="flex flex-row items-end gap-8 px-4">
            {screens.map((screen, i) => (
              <div
                key={`screen2-${i}`}
                className="relative flex-shrink-0 w-[160px] h-[340px] sm:w-[190px] sm:h-[400px] md:w-[220px] md:h-[460px]"
              >
                {/* Phone Frame */}
                <div 
                  className="relative w-full h-full rounded-[2.5rem] border-[3px] border-white/20 overflow-hidden bg-white"
                  style={{ boxShadow: "0 0 0 2px rgba(255,255,255,0.15), 0 24px 48px rgba(0,0,0,0.3)" }}
                >
                  {/* Screen Image */}
                  <img
                    src={screen.src}
                    alt={screen.label}
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(1.06)' }}
                  />
                </div>

                {/* Label */}
                <p className="text-center text-sm mt-4 text-white/60 font-medium">
                  {screen.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
