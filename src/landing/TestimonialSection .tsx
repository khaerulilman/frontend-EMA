import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  imageSrc: string;
}

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Lutfia",
      role: "English Student",
      rating: 5,
      comment:
        "The learning experience has been incredible. The personalized attention and structured curriculum helped me improve my English skills significantly.",
      imageSrc:
        "https://ik.imagekit.io/9wqihtp5m/WhatsApp%20Image%202025-01-08%20at%2001.04.13.jpeg?updatedAt=1737557968253",
    },
    {
      id: 2,
      name: "Aura",
      role: "English Student",
      rating: 5,
      comment:
        "i think study in this course is fun, bcs miss is fun so its more relaxed to do the tests given by the students. miss also doesn't tell us to rush to understand, is really guided.",
      imageSrc: "https://ik.imagekit.io/9wqihtp5m/AURA?updatedAt=1737671927961",
    },
    {
      id: 3,
      name: "Virgan",
      role: "English Student",
      rating: 5,
      comment:
        "I am genuinely satisfied with taking English lessons at the English My Adventure Course. The teaching method is very interactive and easy to understand. Miss Syifa is very professional and patient in explaining the material.",
      imageSrc:
        "https://ik.imagekit.io/9wqihtp5m/virgan?updatedAt=1737672056369",
    },
    {
      id: 4,
      name: "Haikal",
      role: "English Student",
      rating: 4,
      comment:
        "my experience during the english course at miss syifa was very enjoyable, fun and exciting. miss also teaches her students in a fun way so her students never get bored.",
      imageSrc:
        "https://ik.imagekit.io/9wqihtp5m/WhatsApp%20Image%202025-02-09%20at%2002.44.18.jpeg?updatedAt=1739112275573",
    },
    {
      id: 5,
      name: "Reynaldi",
      role: "English Student",
      rating: 5,
      comment:
        "I am genuinely satisfied with taking English lessons at the English My Adventure Course. The teaching method is very interactive and easy to understand. Miss Syifa is very professional and patient in explaining the material. In a short time, my speaking and writing skills improved greatly. Apart from that, the class atmosphere is comfortable, so I am more motivated to study. Thank you, English My Adventure Course, for helping me achieve high grades at school and be more confident in speaking English",
      imageSrc: "/api/placeholder/100/100",
    },
    {
      id: 6,
      name: "Hasna",
      role: "English Student",
      rating: 5,
      comment:
      "Selama ini hanya mengerti kata dan kalimat sederhana, setelah les menjadi lebih banyak kosa kata dan kalimat yg dimengerti dan lebih baik dalam pronunciationnya. Di rumah juga mulai berani speak english.",
      imageSrc: "https://ik.imagekit.io/fs0yie8l6/Ema-course/gambar-1-testimoni.jpg",
      },
      {
      id: 7,
      name: "Qianzi",
      role: "English Student",
      rating: 5,
      comment:
      "Alhamdulillah udh bisa menyebutkan angka2, buah2an dan warna dlam bhs inggris",
      imageSrc: "https://ik.imagekit.io/fs0yie8l6/Ema-course/gambar-2-testimoni.jpg",
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

  const TestimonialCard = ({
    testimonial,
    index,
  }: {
    testimonial: Testimonial;
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-xl p-6 relative hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300"
    >
      <div className="flex items-center mb-6">
        <motion.div whileHover={{ scale: 1.1 }} className="relative">
          <img
            src={testimonial.imageSrc}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
          />
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-1">
            <Star className="w-4 h-4 text-white" />
          </div>
        </motion.div>
        <div className="ml-4">
          <h3 className="font-bold text-xl text-gray-800 font-sans">
            {testimonial.name}
          </h3>
          <p className="text-blue-600 font-medium">{testimonial.role}</p>
        </div>
      </div>

      <div className="relative">
        <p className="text-gray-700 leading-relaxed italic">
          "{testimonial.comment}"
        </p>
        <div className="absolute -top-4 -left-2 text-7xl text-blue-100 font-serif">
          "
        </div>
      </div>

      <div className="flex mt-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Top Border Design */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-2 bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-500"></div>
        <div className="h-1 bg-blue-100 mt-1"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-blue-600">What Our</span>{" "}
            <span className="text-yellow-400">Students Say</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
