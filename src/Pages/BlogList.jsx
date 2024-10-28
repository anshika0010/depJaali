import React from "react";
import Header from "../Componants/Header";
import Footer from "../Componants/Footer";
import Testimonial from "../Componants/Testimonials";
const blogPosts = [
  { title: "Company news and information on pest control and disinfection", image: "https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg" },
  { title: "Company news and information on pest control and disinfection", image: "https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg" },
  { title: "What goes into designing an insect light trap?", image: "https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg" },
  { title: "Why are insects attracted to light?", image: "https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg" },
  { title: "Why are insects attracted to light?", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWmVFvgXKe-mRbI3Yg9_PkIt1jrh65PqeOw&s" },
];

const BlogList = () => {
  return (
    <>
      <Header />

      <section className="blog-section mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <article style={{ margin: "20px" }}>
                <img
                  src="https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg"
                  alt="blog-img"
                  style={{ width: "90%", height: "auto" }}
                />
              <div className="col-lg-12">
              <h2 style={{marginTop:'20px'}}>
                How Rentokil Customers Benefit from ISO 27001 Certification
              </h2>
              <p>
                Becoming ISO 27001 certified provides a host of benefits to our
                organization, our customers, and other stakeholders. Here are
                the key advantages for Rentokil customers:
              </p>

              <h4>1. Your Data is Safe with Us</h4>
              <p>
                This certification demonstrates our commitment to secure data.
                It confirms that we maintain the security of customer data by
                handling information with confidentiality, integrity, and
                ensuring its availability at all times.
              </p>
              <p>
                We ensure information is only disclosed to authorized parties
                and when appropriate, preventing sensitive information from
                falling into unauthorized hands and enhancing data security. We
                also manage risks to the confidentiality of customer
                information, ensuring that only authorized parties can change
                this information.
              </p>
              <p>
                We keep the information that’s stored and used accurate,
                available, and accessible when needed to help deliver services.
              </p>

              <h4>2. You Can Trust Us</h4>
              <p>
                Trust goes a long way, especially with our customers. That’s why
                we take pride in our ISO 27001 certification, which reflects our
                efforts to ensure customer data is rigorously protected.
              </p>
              <p>
                Data protection and customer confidence are no accident. We work
                hard to assess, minimize, and eliminate risks and
                vulnerabilities so that customers can trust our data management.
                Simply put, you can trust us to manage your digital pest control
                data safely.
              </p>
              <p>
                Our certification is a symbol of trust that reassures customers,
                demonstrating conformity with the highest internationally
                recognized standards. This significant achievement independently
                assures customers that their information, as well as ours, will
                be secure.
              </p>

              <h4>3. You Can Rely on Us to Do the Right Thing</h4>
              <p>
                Our ISO 27001 certification also reassures customers that we
                offer a reliable service. It means they can be confident that
                the right thing is done by the right people at the right time.
              </p>
            </div>
                {/* Additional paragraphs and sections here */}
              </article>
            </div>

            <div className="col-lg-4" style={{backgroundColor:'rgb(247, 244, 244)'}} >
              <h1 className="text-center mb-4 mt-5">Recent Blog</h1>
              <div className="blog-list">
                {blogPosts.map((post, index) => (
                  <div className="d-flex align-items-center mb-3" key={index} style={{borderBottom:'1px solid gray'}}>
                    <img
                      src={post.image}
                      alt={`Blog Image ${index + 1}`}
                      className="me-3"
                      style={{ width: "90px", height: "60px" }}
                    />
                    <p style={{fontWeight:'bold', marginTop:'10px',fontSize:'15px'}}>{post.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial/>
      <Footer />
    </>
  );
};

export default BlogList;
