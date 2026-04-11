"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    keyword: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form),
    });

    if (res.ok) router.push("/login");
    else alert("Failed");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* LEFT */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h1 className="text-5xl font-bold mb-6">
          Stay updated with <br /> your city alerts
        </h1>

        <p className="text-gray-400 mb-8">
          Choose your city and keywords — we’ll notify you instantly.
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="w-1/2 flex items-center justify-center ">

        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-96 border border-white/20">

          <h2 className="text-2xl mb-6">Register</h2>

          <input name="name" placeholder="Name" onChange={handleChange}
            className="w-full p-2 mb-3 bg-white/20 rounded"/>

          <input name="email" placeholder="Email" onChange={handleChange}
            className="w-full p-2 mb-3 bg-white/20 rounded"/>

          <input name="password" type="password" placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 mb-3 bg-white/20 rounded"/>

          <select name="city" onChange={handleChange}
            className="w-full p-2 mb-3 bg-white/20 rounded">
            <option value="" className="text-black" >Select City</option>
            <option className="bg-gray-500" >Delhi</option>
            <option className="bg-gray-500">Mumbai</option>
            <option className="bg-gray-500" >Ghaziabad</option>
          </select>

          <input name="keyword" placeholder="Keyword"
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-white/20 rounded"/>

          <button onClick={submit}
            className="w-full bg-white text-black p-2 rounded-lg">
            Register
          </button>

        </div>
      </div>
    </div>
  );
}