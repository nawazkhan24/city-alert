"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res?.error) router.push("/dashboard");
    else alert("Login failed");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Monitor your city <br /> smarter & faster
        </h1>

        <p className="text-gray-400 mb-8">
          Track updates based on your keywords and get alerts instantly.
        </p>

        <button
          onClick={() => router.push("/register")}
          className="bg-blue-600 px-6 py-3 rounded-lg w-fit hover:bg-blue-700"
        >
          Try for free
        </button>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="w-1/2 flex items-center justify-center">

        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-96 border border-white/20">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-3 bg-white/20 rounded outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 bg-white/20 rounded outline-none"
          />

          <button
            onClick={login}
            className="w-full bg-white text-black p-2 rounded-lg hover:bg-gray-200"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}