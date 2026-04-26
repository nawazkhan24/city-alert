"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-black to-blue-700 opacity-40 blur-3xl"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-[1px] rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500">
        <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
          
          <h1 className="text-3xl font-bold text-center mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-400 text-center mb-6">
            Login to your City Alert account
          </p>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-4 p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-purple-500 pr-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className=" cursor-pointer absolute right-3 top-3 text-gray-300 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="cursor-pointer w-full bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="text-gray-400 text-center mt-6">
            Don't have an account?{" "}
            <a href="/register" className="text-purple-400 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}