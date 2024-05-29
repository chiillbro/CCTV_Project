import Device from "../models/deviceModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const addDevice = asyncHandler(async (req, res) => {
  const { deviceName, deviceModel, branchCode, state, api, isActive } = req.body;
  if (!deviceName || !deviceModel || !branchCode || !state || !api || !isActive) {
    throw new Error("Please fill all the details")
  }

  const deviceExists = await Device.findOne({ api })
  if (deviceExists) {
    res.status(400).send("Device already exists")
  }

  const newDevice = new Device({ deviceName, deviceModel, branchCode, state, api, isActive });

  try {
    await newDevice.save();
    res.status(201).json({
      _id:newDevice._id,
      deviceName: newDevice.deviceName,
      model: newDevice.deviceModel,
      branchCode: newDevice.branchCode,
      state: newDevice.state,
      isActive: newDevice.isActive
    })
  } catch (error) {
    res.status(400)
    throw new Error("Invalid user data")
  }
})

const getAllDevices = asyncHandler(async (req, res) => {
  try {
    const devices = await Device.find()
    res.json(devices)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

const getSpecificDevice = asyncHandler(async (req, res) => {
  try {
    const device = await Device.findById(req.params.id)
    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }
    res.json(device)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

const updateDevice = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.id)
  if (device) {
    device.deviceName = req.body.username || device.deviceName
    device.deviceModel = req.body.deviceModel || device.deviceModel
    device.branchCode = req.body.branchCode || device.branchCode
    device.state = req.body.state || device.state
    device.api = req.body.api || device.api
    device.isActive = Boolean(req.body.isAdmin)

    const updatedDevice = await device.save()

    res.json({
      _id: updatedDevice._id,
      name: updatedDevice.deviceName,
      model: updatedDevice.deviceModel,
      branchCode: updatedDevice.branchCode,
      state: updatedDevice.state,
      api: updatedDevice.api,
      isActive: updatedDevice.isActive,
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

const deleteDevice = asyncHandler(async (req, res) => {
  try {
    const device = await Device.findById(req.params.id)
    if (device) {
      await Device.deleteOne({ _id: device._id })
      res.json({ message: "Device removed" })
    } else {
      res.status(404)
      throw new Error("User not found")
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }

})

export {
  addDevice,
  getAllDevices,
  getSpecificDevice,
  updateDevice,
  deleteDevice
}; 