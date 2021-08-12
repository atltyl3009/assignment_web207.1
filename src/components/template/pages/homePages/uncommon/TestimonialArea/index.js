import React from "react";
import Slider from "react-slick";



const TestimonialArea = () => {
  const setting = {
    arrows: true,
    centerMode: true,
    centerPadding: "80px",
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      <a className="slick-prev"><i className="fas fa-arrow-left" alt="Arrow Icon"></i></a>,
    nextArrow:
      <a className="slick-next"><i className="fas fa-arrow-right" alt="Arrow Icon"></i></a>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="ltn__testimonial-area section-bg-1 pt-290 pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h6 className="section-subtitle ltn__secondary-color">
                  // Testimonials
                </h6>
                <h1 className="section-title">
                  Clients Feedbacks<span>.</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner slick-initialized slick-slider">
            <div className="slick-list draggable">
            
                <Slider {...setting}>
                  <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-4">
                      <div className="ltn__testimoni-img">
                        <img src="./assets/img/testimonial/6.jpg" alt="#" />
                      </div>
                      <div className="ltn__testimoni-info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipi sicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                        <h4>Rosalina D. William</h4>
                        <h6>Founder</h6>
                      </div>
                      <div className="ltn__testimoni-bg-icon">
                        <i className="far fa-comments" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-4">
                      <div className="ltn__testimoni-img">
                        <img src="./assets/img/testimonial/7.jpg" alt="#" />
                      </div>
                      <div className="ltn__testimoni-info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipi sicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                        <h4>Rosalina D. William</h4>
                        <h6>Founder</h6>
                      </div>
                      <div className="ltn__testimoni-bg-icon">
                        <i className="far fa-comments" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-4">
                      <div className="ltn__testimoni-img">
                        <img src="./assets/img/testimonial/1.jpg" alt="#" />
                      </div>
                      <div className="ltn__testimoni-info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipi sicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                        <h4>Rosalina D. William</h4>
                        <h6>Founder</h6>
                      </div>
                      <div className="ltn__testimoni-bg-icon">
                        <i className="far fa-comments" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-4">
                      <div className="ltn__testimoni-img">
                        <img src="./assets/img/testimonial/2.jpg" alt="#" />
                      </div>
                      <div className="ltn__testimoni-info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipi sicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                        <h4>Rosalina D. William</h4>
                        <h6>Founder</h6>
                      </div>
                      <div className="ltn__testimoni-bg-icon">
                        <i className="far fa-comments" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-4">
                      <div className="ltn__testimoni-img">
                        <img src="./assets/img/testimonial/5.jpg" alt="#" />
                      </div>
                      <div className="ltn__testimoni-info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipi sicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                        <h4>Rosalina D. William</h4>
                        <h6>Founder</h6>
                      </div>
                      <div className="ltn__testimoni-bg-icon">
                        <i className="far fa-comments" />
                      </div>
                    </div>
                  </div>
                </Slider>
             
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialArea;
