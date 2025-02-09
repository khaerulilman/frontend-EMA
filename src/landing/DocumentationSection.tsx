import React from "react";
import { motion } from "framer-motion";

const documentationData = [
  {
    imgSrc: "https://via.placeholder.com/400",
    altText: "Documentation 1",
    title: "Course Documentation",
    description:
      "Comprehensive materials that guide you through every aspect of the course. Learn at your own pace with detailed explanations and practical examples.",
    tag: "Learning Materials",
  },
  {
    imgSrc: "https://via.placeholder.com/400",
    altText: "Documentation 2",
    title: "Student Progress Tracking",
    description:
      "Monitor your learning journey with our advanced progress tracking system. Set goals, track achievements, and visualize your improvement over time.",
    tag: "Progress Tracking",
  },
];

const DocumentationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="m-2 py-16 bg-gradient-to-b from-yellowCustom via-blue-500 to-blue-700 overflow-hidden border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.6)] rounded-xl">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-sans">
            Course <span className="text-blueCustom">Documentation</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {documentationData.map((doc, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative group">
                  <img
                    src={doc.imgSrc}
                    alt={doc.altText}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </motion.div>

              <div
                className={`w-full lg:w-1/2 ${
                  index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <span className="inline-block px-4 py-2 bg-yellow-300 text-blue-800 rounded-full text-sm font-semibold">
                    {doc.tag}
                  </span>
                  <h3 className="text-3xl font-bold text-white">{doc.title}</h3>
                  <p className="text-gray-100 text-lg leading-relaxed">
                    {doc.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-yellow-300 text-blue-800 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentationSection;
