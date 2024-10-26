import React from "react";
import Header from "../Componants/Header";
import Footer from "../Componants/Footer";
import TestimonialService from "../Componants/TestimonialService";

const ServicePage1 = () => {
  return (
    <>
      {<Header />}
      <div className="baner">
        <img src="img/banner-img-2.jpeg" alt="" width="100%" />
      </div>

      <>
        {/* same banner start */}
        <div className="main_query_form container">
          <p className="main__line text-center">
            Get in touch with our customer care on
            <span>+91 9806161974</span> for a quick walk through of our services
          </p>
          <div className="input__main">
            <ul className="imput__main__ul">
              <li className="imput__li__first">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name "
                  />
                  <label htmlFor="floatingInput">Full Name </label>
                </div>
              </li>
              <li>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
              </li>
              <li>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Contact Number "
                  />
                  <label htmlFor="floatingInput">Contact Number *</label>
                </div>
              </li>
              <li>
                <select
                  className="form-select form-floating select_main"
                  aria-label="Default select example"
                >
                  <option selected="">Netting </option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </li>
              <li className="submit__btn__li">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#F0810F" }}
                >
                  submit
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* same banner end */}

        <div className="container mt-4">
          <p>
            Vpestify offers diverse Net Solutions from agricultural nets and
            child Safety nets to Industrial Nets. You will get custom netting
            options for farms, playgrounds, factories, and more with the most
            premium quality materials to ensure durability and safety in all
            environments like Pigeon netting services in Delhi NCR. You will
            find a vast range of agricultural protection nets that protect crops
            from pests, birds, and harsh weather conditions, child safety
            netting for playgrounds, ensuring a secure play environment and
            industrial nets for construction sites, warehouses, and industrial
            facilities to prevent accidents.
          </p>
          <p>
            Vpestify provides a nationwide service. From rural farms to urban
            playgrounds, we deliver and install across the country with our
            trusted partners. You can count on us for reliable service,
            unmatched quality, and customer satisfaction.
          </p>
          <p>
            We pride ourselves on delivering a diverse range of nets tailored to
            meet your specific requirements, whether for agricultural, child
            safety purposes, or industrial net services in Delhi NCR. With our
            extensive network of suppliers, we ensure that only the finest
            materials are used in crafting our nets.
          </p>
          <p>
            Pigeon netting near me | Balcony Bird net | Kabootar jaali | Pigeon
            spike | Cricket net | SS Invisible wire grills
          </p>
        </div>
        <>
          {/* grid section start */}
          <div className="container">
            <div className="grid">
              <section className="side">
                <h4>
                  {" "}
                  <i className="bi bi-bookmark-star-fill" /> free Inspection
                </h4>
                <p>
                  We conduct a thorough site assessment to identify potential
                  hazards and determine the appropriate netting solution and
                  then evaluate the structural integrity of the installation
                  area to ensure it can support the weight and tension of the
                  net.
                </p>
                <h4>
                  {" "}
                  <i className="bi bi-bookmark-star-fill" /> Customised Design
                  and Planning
                </h4>
                <p>
                  Afterward, we Work closely with clients to understand their
                  specific needs and tailor the netting solution accordingly to
                  develop a detailed installation plan that includes precise
                  measurements, anchor points, and attachment methods.
                </p>
                <h4>
                  {" "}
                  <i className="bi bi-bookmark-star-fill" /> Professional
                  Installation
                </h4>
                <p>
                  Deploy a team of experienced technicians equipped with the
                  necessary tools and equipment to safely and efficiently
                  install the nets.
                </p>
                <h4>
                  {" "}
                  <i className="bi bi-bookmark-star-fill" /> Post-Installation
                  Evaluation and Maintenance
                </h4>
                <p>
                  Conduct a comprehensive inspection post-installation to verify
                  the integrity and functionality of the netting system and
                  guide clients on proper maintenance practices.
                </p>
                <h4>
                  For inquiry or our services please call us on +91 9806161974
                </h4>
              </section>
            </div>
          </div>
          {/* grid section end */}
          <>
            {/* image container start*/}
            <div className="container mt-4 mb-4 pt-5">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6 border">
                    <img
                      src="img/nets-3.webp"
                      alt=""
                      width="100%"
                      className="mt-5"
                    />
                  </div>
                  <div className="col-lg-6 icons mt-5">
                    <p>
                      <span className="bi bi-arrow-right-circle" />
                      Specializing in high-quality netting solutions for various
                      needs: Pigeon netting services in balconies, industrial
                      bird nets, agricultural nets, sports nets, balcony nets,
                      and child safety nets.
                    </p>
                    <p>
                      <span className="bi bi-arrow-right-circle" />
                      Customized netting options tailored to specific
                      requirements and environments hence resulting in the most
                      effective industrial Pigeon netting. Alongside, industrial
                      net services in Delhi NCR.
                    </p>
                    <p>
                      <span className="bi bi-arrow-right-circle" />
                      Durable and reliable materials ensure long-lasting
                      protection and safety without compromising the aesthetics
                      making a perfect balcony net for your household.
                    </p>
                    <p>
                      <span className="bi bi-arrow-right-circle" />
                      Comprehensive range of net sizes and configurations to
                      suit different applications suiting a large variety of
                      sports activities with the best sports nets manufactured.
                    </p>
                    <p>
                      <span className="bi bi-arrow-right-circle" />
                      Expert advice and guidance to help customers choose the
                      right netting solution for their needs in case of ensuring
                      the safety of a child with the safest and most durable
                      child safety nets.
                    </p>
                  </div>
                  <h2 className="text-center mt-4">
                    For inquiry or our services please call us on{" "}
                    <span style={{ color: "#F0810F" }}>+91 9806161974</span>
                  </h2>
                </div>
              </div>
            </div>
            {/* image container end*/}
          </>
          <>
            {/* 50/50 section start */}
            <div className="half-half-image-text">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1 className="text-center">Industrial Pigeon Netting</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="content">
                      <p>
                        {" "}
                        <b>Customizable Options:</b> We offer a variety of
                        industrial netting solutions tailored to meet the
                        specific requirements of your project. Whether you need
                        heavy-duty cargo nets for transportation or barrier nets
                        for construction sites, we have got it all covered.
                        <br />
                        <b>Customizable Options:</b>
                        <span>
                          Our industrial nets meet industry safety standards and
                          regulations, providing peace of mind that your
                          workplace is compliant with safety requirements.
                        </span>
                        <br />
                        <b>Desired installation:</b>
                        <span>
                          We offer a seamless and free-of-cost inspection of the
                          site to ensure the installation is done right.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <img
                      src="img/net-image.webp"
                      alt=""
                      height="80%"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* 50/50 section end */}
          </>
          <div className="half-half-image-text">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="text-center">Child Safety Nets</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <img
                    src="img/child_safety_nets_services.webp"
                    alt=""
                    height="80%"
                    width="100%"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <div className="content">
                    <p>
                      {" "}
                      <b>Childproofing Solutions:</b>child safety nets are
                      specifically designed to create secure barriers,
                      preventing young children from accessing hazardous areas
                      such as balconies, staircases, or windows.
                      <br />
                      <b>Custom Fit Installation:</b>
                      <span>
                        offer custom sizing and installation services to ensure
                        that the child safety nets perfectly fit your space. Our
                        expert team will work with you to design and install a
                        tailored solution that meets your safety needs.
                      </span>
                      <br />
                      <b>Durable and Reliable:</b>
                      <span>
                        Constructed from polycarbonate and nylon materials our
                        child safety nets are built to withstand the rigors of
                        everyday use while providing reliable protection for
                        your children.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <>
            {/* accordian section start */}
            <div className="container">
              <h1 className="text-center">General Questions</h1>
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
                      How long does the installation process typically take?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The duration of the installation process varies depending
                      on the size and complexity of the project. Our technicians
                      first take a free inspection of the site and then give a
                      detailed timeline based on the specifics of your project
                      during the consultation process.
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
                      Do you provide installation services nationwide?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, we offer installation services nationwide to
                      accommodate our customers' needs regardless of location.
                      Our team is well-equipped to deliver the best netting
                      solutions pan India for you.
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
                      Where do you get your supply?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We are a manufacturer and supplier in Inida to provide our
                      customers a variety and timely delivery. So, depending on
                      your requirement, retail or wholesale, we have got it all.
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
                      What types of nets do you offer?
                    </button>
                  </h2>
                  <div
                    id="collapsefour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingfour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We provide a comprehensive range of nets including
                      agricultural nets, industrial nets, safety nets for
                      playgrounds, and more. Our offerings are tailored to suit
                      various applications and industries.
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
                      Are your nets customisable?
                    </button>
                  </h2>
                  <div
                    id="collapsefive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingfive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, we understand that each project may have unique
                      requirements. We offer customisation options to ensure
                      that our nets perfectly fit your needs, whether it's size,
                      material, or other specifications.
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
                      Where do you source your nets from?
                    </button>
                  </h2>
                  <div
                    id="collapsesix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingsix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We source our nets from reputable wholesalers in Delhi NCR
                      and across India. Our stringent quality control measures
                      ensure that only the finest materials are used in the
                      production of our nets.
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
                      Do you provide installation services?
                    </button>
                  </h2>
                  <div
                    id="collapseseven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingseven"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, we offer professional installation services to ensure
                      that your nets are installed correctly and securely. Our
                      team is trained to handle installations efficiently and
                      safely.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingeight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseeight"
                      aria-expanded="false"
                      aria-controls="collapseeight"
                    >
                      Are your nets durable and long-lasting?
                    </button>
                  </h2>
                  <div
                    id="collapseeight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingeight"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, we offer professional installation services to ensure
                      that your nets are installed correctly and securely. Our
                      team is trained to handle installations efficiently and
                      safely.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* accordian section End */}
          </>
      
        </>
      </>
{<TestimonialService/>}
      {<Footer />}
    </>
  );
};

export default ServicePage1;
