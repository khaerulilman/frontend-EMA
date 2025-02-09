import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Book, GraduationCap, Heart } from "lucide-react";

interface Product {
  title: string;
  description: string;
  price: string;
  discountPrice: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    title: "Ebook 1",
    description: "Learn the basics of programming.",
    price: "$20",
    discountPrice: "$15",
    imageUrl: "https://via.placeholder.com/400/09f/fff.png",
  },
];

const ProductPreview: React.FC = () => {
  return (
    <section className="py-20 bg-yellowCustom">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
          <h3 className="text-4xl font-bold">
            <span className="text-blue-600">Professional</span>{" "}
            <span className="text-yellow-400">Guide</span>
          </h3>
          <Sparkles className="w-6 h-6 text-yellow-400 ml-2" />
        </div>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        <motion.div
          className="flex justify-center items-center space-x-6 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {products.slice(0, 5).map((product, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-[30px] shadow-lg w-60 cursor-pointer overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-32 object-cover rounded-[20px] mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-2 text-sm">
                {product.description}
              </p>
              <div className="text-lg">
                <span className="text-red-600 font-bold">
                  {product.discountPrice}
                </span>
                <span className="text-gray-600 line-through ml-2 text-sm">
                  {product.price}
                </span>
              </div>
              {/* Buy Button */}
              <Link href="/products/book">
                <motion.button
                  className="mt-4 px-6 py-3 bg-yellowCustom text-white rounded-full font-semibold transition-colors hover:bg-opacity-90"
                  whileHover={{ scale: 1.1 }}
                >
                  Get E-Book
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreview;
