import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Gamepad2, FileText } from "lucide-react";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";

const quizzes = [
  {
    id: 1,
    title: "Miss Asking Quiz",
    description:
      "Test your English skills in a fun, interactive game world! Answer 20 questions while exploring a virtual classroom with other players.",
    image: "assets/images/quiz2.png",
    url: "https://quiz.zep.us/en/play/Ov5lLm",
    badge: "Interactive Game",
    icon: Gamepad2,
    color: "from-purple-500 to-indigo-600",
    badgeBg: "bg-purple-100 text-purple-700",
  },
  {
    id: 2,
    title: "Pre-test Grammar 1",
    description:
      "Evaluate your grammar knowledge with this pre-test assessment by EMA COURSE. Perfect for measuring your current English level before starting the course.",
    image: "assets/images/quiz1.png",
    url: "https://www.flexiquiz.com/SC/N/EMAgrammarpretest",
    badge: "Assessment",
    icon: FileText,
    color: "from-cyan-500 to-blue-600",
    badgeBg: "bg-cyan-100 text-cyan-700",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const QuizPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Trial Quiz - English My Adventure</title>
        <meta
          name="description"
          content="Try our free English quizzes to test your skills before joining the course"
        />
      </Head>

      <Navbar />

      {/* Hero Header */}
      <section className="bg-blueCustom relative overflow-hidden pt-8 pb-16">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellowCustom opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellowCustom opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-4 border-dashed border-white/10 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <button className="flex items-center gap-2 text-white/80 hover:text-yellowCustom transition-colors duration-300 mb-8 group">
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform duration-300"
                />
                <span className="font-medium">Back to Home</span>
              </button>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="font-more-sugar text-white">Trial </span>
              <span className="font-more-sugar text-yellowCustom">Quiz</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Test your English skills with our interactive quizzes before
              joining the course. Choose a quiz below and see how well you do!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Cards Section */}
      <section className="flex-grow bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {quizzes.map((quiz) => (
              <motion.div key={quiz.id} variants={cardVariants}>
                <a
                  href={quiz.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div
                    className="bg-white shadow-lg overflow-hidden border-2 border-transparent hover:border-blueCustom transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-none"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${quiz.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
                      />
                      <img
                        src={quiz.image}
                        alt={quiz.title}
                        className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Badge */}
                      <div className="absolute top-4 left-4 z-20">
                         <span
                           className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold ${quiz.badgeBg} shadow-md backdrop-blur-sm`}
                         >
                          <quiz.icon size={14} />
                          {quiz.badge}
                        </span>
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 z-10 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          className="bg-white rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        >
                          <ExternalLink size={28} className="text-blueCustom" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blueCustom transition-colors duration-300">
                        {quiz.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {quiz.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-blueCustom text-white rounded-full font-semibold group-hover:bg-yellowCustom group-hover:text-blueCustom transition-all duration-300 shadow-md group-hover:shadow-lg">
                          Start Quiz
                          <ExternalLink
                            size={16}
                            className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                          />
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-blueCustom transition-colors duration-300">
                          Opens in new tab
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center mt-16"
          >
               <div className="bg-blueCustom/5 border-2 border-blueCustom/20 rounded-none p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-blueCustom mb-4">
                Ready to Level Up Your English?
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                After trying our quizzes, join the full EMA Course and get
                access to structured lessons, live tutoring, and certificates!
              </p>
              <a
                href="https://wa.me/6285353890080"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <motion.button
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-8 py-3 bg-yellowCustom text-blueCustom font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 rounded-none"
                 >
                  Join Now 🚀
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuizPage;
