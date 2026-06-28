import React from "react";
import Navbar from "../components/Navbar";
import AppointmentsPage from "../components/AppointmentsPage";

const Appointments = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <AppointmentsPage />
        </div>
    )
}

export default Appointments