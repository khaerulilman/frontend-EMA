export default function Certificate() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Certificate Sales
      </h1>
      <p className="text-gray-600 mb-6">
        Purchase certificates for completing courses or achieving milestones.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Certificate 1
          </h2>
          <p className="text-gray-600 mb-4">
            Description of the first certificate.
          </p>
          <span className="text-3xl font-bold text-gray-800">$30</span>
          <button className="w-full py-2 px-4 mt-4 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            Buy Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Certificate 2
          </h2>
          <p className="text-gray-600 mb-4">
            Description of the second certificate.
          </p>
          <span className="text-3xl font-bold text-gray-800">$40</span>
          <button className="w-full py-2 px-4 mt-4 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
