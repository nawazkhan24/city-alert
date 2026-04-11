"use client";

import { useSession, signOut } from "next-auth/react";
import { Bell, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data: session } = useSession();

  const [notif, setNotif] = useState(false);
  const [profile, setProfile] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  // ✅ Fetch user data (city + keyword)
  useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(data => setUserData(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-black to-blue-700 opacity-40 blur-3xl"></div>

      {/* NAVBAR */}
      <div className="relative z-10 flex justify-between items-center px-8 py-5 border-b border-white/10 backdrop-blur-lg">

        <h1 className="text-2xl font-semibold tracking-wide">
          CityAlert
        </h1>

        <div className="flex items-center gap-6 relative">

          {/* 🔔 Notifications */}
          <div className="relative">
            <Bell
              className="cursor-pointer hover:scale-110 transition"
             onClick={() => {
             setNotif(!notif);
              setProfile(false); // ✅ close profile
}}
            />

            {notif && (
              <div className="absolute right-0 mt-3 w-64 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-xl">
                <p className="text-sm text-gray-300">
                  🚀 No alerts yet
                </p>
              </div>
            )}
          </div>

          {/* 👤 Profile */}
          <div className="relative">
            <User
              className="cursor-pointer hover:scale-110 transition"
              onClick={() => {
              setProfile(!profile);
              setNotif(false); // ✅ close notif
}}
            />

            {profile && (
              <div className="absolute right-0 mt-3 w-64 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-xl">
                <p className="font-semibold">
                  {session?.user?.name}
                </p>
                <p className="text-sm text-gray-300">
                  {session?.user?.email}
                </p>

                <button
                  onClick={() => signOut()}
                  className="mt-3 w-full bg-red-500 p-2 rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* MAIN */}
      <div className="relative z-10 p-8">

        {/* HERO */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2">
            Welcome back 👋
          </h2>
          <p className="text-gray-400">
            Monitor your city alerts in real-time
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* 👤 USER CARD */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500 transition">

            <h3 className="text-lg font-semibold mb-4">
              👤 User Info
            </h3>

            <div className="flex items-center gap-4">
              
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-lg font-bold">
                {session?.user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>

              {/* Info */}
              <div>
                <p className="text-white font-medium">
                  {session?.user?.name || "User"}
                </p>

                <p className="text-gray-400 text-sm">
                  {session?.user?.email}
                </p>
              </div>

            </div>
          </div>

          {/* 📡 SUBSCRIPTION CARD */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500 transition">

            <h3 className="text-lg font-semibold mb-2">
              📡 Your Subscription
            </h3>

            <p className="text-gray-300 text-sm">
              📍 City: {userData?.city || "Not set"}
            </p>

            <p className="text-gray-300 text-sm">
              🔍 Keyword: {userData?.keyword || "Not set"}
            </p>
          </div>

          {/* ⚡ SYSTEM CARD */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500 transition">

            <h3 className="text-lg font-semibold mb-2">
              ⚡ System
            </h3>

            <p className="text-green-400 text-sm">
              Scheduler Active
            </p>

            <p className="text-green-400 text-sm">
              Emails Enabled
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}