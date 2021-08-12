import React from "react";
import FooterArea from "../../FooterArea";
import HeaderTemplate from "../../HeaderTemplate";

const NewsPage = ({cartItems ,onRemoveCart,loginUser,handlLogOut}) => {
  return (
    <>
      <HeaderTemplate loginUser={loginUser} handlLogOut={handlLogOut} cartItems={cartItems}  onRemoveCart={onRemoveCart}/>
      <div>
        {/* BREADCRUMB AREA START */}
        <div
          className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
     
          style={{backgroundImage : "url(./assets/img/bg/9.jpg)"}}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                  <div className="section-title-area ltn__section-title-2">
                    <h6 className="section-subtitle ltn__secondary-color">
                      // Welcome to our company
                    </h6>
                    <h1 className="section-title white-color">
                      Blog Right Sidebar
                    </h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>Blog</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* BLOG AREA START */}
        <div className="ltn__blog-area mb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="ltn__blog-list-wrap">
                  {/* Blog Item */}
                  <div className="ltn__blog-item ltn__blog-item-5">
                    <div className="ltn__blog-img">
                      <a href="blog-details.html">
                        <img src="./assets/img/blog/31.jpg" alt="Image" />
                      </a>
                    </div>
                    <div className="ltn__blog-brief">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-category">
                            <a href="#">Business</a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="ltn__blog-title">
                        <a href="blog-details.html">
                          Lorem ipsum dolor sit amet, consecte cing elit, sed do
                          eiusmod tempor.
                        </a>
                      </h3>
                      <div className="ltn__blog-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="far fa-eye" />
                              232 Views
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="far fa-comments" />
                              35 Comments
                            </a>
                          </li>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            June 22, 2020
                          </li>
                        </ul>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint
                      </p>
                      <div className="ltn__blog-meta-btn">
                        <div className="ltn__blog-meta">
                          <ul>
                            <li className="ltn__blog-author">
                              <a href="#">
                                <img src="./assets/img/blog/author.jpg" alt="#" />
                                By: Ethan
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ltn__blog-btn">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right" />
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blog Item (Video) */}
                  <div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-video">
                    <div className="ltn__video-img">
                      <img src="./assets/img/blog/32.jpg" alt="video popup bg image" />
                      <a
                        className="ltn__video-icon-2 ltn__secondary-bg ltn__video-icon-2-border---"
                        href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
                        data-rel="lightcase:myCollection"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                    <div className="ltn__blog-brief">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-category">
                            <a href="#">Business</a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="ltn__blog-title">
                        <a href="blog-details.html">
                          Adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore.
                        </a>
                      </h3>
                      <div className="ltn__blog-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="far fa-eye" />
                              232 Views
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="far fa-comments" />
                              35 Comments
                            </a>
                          </li>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            June 22, 2020
                          </li>
                        </ul>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint
                      </p>
                      <div className="ltn__blog-meta-btn">
                        <div className="ltn__blog-meta">
                          <ul>
                            <li className="ltn__blog-author">
                              <a href="#">
                                <img src="./assets/img/blog/author.jpg" alt="#" />
                                By: Ethan
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ltn__blog-btn">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right" />
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blog Item (Gallery) */}
                  <div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-gallery">
                    <div className="ltn__blog-gallery-active slick-arrow-1 slick-arrow-1-inner">
                      <div className="ltn__blog-gallery-item">
                        <a href="blog-details.html">
                          <img src="./assets/img/blog/33.jpg" alt="Image" />
                        </a>
                      </div>
                      <div className="ltn__blog-gallery-item">
                        <a href="blog-details.html">
                          <img src="./assets/img/blog/34.jpg" alt="Image" />
                        </a>
                      </div>
                      <div className="ltn__blog-gallery-item">
                        <a href="blog-details.html">
                          <img src="./assets/img/blog/31.jpg" alt="Image" />
                        </a>
                      </div>
                    </div>
                    <div className="ltn__blog-brief">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-category">
                            <a href="#">Business</a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="ltn__blog-title">
                        <a href="blog-details.html">
                          Magna aliqua. Ut enim ad minim venia m, quis nostrud
                          exercitation ullamco
                        </a>
                      </h3>
                      <div className="ltn__blog-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="far fa-eye" />
                              232 Views
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="far fa-comments" />
                              35 Comments
                            </a>
                          </li>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            June 22, 2020
                          </li>
                        </ul>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint
                      </p>
                      <div className="ltn__blog-meta-btn">
                        <div className="ltn__blog-meta">
                          <ul>
                            <li className="ltn__blog-author">
                              <a href="#">
                                <img src="./assets/img/blog/author.jpg" alt="#" />
                                By: Ethan
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ltn__blog-btn">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right" />
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blog Item (Audio) */}
                  <div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-audio">
                    <div className="post-audio embed-responsive embed-responsive-16by9">
                      <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/837045328&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                    </div>
                    <div className="ltn__blog-brief">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-category">
                            <a href="#">Business</a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="ltn__blog-title">
                        <a href="blog-details.html">
                          Laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor.
                        </a>
                      </h3>
                      <div className="ltn__blog-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="far fa-eye" />
                              232 Views
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="far fa-comments" />
                              35 Comments
                            </a>
                          </li>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            June 22, 2020
                          </li>
                        </ul>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint
                      </p>
                      <div className="ltn__blog-meta-btn">
                        <div className="ltn__blog-meta">
                          <ul>
                            <li className="ltn__blog-author">
                              <a href="#">
                                <img src="./assets/img/blog/author.jpg" alt="#" />
                                By: Ethan
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ltn__blog-btn">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right" />
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blog Item (No Image) */}
                  <div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-no-image">
                    <div className="ltn__blog-brief">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-category">
                            <a href="#">Business</a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="ltn__blog-title">
                        <a href="blog-details.html">
                          In reprehenderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur.
                        </a>
                      </h3>
                      <div className="ltn__blog-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="far fa-eye" />
                              232 Views
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="far fa-comments" />
                              35 Comments
                            </a>
                          </li>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            June 22, 2020
                          </li>
                        </ul>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint
                      </p>
                      <div className="ltn__blog-meta-btn">
                        <div className="ltn__blog-meta">
                          <ul>
                            <li className="ltn__blog-author">
                              <a href="#">
                                <img src="./assets/img/blog/author.jpg" alt="#" />
                                By: Ethan
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ltn__blog-btn">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right" />
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blog Item (Quote) */}
                  <div
                    className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-quote bg-image bg-overlay-theme-90"
                    data-bg="./assets/img/blog/3.jpg"
                  >
                    <div className="ltn__blog-brief">
                      <blockquote>
                        <a href="blog-details.html">
                          Excepteur sint occaecat cupida tat non proident, sunt
                          in.
                        </a>
                      </blockquote>
                      <div className="ltn__blog-meta mb-0">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="far fa-eye" />
                              232 Views
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="far fa-comments" />
                              35 Comments
                            </a>
                          </li>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            June 22, 2020
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Blog Item (Background Image) */}
                  <div
                    className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-bg-image bg-image bg-overlay-white-90"
                    data-bg="./assets/img/blog/2.jpg"
                  >
                    <div className="ltn__blog-brief">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-category">
                            <a href="#">Business</a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="ltn__blog-title">
                        <a href="blog-details.html">
                          Culpa qui officia deserunt mollit anim id est laborum.
                          Sed ut perspiciatis
                        </a>
                      </h3>
                      <div className="ltn__blog-meta mb-0">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="far fa-eye" />
                              232 Views
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="far fa-comments" />
                              35 Comments
                            </a>
                          </li>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            June 22, 2020
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ltn__pagination-area text-center">
                      <div className="ltn__pagination">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fas fa-angle-double-left" />
                            </a>
                          </li>
                          <li>
                            <a href="#">1</a>
                          </li>
                          <li className="active">
                            <a href="#">2</a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li>
                          <li>
                            <a href="#">...</a>
                          </li>
                          <li>
                            <a href="#">10</a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-angle-double-right" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <aside className="sidebar-area blog-sidebar ltn__right-sidebar">
                  {/* Author Widget */}
                  <div className="widget ltn__author-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border">
                      About Me
                    </h4>
                    <div className="ltn__author-widget-inner text-center">
                      <img src="./assets/img/team/4.jpg" alt="Image" />
                      <h5>Rosalina D. Willaimson</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veritatis distinctio, odio, eligendi suscipit
                        reprehenderit atque.
                      </p>
                      <div className="ltn__social-media">
                        <ul>
                          <li>
                            <a href="#" title="Facebook">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Twitter">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Linkedin">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Behance">
                              <i className="fab fa-behance" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Youtube">
                              <i className="fab fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Search Widget */}
                  <div className="widget ltn__search-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border">
                      Search Objects
                    </h4>
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search your keyword..."
                      />
                      <button type="submit">
                        <i className="fas fa-search" />
                      </button>
                    </form>
                  </div>
                  {/* Popular Post Widget */}
                  <div className="widget ltn__popular-post-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border">
                      Popular Feeds
                    </h4>
                    <ul>
                      <li>
                        <div className="popular-post-widget-item clearfix">
                          <div className="popular-post-widget-img">
                            <a href="blog-details.html">
                              <img src="./assets/img/team/5.jpg" alt="#" />
                            </a>
                          </div>
                          <div className="popular-post-widget-brief">
                            <h6>
                              <a href="blog-details.html">
                                Lorem ipsum dolor sit cing elit, sed do.
                              </a>
                            </h6>
                            <div className="ltn__blog-meta">
                              <ul>
                                <li className="ltn__blog-date">
                                  <a href="#">
                                    <i className="far fa-calendar-alt" />
                                    June 22, 2020
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="popular-post-widget-item clearfix">
                          <div className="popular-post-widget-img">
                            <a href="blog-details.html">
                              <img src="./assets/img/team/6.jpg" alt="#" />
                            </a>
                          </div>
                          <div className="popular-post-widget-brief">
                            <h6>
                              <a href="blog-details.html">
                                Lorem ipsum dolor sit cing elit, sed do.
                              </a>
                            </h6>
                            <div className="ltn__blog-meta">
                              <ul>
                                <li className="ltn__blog-date">
                                  <a href="#">
                                    <i className="far fa-calendar-alt" />
                                    June 22, 2020
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="popular-post-widget-item clearfix">
                          <div className="popular-post-widget-img">
                            <a href="blog-details.html">
                              <img src="./assets/img/team/7.jpg" alt="#" />
                            </a>
                          </div>
                          <div className="popular-post-widget-brief">
                            <h6>
                              <a href="blog-details.html">
                                Lorem ipsum dolor sit cing elit, sed do.
                              </a>
                            </h6>
                            <div className="ltn__blog-meta">
                              <ul>
                                <li className="ltn__blog-date">
                                  <a href="#">
                                    <i className="far fa-calendar-alt" />
                                    June 22, 2020
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="popular-post-widget-item clearfix">
                          <div className="popular-post-widget-img">
                            <a href="blog-details.html">
                              <img src="./assets/img/team/8.jpg" alt="#" />
                            </a>
                          </div>
                          <div className="popular-post-widget-brief">
                            <h6>
                              <a href="blog-details.html">
                                Lorem ipsum dolor sit cing elit, sed do.
                              </a>
                            </h6>
                            <div className="ltn__blog-meta">
                              <ul>
                                <li className="ltn__blog-date">
                                  <a href="#">
                                    <i className="far fa-calendar-alt" />
                                    June 22, 2020
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Menu Widget (Category) */}
                  <div className="widget ltn__menu-widget ltn__menu-widget-2 ltn__menu-widget-2-color-2">
                    <h4 className="ltn__widget-title ltn__widget-title-border">
                      Categories
                    </h4>
                    <ul>
                      <li>
                        <a href="#">
                          Business <span>26</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Consultant <span>30</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Creative <span>71</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          UI/UX <span>56</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Technology <span>60</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Social Media Widget */}
                  <div className="widget ltn__social-media-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border">
                      Never Miss News
                    </h4>
                    <div className="ltn__social-media-2">
                      <ul>
                        <li>
                          <a href="#" title="Facebook">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Twitter">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Linkedin">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Instagram">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Behance">
                            <i className="fab fa-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Popular Post Widget (Twitter Post) */}
                  <div className="widget ltn__popular-post-widget ltn__twitter-post-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border">
                      Twitter Feeds
                    </h4>
                    <ul>
                      <li>
                        <div className="popular-post-widget-item clearfix">
                          <div className="popular-post-widget-img">
                            <a href="blog-details.html">
                              <i className="fab fa-twitter" />
                            </a>
                          </div>
                          <div className="popular-post-widget-brief">
                            <p>
                              Carsafe - #Gutenberg ready @wordpress Theme for
                              Car Service, Auto Parts, Car Dealer available on
                              @website
                              <a href="https://website.net/">
                                https://website.net
                              </a>
                            </p>
                            <div className="ltn__blog-meta">
                              <ul>
                                <li className="ltn__blog-date">
                                  <a href="#">
                                    <i className="far fa-calendar-alt" />
                                    June 22, 2020
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="popular-post-widget-item clearfix">
                          <div className="popular-post-widget-img">
                            <a href="blog-details.html">
                              <i className="fab fa-twitter" />
                            </a>
                          </div>
                          <div className="popular-post-widget-brief">
                            <p>
                              Carsafe - #Gutenberg ready @wordpress Theme for
                              Car Service, Auto Parts, Car Dealer available on
                              @website
                              <a href="https://website.net/">
                                https://website.net
                              </a>
                            </p>
                            <div className="ltn__blog-meta">
                              <ul>
                                <li className="ltn__blog-date">
                                  <a href="#">
                                    <i className="far fa-calendar-alt" />
                                    June 22, 2020
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="popular-post-widget-item clearfix">
                          <div className="popular-post-widget-img">
                            <a href="blog-details.html">
                              <i className="fab fa-twitter" />
                            </a>
                          </div>
                          <div className="popular-post-widget-brief">
                            <p>
                              Carsafe - #Gutenberg ready @wordpress Theme for
                              Car Service, Auto Parts, Car Dealer available on
                              @website
                              <a href="https://website.net/">
                                https://website.net
                              </a>
                            </p>
                            <div className="ltn__blog-meta">
                              <ul>
                                <li className="ltn__blog-date">
                                  <a href="#">
                                    <i className="far fa-calendar-alt" />
                                    June 22, 2020
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Instagram Widget */}
                  <div className="widget ltn__instagram-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border">
                      Instagram Feeds
                    </h4>
                    <div className="ltn__instafeed ltn__instafeed-grid insta-grid-gutter" />
                  </div>
                  {/* Tagcloud Widget */}
                  <div className="widget ltn__tagcloud-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border">
                      Popular Tags
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Popular</a>
                      </li>
                      <li>
                        <a href="#">desgin</a>
                      </li>
                      <li>
                        <a href="#">ux</a>
                      </li>
                      <li>
                        <a href="#">usability</a>
                      </li>
                      <li>
                        <a href="#">develop</a>
                      </li>
                      <li>
                        <a href="#">icon</a>
                      </li>
                      <li>
                        <a href="#">Car</a>
                      </li>
                      <li>
                        <a href="#">Service</a>
                      </li>
                      <li>
                        <a href="#">Repairs</a>
                      </li>
                      <li>
                        <a href="#">Auto Parts</a>
                      </li>
                      <li>
                        <a href="#">Oil</a>
                      </li>
                      <li>
                        <a href="#">Dealer</a>
                      </li>
                      <li>
                        <a href="#">Oil Change</a>
                      </li>
                      <li>
                        <a href="#">Body Color</a>
                      </li>
                    </ul>
                  </div>
                  {/* Banner Widget */}
                  <div className="widget ltn__banner-widget">
                    <a href="shop.html">
                      <img src="./assets/img/banner/banner-4.jpg" alt="Banner Image" />
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        {/* BLOG AREA END */}
        {/* FEATURE AREA START ( Feature - 3) */}
        <div className="ltn__feature-area before-bg-bottom-2 mb--30--- plr--5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__feature-item-box-wrap ltn__border-between-column white-bg">
                  <div className="row">
                    <div className="col-xl-3 col-md-6 col-12">
                      <div className="ltn__feature-item ltn__feature-item-8">
                        <div className="ltn__feature-icon">
                          <img src="./assets/img/icons/icon-img/11.png" alt="#" />
                        </div>
                        <div className="ltn__feature-info">
                          <h4>Curated Products</h4>
                          <p>
                            Provide Curated Products for all product over $100
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                      <div className="ltn__feature-item ltn__feature-item-8">
                        <div className="ltn__feature-icon">
                          <img src="./assets/img/icons/icon-img/12.png" alt="#" />
                        </div>
                        <div className="ltn__feature-info">
                          <h4>Handmade</h4>
                          <p>
                            We ensure the product quality that is our main goal
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                      <div className="ltn__feature-item ltn__feature-item-8">
                        <div className="ltn__feature-icon">
                          <img src="./assets/img/icons/icon-img/13.png" alt="#" />
                        </div>
                        <div className="ltn__feature-info">
                          <h4>Natural Food</h4>
                          <p>
                            Return product within 3 days for any product you buy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                      <div className="ltn__feature-item ltn__feature-item-8">
                        <div className="ltn__feature-icon">
                          <img src="./assets/img/icons/icon-img/14.png" alt="#" />
                        </div>
                        <div className="ltn__feature-info">
                          <h4>Free home delivery</h4>
                          <p>
                            We ensure the product quality that you can trust
                            easily
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FEATURE AREA END */}
      </div>

      <FooterArea />
    </>
  );
};

export default NewsPage;