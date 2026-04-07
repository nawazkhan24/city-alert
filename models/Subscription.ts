import mongoose from "mongoose";

const SubSchema = new mongoose.Schema({
  userEmail: String,
  city: String,
  keyword: String,
});

export default mongoose.models.Sub || mongoose.model("Sub", SubSchema);