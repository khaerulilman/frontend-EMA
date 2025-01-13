// pages/auth/login.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Untuk menyimpan pesan error
  const [loading, setLoading] = useState(false); // State untuk loading

  // pages/auth/login.tsx
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://backend-ema.vercel.app/api/users/login",
        { email, password }
      );

      // Simpan token ke cookies
      document.cookie = `token=${response.data.token}; path=/; max-age=86400`; // expired dalam 24 jam

      // Redirect ke halaman yang diminta sebelumnya atau ke dashboard
      const fromUrl = router.query.from as string;
      router.push(fromUrl || "/dashboard");
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Email atau password salah");
      } else {
        setError("Terjadi kesalahan. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Login - English My Adventure</title>
      </Head>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Tampilkan pesan error jika ada */}
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}

        <form onSubmit={handleLogin}>
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
            <div className="flex justify-between">
              <div></div>
              <p className="mt-2">
                <Link
                  href="/auth/forgot-password"
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
          </div>
          {/* Tampilan loading */}
          {loading ? (
            <div className="flex justify-center mb-4">
              <div className="animate-spin border-4 border-t-4 border-blue-600 border-solid rounded-full w-8 h-8"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          )}
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
