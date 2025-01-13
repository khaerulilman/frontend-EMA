import { motion } from "framer-motion";

const documentationData = [
  {
    imgSrc: "https://via.placeholder.com/400",
    altText: "Dokumentasi 1",
    title: "Judul Dokumentasi 1",
    description:
      "Deskripsi singkat mengenai dokumentasi ini. Jelaskan cara penggunaannya, fitur-fitur utama, dan apa yang dapat dipelajari dari dokumentasi ini.",
  },
  {
    imgSrc: "https://via.placeholder.com/400",
    altText: "Dokumentasi 2",
    title: "Judul Dokumentasi 2",
    description:
      "Deskripsi singkat mengenai dokumentasi kedua ini. Berikan penjelasan tentang apa yang ada dalam dokumentasi ini dan bagaimana cara memanfaatkannya.",
  },
];

const DocumentationSection: React.FC = () => {
  const imageHoverVariant = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px bg-blueCustom borderRadius: 10px",
    },
  };

  return (
    <section className="py-5 bg-gradient-to-b from-yellowCustom via-blue-500 to-blue-700">
      <div
        style={{
          width: "100%",
          height: "2px",
          background:
            "linear-gradient(to right, transparent, #808080, transparent)",
          borderRadius: "10px",
          margin: "20px 0", // Jarak pemisah
        }}
      ></div>

      <div className="container mx-auto px-4 pt-20 pb-20">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">
          Dokumentasi <span className="text-blueCustom">Course</span>
        </h2>

        <div className="space-y-16">
          {documentationData.map((doc, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              {/* Image Container */}
              <motion.div
                className="w-full md:w-1/2"
                whileHover="hover"
                variants={imageHoverVariant}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={doc.imgSrc}
                  alt={doc.altText}
                  className="w-full h-64 object-cover rounded-[30px] shadow-xl transition-all duration-300"
                />
              </motion.div>

              {/* Content Container */}
              <div
                className={`w-full md:w-1/2 text-center ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
              >
                <h3 className="text-2xl font-semibold text-yellowCustom mb-4">
                  {doc.title}
                </h3>
                <p className="text-white mb-4 leading-relaxed">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
