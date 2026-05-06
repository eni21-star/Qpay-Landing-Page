import { motion } from "framer-motion";
import appStore from "./images/apple ssooo.png";
import googlePlay from "./images/google s.png";
import OptimizedPicture from "./OptimizedPicture";

const cardFrame =
  "absolute overflow-hidden border border-black/5 bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.10)]";

const ComingSoonSection = () => {
  return (
    <section
      id="coming-soon"
      className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-8 overflow-hidden bg-white px-4 py-12 sm:px-6 md:flex-row md:gap-12 md:py-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[-1] -translate-x-1/2 -translate-y-1/2 select-none text-[200px] font-black tracking-tighter text-gray-100 opacity-50 sm:text-[400px] md:text-[600px]">
        Q
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-full text-center md:text-left lg:max-w-xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-heading mb-4 text-3xl leading-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl"
        >
          Get{" "}
          <span className="bg-gradient-to-r from-customOrange to-red-600 bg-clip-text text-transparent">
            QPay
          </span>{" "}
          on <br className="hidden md:block" /> Your Phone
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-body mx-auto mb-6 max-w-lg text-sm font-medium leading-relaxed text-gray-600 sm:text-base md:mx-0 md:mb-8 md:text-lg lg:text-xl"
        >
          Download free and start paying offline instantly. No internet needed,
          no bank account required. Available now on iOS and Android.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-4 flex flex-row justify-center gap-4 md:justify-start"
        >
          <button
            type="button"
            className="block overflow-hidden rounded-2xl transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <img
              src={googlePlay}
              alt="Get it on Google Play"
              loading="lazy"
              decoding="async"
              className="h-12 w-auto md:h-14"
            />
          </button>

          <button
            type="button"
            className="block overflow-hidden rounded-2xl transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <img
              src={appStore}
              alt="Download on the App Store"
              loading="lazy"
              decoding="async"
              className="h-12 w-auto md:h-14"
            />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center text-sm text-gray-400 md:text-left"
        >
          Free to download · No subscription · Works offline from day one
        </motion.p>
      </motion.div>

      <div className="relative h-[360px] w-full max-w-[340px] flex-shrink-0 sm:h-[430px] sm:max-w-[390px] md:h-[470px] md:max-w-[410px] lg:h-[580px] lg:max-w-[520px]">
        <div
          className="pointer-events-none absolute rounded-full border border-gray-100"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "82%",
            height: "72%",
            zIndex: 0,
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -10 }}
          whileInView={{ opacity: 0.85, x: 0, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`${cardFrame} left-0 top-[48px] z-[1] w-[38%] rounded-[22px] sm:top-[52px] sm:rounded-[24px] md:top-[58px] md:rounded-[26px] lg:top-[40px] lg:rounded-[28px]`}
        >
          <OptimizedPicture
            avif="/optimized/screen-hidden-balance.avif"
            webp="/optimized/screen-hidden-balance.webp"
            src="/lean/Hidden balance.png"
            alt="Dashboard"
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
            }}
          />
        </motion.div>

        <div
          className="absolute left-1/2 top-0 z-[3] w-[43%] -translate-x-1/2"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 40px 100px rgba(249,84,29,0.2)",
            }}
            className="relative overflow-hidden rounded-[26px] border border-[rgba(249,84,29,0.12)] shadow-[0_32px_80px_rgba(249,84,29,0.15),0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[28px] md:rounded-[30px] lg:rounded-[32px]"
            style={{ cursor: "pointer" }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <OptimizedPicture
                avif="/optimized/screen-qr.avif"
                webp="/optimized/screen-qr.webp"
                src="/lean/photo_2026-05-02_02-06-16.jpg"
                alt="QR Screen"
                width="393"
                height="852"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="absolute flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2"
            style={{
              top: "-12px",
              right: "-8px",
              zIndex: 10,
              boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="whitespace-nowrap text-xs font-bold text-gray-800">
              Payment Confirmed
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 10 }}
          whileInView={{ opacity: 0.85, x: 0, rotate: 5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`${cardFrame} right-0 top-[64px] z-[2] w-[38%] rounded-[22px] sm:top-[70px] sm:rounded-[24px] md:top-[76px] md:rounded-[26px] lg:top-[60px] lg:rounded-[28px]`}
        >
          <OptimizedPicture
            avif="/optimized/screen-merchant-dashboard.avif"
            webp="/optimized/screen-merchant-dashboard.webp"
            src="/lean/Default1.png"
            alt="Merchant Dashboard"
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="absolute flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2"
            style={{
              bottom: "18px",
              left: "-8px",
              zIndex: 10,
              boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-customOrange" />
            <span className="whitespace-nowrap text-xs font-bold text-gray-800">
              N1,250.00 Balance
            </span>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default ComingSoonSection;
