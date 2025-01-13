import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export default function RegisterPage() {
  const router = useRouter();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("M"); // Default to "M"
  const [phoneNumber, setPhoneNumber] = useState("");
  const [domicile, setDomicile] = useState("");
  const [loading, setLoading] = useState(false); // State untuk loading

  // Function to handle form submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (password !== confirmPassword) {
      setLoading(false);
      alert("Passwords do not match!");
      return;
    }

    try {
      // Send registration data to the backend
      const response = await axios.post(
        "https://backend-ema.vercel.app/api/users/register",
        {
          email: email,
          password: password,
          full_name: fullName,
          gender: gender,
          no_telepon: phoneNumber,
          domisili: domicile,
        }
      );

      console.log("Registration successful:", response.data);
      alert("Registration successful!");
      router.push("/auth/login");
    } catch (error) {
      setLoading(false);
      // Handle registration error
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Register - English My Adventure</title>
      </Head>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={fullName}
              // fungsinya untuk memasukkan data ke dalam state
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Domicile</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={domicile}
              onChange={(e) => setDomicile(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {loading ? (
            <div className="flex justify-center mb-4">
              <div className="animate-spin border-4 border-t-4 border-blue-600 border-solid rounded-full w-8 h-8"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Register
            </button>
          )}
        </form>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
