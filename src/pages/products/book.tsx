const ebookProducts = [
  {
    title: "E-Book 1",
    description: "Description of the first e-book.",
    price: 15,
  },
  {
    title: "E-Book 2",
    description: "Description of the second e-book.",
    price: 20,
  },
];

const purchasedBooks = [
  {
    title: "E-Book 1",
    purchaseDate: "2025-01-10",
    price: 15,
  },
  {
    title: "E-Book 2",
    purchaseDate: "2025-01-05",
    price: 20,
  },
];

// Card Component for displaying E-Book and Purchased Books
const BookCard = ({
  title,
  description,
  price,
  purchaseDate,
}: {
  title: string;
  description?: string;
  price: number;
  purchaseDate?: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    {description && <p className="text-gray-600 mb-4">{description}</p>}
    {purchaseDate && (
      <p className="text-gray-600 mb-4">Purchased on: {purchaseDate}</p>
    )}
    <span className="text-3xl font-bold text-gray-800">${price}</span>
    {!purchaseDate && (
      <button className="w-full py-2 px-4 mt-4 rounded-md bg-blue-600 text-white hover:bg-blue-700">
        Buy Now
      </button>
    )}
  </div>
);

export default function Book() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">E-Book Sales</h1>
      <p className="text-gray-600 mb-6">
        Buy the best e-books available on various topics.
      </p>

      {/* Display E-Book Products for Sale */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          E-Book Products
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ebookProducts.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              description={book.description}
              price={book.price}
            />
          ))}
        </div>
      </div>

      {/* Display Purchased Books Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Purchased E-Books
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {purchasedBooks.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              price={book.price}
              purchaseDate={book.purchaseDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
