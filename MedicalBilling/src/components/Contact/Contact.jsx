import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import emailjs from 'emailjs-com';
import {
  faWhatsapp,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import istockphoto from "../images/istockphoto.jpg";
import {
  faPhone,
  faHeadset,
  faInbox,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="main">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap/>
    </div>
  );
};

export const ContactHero = () => {
  return (
    <section
      className="top"
      data-aos="fade-up"
      data-aos-once="false"
      data-aos-duration="1300"
    >
      <div className="overlay"></div>
      <div className="container">
        <h1 className="display-4 fw-bold">Contact Us</h1>
      </div>
    </section>
  );
};

export const ContactInfo = () => {
  return (
    <section className="pt-4 pt-md-5 text-primary">
      <div className="container">
        <div
          className="row mb-4"
          data-aos="fade-left"
          data-aos-once="false"
          data-aos-duration="1300"
        >
          <div className="col-xl-10 ">
            <h1 className="display-5">
              Let's connect and get to know each other
            </h1>
          </div>
        </div>

        <div className="row g-4">
          <div
            className="col-md-6 col-xl-4"
            data-aos="zoom-out"
            data-aos-once="false"
            data-aos-duration="1300"
          >
            <div className="card card-body shadow text-center align-items-center h-100">
              <div className="icon-lg bg-info bg-opacity-10 text-info rounded-circle mb-2">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="fs-5"
                ></FontAwesomeIcon>
              </div>
              <h5>Call us</h5>
              <div className="d-grid gap-3 d-sm-block">
                <button className="btn btn-sm btn-primary-soft">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="me-2"
                  ></FontAwesomeIcon>
                  (+91) 929-438-2944
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-xl-4"
            data-aos="zoom-out"
            data-aos-once="false"
            data-aos-duration="1300"
          >
            <div className="card card-body shadow text-center align-items-center h-100">
              <div className="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle mb-2">
                <FontAwesomeIcon
                  icon={faInbox}
                  className="fs-5"
                ></FontAwesomeIcon>
              </div>
              <h5>Email us</h5>
              <a
                href="#"
                className="btn btn-link text-decoration-underline p-0 mb-0"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className=" me-1"
                ></FontAwesomeIcon>
                abbasamck@gmail.com
              </a>
            </div>
          </div>

          <div
            className="col-xl-4 position-relative"
            data-aos="zoom-out"
            data-aos-once="false"
            data-aos-duration="1300"
          >
            <div className="card card-body shadow text-center align-items-center h-100">
              <div className="icon-lg bg-warning bg-opacity-10 rounded-circle mb-2">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="fs-5 text-warning"
                ></FontAwesomeIcon>
              </div>
              <h5>Social media</h5>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="btn btn-sm bg-facebook px-2 mb-0" href="#">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="fab fa-fw fa-facebook-f"
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-sm bg-instagram px-2 mb-0" href="#">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="fab fa-fw fa-instagram"
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-sm bg-whatsapp px-2 mb-0" href="#">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="fab fa-fw fa-whatsapp"
                    ></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm('service_s4e80ae', 'template_p2ejbfe', form.current, '81iLZzkeP-TpmZjFe')
        .then((result) => {
          console.log(result.text);
          form.current.reset();
        })
        .catch((error) => {
          console.log(error.text);
        });
    } else {
      console.log('Form validation failed');
    }
  };

  const validateForm = () => {
    const name = form.current['user_name'].value;
    const email = form.current['user_email'].value;
    const mobileNumber = form.current['user_mobileNumber'].value;
    const message = form.current['message'].value;

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !mobileNumber || !message) {
      alert('All fields are required');
      return false;
    } else if (!emailRegex.test(email)) {
      alert('Invalid email');
      return false;
    }

    return true;
  };
  return (
    <div className="container text-primary">
  <div className="row g-4 g-lg-5 align-items-center my-5">
    <div className="col-lg-6 text-center mb-5" data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">
      <img
        src={istockphoto}
        className="d-block mx-lg-auto img-fluid"
        alt="Vector"
        width="700"
      />
    </div>

    <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200" data-aos-once="true">
      <div
        className="card bg-white p-4"
        style={{
          border: "none",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        }}
      >
        <div className="card-header bg-white p-0 pb-3">
          <h3 className="mb-2 text-center fs-2">Send us a message</h3>
        </div>

        <div className="card-body p-0 mt-4">
          <form ref={form} onSubmit={sendEmail} >
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold d-block">
                  Your name *
                </label>
                <input type="text" className="form-control" name="user_name"/>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold d-block">
                  Email address *
                </label>
                <input type="email" className="form-control"  name="user_email"/>
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold d-block">
                  Mobile number *
                </label>
                <input type="text" className="form-control" name="user_mobileNumber"/>
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold d-block">
                  Message *
                </label>
                <textarea className="form-control" rows="3" name="message"></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-outline-primary mb-0" type="submit" value="Send">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export const ContactMap = () => {

    return (
        <section className="pt-0 pt-lg-5 my-5" data-aos="fade-up" data-aos-once="false" data-aos-duration="1300">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <iframe className="w-100 h-300px grayscale rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-104.99566678412278!3d39.75018223971057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78db5e9c79a5%3A0x10b6027bf63a78f4!2s1312%2017th%20St%2C%20Denver%2C%20CO%2080202%2C%20USA!5e0!3m2!1sen!2suk!4v1641165508124!5m2!1sen!2suk"
                  height="500" style={{ border: '0' }} allowFullScreen="" loading="lazy" title="Map"></iframe>
              </div>
            </div>
          </div>
        </section>
      );


};
