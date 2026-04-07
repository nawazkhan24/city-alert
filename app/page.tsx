export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow text-center">
        <h1 className="text-2xl font-bold mb-4">City Alert System</h1>

        <a href="/register">
          <button className="bg-black text-white px-4 py-2 rounded mr-2">
            Register
          </button>
        </a>

        <a href="/login">
          <button className="border px-4 py-2 rounded">
            Login
          </button>
        </a>
      </div>
    </div>
  );
}