import Link from "next/link";

const subscriptionPlans = [
  {
    name: "Monthly",
    price: 29,
    features: [],
  },
  {
    name: "Annually",
    price: 49,
    isPopular: true,
    features: [],
    discountNote: "20% discount per month when billed annually", // Menambahkan keterangan diskon
  },
];

interface PlanCardProps {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  discountNote?: string; // Menambahkan optional property untuk diskon
}

function PlanCard({
  name,
  price,
  features,
  isPopular,
  discountNote,
}: PlanCardProps) {
  const planSlug = name.toLowerCase(); // Monthly atau Annually
  return (
    <div
      className={`flex flex-col justify-between bg-white rounded-lg shadow-md p-6 relative ${
        isPopular ? "border-2 border-blue-500" : ""
      }`}
    >
      <div>
        {isPopular && (
          <span className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
            Popular
          </span>
        )}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{name}</h3>
        <div className="mb-6">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        {discountNote && (
          <p className="text-sm text-green-500 mb-4">{discountNote}</p> // Menambahkan keterangan diskon
        )}
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Link href={`/class/subscription/${planSlug}`}>
        <button
          className={`w-full py-2 px-4 rounded-md transition-colors ${
            isPopular
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Choose Plan
        </button>
      </Link>
    </div>
  );
}

export default function Subscription() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Subscription Plans</h1>
        <p className="text-gray-600 mt-2">
          Choose the perfect plan for your learning journey
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subscriptionPlans.map((plan) => (
          <PlanCard key={plan.name} {...plan} />
        ))}
      </div>
    </div>
  );
}
