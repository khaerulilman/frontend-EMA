import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Shared animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const CertificateSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Certificate of Excellence",
      description:
        "Awarded for outstanding performance in English proficiency.",
      imageUrl:
        "https://ik.imagekit.io/9wqihtp5m/WhatsApp%20Image%202025-01-10%20at%2002.52.26.jpeg?updatedAt=1736520820939",
    },
  ];

  return (
    <>
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        variants={staggerChildren}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-rounded font-bold mb-12 text-blueCustom text-center font-more-sugar"
          >
            <span className="font-more-sugar">Get</span>
            <span className="text-yellowCustom font-more-sugar">
              {" "}
              Certified
            </span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow max-w-xs sm:max-w-sm cursor-pointer"
                onClick={() => setSelectedImage(cert.imageUrl)}
              >
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-auto object-cover rounded-lg max-h-48"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blueCustom font-more-sugar">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mt-2 font-more-sugar">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full"
            >
              <img
                src={selectedImage}
                alt="Full size certificate"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificateSection;
