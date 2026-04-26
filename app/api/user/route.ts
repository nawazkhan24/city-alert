import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  await connectDB();

  const session: any = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return Response.json({ error: "Not logged in" }, { status: 401 });
  }

  const user = await User.findById(session.user.id);

  return Response.json({
    name: user.name,
    email: user.email,
    city: user.city,
    keyword: user.keyword,
  });
}