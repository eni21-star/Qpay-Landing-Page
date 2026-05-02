import React, { useEffect, useRef, useState } from "react"; //thi is one
import { gsap } from "gsap";
import { FiX } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";



const QLogo = ({ className = "" }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src="/ChatGPT_Image_May_1__2026__10_18_15_AM-removebg-preview.png"
      alt="QPay Logo"
      className="h-10 md:h-12 w-auto object-contain"
    />
  </div>
);
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isToastShown, setIsToastShown] = useState(false);

  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  const sideMenuRef = useRef(null);
  const animationPlayed = useRef(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleFirstScroll = () => {
      setHasScrolled(true);
    };
    window.addEventListener("scroll", handleFirstScroll, { once: true });
    return () => window.removeEventListener("scroll", handleFirstScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationPlayed.current) {
        const scrollPosition = window.scrollY;
        const elementPosition =
          textRef.current.offsetTop - window.innerHeight * 0.75;

        if (scrollPosition > elementPosition) {
          gsap.to(textRef.current, { opacity: 1, y: 0, duration: 1 });
          gsap.to(imageRef.current, { opacity: 1, y: 0, duration: 1 });
          gsap.to(buttonRef.current, { opacity: 1, y: 0, duration: 1 });

          animationPlayed.current = true;
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      gsap.fromTo(
        modalRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }, 0);
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.in(1.7)",
      onComplete: () => setIsModalOpen(false),
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      gsap.to(sideMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(sideMenuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  };

  const handleSendMessage = async () => {
    if (!isAnonymous && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (!isToastShown) {
        toast.error("Please enter a valid email address.");
        setIsToastShown(true);
      }
      return;
    }

    if (!message.trim()) {
      if (!isToastShown) {
        toast.error("Please enter a message.");
        setIsToastShown(true);
      }
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://mythriftwaitlist.fly.dev/api/v1/contactus",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: isAnonymous
              ? "Anonymous"
              : `From: ${email}\nMessage: ${message}`,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        closeModal();
        setEmail("");
        setMessage("");
        setIsAnonymous(false);
        setIsToastShown(false); // Reset toast shown state after successful message
      } else {
        if (!isToastShown) {
          toast.error(
            `Failed to send message: ${data.message || "Unknown error"}`
          );
          setIsToastShown(true);
        }
      }
    } catch (error) {
      if (!isToastShown) {
        toast.error(`An error occurred: ${error.message}`);
        setIsToastShown(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleScrollToWaitlist = () => {
    const waitlistSection = document.getElementById("coming-soon");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.5
      },
    },
  };

  return (
    <div
      className="bg-customOrange relative overflow-hidden border-none outline-none -mb-[1px] min-h-[100svh] md:min-h-screen flex flex-col md:block"
    >
      <div
        className="absolute inset-0 z-0 opacity-40 md:opacity-60 pointer-events-none"
        style={{
          backgroundImage: `url("/lean/ChatGPT Image Apr 24, 2026, 07_38_50 PM.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {!hasScrolled && (
        <div className="absolute bottom-[12px] left-1/2 transform -translate-x-1/2 z-20 md:hidden opacity-60 animate-bounce transition-opacity duration-300">
          <FontAwesomeIcon icon={faChevronDown} className="text-white text-xl" />
        </div>
      )}
      <nav className="sticky top-0 z-50 md:absolute md:top-0 md:left-0 md:right-0 md:z-20 md:bg-transparent">
        <div className="container mt-4 sm:mt-6 mx-auto justify-between px-4 sm:px-6 md:px-[12vw] flex items-center max-w-none">
          <div>
            <QLogo className="ml-4" />
          </div>
          <div className="flex items-center sm:hidden">
            <button
              aria-expanded={isMenuOpen}
              aria-controls="side-menu"
              onClick={toggleMenu}
              className="text-white text-2xl mr-4"
            >
              <RiMenu3Line />
            </button>
          </div>
          <div className="hidden sm:flex items-center sm:space-x-6">
            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className="bg-white text-xs px-3 py-2 mr-4 text-customOrange font-semibold sm:py-2 sm:px-4 rounded-full hover:bg-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Magnetic>
          </div>
        </div>
      </nav>

      {/* Side Menu */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 left-0 h-full w-full text-white z-50 transform -translate-x-full bg-customOrange"
      >
        <div className="flex flex-col justify-between h-full">
          {/* Top Section: Branding and Close Button */}
          <div className="flex justify-end  px-6 mt-6">
            <QLogo className="mb-4" />
            <button onClick={toggleMenu} className="text-white">
              <FiX size={24} />
            </button>
          </div>

          {/* Middle Section: Navigation Links */}
          <ul className="flex flex-col items-center justify-center text-lg w-full px-8 mt-10">
            <li className="w-full">
              <button
                onClick={() => handleScrollToSection("home")}
                className="text-white block w-full text-left py-4 border-b border-white/10 font-medium hover:text-customOrange transition-all duration-100"
              >
                Home
              </button>
            </li>
            <li className="w-full">
              <button
                onClick={() => handleScrollToSection("how-it-works")}
                className="text-white block w-full text-left py-4 border-b border-white/10 font-medium hover:text-customOrange transition-all duration-100"
              >
                How It Works
              </button>
            </li>
            <li className="w-full">
              <button
                onClick={() => handleScrollToSection("why-qpay")}
                className="text-white block w-full text-left py-4 border-b border-white/10 font-medium hover:text-customOrange transition-all duration-100"
              >
                Why QPay
              </button>
            </li>
            <li className="w-full">
              <button
                onClick={() => handleScrollToSection("coming-soon")}
                className="text-white block w-full text-left py-4 border-b border-white/10 font-medium hover:text-customOrange transition-all duration-100"
              >
                Download
              </button>
            </li>
          </ul>

          {/* Bottom Section: Social Media Icons */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-8">
              <a
                href="https://www.instagram.com/mythriftng?igsh=MTFzM2tkMXp2Z2RpYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customOrange hover:transform hover:scale-105 transition-all duration-100"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://x.com/mythriftng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customOrange hover:transform hover:scale-105 transition-all duration-200"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customOrange hover:transform hover:scale-105 transition-all duration-200"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col md:grid md:grid-cols-[48%_52%] md:items-stretch md:min-h-screen relative z-10 w-full">
        {/* Top Content Block */}
        <div className="relative z-10 px-5 pt-12 pb-6 flex flex-col gap-3 md:flex md:flex-col md:justify-center md:z-10 md:relative md:pl-[12vw] md:pr-10 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-heading text-white text-[2.75rem] max-md:leading-[1.05] w-full max-md:text-left md:text-left md:text-[5.5rem] md:font-extrabold md:leading-[1.0] md:text-white"
            style={{ textShadow: "0 2px 20px rgba(249,84,29,0.5)" }}
          >
            <motion.span variants={textVariants} className="md:hidden">Pay Anywhere </motion.span>
            <motion.span variants={textVariants} className="hidden md:inline-block">Pay</motion.span>
            <br className="hidden md:block" />
            <motion.span variants={textVariants} className="hidden md:inline-block">Anywhere</motion.span>
            <br className="max-md:hidden" />
            <motion.span variants={textVariants} className="inline-block whitespace-nowrap">
              <span className="bg-[url('/src/assets/line.png')] bg-no-repeat bg-bottom md:pb-[0.1em]">
                Even Offline.
              </span>
            </motion.span>
          </motion.div>

          <p
            ref={textRef}
            className="font-body font-light max-md:text-[0.95rem] max-md:text-white/75 max-md:leading-relaxed max-md:text-left opacity-0 transform translate-y-12 leading-relaxed md:text-left md:text-white/80 md:text-lg md:mt-6 md:mb-6 md:max-w-md"
          >
            <span className="md:hidden block">
              Zero internet. Secure QR. Instant confirm.
            </span>
            <span className="hidden md:block">
              Generate secure QR codes on your phone with zero internet. Merchants scan, backend verifies instantly. Simple, safe payments built for markets, transport, and real-world low-connectivity areas.
            </span>
          </p>

          <div
            className="flex flex-col opacity-0 transform translate-y-12 w-full text-left"
            ref={buttonRef}
          >
            <div className="flex items-center gap-3 max-md:mb-4 md:flex md:items-center md:gap-3 md:mb-6">
              <img
                src="https://res.cloudinary.com/dtaqusjav/image/upload/v1724414014/people_aenuc1.svg"
                alt="People icons"
                className="w-9 h-9 md:w-auto md:h-9"
              />
              <span className="text-white text-sm md:text-base font-medium">4,200+ users</span>
            </div>
            <div className="w-full max-md:[&>div]:!block max-md:[&>div]:!w-full md:w-auto">
              <Magnetic>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleScrollToWaitlist}
                  className="w-full bg-white text-customOrange max-md:py-4 font-bold rounded-full hover:bg-gray-100 text-base shadow-lg hover:shadow-xl transition-all duration-300 md:w-auto md:px-10 md:py-4"
                >
                  Start Paying Offline Today
                </motion.button>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Models Block */}
        <div
          className="relative z-[5] flex-1 w-full opacity-0 transform max-md:flex max-md:justify-end max-md:items-end md:relative md:h-full md:overflow-visible md:z-10"
          ref={imageRef}
          style={{ minHeight: '100vh' }}
        >
          {/* Gradient seam — mobile only */}
          <div className="md:hidden absolute inset-x-0 top-0 h-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to bottom, #F9541D, transparent)" }}></div>
          <img
            src="/ChatGPT_Image_Apr_28__2026_at_06_21_14_PM-removebg-preview.png"
            alt="QPay Offline Payment UI"
            className="w-full h-full max-md:object-cover max-md:object-[top_center] max-md:opacity-80 mx-auto block md:absolute md:bottom-0 md:left-[4%] md:h-[95vh] md:w-auto md:object-contain md:object-bottom md:opacity-100 md:max-w-none"
            style={{ maxWidth: 'none' }}
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-60"
            onClick={closeModal}
          ></div>
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg shadow-lg z-10 w-11/12 md:w-1/3"
          >
            <div className="relative bg-customOrange py-2 text-white rounded-t-lg">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white hover:text-gray-200"
              >
                <FiX size={24} />
              </button>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl text-center mb-8 md:mb-16 px-4">
                Have a Question or Suggestion?
              </h2>
            </div>

            <div className="p-6">
              <p className="text-center text-gray-500 md:px-14 -translate-y-3 text-xs mb-4">
                Leave us a message and we'll get back to you as soon as
                possible!
              </p>

              {!isAnonymous && (
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 p-3 border border-gray-300 rounded-full h-10 focus:outline-none focus:border-customOrange"
                />
              )}

              <textarea
                placeholder="Write a message.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mb-4 p-3 border border-gray-300 resize-none rounded-md focus:outline-none bg-gray-100 h-44 focus:border-customOrange placeholder:text-top placeholder:pl-1 placeholder:pt-2"
              />

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                  className="mr-2"
                />
                <label htmlFor="anonymous" className="text-gray-500 text-sm">
                  Submit Anonymously
                </label>
              </div>

              <button
                onClick={handleSendMessage}
                className="w-full bg-customOrange text-white p-3 rounded-full hover:bg-orange-600 flex justify-center items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  />
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <Toaster position="top-center" />


    </div>
  );
};

export default Hero;
