import { motion } from "framer-motion";
import Link from "next/link"; // Tambahkan import Link

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
    imageUrl: "https://via.placeholder.com/150",
  },
];

const ProductPreview: React.FC = () => {
  const cardHoverVariant = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <section className="py-20 bg-yellowCustom">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">
          <span className="text-white">Preview </span>
          <span className="text-blueCustom">Produk</span>
        </h2>
        <div className="flex justify-center items-center space-x-6">
          {products.slice(0, 5).map((product, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-[30px] shadow-lg w-60"
              whileHover="hover"
              variants={cardHoverVariant}
              transition={{ duration: 0.3 }}
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-3 bg-yellowCustom text-white rounded-full font-semibold transition-colors hover:bg-opacity-90"
              >
                <Link href="/products/book">Get E-Book</Link>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
