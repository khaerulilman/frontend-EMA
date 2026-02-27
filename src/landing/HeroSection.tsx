import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-blueCustom overflow-hidden">
      {/* Subtle background shapes — no rotating/pulsating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-yellowCustom/8 rounded-full" />
        {/* Dotted decorative line like in the reference */}
        <svg
          className="absolute top-12 right-0 w-full h-full opacity-10"
          viewBox="0 0 800 600"
          fill="none"
        >
          <path
            d="M500 50 C 600 100, 750 80, 780 180 C 810 280, 700 350, 600 300 C 500 250, 450 400, 550 500"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="8 6"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Explore Learn and Speak
              <span className="text-yellowCustom"> Confidence</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-lg leading-relaxed">
              English is my Adventure : Join Our Course Learning Program,
              Discover the Joy of Learning New language and Open the Door to a
              World of Endless Opportunities
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/6285353890080"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 bg-yellowCustom text-blueCustom font-semibold text-sm tracking-wide transition-colors duration-200 hover:bg-yellow-400 rounded-md">
                  Join Now
                </button>
              </a>

              <Link href="/quiz">
                <button className="px-8 py-3 border-2 border-white/80 text-white font-semibold text-sm tracking-wide transition-colors duration-200 hover:bg-white/10 rounded-md">
                  Trial Quiz
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content — Clean layout like the reference */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden md:flex items-center justify-center"
          >
            {/* Photo collage area */}
            <div className="relative w-full max-w-md">
              {/* Top images row */}
              <div className="flex gap-3 mb-3">
                <div className="flex-1 h-40 overflow-hidden rounded-md shadow-lg">
                  <img
                    src="assets/images/image-1.jpg"
                    alt="Learning session 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 h-40 overflow-hidden rounded-md shadow-lg">
                  <img
                    src="assets/images/image-2.jpg"
                    alt="Learning session 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom image — wider */}
              <div className="h-40 overflow-hidden rounded-md shadow-lg">
                <img
                  src="assets/images/image-3.jpg"
                  alt="Learning session 3"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* EMA Logo badge — overlapping the images like in the reference */}
              <div className="absolute -bottom-8 -right-8 z-20">
                <div className="w-44 h-44 rounded-full bg-white p-1 shadow-xl">
                  <img
                    src="assets/images/ema-image.png"
                    alt="EMA Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
