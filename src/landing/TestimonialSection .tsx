import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  imageSrc: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "English Student",
      rating: 5,
      comment:
        "The learning experience has been incredible. The personalized attention and structured curriculum helped me improve my English skills significantly.",
      imageSrc: "/api/placeholder/100/100",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Professional",
      rating: 5,
      comment:
        "Outstanding teaching methods! I've seen remarkable progress in my language abilities.",
      imageSrc: "/api/placeholder/100/100",
    },
    {
      id: 3,
      name: "Emma Garcia",
      role: "University Student",
      rating: 5,
      comment:
        "The interactive sessions made it easy to grasp complex language concepts!",
      imageSrc: "/api/placeholder/100/100",
    },
    {
      id: 4,
      name: "John Doe",
      role: "Travel Enthusiast",
      rating: 4,
      comment:
        "The lessons are very interactive and practical. They have helped me communicate better during my travels.",
      imageSrc: "/api/placeholder/100/100",
    },
    {
      id: 5,
      name: "Alice Smith",
      role: "Software Developer",
      rating: 5,
      comment:
        "Great course! The instructors are very knowledgeable and supportive.",
      imageSrc: "/api/placeholder/100/100",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg p-6 relative hover:shadow-2xl transition-all duration-300 transform border-2 border-blue-500"
    >
      <div className="flex items-center mb-4">
        <div className="relative">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={testimonial.imageSrc}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-blueCustom transition-transform duration-300"
          />
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-lg text-gray-800">
            {testimonial.name}
          </h3>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 leading-relaxed"
      >
        "{testimonial.comment}"
      </motion.p>

      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.2, rotate: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-4 right-4 text-6xl text-gray-200 font-serif"
      >
        "
      </motion.div>
    </motion.div>
  );

  const desktopTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-20 bg-gray-50 "
    >
      <div className="container mx-auto px-4 ">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-rounded font-bold mb-12 text-blueCustom text-center "
        >
          <span>What Our</span>{" "}
          <span className="text-yellowCustom font-more-sugar">
            Students Say
          </span>
        </motion.h2>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {desktopTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="hidden md:flex justify-between mt-8 ">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors transform -translate-x-1/2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors transform translate-x-1/2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Carousel */}
        <div className="relative md:hidden  ">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
            />
          </AnimatePresence>

          <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center pointer-events-none ">
            <button
              onClick={prevSlide}
              className="pointer-events-auto p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors transform -translate-x-1/2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors transform translate-x-1/2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blueCustom" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
