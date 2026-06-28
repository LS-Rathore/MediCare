import React from 'react'
import {footerStyles} from '../assets/dummyStyles'
import logo from '../assets/logo.png'
import {Stethoscope, ArrowRight, Activity, Phone, Mail, MapPin, Send} from 'lucide-react'

// Custom SVGs since lucide-react removed brand icons
const Facebook = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const Twitter = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const Instagram = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const Linkedin = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Doctors", href: "/doctors" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Appointments", href: "/appointments" },
];

const services = [
  { name: "Blood Pressure Check", href: "/services" },
  { name: "Blood Sugar Test", href: "/services" },
  { name: "Full Blood Count", href: "/services" },
  { name: "X-Ray Scan", href: "/services" },
  { name: "Blood Sugar Test", href: "/services" },
];

    const socialLinks = [
        {icon: Facebook,  name: "Facebook",  color: footerStyles.facebookColor},
        {icon: Twitter,   name: "Twitter",   color: footerStyles.twitterColor},
        {icon: Instagram, name: "Instagram", color: footerStyles.instagramColor},
        {icon: Linkedin,  name: "LinkedIn",  color: footerStyles.linkedinColor},
    ]
   

  return (
    <footer className={footerStyles.footerContainer}>
        <div className={footerStyles.floatingIcon1}>
            <Stethoscope className={footerStyles.stethoscopeIcon} />
        </div>
        <div className={footerStyles.floatingIcon2}
        style={{animationDelay:"3s"}}>
            <Activity className={footerStyles.activityIcon}/>
        </div>
        <div className={footerStyles.mainContent}>
            <div className={footerStyles.gridContainer}>
                <div className={footerStyles.companySection}>
                    <div className={footerStyles.logoContainer}>
                        <div className={footerStyles.logoWrapper}>
                            <div className={footerStyles.logoImageContainer}>
                                <img src={logo} alt="Logo" className={footerStyles.logoImage}/>
                            </div>
                        </div>
                        <h2 className={footerStyles.companyName}>
                            MediCare
                            <p className={footerStyles.companyTagline}>
                            HealthCare Solutions
                        </p>
                        </h2>
                        
                    </div>
                    <p className={footerStyles.companyDescription}>
                        We provide seamless healthcare solutions with our innovative platform. Trusted by doctors and patients alike.
                    </p>
                    <div className={footerStyles.contactContainer}>
                        <div className={footerStyles.contactItem}>
                            <div className={footerStyles.contactIconWrapper}>
                                <Phone className={footerStyles.contactIcon}/>
                            </div>
                            <span className={footerStyles.contactText}>
                                +91 8299431275
                            </span>
                        </div>
                        <div className={footerStyles.contactItem}>
                            <div className={footerStyles.contactIconWrapper}>
                                <Mail className={footerStyles.contactIcon}/>
                            </div>
                            <span className={footerStyles.contactText}>
                                medicaresolutions@gmail.com
                            </span>
                        </div>
                        <div className={footerStyles.contactItem}>
                            <div className={footerStyles.contactIconWrapper}>
                                <MapPin className={footerStyles.contactIcon}/>
                            </div>
                            <span className={footerStyles.contactText}>
                                Surat, Gujarat, India
                            </span>
                        </div>
                    </div>
                </div>
                {/* Quick Links */}
                <div className={footerStyles.linksSection}>
                    <h3 className={footerStyles.sectionTitle}>Quick Links</h3>
                    <ul className={footerStyles.linksList}>
                        {quickLinks.map((link, index) => (
                            <li key={link.name} className={footerStyles.linkItem}>
                                <a href={link.href} className={footerStyles.quickLink}
                                style={{animationDelay: `${index * 60}ms`}}>
                                    <div className={footerStyles.quickLinkIconWrapper}>
                                        <ArrowRight className={footerStyles.quickLinkIcon} />
                                    </div>
                                    <span>{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Services */}
                <div className={footerStyles.linksSection}>
                    <h3 className={footerStyles.sectionTitle}>Our Services</h3>
                    <ul className={footerStyles.linksList}>
                        {services.map((service, index) => (
                            <li key={`${service.name}-${index}`}>
                                <a href={service.href} className={footerStyles.serviceLink}>
                                    <div className={footerStyles.serviceIcon}></div>
                                    <span>{service.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Newsletter & Social */}
                <div className={footerStyles.newsletterSection}>
                    <h3 className={footerStyles.newsletterTitle}>Stay Connected</h3>
                    <p className={footerStyles.newsletterDescription}>
                        Subscribe for health tips, medical updates, and wellness insights delivered to your inbox.
                    </p>
                    {/* Mobile newsletter */}
                    <div className={footerStyles.mobileNewsletterContainer}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={footerStyles.emailInput}
                        />
                        <button className={footerStyles.mobileSubscribeButton}>
                            <Send className={footerStyles.mobileButtonIcon} />
                            Subscribe
                        </button>
                    </div>
                    {/* Desktop newsletter */}
                    <div className={footerStyles.desktopNewsletterContainer}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={footerStyles.desktopEmailInput}
                        />
                        <button className={footerStyles.desktopSubscribeButton}>
                            <Send className={footerStyles.desktopButtonIcon} />
                            <span className={footerStyles.desktopButtonText}>Subscribe</span>
                        </button>
                    </div>
                    {/* Social icons */}
                    <div className={footerStyles.socialContainer}>
                        {socialLinks.map(({ icon: Icon, name, color }, index) => (
                            <a
                                key={name}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={footerStyles.socialLink}
                                style={{ animationDelay: `${index * 120}ms` }}
                            >
                                <div className={footerStyles.socialIconBackground} />
                                <Icon className={`${footerStyles.socialIcon} ${color}`} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {/* Bottom bar */}
            <div className={footerStyles.bottomSection}>
                <div className={footerStyles.copyright}>
                    <span>&copy; {currentYear} MediCare Healthcare.</span>
                </div>
                <div className={footerStyles.designerText}>
                    <span>Designed by <span className={footerStyles.designerLink}>LSR</span></span>
                </div>
            </div>
        </div>
        <style>{footerStyles.animationStyles}</style>
    </footer>
  )
}

export default Footer