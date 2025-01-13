import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HowToStart: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      description: "Set Your Goals",
      icon: "📘",
    },
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hoverVariant = {
    hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
  };

  return (
    <div>
      <section className="py-12 md:py-16 bg-blueCustom">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h2
            ref={ref}
            className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInVariant}
          >
            How to Start <span className="text-yellowCustom">Learning</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-4 lg:gap-2 max-w-5xl mx-auto">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInVariant}
              >
                <motion.div
                  className="bg-white text-blue-600 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full text-xl md:text-2xl lg:text-2xl mb-3"
                  whileHover="hover"
                  variants={hoverVariant}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-lg md:text-lg font-bold mb-1">
                  {step.title}
                </h3>
                <p className="text-white text-sm px-1 min-h-[40px] md:min-h-[50px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-between">
        <div></div>
        <div
          className="lg:block hidden"
          style={{
            width: "50%",
            height: "0",
            marginRight: "100px",
          }}
        >
          <img
            src="assets/images/icon-1.png"
            className="w-[300px] relative -top-[150px] left-[450px] animate-[float_3s_ease-in-out_infinite]"
            alt="Floating Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default HowToStart;
