import Logo from "./images/Logo.png"
import "./Footer.css"
function Footer(){
    return(
        <div className="main">

        <footer className="pt-lg-8 pt-5 border-top footer bg-white" data-aos="fade-up-left" data-aos-once="true" data-aos-duration="2000">
        <div className="container mt-lg-2">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    
                    <div className="mb-4">
                        <img src={Logo} width="100" height="100" alt="Geeks" className="logo-inverse"/>
                        <div className="mt-4">
                            <p>Empowering Healthcare Excellence through Precise Billing Solutions</p>
                            
                            <div className="fs-4 mt-4">
                                
                                <a href="#" className="me-2">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offset-lg-1 col-lg-2 col-md-3 col-6">
                    <div className="mb-4">

                        <h3 className="fw-bold mb-3">Services</h3>
                        <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                            <li><a href="services.html" className="nav-link">Medical Billing & Coding</a></li>
                            <li><a href="services.html" className="nav-link">Prior Authorization Services</a></li>
                            <li><a href="services.html" className="nav-link">Patient Financial Services</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <div className="mb-4">
                        
                        <h3 className="fw-bold mb-3">About</h3>
                        <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                            <li><a href="about.html" className="nav-link">About Us</a></li>
                            <li><a href="about.html" className="nav-link">Why Choose Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    
                    <div className="mb-4">
                        <h3 className="fw-bold mb-3">Get in touch</h3>
                        <p>1312 17TH STREET UNIT 2229, DENVER, COLORADO-80202</p>
                        <p className="mb-1">
                            Email:
                            <a href="#">abbasamck@gmail.com</a>
                        </p>
                        <p>
                            Phone:
                            <span className="text-dark fw-semibold">(+91) 929-438-2944</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center g-0 border-top py-4 mt-2">
                
                <div className="col-lg-4 col-md-5 col-12">
                    <span>
                        ©
                        <span id="copyright2">
                            <script>
                                document.getElementById("copyright2").appendChild(document.createTextNode(new Date().getFullYear()));
                            </script>
                        </span>
                        AMCK Knowledge Solutions.
                    </span>
                </div>
    
         
            </div>
        </div>
    </footer>
        </div>
    )
}

export default Footer;