import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    required: true
  },
  deviceModel: {
    type: String,
    required: true
  },
  branchCode: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  api: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required :true
  }
}, { timestamps: true })

const Device = mongoose.model('Device', deviceSchema)

export default Device
