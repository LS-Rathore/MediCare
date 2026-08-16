import express from "express";
import upload from "../middlewares/multer.js";
import { createService, getServiceById, getServices, updateService, deleteService } from "../controllers/serviceController.js";
const serviceRouter = express.Router();

serviceRouter.get("/", getServices);
serviceRouter.get("/:id", getServiceById)

serviceRouter.post("/", upload.single("image"), createService);
serviceRouter.put("/:id", upload.single("image"), updateService);
serviceRouter.delete("/:id", deleteService);


export default serviceRouter;