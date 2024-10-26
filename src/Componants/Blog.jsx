import React from "react";

const Blog = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <h2 className="text-center mb-4"> Latest   BLOGS</h2>
        <div className="row">
          {/* Blog Item 1 */}
          <div className="col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img
                src="data:image/jpeg;base64,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" // Replace with your image source
                className="card-img-top"
                alt="Blog 1"
                style={{ objectFit: "cover", height: "200px" }} // Fixed height for uniformity
              />
              <div className="card-body">
              <h5 className="card-title">
                  How to treat termites? Can we do termite treatment ourselves?
                </h5>
                <p className="card-text">
                  Be it any pest you may find at home. Cockroaches, mosquitoes,
                  bed bugs, rats, or anything else. The first question is always
                  about how you can get rid of them. Your mind starts ticking to
                  find ways to repel them. Or kill them. When it comes to
                  termites too, we want to know about DIY (Do It Yourself)
                </p>
              </div>
            </div>
          </div>

          {/* Blog Item 2 */}
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzrPR7yDCW9M_rD0czU_MIEQzjN_YjSbRWA&s" // Replace with your image source
                className="card-img-top"
                alt="Blog 2"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
              <h5 className="card-title">
                  How to treat termites? Can we do termite treatment ourselves?
                </h5>
                <p className="card-text">
                  Be it any pest you may find at home. Cockroaches, mosquitoes,
                  bed bugs, rats, or anything else. The first question is always
                  about how you can get rid of them. Your mind starts ticking to
                  find ways to repel them. Or kill them. When it comes to
                  termites too, we want to know about DIY (Do It Yourself)
                </p>
              </div>
            </div>
          </div>

          {/* Blog Item 3 */}
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                alt="Blog 3"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  How to treat termites? Can we do termite treatment ourselves?
                </h5>
                <p className="card-text">
                  Be it any pest you may find at home. Cockroaches, mosquitoes,
                  bed bugs, rats, or anything else. The first question is always
                  about how you can get rid of them. Your mind starts ticking to
                  find ways to repel them. Or kill them. When it comes to
                  termites too, we want to know about DIY (Do It Yourself)
                </p>
              </div>
            </div>
          </div>

          {/* Blog Item 4 */}
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzrPR7yDCW9M_rD0czU_MIEQzjN_YjSbRWA&s" // Replace with your image source
                className="card-img-top"
                alt="Blog 4"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
              <h5 className="card-title">
                  How to treat termites? Can we do termite treatment ourselves?
                </h5>
                <p className="card-text">
                  Be it any pest you may find at home. Cockroaches, mosquitoes,
                  bed bugs, rats, or anything else. The first question is always
                  about how you can get rid of them. Your mind starts ticking to
                  find ways to repel them. Or kill them. When it comes to
                  termites too, we want to know about DIY (Do It Yourself)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Read More Button */}
        <div className="text-end">
          <a href="/more-blogs" className="btn btn-primary mt-3">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Blog;