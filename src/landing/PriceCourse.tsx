import { motion } from "framer-motion";
import Link from "next/link";

interface Course {
  title: string;

  description: string;

  price: string;

  imageUrl: string;
}

const courses: Course[] = [
  {
    title: "Basic English Course",

    description:
      "Improve your basic English skills with our beginner-friendly course.",

    price: "$50",

    imageUrl: "https://via.placeholder.com/150",
  },
];

const PriceCourse: React.FC = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },

    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverVariant = {
    hover: { scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <div>
      <section className="pt-20 pb-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blueCustom">
            Our <span className="text-yellowCustom">Courses</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-[30px] shadow-lg w-full sm:w-auto"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                variants={{ ...fadeInVariant, ...hoverVariant }}
              >
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-[20px] mb-4"
                />

                <h3 className="text-xl font-bold mb-2 text-blue-600">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-4">{course.description}</p>

                <p className="text-lg font-semibold text-blue-600">
                  {course.price}
                </p>

                {/* Get Course Button */}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-3 bg-yellowCustom text-white rounded-full font-semibold transition-colors hover:bg-opacity-90"
                >
                  <Link href="/class/subscription">
                    <span>Get Course</span>
                  </Link>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-gray-100"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="#DDC757" offset="0%"></stop>
            <stop stopColor="#D46945" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,10L72,0L144,70L216,20L288,40L360,70L432,90L504,90L576,90L648,20L720,40L792,80L864,90L936,30L1008,20L1080,70L1152,40L1224,20L1296,50L1368,60L1440,20L1512,70L1584,30L1656,60L1728,50L1728,100L1656,100L1584,100L1512,100L1440,100L1368,100L1296,100L1224,100L1152,100L1080,100L1008,100L936,100L864,100L792,100L720,100L648,100L576,100L504,100L432,100L360,100L288,100L216,100L144,100L72,100L0,100Z"
        ></path>
      </svg>
    </div>
  );
};

export default PriceCourse;
