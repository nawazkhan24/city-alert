import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  await connectDB();

  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ error: "Not logged in" });
  }

  const user = await User.findById(session.user.id);

  return Response.json({
    email: user.email,
    city: user.city,
    keyword: user.keyword,
  });
}