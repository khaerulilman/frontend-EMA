import React from "react";
import { motion } from "framer-motion";
import { Book, Star, Clock, Trophy } from "lucide-react";
import Link from "next/link";

const PriceCourse = () => {
  const courses = [
    {
      title: "Basic English Course",
      description:
        "Improve your basic English skills with our beginner-friendly course.",
      price: "Rp. 80,000",
      features: [
        "24/7 Access",
        "Certificate",
        "Expert Support",
        "Practice Materials",
      ],
      imageUrl: "https://via.placeholder.com/150",
      level: "Beginner",
    },
  ];

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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-1 bg-gradient-to-r from-yellow-400 via-blue-600 to-yellow-400"></div>
        <div className="h-8 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
      </div>

      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-600">Our</span>{" "}
            <span className="text-yellow-400">Courses</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md border-2 border-blue-100 hover:border-blue-300 transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-6">{course.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {course.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-blue-600">
                    {course.price}
                  </span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>

              <Link href="/class/subscription">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Now
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PriceCourse;
