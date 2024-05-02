import mongoose from "mongoose";

const cameraSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    RtspUrl: { type: String, required: true },
    rtspPort: { type: Number, required: true },
    rtspUsername: { type: String, required: true },
    rtspPassword: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Camera = mongoose.model("Camera", cameraSchema);

export default Camera;
