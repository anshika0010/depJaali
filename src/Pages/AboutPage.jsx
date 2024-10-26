import React from 'react'
import Header from '../Componants/Header'
import Footer from '../Componants/Footer'
import Team from '../Componants/Team'

const AboutPage = () => {
  return (
    <>
    {<Header/>}

    <>

    <>
  {/* Page Header Start */}
  <div className="container-fluid page-header mb-5 py-5">
    <div className="container">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        About Us
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
            About
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End --
   */}
</>

  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4">
        <div
          className="col-lg-3 col-md-6 service-item-top wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="overflow-hidden">
            <img
              className="img-fluid w-100 h-100"
              src="img/service-1.jpg"
              alt=""
            />
          </div>
          <div className="d-flex align-items-center justify-content-between bg-light p-4">
            <h5 className="text-truncate me-3 mb-0">Nesting Services</h5>
            <a
              className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0"
              href=""
            >
              <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 service-item-top wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="overflow-hidden">
            <img
              className="img-fluid w-100 h-100"
              src="img\netting-image.jpg"
              alt=""
            />
          </div>
          <div className="d-flex align-items-center justify-content-between bg-light p-4">
            <h5 className="text-truncate me-3 mb-0">Invisible Grills</h5>
            <a
              className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0"
              href=""
            >
              <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 service-item-top wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="overflow-hidden">
            <img
              className="img-fluid w-100 h-100"
              src="img/service-2.jpg"
              alt=""
            />
          </div>
          <div className="d-flex align-items-center justify-content-between bg-light p-4">
            <h5 className="text-truncate me-3 mb-0">Spike Services</h5>
            <a
              className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0"
              href=""
            >
              <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 service-item-top wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="overflow-hidden">
            <img
              className="img-fluid w-100 h-100"
              src="img/service-2.jpg"
              alt=""
            />
          </div>
          <div className="d-flex align-items-center justify-content-between bg-light p-4">
            <h5 className="text-truncate me-3 mb-0">Sports Nets</h5>
            <a
              className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0"
              href=""
            >
              <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase">About Us</h6>
          <h1 className="mb-4">
            Our services excel in quality and satisfaction, driven by our
            experienced team.
          </h1>
          <p className="mb-4">
            There are primarily many key features which make our services stand
            out from the rest but there are some intrinsic factors which has
            helped us grow and maintain high level of service quality and
            customer satisfaction.
          </p>
          <p className="fw-medium text-primary">
            <i className="fa fa-check text-success me-3"></i>Quality Assurance
          </p>
          <p className="fw-medium text-primary">
            <i className="fa fa-check text-success me-3" />
            Customization
          </p>
          <p className="fw-medium text-primary">
            <i className="fa fa-check text-success me-3" />
            Customer Satisfaction
          </p>
          <div className="bg-primary d-flex align-items-center p-4 mt-5">
            <div
              className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt fa-2x text-primary" />
            </div>
            <div className="ms-3">
              <p className="fs-5 fw-medium mb-2 text-white">Available 24/7</p>
              <h3 className="m-0 text-light">+91 9806161974</h3>
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
              src="img/about-2.jpg"
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
          <i className="fa fa-users-cog fa-2x text-white mb-3" />
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
  
  {/* info-gaurav custom code start  */}
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-secondary text-uppercase">How To Install Nets</h1>
          {/* <h1 class="mb-5">How To Install Nets</h1> */}
        </div>
        <h5>
          Installing balcony nets can be a crucial safety measure, especially in
          high-rise buildings or areas prone to high winds. Here's a
          step-by-step guide to the installation process:
        </h5>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Assessment of the Balcony
        </p>
        <p>
          Before installation, assess the balcony structure to ensure it can
          support the weight and tension of the netting system. Check for any
          damage or weak points that may need to be reinforced.
        </p>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Measurement and Planning
        </p>
        <p>
          Measure the dimensions of the balcony to determine the size of the net
          required. Consider factors such as the height of the balcony, the
          distance between support pillars, and any obstructions like railings
          or protrusions.
        </p>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Selecting the Net Material
        </p>
        <p>
          Choose a suitable net material based on factors such as durability, UV
          resistance, and mesh size. Common materials include polyethylene,
          nylon, or stainless steel.
        </p>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Preparing the Balcony
        </p>
        <p>
          Clear the balcony of any furniture, plants, or debris. Ensure the
          surface is clean and free of any obstacles that may interfere with the
          installation process.
        </p>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Anchor Points Installation
        </p>
        <p>
          Install anchor points along the edges of the balcony where the net
          will be attached. These anchor points can be in the form of eyebolts,
          hooks, or brackets, securely fastened to the balcony structure
        </p>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>Net Installation</p>
        <p>
          Begin by attaching one corner of the net to a designated anchor point
          using zip ties, rope, or clips, depending on the type of net and
          anchor points used. Gradually unroll and stretch the net across the
          balcony, securing it to each anchor point along the perimeter.
        </p>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Tensioning the Net
        </p>
        <p>
          Once the net is attached to all anchor points, tension it properly to
          ensure a snug fit without any sagging or slack. This may involve using
          tensioning devices or manual adjustment techniques to pull the net
          taut.
        </p>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Securing the Bottom Edge
        </p>
        <p>
          Secure the bottom edge of the net to the balcony railing or other
          support structure using additional fasteners or clips. This helps
          prevent the net from billowing in the wind or becoming dislodged.
        </p>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Trimming Excess Material
        </p>
        <p>
          Trim any excess net material to achieve a neat and tidy appearance.
          Use scissors or a utility knife to carefully cut away any surplus
          netting along the edges.
        </p>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>Final Inspection</p>
        <p>
          Once the net is securely in place, conduct a thorough inspection to
          ensure all attachment points are secure and the netting is properly
          tensioned. Test the stability of the installation by applying gentle
          pressure to various points along the net.
        </p>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Maintenance and Monitoring
        </p>
        <p>
          Regularly inspect the balcony netting for signs of wear, damage, or
          loosening. Perform any necessary repairs or adjustments to maintain
          its effectiveness in providing safety and protection.
        </p>
        <p style={{ fontSize: "0.8rem" }}>
          By following these steps carefully, you can ensure the proper
          installation of balcony nets to enhance safety and security in
          residential or commercial settings.
        </p>
      </div>
    </div>
  </div>
  {/* info-gaurav custom code  end*/}
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

</>
{<Team/>}
    {<Footer/>}
    </>
  )
}

export default AboutPage