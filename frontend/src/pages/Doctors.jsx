import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoctorPage from "../components/DoctorsPage";

const Doctors = () => {
    return (
        <div>
            <Navbar />
            <DoctorPage />
            <Footer />
        </div>
    );
};

export default Doctors;