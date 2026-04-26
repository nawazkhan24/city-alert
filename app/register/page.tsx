"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [keyword, setKeyword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        city,
        keyword,
        password,
      }),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-black to-blue-700 opacity-40 blur-3xl"></div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md p-[1px] rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500">
        <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">

          <h1 className="text-3xl font-bold text-center mb-2">
            Create Account
          </h1>

          <p className="text-gray-400 text-center mb-6">
            Register for City Alert notifications
          </p>

          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mb-4 p-3 rounded-lg bg-black text-white border border-white/20 outline-none focus:ring-2 focus:ring-purple-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-4 p-3 rounded-lg bg-black text-white border border-white/20 outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* City Dropdown */}
          <select
            className="w-full mb-4 p-3 rounded-lg bg-black text-white border border-white/20 outline-none focus:ring-2 focus:ring-purple-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
          </select>

          {/* Keyword */}
         <input
          type="text"
          placeholder="e.g. park road bridge"
          className="w-full mb-4 p-3 rounded-lg bg-black text-white border border-white/20 outline-none focus:ring-2 focus:ring-purple-500"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
/>

          {/* Password */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full p-3 rounded-lg bg-black text-white border border-white/20 outline-none focus:ring-2 focus:ring-purple-500 pr-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-3 top-3 text-gray-300 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-6">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full p-3 rounded-lg bg-black text-white border border-white/20 outline-none focus:ring-2 focus:ring-purple-500 pr-12"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="cursor-pointer absolute right-3 top-3 text-gray-300 hover:text-white"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className=" cursor-pointer w-full bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-gray-400 text-center mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-purple-400 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}