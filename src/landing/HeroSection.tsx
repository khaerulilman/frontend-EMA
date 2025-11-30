import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-blueCustom relative overflow-hidden pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Explore Learn and Speak
                <span className="text-yellowCustom"> Confidence</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-lg">
                English is my Adventure : Join Our Course Learning Program,
                Discover the Joy of Learning New language and Open the Door to a
                World of Endless Opportunities
              </p>
              <div className="flex flex-wrap gap-4">
               <a
                  href="https://wa.me/6285353890080"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-yellowCustom text-blackCustom rounded-full font-semibold transition-colors hover:bg-opacity-90"
                  >
                    <span className="text-blueCustom">Join Now</span>
                  </motion.button>
                </a>

                <a
                  href="https://quiz.zep.us/en/play/Ov5lLm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold transition-colors hover:bg-white hover:text-blueCustom"
                  >
                    Trial Quiz
                  </motion.button>
                </a>

              </div>
            </motion.div>

            {/* Right Content - Image Grid with Central Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:block"
            >
              {/* Central Logo Circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3,
                }}
                className="absolute left-1/3 top-1/4 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <motion.img
                  src="assets/images/ema-image.png"
                  alt="EMA Logo"
                  className="object-contain h-auto"
                  style={{
                    width: "350px",
                    position: "relative",
                    top: "-20px",
                    left: "-30px",
                  }}
                  whileHover={{ scale: 1.1 }} // Hover effect on the logo
                />
              </motion.div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* Top Left Image */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }} // Reduced delay
                  className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
                  whileHover={{ scale: 1.05 }} // Hover effect on image
                >
                  <motion.img
                    src="assets/images/image-1.jpg"
                    alt="Learning session 1"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }} // Hover effect for zoom-in
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>

                {/* Top Right Image */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: 0.1 }} // Reduced delay
                  className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
                  whileHover={{ scale: 1.05 }} // Hover effect on image
                >
                  <motion.img
                    src="assets/images/image-2.jpg"
                    alt="Learning session 2"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }} // Hover effect for zoom-in
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>

                {/* Bottom Left Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: 0.2 }} // Reduced delay
                  className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 mt-4"
                  whileHover={{ scale: 1.05 }} // Hover effect on image
                >
                  <motion.img
                    src="assets/images/image-3.jpg"
                    alt="Learning session 3"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }} // Hover effect for zoom-in
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>

                {/* Bottom Right Image */}
              </div>

              {/* Decorative Circle */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -z-10 w-full h-full rounded-full border-4 border-dashed border-white/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellowCustom opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellowCustom opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />

        {/* Wave SVG */}
      </div>
    </div>
  );
};

export default HeroSection;
