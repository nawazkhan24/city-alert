"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-xl mb-4 font-bold">Login</h1>

        <input className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={e=>setEmail(e.target.value)}
        />

        <input className="border p-2 w-full mb-3"
          type="password"
          placeholder="Password"
          onChange={e=>setPassword(e.target.value)}
        />

        <button
          className="bg-black text-white w-full p-2 rounded"
          onClick={()=>signIn("credentials",{email,password,callbackUrl:"/dashboard"})}
        >
          Login
        </button>
      </div>
    </div>
  );
}