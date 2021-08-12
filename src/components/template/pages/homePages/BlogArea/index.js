import React from 'react'
import Slider from "react-slick";
const BlogArea = () => {
  const setting={
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
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
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
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
  }
    return (
        <>
               <div className="ltn__blog-area pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title white-color---">Leatest Blog</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal slick-initialized slick-slider">
          <Slider {...setting}>

        
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html"><img src="./assets/img/blog/1.jpg" alt="#" /></a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#"><i className="far fa-user" />by: Admin</a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#"><i className="fas fa-tags" />Services</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><a href="blog-details.html">Common Engine Oil Problems and Solutions</a></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html"><img src="./assets/img/blog/2.jpg" alt="#" /></a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#"><i className="far fa-user" />by: Admin</a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#"><i className="fas fa-tags" />Services</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><a href="blog-details.html">How and when to replace brake rotors</a></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2020</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html"><img src="./assets/img/blog/3.jpg" alt="#" /></a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#"><i className="far fa-user" />by: Admin</a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#"><i className="fas fa-tags" />Services</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><a href="blog-details.html">Elenance, Servicing &amp; Repairs</a></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt" />August 22, 2020</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html"><img src="./assets/img/blog/4.jpg" alt="#" /></a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#"><i className="far fa-user" />by: Admin</a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#"><i className="fas fa-tags" />Services</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><a href="blog-details.html">Healthiest Vegetables on Earth</a></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html"><img src="./assets/img/blog/5.jpg" alt="#" /></a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#"><i className="far fa-user" />by: Admin</a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#"><i className="fas fa-tags" />Services</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><a href="blog-details.html">How te Your Tires Last Longer</a></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}  

            </Slider>
          </div>
        </div>
      </div>
        </>
    )
}

export default BlogArea
