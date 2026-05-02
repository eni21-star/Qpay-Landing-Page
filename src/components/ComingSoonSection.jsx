import React from "react";
import { motion } from "framer-motion";
import appStore from "./images/apple ssooo.png";
import googlePlay from "./images/google s.png";

const ComingSoonSection = () => {
  return (
    <section
      className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 overflow-hidden bg-white"
    >
      {/* Decorative Background Q */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] sm:text-[400px] md:text-[600px] font-black text-gray-100 opacity-50 z-[-1] pointer-events-none select-none tracking-tighter">
        Q
      </div>

      {/* ─── LEFT COLUMN ─── */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-full sm:max-w-[500px] lg:max-w-xl text-center md:text-left"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight"
        >
          Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-customOrange to-red-600">QPay</span> on <br className="hidden md:block" /> Your Phone
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium"
        >
          Download free and start paying offline instantly. No internet needed, no bank account required. Available now on iOS and Android.
        </motion.p>

        {/* App Store Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-row justify-center md:justify-start gap-4 mb-4"
        >
          <a
            href="#"
            className="block rounded-2xl overflow-hidden transition-transform hover:scale-105 active:scale-95 duration-200"
          >
            <img
              src={googlePlay}
              alt="Get it on Google Play"
              className="h-12 md:h-14 w-auto"
            />
          </a>

          <a
            href="#"
            className="block rounded-2xl overflow-hidden transition-transform hover:scale-105 active:scale-95 duration-200"
          >
            <img
              src={appStore}
              alt="Download on the App Store"
              className="h-12 md:h-14 w-auto"
            />
          </a>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-sm mt-4 text-center md:text-left"
        >
          Free to download · No subscription · Works offline from day one
        </motion.p>
      </motion.div>

      {/* ─── RIGHT COLUMN — Floating UI Cards Composition ─── */}

      {/* Desktop: 3-card fanned layout */}
      <div className="hidden md:block relative flex-shrink-0" style={{ width: '100%', maxWidth: '520px', height: '580px' }}>
        {/* Subtle background circle */}
        <div
          className="absolute rounded-full border border-gray-100 pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '420px',
            height: '420px',
            zIndex: 0,
          }}
        />

        {/* Card A — Merchant Terminal (back left) */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -10 }}
          whileInView={{ opacity: 0.85, x: 0, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute"
          style={{
            left: 0,
            top: '40px',
            zIndex: 1,
            width: '220px',
            borderRadius: '28px',
            overflow: 'hidden',
            opacity: 0.85,
            boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <img
            src="/lean/Hidden balance.png"
            alt="Dashboard"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
        </motion.div>

        {/* Card B — Payment Success (middle, hero) */}
        {/* Wrapper handles CSS centering since Framer Motion takes over transform */}
        <div
          className="absolute"
          style={{
            left: '50%',
            top: 0,
            zIndex: 3,
            transform: 'translateX(-50%)',
            width: '250px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            whileHover={{ scale: 1.03, boxShadow: '0 40px 100px rgba(249,84,29,0.2)' }}
            className="relative"
            style={{
              width: '250px',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(249,84,29,0.15), 0 8px 24px rgba(0,0,0,0.08)',
              border: '1px solid rgba(249,84,29,0.12)',
              cursor: 'pointer',
            }}
          >
            {/* Continuous breathing float */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/lean/photo_2026-05-02_02-06-16.jpg"
                alt="QR Screen"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
            </motion.div>
          </motion.div>

          {/* Floating badge — Payment Confirmed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="absolute flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-100"
            style={{
              top: '-16px',
              right: '-16px',
              zIndex: 10,
              boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-800 text-xs font-bold whitespace-nowrap">Payment Confirmed</span>
          </motion.div>
        </div>

        {/* Card C — Dashboard (front right) */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 10 }}
          whileInView={{ opacity: 0.85, x: 0, rotate: 5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute"
          style={{
            right: 0,
            top: '60px',
            zIndex: 2,
            width: '220px',
            borderRadius: '28px',
            overflow: 'hidden',
            opacity: 0.85,
            boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <img
            src="/lean/Default1.png"
            alt="Merchant Dashboard"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />

          {/* Floating badge — Balance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="absolute flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-100"
            style={{
              bottom: '24px',
              left: '-20px',
              zIndex: 10,
              boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-customOrange" />
            <span className="text-gray-800 text-xs font-bold whitespace-nowrap">₦1,250.00 Balance</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile: Single centered Card B (Payment Success) only */}
      <div className="hidden relative mx-auto" style={{ width: '240px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
          style={{
            width: '240px',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(249,84,29,0.15), 0 8px 24px rgba(0,0,0,0.08)',
            border: '1px solid rgba(249,84,29,0.12)',
          }}
        >
          <img
            src="/lean/photo_2026-05-02_02-06-16.jpg"
            alt="QR Screen"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />

          {/* Floating badge — Payment Confirmed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="absolute flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-100"
            style={{
              top: '-16px',
              right: '-16px',
              zIndex: 10,
              boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-800 text-xs font-bold whitespace-nowrap">Payment Confirmed</span>
          </motion.div>

          {/* Floating badge — Balance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="absolute flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-100"
            style={{
              bottom: '24px',
              left: '-20px',
              zIndex: 10,
              boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-customOrange" />
            <span className="text-gray-800 text-xs font-bold whitespace-nowrap">₦1,250.00 Balance</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
