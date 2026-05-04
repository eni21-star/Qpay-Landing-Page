import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignal,
  faBolt,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const screenStep1 = "/screen2.jpg";
const screenStep2 = "/screen33.jpg";
const screenStep3 = "/screen_1.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutMyThrift = () => {
  const [visibleCards, setVisibleCards] = useState({
    card1: false,
    card2: false,
    card3: false,
  });
  const titleRef = useRef(null);
  const pinContainerRef = useRef(null);
  const leftTextRef = useRef([]);
  const rightScreensRef = useRef([]);
  const dotsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

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

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isTabletUp: "(min-width: 768px)",
        },
        (context) => {
          const { isMobile } = context.conditions;
          const scrubAmount = isMobile ? 0.9 : 1;
          const stepEase = isMobile ? "none" : "power2.out";
          const screenEase = isMobile ? "none" : "power2.inOut";

        if (!pinContainerRef.current) return undefined;

        gsap.set(leftTextRef.current[1], { opacity: 0, y: 30 });
        gsap.set(leftTextRef.current[2], { opacity: 0, y: 30 });
        gsap.set(rightScreensRef.current[1], { yPercent: 100 });
        gsap.set(rightScreensRef.current[2], { yPercent: 100 });
        gsap.set(dotsRef.current[0], {
          backgroundColor: "#F9541D",
          width: 12,
          height: 12,
          boxShadow: "0 0 0 4px #FFEDD5",
          marginLeft: -5,
        });
        gsap.set(dotsRef.current[1], {
          backgroundColor: "#FED7AA",
          width: 8,
          height: 8,
          boxShadow: "0 0 0 0px #FFEDD5",
          marginLeft: -3,
        });
        gsap.set(dotsRef.current[2], {
          backgroundColor: "#FED7AA",
          width: 8,
          height: 8,
          boxShadow: "0 0 0 0px #FFEDD5",
          marginLeft: -3,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: "top top",
            end: isMobile ? "+=260%" : "+=200%",
            scrub: scrubAmount,
            snap: isMobile
              ? {
                  snapTo: [0, 0.5, 1],
                  directional: true,
                  inertia: false,
                  duration: { min: 0.25, max: 0.45 },
                  delay: 0.1,
                  ease: "power1.inOut",
                }
              : false,
            pin: true,
            anticipatePin: isMobile ? 1 : 0,
            fastScrollEnd: isMobile ? false : true,
            invalidateOnRefresh: true,
          },
        });

        tl.addLabel("step1", 0)
          .to(
          leftTextRef.current[0],
          { y: -30, opacity: 0, duration: 0.3, ease: stepEase },
          0.1
        )
          .to(
            leftTextRef.current[1],
            { y: 0, opacity: 1, duration: 0.3, ease: stepEase },
            0.5
          )
          .to(
            rightScreensRef.current[0],
            { yPercent: -100, duration: 1, ease: screenEase },
            0
          )
          .to(
            rightScreensRef.current[1],
            { yPercent: 0, duration: 1, ease: screenEase },
            0
          )
          .to(
            dotsRef.current[0],
            {
              backgroundColor: "#FED7AA",
              width: 8,
              height: 8,
              boxShadow: "0 0 0 0px #FFEDD5",
              marginLeft: -3,
              duration: 0.3,
            },
            0.1
          )
          .to(
            dotsRef.current[1],
            {
              backgroundColor: "#F9541D",
              width: 12,
              height: 12,
              boxShadow: "0 0 0 4px #FFEDD5",
              marginLeft: -5,
              duration: 0.3,
            },
            0.5
          )
          .addLabel("step2", 1)
          .to(
            leftTextRef.current[1],
            { y: -30, opacity: 0, duration: 0.3, ease: stepEase },
            1.1
          )
          .to(
            leftTextRef.current[2],
            { y: 0, opacity: 1, duration: 0.3, ease: stepEase },
            1.5
          )
          .to(
            rightScreensRef.current[1],
            { yPercent: -100, duration: 1, ease: screenEase },
            1
          )
          .to(
            rightScreensRef.current[2],
            { yPercent: 0, duration: 1, ease: screenEase },
            1
          )
          .to(
            dotsRef.current[1],
            {
              backgroundColor: "#FED7AA",
              width: 8,
              height: 8,
              boxShadow: "0 0 0 0px #FFEDD5",
              marginLeft: -3,
              duration: 0.3,
            },
            1.1
          )
          .to(
            dotsRef.current[2],
            {
              backgroundColor: "#F9541D",
              width: 12,
              height: 12,
              boxShadow: "0 0 0 4px #FFEDD5",
              marginLeft: -5,
              duration: 0.3,
            },
            1.5
          )
          .addLabel("step3", 2);

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
        }
      );
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
        @media (max-width: 767px) {
          .howitw-pin {
            min-height: 100svh;
            justify-content: center;
          }
          .howitw-grid {
            min-height: 100svh;
            align-content: center;
            grid-template-columns: minmax(0, 1fr) minmax(150px, 46%);
            gap: 0.75rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .howitw-left,
          .howitw-phone {
            height: 64svh;
            min-height: 430px;
            max-height: 540px;
          }
          .howitw-phone {
            width: 45vw;
            min-width: 155px;
            max-width: 190px;
          }
        }
        @media (min-width: 390px) and (max-width: 767px) {
          .howitw-grid {
            grid-template-columns: minmax(0, 1fr) minmax(160px, 46%);
            gap: 1rem;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }
          .howitw-left,
          .howitw-phone {
            height: 66svh;
          }
          .howitw-phone {
            width: 46vw;
          }
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

      <section id="how-it-works" className="relative z-10 -mt-[1px] bg-white pt-14 md:pt-16">
        <div
          className="mx-auto mb-10 max-w-5xl px-4 text-center sm:px-6 md:mb-16"
          ref={titleRef}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-customOrange md:text-sm">
            How It Works
          </p>
          <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Three Steps. Zero Internet.
          </h2>
          <p className="font-body mx-auto max-w-xl text-base text-gray-500 md:text-lg">
            No signal needed at any step. QPay handles everything offline,
            start to finish.
          </p>
        </div>

        <div
          ref={pinContainerRef}
          className="howitw-pin flex min-h-[100svh] w-full flex-col justify-center overflow-hidden border-t border-gray-100 bg-white"
        >
          <div className="howitw-grid mx-auto grid w-full max-w-5xl grid-cols-[minmax(0,1fr)_minmax(116px,38%)] items-center gap-3 px-4 py-8 min-[390px]:grid-cols-[minmax(0,1fr)_minmax(132px,38%)] min-[390px]:gap-4 sm:grid-cols-[minmax(0,1fr)_43%] sm:gap-5 sm:px-5 md:grid-cols-[minmax(0,0.9fr)_minmax(250px,1.1fr)] md:gap-8 md:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(300px,1.15fr)]">
            <div className="howitw-left relative flex h-[300px] min-w-0 min-[390px]:h-[316px] sm:h-[460px] md:h-[440px] lg:h-[460px]">
              <div className="absolute bottom-2 left-0 top-2 flex w-0 flex-col justify-between border-l-2 border-dashed border-orange-200">
                <div ref={(el) => (dotsRef.current[0] = el)} className="rounded-full" />
                <div ref={(el) => (dotsRef.current[1] = el)} className="rounded-full" />
                <div ref={(el) => (dotsRef.current[2] = el)} className="rounded-full" />
              </div>

              <div className="relative ml-4 h-full w-full sm:ml-6 md:ml-8 lg:ml-10">
                <div
                  ref={(el) => (leftTextRef.current[0] = el)}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="pointer-events-none absolute -left-[2px] top-2 z-0 text-[72px] font-extrabold leading-none text-[#FCEBDF] min-[390px]:text-[82px] sm:text-[112px] md:top-0 md:text-[120px] lg:-left-[8px] lg:-top-3 lg:text-[170px]">
                    01
                  </div>
                  <div className="relative z-10">
                    <span className="inline-flex rounded-full bg-[#FFF2E8] px-2.5 py-1 text-[10px] font-bold text-customOrange md:px-3 md:text-xs lg:px-4 lg:py-1.5 lg:text-sm">
                      Step 01
                    </span>
                    <h3 className="mt-3 mb-2 max-w-[12rem] text-[1.22rem] font-extrabold leading-[1.05] text-[#1F2937] min-[390px]:max-w-[13rem] min-[390px]:text-[1.36rem] sm:max-w-[17rem] sm:text-[1.85rem] sm:leading-[1.08] md:mb-3 md:max-w-none md:text-[2.3rem] lg:mb-4 lg:text-5xl">
                      Enter Your Amount
                    </h3>
                    <p className="mb-3 max-w-[12rem] text-[11.5px] leading-[1.55] text-slate-500 min-[390px]:max-w-[13rem] min-[390px]:text-xs sm:max-w-[16rem] sm:text-[1.05rem] sm:leading-[1.45] md:mb-4 md:max-w-sm md:text-[1rem] lg:mb-6 lg:text-lg">
                      Open QPay and type what you&apos;re paying. Works with zero
                      bars, zero internet, zero waiting.
                    </p>
                    <div className="mb-3 w-fit rounded-xl border-l-[3px] border-customOrange bg-[#FFF6F0] px-2.5 py-2 sm:px-4 sm:py-3 md:mb-4 md:px-4 md:py-2.5 lg:mb-6 lg:rounded-r-xl lg:px-4 lg:py-3">
                      <span className="text-[10.5px] font-semibold text-customOrange min-[390px]:text-[11px] sm:text-sm md:text-xs lg:text-sm">
                        Generates QR in &lt;1s
                      </span>
                    </div>
                    <div className="flex max-w-[12rem] flex-wrap gap-1.5 min-[390px]:max-w-[13rem] sm:max-w-[17rem] sm:gap-3 md:max-w-none md:gap-3">
                      <span className="rounded-full bg-[#FFF2E3] px-2.5 py-1.5 text-[9.5px] font-semibold text-[#D97706] sm:px-4 sm:text-sm md:px-3 md:text-[11px] lg:px-4 lg:py-1.5 lg:text-xs">
                        Works offline
                      </span>
                      <span className="rounded-full bg-[#FFF2E3] px-2.5 py-1.5 text-[9.5px] font-semibold text-[#D97706] sm:px-4 sm:text-sm md:px-3 md:text-[11px] lg:px-4 lg:py-1.5 lg:text-xs">
                        No bars needed
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  ref={(el) => (leftTextRef.current[1] = el)}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="pointer-events-none absolute -left-[2px] top-2 z-0 text-[72px] font-extrabold leading-none text-[#FCEBDF] min-[390px]:text-[82px] sm:text-[112px] md:top-0 md:text-[120px] lg:-left-[8px] lg:-top-3 lg:text-[170px]">
                    02
                  </div>
                  <div className="relative z-10">
                    <span className="inline-flex rounded-full bg-[#FFF2E8] px-2.5 py-1 text-[10px] font-bold text-customOrange md:px-3 md:text-xs lg:px-4 lg:py-1.5 lg:text-sm">
                      Step 02
                    </span>
                    <h3 className="mt-3 mb-2 max-w-[12rem] text-[1.22rem] font-extrabold leading-[1.05] text-[#1F2937] min-[390px]:max-w-[13rem] min-[390px]:text-[1.36rem] sm:max-w-[17rem] sm:text-[1.85rem] sm:leading-[1.08] md:mb-3 md:max-w-none md:text-[2.3rem] lg:mb-4 lg:text-5xl">
                      Your QR Generates Instantly
                    </h3>
                    <p className="mb-3 max-w-[12rem] text-[11.5px] leading-[1.55] text-slate-500 min-[390px]:max-w-[13rem] min-[390px]:text-xs sm:max-w-[16rem] sm:text-[1.05rem] sm:leading-[1.45] md:mb-4 md:max-w-sm md:text-[1rem] lg:mb-6 lg:text-lg">
                      QPay creates a secure, encrypted code directly on your
                      device. No network needed to generate it.
                    </p>
                    <div className="mb-3 w-fit rounded-xl border-l-[3px] border-customOrange bg-[#FFF6F0] px-2.5 py-2 sm:px-4 sm:py-3 md:mb-4 md:px-4 md:py-2.5 lg:mb-6 lg:rounded-r-xl lg:px-4 lg:py-3">
                      <span className="text-[10.5px] font-semibold text-customOrange min-[390px]:text-[11px] sm:text-sm md:text-xs lg:text-sm">
                        Encrypted on-device
                      </span>
                    </div>
                    <div className="flex max-w-[12rem] flex-wrap gap-1.5 min-[390px]:max-w-[13rem] sm:max-w-[17rem] sm:gap-3 md:max-w-none md:gap-3">
                      <span className="rounded-full bg-[#FFF2E3] px-2.5 py-1.5 text-[9.5px] font-semibold text-[#D97706] sm:px-4 sm:text-sm md:px-3 md:text-[11px] lg:px-4 lg:py-1.5 lg:text-xs">
                        Encrypted instantly
                      </span>
                      <span className="rounded-full bg-[#FFF2E3] px-2.5 py-1.5 text-[9.5px] font-semibold text-[#D97706] sm:px-4 sm:text-sm md:px-3 md:text-[11px] lg:px-4 lg:py-1.5 lg:text-xs">
                        On-device only
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  ref={(el) => (leftTextRef.current[2] = el)}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="pointer-events-none absolute -left-[2px] top-2 z-0 text-[72px] font-extrabold leading-none text-[#FCEBDF] min-[390px]:text-[82px] sm:text-[112px] md:top-0 md:text-[120px] lg:-left-[8px] lg:-top-3 lg:text-[170px]">
                    03
                  </div>
                  <div className="relative z-10">
                    <span className="inline-flex rounded-full bg-[#FFF2E8] px-2.5 py-1 text-[10px] font-bold text-customOrange md:px-3 md:text-xs lg:px-4 lg:py-1.5 lg:text-sm">
                      Step 03
                    </span>
                    <h3 className="mt-3 mb-2 max-w-[12rem] text-[1.22rem] font-extrabold leading-[1.05] text-[#1F2937] min-[390px]:max-w-[13rem] min-[390px]:text-[1.36rem] sm:max-w-[17rem] sm:text-[1.85rem] sm:leading-[1.08] md:mb-3 md:max-w-none md:text-[2.3rem] lg:mb-4 lg:text-5xl">
                      Merchant Scans. Done.
                    </h3>
                    <p className="mb-3 max-w-[12rem] text-[11.5px] leading-[1.55] text-slate-500 min-[390px]:max-w-[13rem] min-[390px]:text-xs sm:max-w-[16rem] sm:text-[1.05rem] sm:leading-[1.45] md:mb-4 md:max-w-sm md:text-[1rem] lg:mb-6 lg:text-lg">
                      They scan your code, it confirms in seconds. Payment
                      complete, even in a dead zone.
                    </p>
                    <div className="mb-3 w-fit rounded-xl border-l-[3px] border-customOrange bg-[#FFF6F0] px-2.5 py-2 sm:px-4 sm:py-3 md:mb-4 md:px-4 md:py-2.5 lg:mb-6 lg:rounded-r-xl lg:px-4 lg:py-3">
                      <span className="text-[10.5px] font-semibold text-customOrange min-[390px]:text-[11px] sm:text-sm md:text-xs lg:text-sm">
                        Confirms without internet
                      </span>
                    </div>
                    <div className="flex max-w-[12rem] flex-wrap gap-1.5 min-[390px]:max-w-[13rem] sm:max-w-[17rem] sm:gap-3 md:max-w-none md:gap-3">
                      <span className="rounded-full bg-[#FFF2E3] px-2.5 py-1.5 text-[9.5px] font-semibold text-[#D97706] sm:px-4 sm:text-sm md:px-3 md:text-[11px] lg:px-4 lg:py-1.5 lg:text-xs">
                        Confirms in seconds
                      </span>
                      <span className="rounded-full bg-[#FFF2E3] px-2.5 py-1.5 text-[9.5px] font-semibold text-[#D97706] sm:px-4 sm:text-sm md:px-3 md:text-[11px] lg:px-4 lg:py-1.5 lg:text-xs">
                        No bank alert wait
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 justify-center">
              <div className="howitw-phone relative h-[282px] w-[132px] overflow-hidden rounded-[1.55rem] border border-gray-200/80 bg-[#FCFCFD] shadow-[0_18px_40px_rgba(15,23,42,0.08),0_0_0_1px_rgba(15,23,42,0.03)] min-[390px]:h-[308px] min-[390px]:w-[144px] sm:h-[524px] sm:w-[244px] sm:rounded-[2.35rem] sm:border-[3px] sm:shadow-[0_34px_70px_rgba(15,23,42,0.12),0_0_0_1px_rgba(15,23,42,0.04)] md:h-[560px] md:w-[264px] md:rounded-[2.55rem] md:border-[3px] md:shadow-[0_32px_64px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] lg:h-[660px] lg:w-[300px] lg:rounded-[3rem]">
                <div className="absolute left-1/2 top-2.5 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-black/12 sm:top-4 sm:h-2 sm:w-16 lg:top-5 lg:w-20" />
                <div
                  ref={(el) => (rightScreensRef.current[0] = el)}
                  className="absolute inset-[7px] h-auto w-auto overflow-hidden rounded-[1.4rem] bg-white sm:inset-[8px] sm:rounded-[1.5rem] md:inset-[10px] md:rounded-[1.8rem] lg:inset-[12px] lg:rounded-[2.4rem]"
                >
                  <img
                    src={screenStep1}
                    alt="Enter Amount Screen"
                    className="block h-full w-full object-cover object-top md:object-contain"
                  />
                </div>
                <div
                  ref={(el) => (rightScreensRef.current[1] = el)}
                  className="absolute inset-[7px] h-auto w-auto overflow-hidden rounded-[1.4rem] bg-white sm:inset-[8px] sm:rounded-[1.5rem] md:inset-[10px] md:rounded-[1.8rem] lg:inset-[12px] lg:rounded-[2.4rem]"
                >
                  <img
                    src={screenStep2}
                    alt="Merchant QR Screen"
                    className="block h-full w-full object-cover object-top md:object-contain"
                  />
                </div>
                <div
                  ref={(el) => (rightScreensRef.current[2] = el)}
                  className="absolute inset-[7px] h-auto w-auto overflow-hidden rounded-[1.4rem] bg-white sm:inset-[8px] sm:rounded-[1.5rem] md:inset-[10px] md:rounded-[1.8rem] lg:inset-[12px] lg:rounded-[2.4rem]"
                >
                  <img
                    src={screenStep3}
                    alt="Payment Confirmed Screen"
                    className="block h-full w-full object-cover object-top md:object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-qpay"
        className="relative overflow-hidden bg-[#F7F7F7] px-4 pt-16 pb-14 sm:px-6 md:pt-24 md:pb-20"
      >
        <div className="absolute left-0 top-0 w-full overflow-hidden leading-none z-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="block h-[40px] w-full fill-white md:h-[80px]"
          >
            <path d="M1200,0H0v60c0,0,131-40,277-38s207,32,319,33s181-25,298-31S1200,60,1200,60V0z"></path>
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 px-4 pt-10 text-center mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-customOrange">
            WHY QPAY
          </p>
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
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3"
        >
          <motion.div
            onViewportEnter={() =>
              setVisibleCards((prev) => ({ ...prev, card1: true }))
            }
            onViewportLeave={() =>
              setVisibleCards((prev) => ({ ...prev, card1: false }))
            }
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{
              y: -10,
              borderColor: "rgba(249,84,29,0.3)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
            }}
            className={`flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 md:rounded-[2.5rem] md:p-8 ${visibleCards.card1 ? "is-visible" : ""}`}
          >
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-customOrange/10 shadow-inner">
              <FontAwesomeIcon icon={faSignal} className="text-2xl text-customOrange" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 md:mb-4 md:text-2xl">
              Internet Not Required.
            </h3>
            <p className="font-body mb-6 flex-grow text-sm font-medium leading-relaxed text-gray-500 md:mb-8 md:text-base">
              Out of data, poor signal, no WiFi, irrelevant. QPay generates
              your payment entirely on your device. Internet was never part of
              the equation.
            </p>
            <div
              className="group relative mt-4 flex min-h-[200px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-[#0A0A0B] p-5 shadow-2xl md:min-h-[260px] md:rounded-3xl md:p-8"
              style={{ perspective: "1000px" }}
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-customOrange/10 blur-[60px]" />
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                <div className="phone-mockup relative flex h-[190px] w-[110px] items-center justify-center overflow-hidden rounded-[2.2rem] border-[3px] border-[#2A2A2E] bg-[#1A1A1E] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-1.5 flex items-center justify-center rounded-[1.8rem] bg-gradient-to-b from-[#0F0F11] to-[#050505] p-4">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-80"
                    >
                      <path
                        d="M1 8.5C5 4.5 10 4 12 4C14 4 19 4.5 23 8.5M3.5 12C6.5 9 10 8.5 12 8.5C14 8.5 17.5 9 20.5 12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeOpacity="0.2"
                      />
                      <path
                        d="M6 15.5C8 13.5 10.5 13 12 13C13.5 13 16 13.5 18 15.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeOpacity="0.2"
                      />
                      <circle cx="12" cy="19" r="1.5" fill="white" fillOpacity="0.2" />
                      <line
                        x1="2"
                        y1="22"
                        x2="22"
                        y2="2"
                        stroke="#F9541D"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="slash-line-premium"
                      />
                    </svg>
                  </div>
                  <div className="absolute left-1/2 top-4 h-1 w-8 -translate-x-1/2 rounded-full bg-[#2A2A2E]" />
                </div>

                <div className="absolute -left-4 top-1/4 h-3 w-3 rotate-12 bg-customOrange/20 blur-[1px] transition-transform duration-1000 group-hover:-translate-y-[10px]" />
                <div className="absolute -right-2 bottom-1/3 h-2 w-2 -rotate-45 bg-white/10 blur-[0.5px] transition-transform duration-1000 group-hover:translate-y-[10px]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            onViewportEnter={() =>
              setVisibleCards((prev) => ({ ...prev, card2: true }))
            }
            onViewportLeave={() =>
              setVisibleCards((prev) => ({ ...prev, card2: false }))
            }
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{
              y: -10,
              borderColor: "rgba(249,84,29,0.3)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
            }}
            className={`flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 md:rounded-[2.5rem] md:p-8 xl:mt-12 ${visibleCards.card2 ? "is-visible" : ""}`}
          >
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-customOrange/10 shadow-inner">
              <FontAwesomeIcon icon={faBolt} className="text-2xl text-customOrange" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 md:mb-4 md:text-2xl">
              Zero Wait Time.
            </h3>
            <p className="font-body mb-6 flex-grow text-sm font-medium leading-relaxed text-gray-500 md:mb-8 md:text-base">
              Scan and it&apos;s confirmed. No spinning wheel, no transaction
              processing, no staring at your screen. QPay confirms in under 3
              seconds. Every time.
            </p>
            <div className="group relative mt-4 flex min-h-[180px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 via-customOrange to-orange-600 p-5 shadow-2xl md:min-h-[200px] md:p-8">
              <div className="pointer-events-none absolute inset-0 opacity-20">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="speed-line absolute h-px bg-white"
                    style={{
                      top: `${20 * index + 10}%`,
                      width: "40px",
                      left: "-50px",
                      animationDelay: `${index * 0.2}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative flex scale-110 items-center justify-center">
                <div className="absolute -inset-8 h-4 w-4 rounded-tl-sm border-l border-t border-white/20" />
                <div className="absolute right-[-32px] -inset-8 h-4 w-4 rounded-tr-sm border-r border-t border-white/20" />
                <div className="absolute bottom-[-32px] -inset-8 h-4 w-4 rounded-bl-sm border-b border-l border-white/20" />
                <div className="absolute right-[-32px] bottom-[-32px] h-4 w-4 rounded-br-sm border-b border-r border-white/20" />
                <div className="pulse-ring absolute h-24 w-24 rounded-full border border-white/30" style={{ animationDelay: "0.1s" }} />
                <div className="pulse-ring absolute h-32 w-32 rounded-full border border-white/10" style={{ animationDelay: "0.3s" }} />

                <svg
                  width="60"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bolt-premium relative z-10 drop-shadow-lg"
                >
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" />
                  <path d="M13 2L8 14H12L11 22L13 2Z" fill="rgba(255,255,255,0.2)" />
                </svg>
              </div>

              <div className="mt-8 flex items-baseline gap-1 rounded-md border border-white/10 bg-black/10 px-3 py-1 backdrop-blur-sm">
                <span className="font-mono text-lg font-bold text-white">2.8</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                  SEC
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            onViewportEnter={() =>
              setVisibleCards((prev) => ({ ...prev, card3: true }))
            }
            onViewportLeave={() =>
              setVisibleCards((prev) => ({ ...prev, card3: false }))
            }
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{
              y: -10,
              borderColor: "rgba(249,84,29,0.3)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
            }}
            className={`flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 md:col-span-2 md:mx-auto md:w-full md:max-w-[34rem] md:rounded-[2.5rem] md:p-8 xl:col-span-1 xl:max-w-none ${visibleCards.card3 ? "is-visible" : ""}`}
          >
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-customOrange/10 shadow-inner">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-2xl text-customOrange"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 md:mb-4 md:text-2xl">
              Zero Failed Transactions.
            </h3>
            <p className="font-body mb-6 flex-grow text-sm font-medium leading-relaxed text-gray-500 md:mb-8 md:text-base">
              Every payment that leaves your phone arrives. No network drop
              mid-transfer, no failed debits, no money stuck in limbo. Sent
              means received.
            </p>
            <div className="group relative mt-4 flex min-h-[180px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-gray-50 via-orange-50/30 to-white p-5 shadow-xl md:min-h-[200px] md:p-8">
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="particle absolute h-1 w-1 rounded-full bg-customOrange"
                    style={{
                      left: `${15 * index + 10}%`,
                      bottom: "20%",
                      animationDelay: `${index * 0.4}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative flex items-center justify-center">
                <div className="orbit-container absolute h-28 w-28 rounded-full border border-dashed border-customOrange/20" />
                <div className="orbit-container absolute h-28 w-28">
                  <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-customOrange shadow-[0_0_8px_#F9541D]" />
                </div>

                <div className="relative rounded-full border border-orange-50 bg-white p-6 shadow-2xl">
                  <svg width="60" height="60" viewBox="0 0 100 100" className="relative z-10">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="#F9541D"
                      strokeWidth="1.5"
                      fill="none"
                      className="circle-draw-premium"
                      strokeDasharray="5 5"
                      opacity="0.3"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#F9541D"
                      strokeWidth="2"
                      fill="none"
                      className="circle-draw-premium"
                    />
                    <path
                      d="M32 52L46 66L72 34"
                      stroke="#F9541D"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      className="check-draw-premium"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center gap-1">
                <div className="mb-1 h-px w-8 bg-customOrange/20" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-customOrange">
                  Verified Arrival
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden leading-none z-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="block h-[40px] w-full fill-white md:h-[80px]"
          >
            <path d="M1200,0H0v60c0,0,131-40,277-38s207,32,319,33s181-25,298-31S1200,60,1200,60V0z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default AboutMyThrift;
