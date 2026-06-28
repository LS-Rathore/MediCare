import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Hero from './pages/Hero.jsx'
import {Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Appointments from './pages/Appointment.jsx'
import SerDashboard from "./pages/SerDashboard.jsx";
import AddSer from './pages/AddSer.jsx'
import ListService from './pages/ListService.jsx' 
import ServiceAppointment from './pages/ServiceAppointment.jsx'
import Login from './pages/Login.jsx'
import { useAdminAuth } from './context/AdminContext.jsx'

function RequireAuth({children}){
  const { adminToken } = useAdminAuth()

  if(!adminToken) {
    return <Navigate to="/login" />
  }

  return children;
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/h" element={<RequireAuth><Home/></RequireAuth>}/>
      <Route path="/add" element={<RequireAuth><Add/></RequireAuth>}/>
      <Route path="/list" element={<RequireAuth><List/></RequireAuth>}/>
      <Route path="/appointments" element={<RequireAuth><Appointments/></RequireAuth>}/>
      <Route path="/service-dashboard" element={<RequireAuth><SerDashboard/></RequireAuth>}/>
      <Route path="/add-service" element={<RequireAuth><AddSer/></RequireAuth>}/>
      <Route path="/list-service" element={<RequireAuth><ListService/></RequireAuth>}/> 
      <Route path="/service-appointments" element={<RequireAuth><ServiceAppointment/></RequireAuth>}/>
    </Routes>
  )
}

export default App