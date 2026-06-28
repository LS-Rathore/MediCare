import express from "express";
import {clerkMiddleware, requireAuth } from "@clerk/express";
import {getAppointments, getAppointmentsByPatient,createAppointment,updateAppointment,cancelAppointment, getStats,getAppointmentByDoctor,getRegisteredUserCount, confirmPayment,} from "../controllers/appointmentController.js";

const appointmentRouter = express.Router();

appointmentRouter.get("/" ,getAppointments);
appointmentRouter.get("/confirm", confirmPayment);
appointmentRouter.get("/stats/summary", getStats)

// authentication routes 
appointmentRouter.post('/',clerkMiddleware(),requireAuth(),createAppointment);
appointmentRouter.get('/me', clerkMiddleware(),requireAuth(),getAppointmentsByPatient)

appointmentRouter.get('/doctor/:doctorId', getAppointmentByDoctor);

appointmentRouter.post("/:id/cancel", cancelAppointment);
appointmentRouter.get("/patients/count", getRegisteredUserCount);
appointmentRouter.put("/:id",updateAppointment);

export default appointmentRouter;