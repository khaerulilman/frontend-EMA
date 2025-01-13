import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, delay: 0.9 },
};

const Video = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      id: 1,
      url: "https://example.com/video1.mp4",
      title: "Video Testimonial 1",
    },
    {
      id: 2,
      url: "https://example.com/video2.mp4",
      title: "Video Testimonial 2",
    },
    {
      id: 3,
      url: "https://example.com/video3.mp4",
      title: "Video Testimonial 3",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
      className="py-20 bg-yellowCustom relative"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-4xl font-rounded font-bold mb-12 text-blueCustom text-center"
        >
          <span className="text-white font-more-sugar">Our</span>{" "}
          <span className="font-more-sugar">Speaking Practices</span>
        </motion.h2>

        <div className="relative max-w-2xl mx-auto">
          <div className="relative aspect-video bg-black rounded-lg shadow-xl overflow-hidden">
            <video
              key={videos[currentIndex].id}
              className="w-full h-full object-cover"
              controls
              src={videos[currentIndex].url}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
            {currentIndex + 1} / {videos.length}
          </div>
        </div>
      </div>

      {/* Animated Section with Delay */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={sectionAnimation}
        className="mt-20"
      >
        <div className="flex justify-between">
          <div
            className="lg:block hidden"
            style={{
              width: "50%",
              height: "0",
              marginLeft: "100px",
            }}
          >
            <img
              src="assets/images/icon-2.png"
              style={{
                width: "300px",
                position: "relative",
                top: "-50px",
                left: "-50px",
                animation: "float 3s ease-in-out infinite",
              }}
              alt="Floating Icon"
            />
          </div>
          <div></div>
        </div>
      </motion.section>
    </motion.section>
  );
};

export default Video;
