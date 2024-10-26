import React from "react";
import Header from "../Componants/Header";
import Footer from "../Componants/Footer";
import TestimonialService from "../Componants/TestimonialService";

const ServicePage2 = () => {
  return (
    <>
      {<Header />}
      <>
  {/* Contact Start */}
  <div className="baner">
    <img src="img/banner-img-1.jpeg" alt="" width="100%" />
  </div>
  {/* Contact End */}
  <h2 className="text-center mt-3">
    Invisible Grill Service For Balcony Safety
  </h2>
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
  <h3 className="text-center mt-3">
    Invisible Grill Service For Balcony Safety
  </h3>
  {/* grid section start */}
  <div className="container">
    <div className="grid">
      <section className="side">
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" /> Unobtrusive Design
        </h4>
        <p>
          Our invisible grills provide a sleek and modern alternative to
          traditional bars or grilles, offering unobstructed views without
          compromising on safety made from transparent materials such as
          stainless steel cables or tempered glass.
        </p>
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" /> Maximum Security
        </h4>
        <p>
          Despite their transparent appearance, our invisible grills are
          engineered to provide robust security for your windows, balconies, or
          other openings.
        </p>
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" /> Easy Maintenance
        </h4>
        <p>
          We offer the best invisible grills in Delhi NCR which are designed for
          minimal maintenance, allowing you to enjoy clear views and enhanced
          safety without the hassle of regular upkeep.
        </p>
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" /> Professional Installation
        </h4>
        <p>
          Our team gives a free inspection to ensure the custom fit results
          before installation. And then with our well-equipped technicians, the
          invisible grills are installed according to your desired results.
        </p>
        <h4>For inquiry or our services please call us on +91 9806161974</h4>
      </section>
      {/* <article class="main">
    <h1>The Little Prince</h1>
    <p>
    And he went back to meet the fox.
"Goodbye," he said.
"Goodbye," said the fox. "And now here is my secret, a very simple secret: It is only with the heart that 
    </p>
  </article> */}
    </div>
  </div>
  {/* grid section end */}
  <h3 className="text-center mt-3">Installation Process</h3>
  {/* grid section start */}
  <div className="container">
    <div className="grid">
      <section className="side">
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" /> Free Site Assessment and
          Customization
        </h4>
        <p>
          Conduct a thorough evaluation of the installation area to determine
          the layout and design specifications that best suit the client's
          requirements. Then customise the invisible grill solution based on
          factors such as window dimensions, architectural features, and
          aesthetic preferences to seamlessly integrate with the building's
          facade.
        </p>
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" />
          Professional Installation Process
        </h4>
        <p>
          Deploy a team of skilled technicians trained in the precise
          installation of invisible grills, ensuring accuracy and adherence to
          safety standards. Utilize specialized tools and equipment to securely
          fasten the grills to the building structure.
        </p>
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" /> Assurance and Maintenance
          Guidelines
        </h4>
        <p>
          Conduct a thorough inspection post-installation to verify the
          integrity and functionality of the invisible grill system, addressing
          any issues or concerns promptly. Provide clients with comprehensive
          maintenance guidelines to ensure the longevity and optimal performance
          of the grills.
        </p>
      </section>
      {/* <article class="main">
    <h1>The Little Prince</h1>
    <p>
    And he went back to meet the fox.
"Goodbye," he said.
"Goodbye," said the fox. "And now here is my secret, a very simple secret: It is only with the heart that 
    </p>
  </article> */}
    </div>
  </div>
  {/* grid section end */}
  {/* image container start*/}
  <div className="container mt-4 mb-4 pt-5">
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-6 border">
          <img src="img/nets-3.webp" alt="" width="100%" className="mt-5" />
        </div>
        <div className="col-lg-6 icons mt-5">
          <p>
            <span className="bi bi-arrow-right-circle" />
            Elevate your space with our innovative invisible grill solutions.
            Crafted with premium materials, our sleek and modern invisible
            grills provide unobstructed views while ensuring safety and
            security. Also, Invisible Grill Services in Delhi are best renowned
          </p>
          <p>
            <span className="bi bi-arrow-right-circle" />
            Utilizing high-quality materials and innovative designs to create
            sleek and secure invisible grill installations
          </p>
          <p>
            <span className="bi bi-arrow-right-circle" />
            Customizable options to fit various window and balcony
            configurations, ensuring a seamless integration with any
            architectural style and invisible grill for balcony in Delhi NCR
          </p>
          <p>
            <span className="bi bi-arrow-right-circle" />
            Expert installation services by trained professionals to guarantee a
            flawless and secure setup for ultimate peace of mind
          </p>
        </div>
        <h2 className="text-center mt-4">
          For inquiry or our services please call us on{" "}
          <span style={{ color: "#F0810F" }}>+91 9806161974</span>
        </h2>
      </div>
    </div>
  </div>
</>
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
            What are invisible grills?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Invisible grills are modern safety barriers made of high-quality
            stainless-steel wires that protect without obstructing views. They
            are commonly used for balconies, windows, and other openings
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
            How do invisible grills enhance safety?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Invisible grills act as a barrier to prevent falls from balconies or
            windows, offering security for children, pets, and building
            occupants. Their sturdy construction and installation ensure
            reliable protection.
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
            Are invisible grills suitable for all types of buildings?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Yes, invisible grills are versatile and can be installed in various
            types of buildings, including residential apartments, commercial
            properties, and high-rise buildings.
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
            How are invisible grills installed?
          </button>
        </h2>
        <div
          id="collapsefour"
          className="accordion-collapse collapse"
          aria-labelledby="headingfour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Invisible grills are installed using specialized mounting brackets
            and tensioning systems. Our professional installers ensure that the
            grills are securely attached to the building structure for optimal
            safety.
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
            Do invisible grills obstruct views?
          </button>
        </h2>
        <div
          id="collapsefive"
          className="accordion-collapse collapse"
          aria-labelledby="headingfive"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            No, invisible grills are designed to be nearly transparent, allowing
            unobstructed views of the surrounding scenery. They blend seamlessly
            with the architecture of the building, preserving the aesthetic
            appeal.
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
            Are invisible grills child-friendly?
          </button>
        </h2>
        <div
          id="collapsesix"
          className="accordion-collapse collapse"
          aria-labelledby="headingsix"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Yes, invisible grills provide a safe environment for children to
            play without the risk of falling from balconies or windows. They
            offer peace of mind for parents and caregivers.
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* accordian section End */}

</>
{<TestimonialService/>}
      {<Footer />}
    </>
  );
};

export default ServicePage2;
