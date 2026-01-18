import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RoomPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rooms = [
    {
      id: 1,
      title: "Main Classroom",
      description:
        "Spacious and comfortable learning environment with modern facilities",
      imageUrl:
        "https://res.cloudinary.com/dsv5gqxsv/image/upload/v1768733175/WhatsApp_Image_2026-01-18_at_17.35.13_eqwblb.jpg",
    },
    {
      id: 2,
      title: "Interactive Learning Space",
      description:
        "Designed for engaging group activities and collaborative learning",
      imageUrl:
        "https://res.cloudinary.com/dsv5gqxsv/image/upload/v1768733175/WhatsApp_Image_2026-01-18_at_17.35.12_1_i2mtaj.jpg",
    },
    {
      id: 3,
      title: "Private Study Room",
      description: "Quiet space for focused one-on-one tutoring sessions",
      imageUrl:
        "https://res.cloudinary.com/dsv5gqxsv/image/upload/v1768733174/WhatsApp_Image_2026-01-18_at_17.35.11_1_ysmdc6.jpg",
    },
    {
      id: 4,
      title: "Technology Lab",
      description:
        "Equipped with latest technology for digital learning experiences",
      imageUrl:
        "https://res.cloudinary.com/dsv5gqxsv/image/upload/v1768733174/WhatsApp_Image_2026-01-18_at_17.35.11_l7sim1.jpg",
    },
    {
      id: 5,
      title: "Recreation Area",
      description:
        "Comfortable space for breaks and informal conversation practice",
      imageUrl:
        "https://res.cloudinary.com/dsv5gqxsv/image/upload/v1768733174/WhatsApp_Image_2026-01-18_at_17.35.12_l8sdpo.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-white">Our Learning</span>{" "}
            <span className="text-yellow-300">Spaces</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto rounded-full mt-4"></div>
          <p className="text-blue-100 mt-6 max-w-2xl mx-auto text-lg">
            Take a virtual tour of our modern and comfortable learning
            facilities
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative ">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-300 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[500px] lg:h-[600px] ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={rooms[currentIndex].imageUrl}
                    alt={rooms[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {rooms[currentIndex].title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-blue-100 text-lg"
                    >
                      {rooms[currentIndex].description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 py-6 bg-blue-50 ">
              {rooms.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-blue-300 hover:bg-blue-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Thumbnail Preview - Hidden on Mobile */}
          <div className="mt-8 hidden lg:grid grid-cols-5 gap-4">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer rounded-lg overflow-hidden border-4 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-yellow-300 shadow-lg"
                    : "border-white/50 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={room.imageUrl}
                  alt={room.title}
                  className="w-full h-20 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomPreview;
