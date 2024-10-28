import Header from "../Componants/Header";
import Footer from "../Componants/Footer";
import Form from "../Componants/Form";
import Testimonial from "../Componants/Testimonials";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Blog from "../Componants/Blog";
import Events from "../Componants/Events";
import EventSection from "../Componants/Events";
import ServiceCity from "../Componants/serviceCity";
const Home = () => {
  return (
    <>
      {<Header />}

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper header-carousel position-relative"
      >
        <SwiperSlide>
          <div className="position-relative">
            <img className="img-fluid" src="img/carousel-4.jpg" alt="" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(0, 0, 0, .4)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      BEST QUALITY{" "}
                    </h5>
                    <h1 className="display-3 text-white animated slideInDown mb-4">
                      Pigeon Netting Services
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Our durable and reliable sports nets are crafted to
                      withstand the demands of intense gameplay proving us to be
                      the best sports nets services in Noida.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      style={{ backgroundColor: "#F0810F" }}
                    >
                      Read More
                    </a>
                    <a
                      href=""
                      className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                    >
                      Book a Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="img/carousel-3.jpg" alt="" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(0, 0, 0, .4)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      BEST QUALITY{" "}
                    </h5>
                    <h1 className="display-3 text-white animated slideInDown mb-4">
                      Efficient Commercial Plumbing Services
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Discover reliable netting solutions as we offer
                      high-quality products and professional installation. So,
                      now whenever you search for best netting services near me,
                      we are the answer!
                    </p>
                    <a
                      href=""
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      style={{ backgroundColor: "#F0810F" }}
                    >
                      Read More
                    </a>
                    <a
                      href=""
                      className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                    >
                      Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {<Form />}
      {/* OUR SERVICES section start here */}
      <div className="container-fluid py-5 px-4 px-lg-0">
        <div className="row g-0">
          <div className="col-lg-3 d-none d-lg-flex">
            <div
              className="d-flex align-items-center justify-content-center w-100 h-100"
              style={{ backgroundImage: `url("/img/about-4.webp")` }}
            >
              <h1
                className="display-3 text-white m-0"
                style={{ transform: "rotate(-90deg)" }}
              >
                12+ Years Experience
              </h1>
            </div>
          </div>
          <div className="col-md-12 col-lg-9">
            <div className="ms-lg-5">
              <div
                className="text-center text-lg-start wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <h6 className=" text-uppercase">Our Services</h6>
                <h1 className="mb-5">Explore Our Services</h1>
              </div>
              <div className=" wow fadeInUp" data-wow-delay="0.1s">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper position-relative"
                >
                  <SwiperSlide>
                    <div className=" p-4">
                      <div
                        className="d-flex align-items-center justify-content-center mb-4"
                        style={{
                          width: "100%",
                          // border: "3px solid #F0810F",
                          overflow: "hidden",
                        }} // Added overflow:hidden
                      >
                        <img
                          src="img/service-1.jpg"
                          alt=""
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }} // Ensures the image fits within the div
                        />
                      </div>

                      <h4 className="mb-3">Netting Service</h4>
                      <p>
                        Vpestify provides expert netting solutions for
                        balconies, invisible grills, bird spikes, and sports
                        nets, ensuring safety, durability, and aesthetics.
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Quality Service
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Customer Satisfaction
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Support 24/7
                      </p>
                      <a href="" className="btn bg-white text-black w-100 mt-2">
                        Read More
                        <i className="fa fa-arrow-right text-secondary ms-2" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" p-4">
                      <div
                        className="d-flex align-items-center justify-content-center mb-4"
                        style={{
                          width: "100%",
                          // border: "3px solid #F0810F",
                          overflow: "hidden",
                        }} // Added overflow:hidden
                      >
                        <img
                          src="img/service-2.jpg"
                          alt=""
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }} // Ensures the image fits within the div
                        />
                      </div>

                      <h4 className="mb-3">Invisible Grills</h4>
                      <p>
                        Vpestify's invisible grills offer a stylish and secure
                        way to protect your home, providing safety without
                        obstructing your view.
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Quality Service
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Customer Satisfaction
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Support 24/7
                      </p>
                      <a href="" className="btn bg-white text-black w-100 mt-2">
                        Read More
                        <i className="fa fa-arrow-right text-secondary ms-2" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" p-4">
                      <div
                        className="d-flex align-items-center justify-content-center mb-4"
                        style={{
                          width: "100%",
                          // border: "3px solid #F0810F",
                          overflow: "hidden",
                        }} // Added overflow:hidden
                      >
                        <img
                          src="img/service-3.jpg"
                          alt=""
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }} // Ensures the image fits within the div
                        />
                      </div>

                      <h4 className="mb-3">Spike Services</h4>
                      <p>
                        Vpestify's bird spike services effectively deter
                        unwanted birds from your property, ensuring cleanliness
                        and safety without harming the birds.
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Quality Service
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Customer Satisfaction
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Support 24/7
                      </p>
                      <a href="" className="btn bg-white text-black w-100 mt-2">
                        Read More
                        <i className="fa fa-arrow-right text-secondary ms-2" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-4">
                      <div
                        className="d-flex align-items-center justify-content-center mb-4"
                        style={{
                          width: "100%",
                          // border: "3px solid #F0810F",
                          overflow: "hidden",
                        }} // Added overflow:hidden
                      >
                        <img
                          src="img/service-4.jpg"
                          alt=""
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }} // Ensures the image fits within the div
                        />
                      </div>

                      <h4 className="mb-3">Sport Nets</h4>
                      <p>
                        Vpestify’s sports nets provide durable safety solutions
                        for playgrounds and sports facilities.
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Quality Service
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Customer Satisfaction
                      </p>
                      <p className="text-black fw-medium">
                        <i className="fa fa-check text-black me-2" />
                        Support 24/7
                      </p>
                      <a href="" className="btn bg-white text-black w-100 mt-2">
                        Read More
                        <i className="fa fa-arrow-right text-secondary ms-2" />
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OUR SERVICES section End here */}
      {/* about us section start */}
      <div
        className="container-fluid about bg-light py-5 "
        style={{ overflow: "hidden" }}
      >
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 col-xl-5 wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <div className="about-img">
                <img
                  src="img/netting-image.jpg"
                  className="img-fluid w-100 rounded-top bg-white"
                  alt="Image"
                />
                <img
                  src="img/netting-2.jpg"
                  className="img-fluid w-100 rounded-bottom"
                  alt="Image"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-7 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <h4 className="text-primary">About Us</h4>
              <h1 className="display-5 mb-4 fs-1">
                Our services excel in quality and satisfaction, driven by our
                experienced team.
              </h1>
              <p className="text ps-4 mb-4">
                There are primarily many key features which make our services
                stand out from the rest but there are some intrinsic factors
                which has helped us grow and maintain high level of service
                quality and customer satisfaction.
              </p>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-lg-6 col-xl-5">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Quality Assurance
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Expertisw
                  </p>
                </div>
                <div className="col-lg-6 col-xl-7">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Customization
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Customer Satisfaction
                  </p>
                </div>
              </div>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-xl-5">
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-3 px-5"
                  >
                    Discover More
                  </a>
                </div>
                <div className="col-xl-7 mb-5">
                  <div className="about-customer d-flex position-relative">
                    <img
                      src="\img\main-logo.png"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{
                        left: 90,
                        top: 0,
                        width: "30%",
                        marginTop: "10px",
                        // borderRadius: "50%",
                      }}
                      alt="Image"
                    />

                    <div
                      className="position-absolute text-dark"
                      style={{ left: 220, top: 10 }}
                    >
                      <p className="mb-0">5K+ Trusted</p>
                      <p className="mb-0">Global Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4 text-center align-items-center justify-content-center">
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        3
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        k+
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Project Complete</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-dark rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-white"
                        data-toggle="counter-up"
                      >
                        12
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0" style={{ color: "white" }}>
                        Years Of Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        35
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about us section end */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className=" text-uppercase">Feature</h6>
              {/* <h1 className="mb-4">We Are Trusted Plumbing Company Since 1990</h1> */}
              <p className="mb-4"></p>
              <ul className="fw-medium text-black check-list">
                <li>
                  Elevate your space with our innovative invisible grill
                  solutions. Crafted with premium materials, our sleek and
                  modern invisible grills provide unobstructed views while
                  ensuring safety and security. Also, Invisible Grill Services
                  in Delhi are best renowned.
                </li>
                <li>
                  Utilizing high-quality materials and innovative designs to
                  create sleek and secure invisible grill installations.
                </li>
                <li>
                  Discover reliable netting solutions as we offer high-quality
                  products and professional installation. So, now whenever you
                  search for best netting services near me, we are the answer.
                </li>
              </ul>
              <div className="bg-primary d-flex align-items-center p-4 mt-5">
                <div>
                  <i
                    className="bi bi-telephone"
                    style={{ color: "white", fontSize: "2rem" }}
                  />
                </div>
                <div className="ms-3">
                  {/* <p className="fs-5 fw-medium mb-2 text-white">Emergency 24/7</p> */}
                  <h3 className="m-0 " style={{ color: "white" }}>
                    +91 9806161974{" "}
                    <span style={{ fontSize: "1rem" }}>
                      {" "}
                      24/7 Available For inquiry or Services
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4" style={{ minHeight: 500 }}>
              <div
                className="position-relative h-100 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="img/about-1.jpg"
                  style={{ objectFit: "cover", padding: "0 0 50px 100px" }}
                  alt=""
                />
                <img
                  className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50"
                  src="img/carousel-4.jpg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Fact Start */}
      <div className="container-fluid fact bg-dark my-5 py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <i className="fa fa-check fa-2x text-white mb-3" />
              <h2 className="text-white mb-2" data-toggle="counter-up">
                12
              </h2>
              <p className="text-white mb-0">Years Experience</p>
            </div>
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.3s"
            >
              {/* <i className="fa fa-users-cog fa-2x text-white mb-3"></i> */}
              <i
                className="bi bi-people-fill text-white mb-3"
                style={{ fontSize: "2rem" }}
              />
              <h2 className="text-white mb-2" data-toggle="counter-up">
                35
              </h2>
              <p className="text-white mb-0">Expert Technicians</p>
            </div>
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <i className="fa fa-users fa-2x text-white mb-3" />
              <h2 className="text-white mb-2" data-toggle="counter-up">
                2000
              </h2>
              <p className="text-white mb-0">Satisfied Clients</p>
            </div>
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.7s"
            >
              <i className="fa fa-wrench fa-2x text-white mb-3" />
              <h2 className="text-white mb-2" data-toggle="counter-up">
                3510
              </h2>
              <p className="text-white mb-0">Compleate Projects</p>
            </div>
          </div>
        </div>
      </div>
      {/* Fact End */}
      {/* Technician Expert Start */}
      <div className="container-fluid">
        <div className="container ">
          {/* <div className="row col-lg-3">h</div> */}
        </div>
      </div>
      {/* Technician Expert End */}
      {/* why choose us section coding start */}
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-secondary text-uppercase">Vpestify</h6>
        <h1 className="mb-5">Why Choose Us</h1>
      </div>
      <div className="y-us-section">
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="y-us-content">
                <div className="service-3">
                  <div className="service-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <span className="glyphicon glyphicon-cog icon" />
                      </div>
                      <div className="y-us-content">
                        <h4>Quality Materials</h4>
                        <p>
                          We use only the highest quality nets and materials to
                          ensure durability and safety for your home or
                          business.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <span className="glyphicon glyphicon-cog icon" />
                      </div>
                      <div className="y-us-content">
                        <h4>Expert Installation</h4>
                        <p>
                          Our experienced team ensures seamless installation
                          with a focus on precision and safety.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <span className="glyphicon glyphicon-cog icon" />
                      </div>
                      <div className="y-us-content">
                        <h4>Affordable Solutions</h4>
                        <p>
                          We provide top-tier services at competitive prices,
                          offering value without compromising on quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="why-choose-banner">
                <img
                  src="http://themeinnovation.com/demo2/html/build-up/img/home1/why-choose.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="y-us-contentbox">
                <div className="service-3">
                  <div className="service-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <span className="glyphicon glyphicon-cog icon" />
                      </div>
                      <div className="y-us-content">
                        <h4>Customer Satisfaction</h4>
                        <p>
                          Your satisfaction is our priority. We’re committed to
                          delivering excellent service and ensuring all your
                          needs are met.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <span className="glyphicon glyphicon-cog icon" />
                      </div>
                      <div className="y-us-content">
                        <h4>Timely Service</h4>
                        <p>
                          We pride ourselves on prompt responses and efficient
                          project completion, saving you time and hassle.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <span className="glyphicon glyphicon-cog icon" />
                      </div>
                      <div className="y-us-content">
                        <h4>Versatile Offerings</h4>
                        <p>
                          From balcony nets and invisible grills to bird spikes
                          and sports nets, we have a solution for every need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Start */}
      <div className="container-fluid my-5 px-0">
        <div className="video wow fadeInUp" data-wow-delay="0.1s">
          <button
            type="button"
            className="btn-play"
            data-bs-toggle="modal"
            data-src="https://www.youtube.com/shorts/8JA-aHaP8tA"
            data-bs-target="#videoModal"
          >
            <span />
          </button>
          <div
            className="modal fade"
            id="videoModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Youtube Video
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  {/* 16:9 aspect ratio */}
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src=""
                      id="video"
                      allowFullScreen=""
                      allowscriptaccess="always"
                      allow="autoplay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-white mb-4" />
          <h3 className="text-white mb-0">24 Hours 7 Days a Week</h3>
        </div>
        <div
          className="container position-relative wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ marginTop: "-6rem" }}
        >
          <div className="container">
            <div className="row text-center"></div>
            <div className="row justify-content-center">
              <div className="col-md-offset-3 col-md-8 col-sm-offset-2 col-sm-8">
                <form className="form-horizontal">
                  <div className="heading">Contact Us</div>
                  <div className="form-group">
                    <i className="fa fa-user" />
                    <input
                      className="form-control"
                      type="Name"
                      placeholder="First and Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <i className="fa fa-envelope" />
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
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
                  </div>
                  <div className="form-group">
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
                  <div className="form-group">
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

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-default text-center"
                    >
                      Send message
                    </button>
                  </div>
                  <div className="form-footer text-center">
                    <span>Sign up with social platforms</span>
                    <ul className="social">
                      <li>
                        <a className="fab fa-facebook-f" href="" />
                      </li>
                      <li>
                        <a className="fab fa-twitter" href="" />
                      </li>
                      <li>
                        <a className="fab fa-instagram" href="" />
                      </li>
                      <li>
                        <a className="fab fa-pinterest" href="" />
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}
      {/* marquee tag start coding */}
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className=" text-uppercase">Our Clients</h6>
        {/* <h1 className="mb-5">Our Clients</h1> */}
      </div>
      <div className="marquee">
        <div className="marquee-content">
          <img src="img/brands/brand-1.webp" alt="Brand 1" />
          <img src="img/brands/brand-2.webp" alt="Brand 2" />
          <img src="img/brands/brand-3.webp" alt="Brand 3" />
          <img src="img/brands/brand-4.webp" alt="Brand 4" />
          <img src="img/brands/brand-5.webp" alt="Brand 5" />
          <img src="img/brands/brand-6.webp" alt="Brand 5" />
          <img src="img/brands/brand-7.webp" alt="Brand 5" />
          <img src="img/brands/brand-8.webp" alt="Brand 5" />
          <img src="img/brands/brand-9.webp" alt="Brand 5" />
          <img src="img/brands/brand-10.webp" alt="Brand 5" />
          <img src="img/brands/brand-11.webp" alt="Brand 5" />
          <img src="img/brands/brand-12.webp" alt="Brand 5" />
          <img src="img/brands/brand-13.webp" alt="Brand 5" />
          <img src="img/brands/brand-14.webp" alt="Brand 5" />
          <img src="img/brands/brand-15.webp" alt="Brand 5" />
          <img src="img/brands/brand-16.webp" alt="Brand 5" />
          <img src="img/brands/brand-17.webp" alt="Brand 5" />
          <img src="img/brands/brand-18.webp" alt="Brand 5" />
          <img src="img/brands/brand-19.webp" alt="Brand 5" />
          <img src="img/brands/brand-20.webp" alt="Brand 5" />
          {/* Add more brand images as needed */}
        </div>
      </div>
      {/* marquee tag end coding */}
      {/* Team Start */}

      {<Blog />}
      {<EventSection />}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className=" text-uppercase">Know Your Answer</h6>
            <h1 className="mb-5">FAQ'S</h1>
          </div>
          {/* FAQ section start */}
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What types of netting services do you offer?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We offer a wide range of netting services including industrial
                  bird netting services in Delhi NCR, sports netting, safety
                  netting, and custom netting solutions tailored to your needs
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How do I know which netting solution is right for me?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Our team of experts will assess your requirements and provide
                  personalized recommendations based on location, purpose, and
                  budget.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can you install netting in difficult-to-reach areas?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Yes, our professional installation team is equipped to handle
                  installations in various environments, including invisible
                  grill installation in Gurgaon with challenging or elevated
                  locations.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapsefour"
                >
                  How long does the installation process take?
                </button>
              </h2>
              <div
                id="collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="headingfour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The installation time varies depending on the size and
                  complexity of the project, but our team works efficiently to
                  minimize disruption and complete the job on time.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefive"
                  aria-expanded="false"
                  aria-controls="collapsefive"
                >
                  Do you offer maintenance services for netting?
                </button>
              </h2>
              <div
                id="collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="headingfive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Yes, we offer maintenance and repair services to ensure that
                  your netting remains in optimal condition and continues to
                  provide effective protection over time.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingsix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsesix"
                  aria-expanded="false"
                  aria-controls="collapsesix"
                >
                  Are your netting products durable and long-lasting?
                </button>
              </h2>
              <div
                id="collapsesix"
                className="accordion-collapse collapse"
                aria-labelledby="headingsix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We use high-quality materials and employ meticulous
                  craftsmanship to create netting solutions that are built to
                  last and withstand the elements. Undoubtedly, it is the best
                  Bird netting service in Delhi ncr.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingseven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseseven"
                  aria-expanded="false"
                  aria-controls="collapseseven"
                >
                  What sets your netting services apart from the competition?
                </button>
              </h2>
              <div
                id="collapseseven"
                className="accordion-collapse collapse"
                aria-labelledby="headingseven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Our commitment to quality, personalized approach, exceptional
                  customer service, and proven track record of delivering
                  successful projects set us apart as the premier choice for
                  netting solutions.
                </div>
              </div>
            </div>
          </div>
          {/* FAQ section end */}
        </div>
      </div>
      {/* Team End */}
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
      </>

      {<Testimonial />}
      {<ServiceCity />}
      {<Footer />}
      {/* modal code html start */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal code html End */}
    </>
  );
};

export default Home;
