import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import istockphoto from "../images/istockphoto.jpg";
import why from "../images/why.jpg";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ServiceWhoWeService } from "../Services/Services";
import {
  faFileAlt,
  faMoneyCheckAlt,
  faIdCard,
  faChartBar,
  faCode,
  faShield,
  faDollarSign,
  faPhone,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { AboutWhoWeAre, AboutWhyChooseUs } from "../About/About";

function Home() {
  useEffect(() => {
    AOS.init({
      offset: 120,
    });
  }, []);

  return (
    <div className="main">
      <header
        className="hero"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-duration="1300"
      >
        <img src={why} alt="" />
        <div className="container">
          <h1 className="text-primary">AMCK Knowledge Solutions</h1>
          <div className="hero-button">
            <NavLink
              to="/about"
              className="btn font-bold km btn-primary text-white btn-lg mt-3"
            >
              Know More
            </NavLink>
          </div>
        </div>
      </header>

      <div className="cards mt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 my-5">
              <div
                className="card mb-4 d-flex h-100 startcards"
                data-aos="zoom-in"
                data-aos-duration="2000"
                data-aos-once="false"
              >
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="fa-4x text-center my-4 icon-color"
                ></FontAwesomeIcon>
                <div className="card-body">
                  <h5 className="card-title service-title fw-bold fs-4">
                    Medical Billing & Coding
                  </h5>
                  <p className="card-text">
                    Timely submission of claims, Claims Scrubbing through Manual
                    and Artificial Intelligence, Eligibility and Benefits
                    Verification, Rejections and Denials Management, AR calling
                    and Follow up, Superbill claims process, Dental Billing,
                    Credentialing services, Scribing Services
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-5">
              <div
                className="card mb-4 d-flex h-100 startcards"
                data-aos="zoom-in"
                data-aos-duration="2000"
                data-aos-once="false"
              >
                <FontAwesomeIcon
                  icon={faIdCard}
                  className="fa-4x text-center my-4 icon-color"
                ></FontAwesomeIcon>
                <div className="card-body">
                  <h5 className="card-title service-title fw-bold fs-4">
                    Prior Authorization Services
                  </h5>
                  <p className="card-text">
                    We can help Medical Practitioners with Acquiring validation
                    or certification from either an insurance provider or
                    healthcare entity prior to the administration or performance
                    of a specific medical service, treatment, or procedure at a
                    very nominal rate.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-5">
              <div
                className="card mb-4 d-flex h-100 startcards"
                data-aos="zoom-in"
                data-aos-duration="2000"
                data-aos-once="false"
              >
                <FontAwesomeIcon
                  icon={faMoneyCheckAlt}
                  className="fa-4x text-center my-4 icon-color"
                ></FontAwesomeIcon>
                <div className="card-body">
                  <h5 className="card-title service-title fw-bold fs-4">
                    Patient Financial Services:
                  </h5>
                  <p className="card-text">
                    Patient statement, Following up on patients with high
                    outstanding patient responsibility balances, Taking calls
                    pertaining to patients billing queries
                  </p>
                </div>
              </div>
            </div>
          </div>

          <AboutWhoWeAre />
        </div>
      </div>

      <ServiceWhoWeService />

      <AboutWhyChooseUs />
    </div>
  );
}

export default Home;
