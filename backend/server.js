import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import {clerkMiddleware} from '@clerk/express'
import {connectDB} from './config/db.js'
import doctorRouter from './routes/doctorRouter.js'
import serviceRouter from './routes/serviceRouter.js'
import appointmentRouter from './routes/appointmentRouter.js';
import serviceAppointmentRouter from './routes/serviceAppointmentRouter.js'


// Validate required environment variables on startup
const requiredEnvVars = ['MONGODB_URI', 'JWT_SECRET', 'ADMIN_EMAIL', 'ADMIN_PASSWORD'];
const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);
if (missingEnvVars.length > 0) {
    console.error(`ERROR: Missing required environment variables: ${missingEnvVars.join(', ')}`);
    console.error("Please check your .env file and restart the server.");
    process.exit(1);
}

const app = express()
const port = process.env.PORT || 4000;
const allowedOrigins = [
    process.env.FRONTEND_URL || "http://localhost:5173",
    process.env.ADMIN_URL || "http://localhost:5174",
].filter(Boolean);

// Middlewares 
app.use(cors({
    origin: function (origin, callBack){
        if(!origin) return callBack(null, true);
        if(allowedOrigins.indexOf(origin) !== -1 ){
            return callBack(null, true);
        }
        return callBack(new Error("Not allowed by CORS"))
    },
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({extended:true, limit: "20mb"}));
app.use(clerkMiddleware());


//DB
connectDB();

//Routes 

import adminRouter from './routes/adminRouter.js'

app.use("/api/admin", adminRouter);
app.use("/api/doctors", doctorRouter);
app.use("/api/services", serviceRouter);
app.use("/api/appointments", appointmentRouter);
app.use("/api/service-appointments", serviceAppointmentRouter)

app.get("/", (req, res)=>{
    res.send("API WORKING");
});

// 404 Route Handler
app.use((req, res, next) => {
    res.status(404).json({ success: false, message: "API Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Global Error Handler caught:", err);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({ success: false, message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
