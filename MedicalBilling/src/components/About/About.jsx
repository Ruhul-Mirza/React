import React from "react"
import "./About.css"
import istockphoto from "../images/istockphoto.jpg"
export const AboutHero = () => {
    return(
        <section className="top" data-aos="fade-up" data-aos-once="false" data-aos-duration="1300">
                <div className="overlay"></div>
                <div className="container">
                    <h1 className="display-4 fw-bold">About Us</h1>
                </div>
            </section>
    )
}

export const AboutWhoWeAre = () => {
    return(
        <div className="container col-xxl-8 px-4 py-3" width="100vw">
                <div className="row flex-lg-row-reverse align-items-center g-5 pt-5 pb-3">
                    <div className="col-12 col-lg-6 order-lg-2" data-aos="fade-right" data-aos-duration="1200" data-aos-once="false">
                        <img src={istockphoto} className="d-block mx-lg-auto img-fluid whoweare" alt="Who We Are" loading="lazy" />
                    </div>
                    <div className="col-12 col-lg-6 order-lg-1 text-center" data-aos="fade-left" data-aos-duration="1200" data-aos-once="false">
                        <h1 className="display-5 lh-1 mb-3 text-primary">About Us</h1>
                        <h1 className="fs-4 fw-bold mb-3" style={{ color: "#6aa53b" }}>Our Pride Is Quality Medical Billing, Dental Billing And Accounting Services</h1>
                        <p className="lead fs-6 text-primary">At CapitalMed Solutions, we provide tailored end-to-end Revenue Cycle Management (RCM) solutions for the healthcare industry. Our comprehensive services include medical and dental billing, coding, credentialing, bookkeeping, patient helpdesk, scribing and more. With a deep understanding of healthcare intricacies, our experienced team maximizes revenue and streamlines operations. We cater to practices of all sizes, offering transparent, accurate, and timely support. CapitalMed Solutions is a trusted partner to many organizations across the nation. Get in touch with us today to learn more.At CapitalMed Solutions, we provide tailored end-to-end Revenue Cycle Management (RCM) solutions for the healthcare industry. Our comprehensive services include medical and dental billing, coding, credentialing, bookkeeping, patient helpdesk, scribing and more. With a deep understanding of healthcare intricacies, our experienced team maximizes revenue and streamlines operations. We cater to practices of all sizes, offering transparent, accurate, and timely support. CapitalMed Solutions is a trusted partner to many organizations across the nation. Get in touch with us today to learn more.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="/contact.html" className="mx-auto"><button type="button" className="btn btn-outline-primary px-4">Know More</button></a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export const AboutWhyChooseUs = () => {
    return (
        <section className="why-us" >
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2" data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-duration="2000">
                    <h2 className="mt-5 text-center">Why Choose Us</h2>
                    <p className="mb-5 text-center">Why choose us section design HTML is created by using Bootstrap and custom HTML CSS. This our services section cards are more beautiful with pure CSS hover effects.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 col-lg-4" data-aos="zoom-in-right" data-aos-once="false" data-aos-duration="1200">
                    <div className="box">
                        <span>01</span>
                        <h4><a href="#">Expertise</a></h4>
                        <p>With over [Number] years in the industry, we've honed our skills and gained comprehensive knowledge of the medical billing and coding field</p>
                        <img src={istockphoto} alt="" />
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4" data-aos="zoom-in-left" data-aos-once="false" data-aos-duration="1200">
                    <div className="box">
                        <span>02</span>
                        <h4><a href="#">Efficiency</a></h4>
                        <p>Our streamlined processes and advanced technologies ensure efficient and accurate billing.</p>
                        <img src={istockphoto} alt="" />
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4" data-aos="zoom-in-right" data-aos-once="false" data-aos-duration="1200">
                    <div className="box">
                        <span>03</span>
                        <h4><a href="#">Dedicated Support</a></h4>
                        <p>Our responsive and knowledgeable support team is available to assist you with any questions or concerns.</p>
                        <img src={istockphoto} alt="" />
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4" data-aos="zoom-in-left" data-aos-once="false" data-aos-duration="1200">
                    <div className="box">
                        <span>04</span>
                        <h4><a href="#">Proven Success</a></h4>
                        <p>Our track record speaks for itself. We've helped numerous healthcare providers enhance their revenue and reduce administrative burdens.</p>
                        <img src={istockphoto} alt="" />
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4" data-aos="zoom-in-right" data-aos-once="false" data-aos-duration="1200">
                    <div className="box">
                        <span>05</span>
                        <h4><a href="#">Data Security</a></h4>
                        <p>We take the security of your patient's data very seriously. Our systems and processes are fully compliant with HIPAA regulations. Your sensitive information is safe with us.</p>
                        <img src={istockphoto} alt="" />
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4" data-aos="zoom-in-left" data-aos-once="false" data-aos-duration="1200">
                    <div className="box">
                        <span>06</span>
                        <h4><a href="#">Ongoing Education</a></h4>
                        <p> In the dynamic healthcare industry, staying updated is crucial. We stay abreast of the latest regulations, coding changes, and industry best practices to keep your practice compliant and efficient.</p>
                        <img src={istockphoto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}


export const About = () => {
    return (
        <div className="main">
            <AboutHero />
            <AboutWhoWeAre />
            <AboutWhyChooseUs />
        </div>
    )
}