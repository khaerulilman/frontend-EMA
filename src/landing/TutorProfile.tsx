import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TutorProfile: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverVariant = {
    hover: { scale: 1.1, transition: { duration: 0.3 } }, // Scaling effect on hover
  };

  return (
    <section className="py-20 bg-gray-100">
      <div ref={ref} className="container mx-auto flex flex-col items-center">
        <motion.h3
          className="font-semibold text-blue-600"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant}
          style={{ fontSize: "30px", paddingBottom: "30px" }}
        >
          Professional <span className="text-yellowCustom">Guide</span>
        </motion.h3>

        {/* Image with hover animation */}
        <motion.div
          className="w-40 h-40 mb-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant}
          whileHover="hover" // Apply hover variant when hovered
        >
          <motion.img
            src="/assets/images/tutor-syifa.jpeg"
            alt="Tutor"
            className="rounded-full object-cover w-full h-full border-4 border-blue-600"
            variants={hoverVariant} // Apply hover animation to the image
          />
        </motion.div>

        {/* Name with fade-in animation */}
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant}
        >
          Syifa Nur Husna S.Hum
        </motion.h2>

        {/* Description with fade-in animation */}
        <motion.p
          className="text-center text-gray-600 max-w-2xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant}
        >
          I am an English teacher with a bachelor’s degree English literature,
          three years of experience teaching junior high school students, course
          tutor expertise in English and Indonesian language instruction, strong
          communication skills, a passion for education, and a commitment to
          inspiring students while contributing to my community's educational
          growth.
        </motion.p>
      </div>
    </section>
  );
};

export default TutorProfile;
