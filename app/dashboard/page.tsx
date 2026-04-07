"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      <p>Email: {data.email}</p>
      <p>City: {data.city}</p>
      <p>Keyword: {data.keyword}</p>
    </div>
  );
}