import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
// import {
//   faFacebookF,
//   faTwitter,
//   faLinkedinIn,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BiPhone } from "react-icons/bi";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <>
  {/* Topbar Start */}
  <div className="container-fluid  d-none d-lg-block topbar_new ">
    <div className="row align-items-center top-bar">
      <div className="col-lg-3 col-md-12 text-center text-lg-start">
        <a href="" className="navbar-brand m-0 p-0">
          {/* <h1 class="text-primary m-0">Vpestify</h1> */}
          <img src="img/main-logo.png" alt="" width="180px" />
        </a>
      </div>
      <div className="col-lg-9 col-md-12 text-end">
        <div className="h-100 d-inline-flex align-items-center me-4">
          {/* <i class="bi bi-geo-alt"></i>
              <p class="m-0">554 Bhardwaj Floor ,Sector 39,Gurgaon-122022(HR)</p> */}
        </div>
        <div className="h-100 d-inline-flex align-items-center me-4">
          <i className="far fa-envelope-open text-primary me-2" />
          <a href="mailto:inquiry@vpestify.in">
          <p className="m-0">inquiry@vpestify.in</p>
          </a>
        </div>
        <div className="h-100 d-inline-flex align-items-center">
          <a className="btn btn-sm-square bg-white text-primary me-1" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-sm-square bg-white text-primary me-1" href="">
            <i className="fab fa-twitter" />
          </a>
          <a className="btn btn-sm-square bg-white text-primary me-1" href="">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="btn btn-sm-square bg-white text-primary me-0" href="">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
</>


      <div className="container-fluid nav-bar topbar_new">
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
          <a
            href="/"
            className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none"
          >
            {/* Uncomment and add a logo if needed */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/about-us" className="nav-item nav-link">
                About
              </Link>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <div className="dropdown-menu fade-up m-0">
                  <Link to="/netting-services" className="dropdown-item">
                    Nesting Services
                  </Link>
                  <Link to="/grill-services" className="dropdown-item">
                    Invisible Grills
                  </Link>
                  <Link to="/spike-services" className="dropdown-item">
                    Spike Services
                  </Link>
                  <Link to="/sportnet-services" className="dropdown-item">
                    Sport Nets
                  </Link>
                </div>
              </div>
              <Link to="/contact-us" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <div className="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center">
              <div>
                <BiPhone style={{ color: "#ffffff", fontSize: "1.5rem" }} />
              </div>
              <div className="ms-3">
                <h5 className="m-0" style={{ color: "#ffffff" }}>
                  +91 9806161974
                </h5>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
