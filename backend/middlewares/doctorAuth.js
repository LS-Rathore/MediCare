import jwt from "jsonwebtoken"
import Doctor from "../models/Doctor.js"
const JWT_SECRET = process.env.JWT_SECRET;

export default async function doctorAuth(req, res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")  ){
        return res.status(401).json({success: false, message: "Doctor not authorized"});
    }
    const token = authHeader.split(" ")[1];
    try {
        // verify token 
        const payload = jwt.verify(token,JWT_SECRET);
        console.log("Doctor Auth Payload:", payload);

        if (payload.role && payload.role !== "doctor"){
            return res.status(401).json({
                success:false, 
                message: "Access Denied"
            })
        }    
        // fetch doctor 
        const doctor = await Doctor.findById(payload.id).select("-password");
        if (!doctor){
            return res.status(401).json({
                success: false,
                message: "Doctor not found"
            })
        }
       // attach doctor to res 
       req.doctor = doctor;
       next();
    

    } catch (err) {
        console.error("Doctor JWT Verification Failed", err);
        return res.status(401).json({
            success: false,
            message: "Token invalid or missing or expired "
        })
    }
}