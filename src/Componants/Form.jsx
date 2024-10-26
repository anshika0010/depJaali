import React from 'react';
 

const Form = () => {
  return (
    <>
      {/* every section form start */}
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
                  type="text" // Changed to text for full name
                  className="form-control"
                  id="floatingInputName"
                  placeholder="Full Name"
                />
                <label htmlFor="floatingInputName">Full Name</label>
              </div>
            </li>
            <li>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputEmail">Email address</label>
              </div>
            </li>
            <li>
              <div className="form-floating mb-3">
                <input
                  type="tel" // Changed to tel for better usability
                  className="form-control"
                  id="floatingInputContact"
                  placeholder="Contact Number"
                />
                <label htmlFor="floatingInputContact">Contact Number *</label>
              </div>
            </li>
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
            <li className="submit__btn__li">
              <button
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: "#F0810F" }}
              >
                Submit
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* every section form end */}
    </>
  );
};

export default Form;
