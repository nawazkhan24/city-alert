import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-black to-blue-700 opacity-40 blur-3xl"></div>

      {/* Main card */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-10 py-12 text-center">

        {/* Title */}
        <h1 className="text-5xl font-extrabold tracking-wide mb-4">
          City Alert System
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg mb-10">
          Stay updated with real-time city alerts tailored to your interests.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">

          <Link href="/register">
            <button className=" cursor-pointer px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-medium shadow-lg hover:scale-105 transition-all duration-300">
              Register
            </button>
          </Link>

          <Link href="/login">
            <button className=" cursor-pointer px-8 py-3 rounded-xl border border-white/30 bg-white/10 font-medium hover:bg-white/20 transition-all duration-300">
              Login
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}