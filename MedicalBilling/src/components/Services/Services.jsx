import React from "react"
import "./Services.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faCode,
  faShield,
  faDollarSign,
  faPhone,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

export const Services = ()=>{
    return(
        <div className="main">
            <ServiceHero/>
            <ServiceWhoWeService/>
        </div>
    )
}

export const ServiceHero = ()=>{
    return(
    <section className="top" data-aos="fade-up" data-aos-once="false" data-aos-duration="1300">
        <div className="overlay"></div>
        <div className="container">
            <h1 className="display-4 fw-bold">Services</h1>
        </div>
    </section>

    )
}

export const ServiceWhoWeService = ()=>{
    return(
        <div className="services pb-2">
            <div id="serviceshead" className="text-center pt-5 pb-3" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-duration="2000">
                <h1 className="fs-1 mb-3 fw-semibold">Our Services</h1>
                <p className="lead fs-6 mt-5 mb-3 fw-semibold">AMCK Knowledge Solutions has ability to deal with any speciality. Our professionals are expert in multi-specialities.</p>
            </div>
    
            <div className="container my-5">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="card custom-card" data-aos="zoom-out" data-aos-duration="1200" data-aos-once="false">
                            <div className="icon">
                                <FontAwesomeIcon icon={faChartBar} className="fa-2x"></FontAwesomeIcon>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Revenue Cycle Management</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="card custom-card" data-aos="zoom-out" data-aos-duration="1200" data-aos-once="false">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCode} className="fa-2x"></FontAwesomeIcon>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Medical Coding</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="card custom-card" data-aos="zoom-out" data-aos-duration="1200" data-aos-once="false">
                            <div className="icon">
                                <FontAwesomeIcon icon={faShield} className="fa-2x"></FontAwesomeIcon>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Insurance Verification</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="card custom-card" data-aos="zoom-out" data-aos-duration="1200" data-aos-once="false">
                            <div className="icon">
                                <FontAwesomeIcon icon={faDollarSign} className="fa-2x"></FontAwesomeIcon>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Payment Posting</h5>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="card custom-card" data-aos="zoom-out" data-aos-duration="1200" data-aos-once="false">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} className="fa-2x"></FontAwesomeIcon>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Patient Follow-up</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="card custom-card" data-aos="zoom-out" data-aos-duration="1200" data-aos-once="false">
                            <div className="icon">
                                <FontAwesomeIcon icon={faClipboard} className="fa-2x"></FontAwesomeIcon>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Scribing Services</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}