import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Book, GraduationCap, Heart } from "lucide-react";

const TutorProfile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-1 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600"></div>
        <svg
          className="text-blue-600 w-full h-8"
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q300,30 600,0 T1200,0 V30 H0 Z"
            fill="currentColor"
            opacity="0.1"
          />
        </svg>
      </div>

      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
            <h3 className="text-4xl font-bold">
              <span className="text-blue-600">Professional</span>{" "}
              <span className="text-yellow-400">Guide</span>
            </h3>
            <Sparkles className="w-6 h-6 text-yellow-400 ml-2" />
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full animate-spin-slow"></div>
            <img
              src="/assets/images/tutor-syifa.jpeg"
              alt="Tutor"
              className="absolute inset-0 w-full h-full object-cover border-4 border-white rounded-full"
            />
          </motion.div>

          <motion.h2
            className="text-4xl font-bold text-center mb-6 text-blue-800"
            variants={itemVariants}
          >
            Syifa Nur Husna S.Hum
          </motion.h2>

          <motion.div
            className="grid grid-cols-3 gap-6 mb-8"
            variants={itemVariants}
          >
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <Book className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-blue-600 font-semibold">
                English Literature Graduate
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <GraduationCap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-blue-600 font-semibold">3 Years Experience</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <Heart className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-blue-600 font-semibold">Passionate Educator</p>
            </div>
          </motion.div>

          <motion.p
            className="text-center text-gray-600 text-lg leading-relaxed"
            variants={itemVariants}
          >
            I am an English teacher with a bachelor's degree in English
            literature, three years of experience teaching junior high school
            students, course tutor expertise in English and Indonesian language
            instruction, strong communication skills, a passion for education,
            and a commitment to inspiring students while contributing to my
            community's educational growth.
          </motion.p>
        </motion.div>
        <motion.div
          className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-4 m-10"
          variants={itemVariants}
        >
          <h3 className="text-center text-xl font-semibold text-blue-600 mb-4">
            Our Tutor Testimony
          </h3>
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://ik.imagekit.io/9wqihtp5m/allie%20say.mp4?updatedAt=1739110578906"
              title="Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TutorProfile;
