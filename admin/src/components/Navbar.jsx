import React, { useState, useRef, useLayoutEffect, useEffect, useCallback } from 'react'
import { Link, useLocation, useNavigate, NavLink } from 'react-router-dom'
import { navbarStyles as ns } from '../assets/dummyStyles.js'
import logoImg from '../assets/logo.png'
import { Home, UserPlus, Users, Calendar, Grid, PlusSquare, List, X, Menu, LogOut } from 'lucide-react'
import { useAdminAuth } from '../context/AdminContext';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navInnerRef = useRef(null);
    const indicatorRef = useRef(null);
    const location= useLocation()
    const navigate = useNavigate() 

    // Admin Auth
    const { adminToken, logout } = useAdminAuth();

    // sliding active indicator 
    const moveIndicator = useCallback(() => {
      const container = navInnerRef.current;
      const ind = indicatorRef.current;
      if (!container || !ind) return;

      const active = container.querySelector(".nav-item.active");
      if (!active) {
        ind.style.opacity = "0";
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();

      const left = activeRect.left - containerRect.left + container.scrollLeft;
      const width = activeRect.width;

      ind.style.transform = `translateX(${left}px)`;
      ind.style.width = `${width}px`;
      ind.style.opacity = "1";
    }, []);

    useLayoutEffect(() => {
      moveIndicator();
      const t = setTimeout(() => {
        moveIndicator();
      }, 120);
      return () => clearTimeout(t);
    }, [location.pathname, moveIndicator]);

    // toggle mobile menu by pressing escape key
    useEffect(() => {
      const onKey = (e) => {
        if (e.key === "Escape" && open) setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const handleSignOut = () => {
      logout();
      navigate('/login');
    }
    
  return (
<header className ={ns.header}>
<nav className ={ns.navContainer}>
    <div className = {ns.flexContainer}>
        <div className = {ns.logoContainer}>
            <img src={logoImg} alt="Logo" className ={ns.logoImage}/>
            <Link to ='/'>
            <div className ={ns.logoLink}> MEDICARE</div>
            <div className={ns.logoSubtext}>Healthcare Solutions</div>
            </Link>
        </div>
        {/* Centre Navigation*/}
        <div className={ns.centerNavContainer}>
            <div className= {ns.glowEffect}>
                <div className={ns.centerNavInner}>
                    <div ref = {navInnerRef} className={ns.centerNavScrollContainer}
                    style={{
                            WebkitOverflowScrolling : "touch"
                        }}>
                        
                         <CenterNavItem
                    to="/h"
                    label="Dashboard"
                    icon={<Home size={16} />}
                  />
                  <CenterNavItem
                    to="/add"
                    label="Add Doctor"
                    icon={<UserPlus size={16} />}
                  />
                  <CenterNavItem
                    to="/list"
                    label="List Doctors"
                    icon={<Users size={16} />}
                  />
                  <CenterNavItem
                    to="/appointments"
                    label="Appointments"
                    icon={<Calendar size={16} />}
                  />
                  <CenterNavItem
                    to="/service-dashboard"
                    label="Service Dashboard"
                    icon={<Grid size={16} />}
                  />
                  <CenterNavItem
                    to="/add-service"
                    label="Add Service"
                    icon={<PlusSquare size={16} />}
                  />
                  <CenterNavItem
                    to="/list-service"
                    label="List Services"
                    icon={<List size={16} />}
                  />
                  <CenterNavItem
                    to="/service-appointments"
                    label="Service Appointments"
                    icon={<Calendar size={16} />}
                  />
                    </div>

                </div>

            </div>

        </div>
        {/* Right side */}
        <div className={ns.rightContainer}>
            {/* Authentication */}
            {adminToken ? (
                <button onClick={handleSignOut} className={ns.signOutButton + " " + ns.cursorPointer}>
                    Sign Out
                </button>
            ) : (
                <div className="hidden lg:flex item-center gap-2">
                    <Link to="/login" className={ns.loginButton + " " + ns.cursorPointer}>
                        Login 
                    </Link>
                </div>
            )}
            {/* Mobile Toggle */}
          <button onClick={() => setOpen((v) => !v)} className = {ns.mobileMenuButton}>
            {open ? <X size ={18} /> : <Menu size={18} />}
          </button>

        </div>
    </div>
    {/* mobile navgation menu */}
    { open && (
        <div className={ns.mobileOverlay} onClick={() => setOpen(false)}/>
    )}
    {open && (
        <div className ={ns.mobileMenuContainer} id = "mobile-menu">
            <div className = {ns.mobileMenuInner}>
                <MobileItem
                to="/h"
                label="Dashboard"
                icon={<Home size={16} />}
                onClick={() => setOpen(false)}
              />

              <MobileItem
                to="/add"
                label="Add Doctor"
                icon={<UserPlus size={16} />}
                onClick={() => setOpen(false)}
              />
              <MobileItem
                to="/list"
                label="List Doctors"
                icon={<Users size={16} />}
                onClick={() => setOpen(false)}
              />
              <MobileItem
                to="/appointments"
                label="Appointments"
                icon={<Calendar size={16} />}
                onClick={() => setOpen(false)}
              />

              <MobileItem
                to="/service-dashboard"
                label="Service Dashboard"
                icon={<Grid size={16} />}
                onClick={() => setOpen(false)}
              />
              <MobileItem
                to="/add-service"
                label="Add Service"
                icon={<PlusSquare size={16} />}
                onClick={() => setOpen(false)}
              />
              <MobileItem
                to="/list-service"
                label="List Services"
                icon={<List size={16} />}
                onClick={() => setOpen(false)}
              />
              <MobileItem
                to="/service-appointments"
                label="Service Appointments"
                icon={<Calendar size={16} />}
                onClick={() => setOpen(false)}
              />
              <div className={ns.mobileAuthContainer}>
                {adminToken ? (
                    <button onClick ={() => {
                        handleSignOut();
                        setOpen(false);
                    }} className= {ns.mobileSignOutButton}>
                        Sign Out
                    </button>
                ) : (
                    <div className="space-y-2">
                        <Link to="/login" onClick={() => setOpen(false)} className={ns.mobileLoginButton + " " + ns.cursorPointer}>
                          Login 
                        </Link>
                    </div>
                )}
                
              </div>
            </div>

        </div>
    )}
</nav>
</header>
  )
}

export default Navbar

function CenterNavItem({to, label, icon}){
    return(
        <NavLink to ={to} end className={({isActive}) =>
        `nav-item ${isActive ? 'active' : ''}
         ${ns.centerNavItemBase}
         ${isActive ? ns.centerNavItemActive : ns.centerNavItemInactive} 
         `}>
            <span>{icon}</span>
            <span className ='font-medium'>{label}</span>
            
        </NavLink>
    )
}

function MobileItem({to, label, icon, onClick}){
    return(
        <NavLink to ={to} onClick ={onClick} className={({isActive}) => 
        `${ns.mobileItemBase} ${
            isActive ? ns.mobileItemActive : ns.mobileItemInactive
        }`
        }>
            {icon}
            <span className="font-medium-text-sm"> {label}</span>
        </NavLink>
    )
}