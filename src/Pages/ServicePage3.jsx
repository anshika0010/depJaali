import React from 'react'
import Header from '../Componants/Header'
import Footer from '../Componants/Footer'
import TestimonialService from '../Componants/TestimonialService'

const ServicePage3 = () => {
  return (
   <>
   {<Header/>}

   <>
  {/* Contact Start */}
  <div className="baner">
    <img src="img/banner-img-3.jpeg" alt="" width="100%" />
  </div>
  {/* Contact End */}
  {/* <h2 class="text-center mt-3">Spike Services for Bird & Monkey</h2> */}
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
  <h3 className="text-center mt-3">Spike Services for Bird &amp; Monkey</h3>
  <div className="container mt-4">
    <p>
      Welcome to our spike services, where we specialize in providing expert
      solutions for controlling and managing spikes on various surfaces. Whether
      you're dealing with bird spikes to deter avian pests, anti-climb spikes to
      enhance security, or spikes to prevent roosting or nesting, we have the
      expertise and products to meet your needs.
    </p>
    <p>
      Our spike services offer effective and humane solutions, ensuring that
      your property remains protected while maintaining aesthetic appeal.
    </p>
  </div>
  {/* grid section start */}
  <div className="container">
    <div className="grid">
      <section className="side">
        <h3 className="text-center mt-2 mb-2">
          Key Features of Vpestify Spike Services
        </h3>
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" /> Bird Spikes
        </h4>
        <p>
          We offer the best bird spike services in Delhi NCR with effective
          solutions to deter birds from roosting, perching, or nesting on
          buildings, ledges, signs, and other structures.
        </p>
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" />
          Anti-Climb Spikes
        </h4>
        <p>
          Our anti-climb spike services offer security solutions to prevent
          unauthorized access to fences, walls, gates, and other perimeter
          barriers.
        </p>
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" />
          Pest Proofing Spikes
        </h4>
        <p>
          Our pest proofing spike services target various pests, including
          rodents and other small animals, by preventing them from accessing
          specific areas such as pipes, vents, and entry points while minimising
          the use of harmful chemicals.
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
          Planning
        </h4>
        <p>
          Conduct a detailed evaluation of the property to identify vulnerable
          areas where spike installation is necessary, such as perimeter fences,
          walls, or ledges and then customise the spike solution based on those
          factors.
        </p>
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" /> Expert Installation Process
        </h4>
        <p>
          Adhere to industry best practices and safety standards during the
          installation process, ensuring precise placement and secure
          attachment. Deploy a team of experienced technicians equipped with the
          necessary tools and equipment to safely and efficiently install the
          spikes.
        </p>
        <h4>
          {" "}
          <i className="bi bi-bookmark-star-fill" /> Deterrent Effectiveness and
          Legal Compliance
        </h4>
        <p>
          Provide clients with information on the deterrent effectiveness of
          spike installations in deterring unauthorised access and intrusions.
          Ensure compliance with local regulations and building codes regarding
          the installation of security spikes to avoid any legal issues.
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
            Fast, efficient spike removal for safer grounds.
          </p>
          <p>
            <span className="bi bi-arrow-right-circle" />
            Professional team ensuring thorough and precise spike services.
          </p>
          <p>
            <span className="bi bi-arrow-right-circle" />
            Reliable solutions to eliminate hazards and maintain safety.
          </p>
          <p>
            <span className="bi bi-arrow-right-circle" />
            Customized spike services tailored to your specific needs.
          </p>
          <p>
            <span className="bi bi-arrow-right-circle" />
            Along with easy accessibility you can find bird spike installation
            near me.
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
  {/* image gallery  section start */}
  <div className="half-half-image-text">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <h1 class="text-center">Industrial Pigeon Netting</h1> */}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="content">
            <p>
              {" "}
              <b>Effective Bird and Monkey Spike Solutions</b> Experience
              unparalleled protection against bird infestations with our
              cutting-edge bird spike solutions. Our carefully crafted bird
              spikes are designed to prevent birds from landing and nesting on
              your property. Also, you can find warehouse bird netting services
              in Delhi NCR
              <br />
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <img src="img/net-image.webp" alt="" height="80%" width="100%" />
        </div>
      </div>
    </div>
  </div>
  <div className="half-half-image-text">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <h1 class="text-center">Top Bird Spike Manufacturers</h1> */}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src="img/net-image.webp" alt="" height="80%" width="100%" />
        </div>
        <div className="col-12 col-lg-6">
          <div className="content">
            <p>
              {" "}
              <b>Top Bird Spike Manufacturers</b> We pride ourselves on
              partnering with leading bird spike manufacturers to offer you the
              highest quality products available. With our trusted partnerships,
              you can rest assured that you're receiving bird spikes engineered
              for durability, reliability, and maximum effectiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="half-half-image-text">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <h1 class="text-center">Industrial Pigeon Netting</h1> */}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="content">
            <p>
              {" "}
              <b>Innovative Polycarbonate Monkey Spike Systems</b> Say goodbye
              to unwanted climbing animals with our innovative polycarbonate
              monkey spike systems. Crafted from durable materials, our monkey
              spikes provide a humane and long-lasting solution to protect your
              property from intruders.
              <br />
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <img src="img/net-image.webp" alt="" height="80%" width="100%" />
        </div>
      </div>
    </div>
  </div>
  <div className="half-half-image-text">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <h1 class="text-center">Top Bird Spike Manufacturers</h1> */}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src="img/net-image.webp" alt="" height="80%" width="100%" />
        </div>
        <div className="col-12 col-lg-6">
          <div className="content">
            <p>
              {" "}
              <b>Comprehensive Spike Service Excellence</b> From installation to
              maintenance, our spike services deliver excellence at every step.
              Our team of experts ensures that your spike deterrents are
              installed correctly and maintained regularly to guarantee optimal
              performance and peace of mind. Trust us for all your spike service
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* image gallery section end */}
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
            Are spike installations humane for birds and other animals?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Yes, our spike installations are designed to be humane and
            non-lethal. They simply create barriers to deter birds and pests
            from roosting, perching, or climbing without causing harm.
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
            Are spike installations suitable for all types of surfaces?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Our spike installations are versatile and can be applied to a wide
            range of surfaces, including concrete, metal, wood, and plastic.
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
            How long do spike installations last?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Generally, our spike installations are designed to be durable and
            long-lasting, providing effective protection for several years.
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
            What are the types of spikes you provide?
          </button>
        </h2>
        <div
          id="collapsefour"
          className="accordion-collapse collapse"
          aria-labelledby="headingfour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            We offer a variety of spike solutions from pest proofing,
            anti-climb, bird and monkey spikes to meet your requirements.
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
            Can spike installations be removed if needed?
          </button>
        </h2>
        <div
          id="collapsefive"
          className="accordion-collapse collapse"
          aria-labelledby="headingfive"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Yes, our spike installations can be removed if necessary. However,
            removal may require professional assistance to ensure that the
            process is carried out safely. Please contact us for assistance with
            spike removal services.
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* accordian section End */}
  {<TestimonialService/>}

</>

   {<Footer/>}
   </>
  )
}

export default ServicePage3