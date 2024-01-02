import React, { useEffect,useState } from "react";
import "aos/dist/aos.css";
import AOS from 'aos'; 
import istockphoto from "./images/istockphoto.jpg"
import why from "./images/why.jpg"
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

function Home() {
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 120,
    });

    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
          <h1>AMCK Knowledge Solutions</h1>
          <div className="hero-button">
            <a href="./about.html">
              <button
                type="button"
                className="btn btn-outline-primary btn-lg mt-3"
              >
                Know More
              </button>
            </a>
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
                  className="fa-4x text-center my-4"
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
                  className="fa-4x text-center my-4"
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
                  className="fa-4x text-center my-4"
                ></FontAwesomeIcon>
                <div className="card-body">
                  <h5 className="card-title service-title fw-bold fs-4">
                    Patient Financial Services:{" "}
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

          <div className="container col-xxl-8 px-4 py-3">
            <div className="row flex-lg-row-reverse align-items-center g-5 pt-5 pb-3">
              <div
                className="col-12 col-lg-6 order-lg-2"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <img
                  src={istockphoto}
                  className="d-block mx-lg-auto img-fluid whoweare"
                  alt="Who We Are"
                  loading="lazy"
                />
              </div>
              <div
                className="col-12 col-lg-6 order-lg-1 text-center"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <h1 className="display-5 lh-1 mb-3">Who We Are ?</h1>
                <h1
                  className="fs-4 fw-bold mb-3"
                  style={{ color: "dodgerblue" }}
                >
                  Our Pride Is Quality Medical Billing, Dental Billing, Prior
                  Authorization, RCM Services, Scribing Services, Credentialing
                  Services
                </h1>
                <p className="lead fs-6">
                  At AMCK Knowledge Solutions, we provide end-to-end Revenue
                  Cycle Management (RCM) solutions for the healthcare industry.
                  Our comprehensive services include medical and dental billing,
                  coding, credentialing, patient helpdesk, scribing and more.
                  With a deep understanding of healthcare intricacies, our
                  experienced team maximizes revenue and streamlines operations.
                  We cater to practices of all sizes, offering transparent,
                  accurate, and timely support. AMCK Knowledge Solutions is a
                  trusted partner to many organizations across the nation. Get
                  in touch with us today to learn more.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <a href="./about.html" className="mx-auto">
                    <button
                      type="button"
                      className="btn btn-outline-primary px-4"
                    >
                      Know More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services pb-2">
        <div
          id="serviceshead"
          className="text-center pt-5 pb-3"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          <h1 className="display-5 mb-3 fw-900">Who We Service?</h1>
          <p className="lead fs-6 p-3">
            AMCK Knowledge Solutions has ability to deal with any speciality.
            Our professionals are expert in multi-specialities.
          </p>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="card custom-card"
                data-aos="zoom-out"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faChartBar}
                    className="fa-2x"
                  ></FontAwesomeIcon>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Revenue Cycle Management</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="card custom-card"
                data-aos="zoom-out"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="fa-2x"
                  ></FontAwesomeIcon>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Medical Coding</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="card custom-card"
                data-aos="zoom-out"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faShield}
                    className="fa-2x"
                  ></FontAwesomeIcon>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Eligibility & Benefits Verification
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="card custom-card"
                data-aos="zoom-out"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="fa-2x"
                  ></FontAwesomeIcon>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Payment Posting</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="card custom-card"
                data-aos="zoom-out"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="fa-2x"
                  ></FontAwesomeIcon>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Patient Collection</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="card custom-card"
                data-aos="zoom-out"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faClipboard}
                    className="fa-2x"
                  ></FontAwesomeIcon>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Scribing Services</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="why-us">
        <div className="container">
          <div className="row">
            <div
              className="col-md-8 offset-md-2"
              data-aos="fade-down"
              data-aos-anchor-placement="center-bottom"
              data-aos-once="true"
              data-aos-duration="2000"
            >
              <h2 className="mt-5 text-center">Why Choose Us</h2>
              <p className="mb-5 text-center">
                Why choose us section design HTML is created by using Bootstrap
                and custom HTML CSS. This our services section cards are more
                beautiful with pure CSS hover effects.
              </p>
            </div>
          </div>

          <div className="row">
            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-right"
              data-aos-once="false"
              data-aos-duration="1200"
            >
              <div className="box">
                <span>01</span>
                <h4>
                  <a href="#">Expertise</a>
                </h4>
                <p>
                  With over [Number] years in the industry, we've honed our
                  skills and gained comprehensive knowledge of the medical
                  billing and coding field
                </p>
                <img src={istockphoto} alt="" />
              </div>
            </div>

            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-left"
              data-aos-once="false"
              data-aos-duration="1200"
            >
              <div className="box">
                <span>02</span>
                <h4>
                  <a href="#">Efficiency</a>
                </h4>
                <p>
                  Our streamlined processes and advanced technologies ensure
                  efficient and accurate billing.
                </p>
                <img src={istockphoto} alt="" />
              </div>
            </div>

            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-right"
              data-aos-once="false"
              data-aos-duration="1200"
            >
              <div className="box">
                <span>03</span>
                <h4>
                  <a href="#">Dedicated Support</a>
                </h4>
                <p>
                  Our responsive and knowledgeable support team is available to
                  assist you with any questions or concerns.
                </p>
                <img src={istockphoto} alt="" />
              </div>
            </div>

            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-left"
              data-aos-once="false"
              data-aos-duration="1200"
            >
              <div className="box">
                <span>04</span>
                <h4>
                  <a href="#">Proven Success</a>
                </h4>
                <p>
                  Our track record speaks for itself. We've helped numerous
                  healthcare providers enhance their revenue and reduce
                  administrative burdens.
                </p>
                <img src={istockphoto} alt="" />
              </div>
            </div>

            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-right"
              data-aos-once="false"
              data-aos-duration="1200"
            >
              <div className="box">
                <span>05</span>
                <h4>
                  <a href="#">Data Security</a>
                </h4>
                <p>
                  We take the security of your patient's data very seriously.
                  Our systems and processes are fully compliant with HIPAA
                  regulations. Your sensitive information is safe with us.
                </p>
                <img src={istockphoto} alt="" />
              </div>
            </div>

            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-left"
              data-aos-once="false"
              data-aos-duration="1200"
            >
              <div className="box">
                <span>06</span>
                <h4>
                  <a href="#">Ongoing Education</a>
                </h4>
                <p>
                  {" "}
                  In the dynamic healthcare industry, staying updated is
                  crucial. We stay abreast of the latest regulations, coding
                  changes, and industry best practices to keep your practice
                  compliant and efficient.
                </p>
                <img src={istockphoto} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
