"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [keyword, setKeyword] = useState("");

  const submit = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          city,
          keyword,
        }),
      });

      const data = await res.json(); // 🔥 important

      if (res.ok) {
        alert("Registered successfully");
        router.push("/login");
      } else {
        alert(data.error || "Something went wrong"); // 🔥 real error
      }
    } catch (err) {
      console.log("Error:", err);
      alert("Server error");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-xl mb-4 font-bold">Register</h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-3"
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Select City</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Ghaziabad</option>
        </select>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Keyword (road, park...)"
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button
          onClick={submit}
          className="bg-black text-white w-full p-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}