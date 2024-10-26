import React from "react";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>

    {/* upper footer part html code start */}
      <div className="container-1">
        <div className="right-part">
          <h2 style={{ color: "#F0810F" }}>Our Newsletter</h2>
          <p className="text-light">
            <span>
              <i className="bi bi-calendar3" />
            </span>
            Welcome to vpestify's Monthly Newsletter!
          </p>
        </div>
        <div className="left-part">
          <input
            type="text"
            placeholder="Please enter Email Address"
            className="input-text"
          />
          {/* <button type="submit" class="submit-button">Submit</button> */}
          <span className="formbtn">Subscribe</span>
        </div>
      </div>
      {/* upper footer part html code End */}
      {/* pop-up button design code start*/}
      <div className="social-button" id="socialButton">
        +
      </div>
      <div className="social-popup" id="socialPopup">
        <Link to="#" className="social-icon">
          <i className="fab fa-facebook-f" />
        </Link>
        <Link to="#" className="social-icon">
          <i className="fab fa-instagram" />
        </Link>
        <Link to="#" className="social-icon">
          <i className="fab fa-twitter" />
        </Link>
        <Link to="#" className="social-icon">
          <i className="fab fa-linkedin-in" />
        </Link>
      </div>

      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget mb-lg-0 mb-5">
                  <h5 className="logo text-uppercase mb-4">
                    <a href="#">Vpestify</a>
                  </h5>
                  <p className="mb-4">
                    There are primarily many key features which make our
                    services stand out from the rest but there are some
                    intrinsic factors which has helped us grow and maintain high
                    level of service quality and customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget mb-lg-0 mb-5">
                  <h6 className="text-white text-uppercase mb-3">
                    our services
                  </h6>
                  <ul className="newsfeed text-capitalize">
                  <Link to="/netting-services" className="dropdown-item1">
                    Nesting Services
                  </Link>
                    <Link to="/grill-services" className="dropdown-item1">
                    Invisible Grills
                  </Link>
                  <Link to="/spike-services" className="dropdown-item1">
                    Spike Services
                  </Link>
                    <Link to="/sportnet-services" className="dropdown-item1">
                    Sport Nets
                  </Link>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h6 className="text-white text-uppercase mb-3">contact us</h6>
                  <ul className="contacts">
                    <li>
                      <i className="fas fa-map-marker-alt" />{" "}
                      <span>
                        E-60, Ground Floor, Chanakya Palace 1, Uttam Nagar,
                        Delhi -110059
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-phone" />{" "}
                      <a href="#">+91 9806161974</a>
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="#">inquiry@vpestify.in</a>
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="#">ecommercevpestify@gmail.com</a>
                    </li>
                    <li>
                      <i className="far fa-clock" />{" "}
                      <span>Office Hours: 8AM - 11PM</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h6 className="text-white text-uppercase mb-4">Enquiry</h6>
                  <div className="newsletter">
                    <p className="mb-4">
                      Stay up to update with our latest news and products.
                    </p>
                    <input
                      type="email"
                      className="form-control mb-3"
                      placeholder="Your email address"
                    />
                    <button className="btn text-uppercase" type="submit">
                      Subscribe now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-lg-0 col-md-6 mb-md-0 mb-2">
                <p className="m-0">© 2024 vpestify. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
