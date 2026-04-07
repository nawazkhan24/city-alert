import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  city: String,
  keyword: String,
  lastSent : Date,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);