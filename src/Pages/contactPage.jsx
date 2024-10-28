import React from 'react'
import Header from '../Componants/Header'
import Footer from '../Componants/Footer'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ContactPage = () => {
  return (
  <>
  {<Header/>}
 
  {/* Page Header Start */}
  <div className="container-fluid page-header mb-5 py-5">
    <div className="container">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        Contact Us
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb text-uppercase">
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Home
            </a>
          </li>
          {/* <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li> */}
          <li className="breadcrumb-item text-white active" aria-current="page">
            Contact
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}


  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase">Get In Touch</h6>
          <h1 className="mb-4">Contact For Any Query</h1>
          <p className="mb-4">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax &amp; PHP in a few minutes. Just copy and
            paste the files, add a little code and you're done.{" "}
            <a href="https://htmlcodex.com/contact-form">Download Now</a>.
          </p>
          <iframe
            className="position-relative w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112080.23056729783!2d76.93435674335936!3d28.614557000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05da8e7c4e09%3A0xd22b39d9e17c12d1!2sChanakya%20Place%20Part-1%20Uttam%20Nagar!5e0!3m2!1sen!2sin!4v1729416944882!5m2!1sen!2sin"
            frameBorder={0}
            style={{ height: 300, border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-light p-5 h-100 d-flex align-items-center">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="Number"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="Number">Contact Number</label>
                  </div>
                </div>
                <li>
              <select
                className="form-select form-floating select_main"
                aria-label="Default select example"
              >
                <option selected>Netting</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </li>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 100 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Requirement</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 100 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Address</label>
                  </div>
                </div>
                <div className="col-12 ">
                  <button className="btn btn-primary w-100 py-3" type="submit" >
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
  {/* Contact End */}
  <>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
  />
  <a
    href="https://api.whatsapp.com/send?phone=9806161974&text=Hello Sir"
    className="float"
    target="_blank"
  >
    <i className="fa fa-whatsapp my-float" />
  </a>
  <div className="container my-5">
            <div className="row">
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="card text-center" style={{ height: '300px', transition: '0.3s', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faEnvelope} size="4x" style={{ color: 'orange' }} />
                            <h5 className="card-title mt-5">Email Us</h5>
                            <p className="card-text">inquiry@Vpestify.com</p>
                            <p className="card-text">EcommerceVpestify@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="card text-center" style={{ height: '300px', transition: '0.3s', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faPhone} size="4x" style={{ color: 'orange' }} />
                            <h5 className="card-title mt-5">Call Us</h5>
                            <p className="card-text">+91 9806161974</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="card text-center" style={{ height: '300px', transition: '0.3s', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="4x" style={{ color: 'orange' }} />
                            <h5 className="card-title mt-5">Address</h5>
                            <p className="card-text">E-60, Ground Floor, Chanakya Palace 1, Uttam Nagar,<br /> Delhi - 110059</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="card text-center" style={{ height: '300px', transition: '0.3s', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="4x" style={{ color: 'orange' }} />
                            <h5 className="card-title mt-5">Address</h5>
                            <p className="card-text">554 Bhardwaj Complex, Sector 39,<br /> Gurgaon - 122022, (HR)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>


  {<Footer/>}
  
  </>
  )
}

export default ContactPage