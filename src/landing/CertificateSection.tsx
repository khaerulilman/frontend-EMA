import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

const CertificateSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      title: "Certificate of Excellence",
      description:
        "Awarded for outstanding performance in English proficiency.",
      imageUrl:
        "https://ik.imagekit.io/9wqihtp5m/WhatsApp%20Image%202025-01-10%20at%2002.52.26.jpeg?updatedAt=1736520820939",
      features: [
        "International Recognition",
        "Digital Badge",
        "Lifetime Validity",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative Border */}

      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-blue-600">Get</span>{" "}
            <span className="text-yellow-400">Certified</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mt-4"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Earn a prestigious certificate that validates your English language
            proficiency and opens doors to global opportunities.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-8 max-w-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-yellow-400" />
                <h3 className="text-2xl font-bold text-blue-600 ml-4">
                  {cert.title}
                </h3>
              </div>

              <motion.div
                className="cursor-pointer mb-6 overflow-hidden rounded-xl"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(cert.imageUrl)}
              >
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full size certificate"
                className="w-full h-auto rounded-xl"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 hover:bg-gray-100 shadow-lg border-2 border-gray-200"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
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
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default CertificateSection;
