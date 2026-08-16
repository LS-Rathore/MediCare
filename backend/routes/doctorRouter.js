import express from "express";

import {
  createDoctor,
  getDoctors,
  doctorLogin,
  getDoctorById,
  updateDoctor,
  toggleDoctorAvailability,
  deleteDoctor
} from '../controllers/doctorController.js'

import doctorAuth from "../middlewares/doctorAuth.js";

import upload from "../middlewares/multer.js";

const doctorRouter = express.Router();
doctorRouter.get("/", getDoctors);
doctorRouter.post("/login",doctorLogin);

doctorRouter.get("/:id", getDoctorById)
doctorRouter.post("/", upload.single("image"), createDoctor)

// after login

doctorRouter.put("/:id", doctorAuth, upload.single("image"), updateDoctor)
doctorRouter.post("/:id/toggle-availability", doctorAuth, toggleDoctorAvailability)

doctorRouter.delete("/:id", deleteDoctor)

export default doctorRouter;

