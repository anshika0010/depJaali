import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper/modules";

const TestimonialService = () => {
  return (
    <>
      <h1 className="text-center mt-4">Testimonial</h1>
      <section className="gradient-custom">
        <div className="container my-5 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center mb-4 pb-2">
                <i className="fas fa-quote-left fa-3x text-white" />
              </div>
              <Swiper
                navigation={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 3000, // Adjust the delay as needed (in milliseconds)
                    disableOnInteraction: false, // Allow autoplay to continue after user interactions
                  }}
                modules={[Navigation,Autoplay]}
                className="mySwiper"
                slidesPerView={1}
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                      <div className="row">
                        <div className="col-lg-4 d-flex justify-content-center">
                          <img
                            src="img/testimonial.png"
                            className="rounded-circle shadow-1 mb-4 mb-lg-0"
                            alt="woman avatar"
                            width={150}
                            height={150}
                          />
                        </div>
                        <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                          <h4 className="mb-4">
                            Gopal Sharma, Vikas puri, Delhi
                          </h4>
                          <p className="mb-0 pb-3">
                            "We had a persistent bird roosting problem on our
                            building's ledges, causing unsightly droppings and
                            potential health hazards. After contacting Vpestify,
                            they promptly installed bird spikes, and the results
                            were immediate. Highly recommend their professional
                            services!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                      <div className="row">
                        <div className="col-lg-4 d-flex justify-content-center">
                          <img
                            src="img/testimonial.png"
                            className="rounded-circle shadow-1 mb-4 mb-lg-0"
                            alt="woman avatar"
                            width={150}
                            height={150}
                          />
                        </div>
                        <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                          <h4 className="mb-4">Sani, Gaziabad</h4>
                          <p className="mb-0 pb-3">
                            "As a property manager, keeping our perimeter secure
                            and free from unwanted intruders is paramount.
                            Vpestify provided exceptional anti-climb spike
                            installations that not only enhanced security but
                            also provided peace of mind. Great job!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                      <div className="row">
                        <div className="col-lg-4 d-flex justify-content-center">
                          <img
                            src="img/testimonial.png"
                            className="rounded-circle shadow-1 mb-4 mb-lg-0"
                            alt="woman avatar"
                            width={150}
                            height={150}
                          />
                        </div>
                        <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                          <h4 className="mb-4">Mukund, Lajpat Nagar Delhi</h4>
                          <p className="mb-0 pb-3">
                            "We were facing a persistent rodent problem around
                            our property's entry points. Vpestify recommended
                            pest-proofing spikes, and we couldn't be happier
                            with the results."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="text-center mt-4 pt-2">
                <i className="fas fa-quote-right fa-3x text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialService;
