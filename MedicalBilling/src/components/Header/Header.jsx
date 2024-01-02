import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faWhatsapp, faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../images/Logo.png"
import {Link,NavLink} from 'react-router-dom'
import "./Header.css"
import { faMapMarkerAlt,faPhone } from '@fortawesome/free-solid-svg-icons';
function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return(
        <div className="main">
        <div className="container-fluid bg-light p-0" data-aos="fade-down" data-aos-once="true">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt}><small></small></FontAwesomeIcon>
                    <small className="mx-2">1312 17TH STREET UNIT 2229, DENVER, COLORADO- 80202</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <FontAwesomeIcon icon={faPhone}><small className="fa fa-phone-alt text-primary"></small></FontAwesomeIcon>
                    <small className="mx-2">+91 929-438-2944</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square text-primary me-1" href=""><FontAwesomeIcon icon={faFacebookSquare} className="fab fa-facebook-f"></FontAwesomeIcon></a>
                    <a className="btn btn-sm-square text-primary me-1" href=""><FontAwesomeIcon icon={faWhatsapp} className="fab fa-whatsapp"></FontAwesomeIcon></a>
                    <a className="btn btn-sm-square text-primary me-1" href=""><FontAwesomeIcon icon={faInstagram} className="fab fa-instagram"></FontAwesomeIcon></a>
                </div>
            </div>
        </div>
    </div>

    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0" data-aos="flip-up" data-aos-once="true" data-aos-duration="1000">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <img src={Logo} alt="AMCK"/>
        </Link>
        <button type="button" onClick={toggleMenu} className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <NavLink to='/' className={({isActive}) => `nav-item nav-link  ${isActive ? 'text-primary':'text-secondary'}`}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => `nav-item nav-link  ${isActive ? 'text-primary':'text-secondary'}`}>About</NavLink>
                <NavLink to="/services" className={({isActive}) => `nav-item nav-link  ${isActive ? 'text-primary':'text-secondary'}`}>Services</NavLink>
                <NavLink to="/contact" className={({isActive}) => `nav-item nav-link  ${isActive ? 'text-primary':'text-secondary'}`}>Contact</NavLink>
            </div>
        </div>
    </nav>
    </div>
    )
}

export default Header;