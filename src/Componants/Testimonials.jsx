
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <div className="text-center">
        <h6 className=" text-uppercase">Testimonial</h6>
        <h1 className="mb-5">Our Clients Say!</h1>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="position-relative wow fadeInUp">
            <div className="testimonial-item text-center">
              <div className="testimonial-text bg-light text-center p-4 mb-4">
                <p className="mb-0">
                  Vpestify installed balcony nets at our home, and the quality
                  is excellent. Quick and professional team. Highly recommend
                </p>
              </div>
              <img
                className="bg-light rounded-circle p-2 mx-auto mb-2"
                src="data:image/png;base64,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"
                style={{ width: 80, height: 80 }}
              />
              <div className="mb-2">
                <small className="fa fa-star text-secondary" />
                <small className="fa fa-star text-secondary" />
                <small className="fa fa-star text-secondary" />
                <small className="fa fa-star text-secondary" />
                <small className="fa fa-star text-secondary" />
              </div>
              <h5 className="mb-4">Anjali R.</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <div className="testimonial-text bg-light text-center p-4 mb-4">
              <p className="mb-0">
                The invisible grills look great and provide safety without
                spoiling the view. Vpestify did an amazing job
              </p>
            </div>
            <img
              className="bg-light rounded-circle p-2 mx-auto mb-2"
              src="data:image/png;base64,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"
              style={{ width: 80, height: 80 }}
            />
            <div className="mb-2">
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
            </div>
            <h5 className="mb-4">Vikram S.</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <div className="testimonial-text bg-light text-center p-4 mb-4">
              <p className="mb-0">
                The bird spikes installed by Vpestify worked perfectly. Fast and
                efficient service!
              </p>
            </div>
            <img
              className="bg-light rounded-circle p-2 mx-auto mb-2"
              src="data:image/png;base64,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"
              style={{ width: 80, height: 80 }}
            />
            <div className="mb-2">
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
            </div>
            <h5 className="mb-4">Rajesh P.</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <div className="testimonial-text bg-light text-center p-4 mb-4">
              <p className="mb-0">
                Vpestify did a fantastic job installing bird spikes. They work
                well and were installed without any hassle. Highly recommended!
              </p>
            </div>
            <img
              className="bg-light rounded-circle p-2 mx-auto mb-2"
              src="data:image/png;base64,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
              "
              style={{ width: 80, height: 80 }}
            />
            <div className="mb-2">
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
            </div>
            <h5 className="mb-4">Rajesh P.</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <div className="testimonial-text bg-light text-center p-4 mb-4">
              <p className="mb-0">
                Vpestify did a fantastic job installing bird spikes. They work
                well and were installed without any hassle. Highly recommended!
              </p>
            </div>
            <img
              className="bg-light rounded-circle p-2 mx-auto mb-2"
              src="data:image/png;base64,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"
              style={{ width: 80, height: 80 }}
            />
            <div className="mb-2">
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
              <small className="fa fa-star text-secondary" />
            </div>
            <h5 className="mb-4 ">Rajesh P.</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonial;
