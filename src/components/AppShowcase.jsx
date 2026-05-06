import { useEffect, useRef } from "react";
import gsap from "gsap";
import screenSplash from "./images/screens/screen_splash.png";

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
  const pillTweenRef = useRef(null);
  const stripTickerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (marqueeRef.current) {
      pillTweenRef.current = gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: isMobile ? 26 : 20,
        ease: "none",
        repeat: -1,
      });
    }

    let xPos = 0;
    const speed = isMobile ? 0.95 : 1.35;
    const strip = stripRef.current;
    let halfWidth = 0;

    const tick = () => {
      if (!strip) return;
      if (!halfWidth) halfWidth = strip.scrollWidth / 2;

      xPos -= speed;
      if (Math.abs(xPos) >= halfWidth) {
        xPos = 0;
      }

      gsap.set(strip, { x: xPos });
    };
    stripTickerRef.current = tick;

    if (strip) {
      gsap.ticker.add(tick);
    }

    return () => {
      if (stripTickerRef.current) {
        gsap.ticker.remove(stripTickerRef.current);
      }
      if (pillTweenRef.current) pillTweenRef.current.kill();
    };
  }, []);

  const renderPhoneSet = (keyPrefix) => (
    <div className="flex flex-row items-end gap-2 min-[380px]:gap-2.5 sm:gap-6 md:gap-8">
      {screens.map((screen, index) => (
        <div
          key={`${keyPrefix}-${index}`}
          className="relative h-[92vw] w-[43vw] max-h-[370px] max-w-[174px] flex-shrink-0 min-[375px]:h-[88vw] min-[375px]:w-[41vw] min-[430px]:h-[82vw] min-[430px]:w-[38vw] sm:h-[400px] sm:w-[190px] md:h-[460px] md:w-[220px]"
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-[1.65rem] border-[2px] border-white/20 bg-white min-[430px]:rounded-[1.9rem] sm:rounded-[2.5rem] sm:border-[3px]"
            style={{
              boxShadow:
                "0 0 0 2px rgba(255,255,255,0.15), 0 18px 38px rgba(0,0,0,0.26)",
            }}
          >
            <div className="absolute left-1/2 top-2 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-black/10 sm:top-4 sm:h-2 sm:w-16" />
            <div className="absolute inset-[5px] overflow-hidden rounded-[1.35rem] bg-[#f8f8f8] min-[430px]:rounded-[1.6rem] sm:inset-[8px] sm:rounded-[2rem] md:inset-[10px]">
              <img
                src={screen.src}
                alt={screen.label}
                className="block h-full w-full object-contain object-top"
              />
            </div>
          </div>

          <p className="mt-2 text-center text-[11px] font-medium text-white/60 sm:mt-3 sm:text-sm md:mt-4">
            {screen.label}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section
      className="relative overflow-x-hidden overflow-y-visible bg-customOrange pt-12 pb-10 md:pt-20 md:pb-[60px]"
      id="app-showcase"
    >
      <div className="relative z-10 mb-16 w-full text-center">
        <div className="px-6">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Every Screen.{" "}
            <span style={{ color: "rgba(255,255,255,0.75)" }}>
              Offline Ready.
            </span>
          </h2>
          <p className="font-body mx-auto mt-3 max-w-2xl px-4 text-sm font-medium leading-relaxed text-white/70 sm:text-base md:mt-4 md:text-lg lg:text-xl">
            From onboarding to instant payment, QPay works completely offline.
          </p>
        </div>

        <div className="relative mt-6 w-full overflow-hidden md:mt-10">
          <div ref={marqueeRef} className="flex w-max flex-row">
            {[...Array(10)].map((_, setIndex) => (
              <div key={`pill-set-${setIndex}`} className="flex gap-4 px-3 md:px-2">
                {pills.map((pill, index) => (
                  <span
                    key={`pill-${setIndex}-${index}`}
                    className="flex-shrink-0 whitespace-nowrap rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-800 md:px-4 md:py-2 md:text-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full px-[2vw] pb-8 min-[430px]:px-[4vw] sm:px-0 md:pb-12">
        <div ref={stripRef} className="flex w-max flex-row gap-2 min-[380px]:gap-2.5 sm:gap-6 md:gap-8">
          {renderPhoneSet("screen1")}
          {renderPhoneSet("screen2")}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
