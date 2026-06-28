import { useLocation, Link } from 'react-router-dom';
import { SignOutButton, useClerk, UserButton, useUser } from '@clerk/react';
import { Menu, User, Key, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { navbarStyles } from '../assets/dummyStyles';

const STORAGE_KEY = "doctortoken_v1";

const Navbar = () => {
  const location = useLocation();
  const clerk = useClerk();
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(() => {
    try {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      return false;
    }
  });

  //hide and show navbar when scrolling down %
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // sync doctor login
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        setIsDoctorLoggedIn(Boolean(e.newValue));
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // close toggle menu for mobile 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);


  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Doctors', href: '/doctors' },
    { label: 'Services', href: '/services' },
    { label: 'Appointments', href: '/appointments' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>

      <nav className={navbarStyles.navbarContainer} >
        <div className={navbarStyles.contentWrapper}>
          <div className={navbarStyles.flexContainer}>
            {/* LOGO */}
            <Link to='/' className={navbarStyles.logoLink}>
              <div className={navbarStyles.logoContainer}>
                <div className={navbarStyles.logoImageWrapper}>
                  <img src={logo} alt='Logo' className={navbarStyles.logoImage} />
                </div>
              </div>
              <div className={navbarStyles.logoTextContainer}>
                <h1 className={navbarStyles.logoTitle}>Medicare</h1>
                <p className={navbarStyles.logoSubtitle}>Healthcare Solutions</p>
              </div>
            </Link>

            <div className={navbarStyles.desktopNav}>
              <div className={navbarStyles.navItemsContainer}>
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`${navbarStyles.navItem} ${isActive ? navbarStyles.navItemActive : navbarStyles.navItemInactive
                        }`}
                    >
                      {item.label}

                    </Link>
                  );
                })}
              </div>
            </div>

            {/* right side */}
            <div className={navbarStyles.rightContainer}>
              {!isSignedIn && (
                <Link to='/doctor-admin/login' className={navbarStyles.doctorAdminButton}>
                  <User className={navbarStyles.doctorAdminIcon} />
                  <span className={navbarStyles.doctorAdminText}>Doctor Admin</span>
                </Link>
              )}
              {!isSignedIn ? (
                /* Patient Login */
                <button
                  onClick={() => clerk.openSignIn()}
                  className={navbarStyles.loginButton}
                >
                  <Key className={navbarStyles.loginIcon} />
                  Login
                </button>
              ) : (
                <UserButton afterSignOutUrl="/" />
              )}
              {/* to toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={navbarStyles.mobileToggle}
              >
                {isOpen ? (
                  <X className={navbarStyles.toggleIcon} />
                ) : (<Menu className={navbarStyles.toggleIcon} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className={navbarStyles.mobileMenu}>
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.href
                return (
                  <Link key={idx} to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`${navbarStyles.mobileMenuItem} ${isActive ? navbarStyles.mobileMenuItemActive : navbarStyles.mobileMenuItemInactive
                      }`}>
                    {item.label}
                  </Link>
                )
              })}
              {!isSignedIn && (
                <Link to='/doctor-admin/login' className={navbarStyles.mobileDoctorAdminButton}
                  onClick={() => setIsOpen(false)}>
                  Doctor Admin
                </Link>
              )}
              {!isSignedIn ? (
                <div className={navbarStyles.mobileLoginContainer}>
                  <button onClick={() => {
                    setIsOpen(false);
                    clerk.openSignIn()
                  }} className={navbarStyles.mobileLoginButton}>
                    Login
                  </button>
                </div>
              ) : (
                <div className={navbarStyles.mobileLoginContainer}>
                  <SignOutButton>
                    <button className={navbarStyles.mobileLoginButton} onClick={() => setIsOpen(false)}>
                      Sign Out
                    </button>
                  </SignOutButton>
                </div>
              )}
            </div>
          )}
        </div>
        <style dangerouslySetInnerHTML={{ __html: navbarStyles.animationStyles }} />
      </nav>
    </>
  );
};

export default Navbar;

