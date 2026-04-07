import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { startScheduler } from "@/lib/scheduler";

startScheduler();
export async function POST(req: Request) {
  try {
    await connectDB();

    const { name, email, password, city, keyword } = await req.json();

    // 🔴 check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    // 🔐 hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ create user
    await User.create({
      name,
      email,
      password: hashedPassword,
      city,
      keyword,
    });

    return Response.json({ success: true }, { status: 201 });

  } catch (error) {
    console.log("REGISTER ERROR:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}