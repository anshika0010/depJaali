import React from "react";
import { Link } from "react-router-dom";
import Header from "../Componants/Header";
import Footer from "../Componants/Footer";
import Testimonial from "../Componants/Testimonials";

const Blog = () => {
  return (
    <>
      {<Header />}
      <div className="baner">
        <img
          src="https://media.istockphoto.com/id/1207333165/photo/worker-using-fogging-machine-spraying-chemical-to-eliminate-mosquitoes-and-prevent-dengue.jpg?s=612x612&w=0&k=20&c=CtS6XRHkgfZYluESfKOVcMyun9cX3HpJxtey23nL3GM="
          width="100%"
          height="500px"
        />
      </div>
      <div className="container mt-5">
        <h1 className="text-center">Blogs</h1>
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="p-3 border bg-light text-center">
              <img
                src="https://images.unsplash.com/photo-1727198634627-645ef5356455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3JvYWNofGVufDB8fDB8fHww"
                alt="Placeholder"
                className="img-fluid mb-2"
              />
              <h5>Cockroaches</h5>
              <Link to="/blogdetail" className="btn btn-primary mt-2">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border bg-light text-center">
              <img
                src="https://images.unsplash.com/photo-1727198634627-645ef5356455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3JvYWNofGVufDB8fDB8fHww"
                alt="Placeholder"
                className="img-fluid mb-2"
              />
              <h5>Cockroaches</h5>
              <Link to="/blogdetail" className="btn btn-primary mt-2">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border bg-light text-center">
              <img
                src="https://images.unsplash.com/photo-1727198634627-645ef5356455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3JvYWNofGVufDB8fDB8fHww"
                alt="Placeholder"
                className="img-fluid mb-2"
              />
              <h5>Cockroaches</h5>
              <Link to="/blogdetail" className="btn btn-primary mt-2">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border bg-light text-center">
              <img
                src="https://images.unsplash.com/photo-1727198634627-645ef5356455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3JvYWNofGVufDB8fDB8fHww"
                alt="Placeholder"
                className="img-fluid mb-2"
              />
              <h5>Cockroaches</h5>
              <Link to="/blogdetail" className="btn btn-primary mt-2">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-3">
            <div className="p-3 border bg-light text-center">
              <img
                src="https://images.unsplash.com/photo-1727198634627-645ef5356455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3JvYWNofGVufDB8fDB8fHww"
                alt="Placeholder"
                className="img-fluid mb-2"
              />
              <h5>Cockroaches</h5>
              <Link to="/blogdetail" className="btn btn-primary mt-2">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border bg-light text-center">
              <img
                src="https://images.unsplash.com/photo-1727198634627-645ef5356455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3JvYWNofGVufDB8fDB8fHww"
                alt="Placeholder"
                className="img-fluid mb-2"
              />
              <h5>Cockroaches</h5>
              <Link to="/blogdetail" className="btn btn-primary mt-2">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border bg-light text-center">
              <img
                src="https://images.unsplash.com/photo-1727198634627-645ef5356455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3JvYWNofGVufDB8fDB8fHww"
                alt="Placeholder"
                className="img-fluid mb-2"
              />
              <h5>Cockroaches</h5>
              <Link to="/blogdetail" className="btn btn-primary mt-2">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border bg-light text-center">
              <img
                src="https://images.unsplash.com/photo-1727198634627-645ef5356455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3JvYWNofGVufDB8fDB8fHww"
                alt="Placeholder"
                className="img-fluid mb-2"
              />
              <h5>Cockroaches</h5>
              <Link to="/blogdetail" className="btn btn-primary mt-2">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">Recent Blog</h2>
        <div className="d-flex flex-column flex-md-row align-items-center">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Placeholder"
            className="img-fluid mb-3 mb-md-0 me-md-3 rounded shadow"
            style={{ maxWidth: "500px" }}
          />
          <div>
            <h5 className="fw-bold">Recent Blog</h5>
            <p className="text-muted">
              This is some text for the first div. It can include information
              about the image shown on the left, along with insights and
              reflections related to the topic.
            </p>
          </div>
        </div>
      </div>
      {<Testimonial />}
      {<Footer />}
    </>
  );
};

export default Blog;
