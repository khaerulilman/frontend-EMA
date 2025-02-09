import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HowToStart: React.FC = () => {
  const steps = [
    { id: 1, title: "Step 1", description: "Set Your Goals", icon: "📘" },
    { id: 2, title: "Step 2", description: "Practice Listening", icon: "🖊️" },
    { id: 3, title: "Step 3", description: "Start Speaking", icon: "👥" },
    {
      id: 4,
      title: "Step 4",
      description: "Expand Your Vocabulary",
      icon: "💻",
    },
    {
      id: 5,
      title: "Step 5",
      description: "Take a Class or Hire a Tutor",
      icon: "🔍",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("howToStartSection");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="howToStartSection">
      {/* Section dengan efek drop-down */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-12 md:py-16 bg-blueCustom relative overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 border-t-4 border-yellowCustom inline-block pt-2">
            How to Start <span className="text-yellowCustom">Learning</span>
          </h2>
          {/* Grid animasi drop */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: -20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.2 + index * 0.1,
                }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white/10 p-4 rounded-lg shadow-lg border-t-4 border-yellowCustom hover:bg-yellow-300 hover:text-blue-600 transition-all duration-300"
              >
                <div className="bg-white text-blue-600 w-14 h-14 flex items-center justify-center rounded-full text-2xl shadow-md mb-3">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-white transition-all duration-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Floating icon dengan animasi */}
      <div className="absolute right-0 top-0 hidden lg:block">
        <motion.img
          src="assets/images/icon-1.png"
          className="w-[300px] relative -top-[100px] left-[350px]"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          alt="Floating Icon"
        />
      </div>
    </div>
  );
};

export default HowToStart;
