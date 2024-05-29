import express from "express";
import {authenticate, authorizeAdmin} from "../middlewares/authMiddleware.js";
import { addDevice, getAllDevices, getSpecificDevice, updateDevice, deleteDevice } from "../controllers/deviceController.js";

const router = express.Router();

router.post('/add-device', authenticate, authorizeAdmin, addDevice )
router.get('/', authenticate, authorizeAdmin, getAllDevices)

router.route('/:id')
.get(authenticate, authorizeAdmin, getSpecificDevice,)
.put(authenticate, authorizeAdmin, updateDevice)
.delete(authenticate, authorizeAdmin, deleteDevice)

export default router