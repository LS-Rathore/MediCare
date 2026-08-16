import mongoose from "mongoose";
import dns from "dns";

export const connectDB = async () => {
    try {
        dns.setServers(['8.8.8.8', '1.1.1.1']);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit process with failure
    }
};
