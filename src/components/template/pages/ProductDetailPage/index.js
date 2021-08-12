import FooterArea from "../../FooterArea";

import HeaderTemplate from "../../HeaderTemplate";
import ModalArea from "../homePages/uncommon/ModalArea";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Slider from "react-slick";
import { useForm } from "react-hook-form";

const ProductDetailPage = ({
  dataProduct,
  onAddCart,
  cartItems,
  onRemoveCart,
  setCartItems,
  qty,
  setQty,

  viewP,
  loginUser,
  handlLogOut,
  dataCate,
  handleAddComment,
  dataComment,
  onAddCartDetail,
}) => {
  let { id } = useParams();
  const productDetail = dataProduct.find((item) => item.id === id);
  const listCate = dataCate.find((x) => x.id === productDetail.categoriesID);

  const relateProduct = dataProduct.filter(
    (x) => x.categoriesID === listCate.id
  );

  const relateProductMinus = relateProduct.filter(
    (x) => x.id !== productDetail.id
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // comment
  const onadd = (data) => {
    handleAddComment(data);
  };
  const commentByProduct = dataComment.filter(
    (x) => x.idProduct === productDetail.id
  );
  // comment end

  //cart

  //cart

  const setting = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: (
      <a className="slick-prev">
        <i className="fas fa-arrow-left" alt="Arrow Icon"></i>
      </a>
    ),
    nextArrow: (
      <a className="slick-next">
        <i className="fas fa-arrow-right" alt="Arrow Icon"></i>
      </a>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settingImg = {
    rtl: false,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: (
      <a className="slick-prev">
        <i className="fas fa-arrow-left" alt="Arrow Icon"></i>
      </a>
    ),
    nextArrow: (
      <a className="slick-next">
        <i className="fas fa-arrow-right" alt="Arrow Icon"></i>
      </a>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
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
      <div>
        <HeaderTemplate
          cartItems={cartItems}
          loginUser={loginUser}
          handlLogOut={handlLogOut}
          onRemoveCart={onRemoveCart}
        />

        {/* BREADCRUMB AREA START */}
        <div
          className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
          style={{ backgroundImage: "url(/assets/img/bg/9.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                  <div className="section-title-area ltn__section-title-2">
                    <h1 className="section-title white-color">
                      Chi tiết sản phẩm
                    </h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">Trang chủ</Link>
                      </li>
                      <li>Chi tiết sản phẩm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* SHOP DETAILS AREA START */}
        <div className="ltn__shop-details-area pb-85">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="ltn__shop-details-inner mb-60">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ltn__shop-details-img-gallery">
                        <div className="ltn__shop-details-large-img">
                          <div className="single-large-img">
                            <a
                              href="/assets/img/product/1.png"
                              data-rel="lightcase:myCollection"
                            >
                              <img src={productDetail.image} alt="Image" />
                            </a>
                          </div>
                          {/* <div className="single-large-img">
                            <a
                              href="/assets/img/product/2.png"
                              data-rel="lightcase:myCollection"
                            >
                              <img
                                src="/assets/img/product/2.png"
                                alt="Image"
                              />
                            </a>
                          </div> */}
                        </div>
                        
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="modal-product-info shop-details-info pl-0">
                       
                        <h3>{productDetail.name}</h3>
                        <div className="product-price">
                          <span>
                            $
                            {new Intl.NumberFormat("ja-JP").format(
                              productDetail.price
                            )}
                          </span>
                          {/* <del>$65.00</del> */}
                        </div>
                        <div className="modal-product-meta ltn__product-details-menu-1">
                          <ul>
                            <li>
                              <strong>Danh mục:</strong>
                              <span>
                                <a>{listCate.name}</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="ltn__product-details-menu-2">
                          <form onSubmit={onAddCartDetail}>
                            <ul>
                              <li>
                                <div className="cart-plus-minus">
                                  <div
                                    class="dec qtybutton"
                                    onClick={() =>
                                      setQty(qty < 2 ? 1 : qty - 1)
                                    }
                                  >
                                    -
                                  </div>
                                  <input
                                    type="text"
                                    id="quantity"
                                    defaultValue={qty}
                                    className="cart-plus-minus-box"
                                    onBlur={(e) =>
                                      setQty(
                                        e.target.value < 1 ? 1 : e.target.value
                                      )
                                    }
                                  />
                                  <div
                                    class="inc qtybutton"
                                    onClick={() => setQty(parseInt(qty) + 1)}
                                  >
                                    +
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a
                                  href=""
                                  className="theme-btn-1 btn btn-effect-1"
                                  title="Add to Cart"
                                  data-toggle="modal"
                                  data-target="#add_to_cart_modal"
                                  onClick={() => onAddCartDetail(productDetail)}
                                >
                                  <i className="fas fa-shopping-cart" />
                                  <span>Thêm vào giỏ</span>
                                </a>
                              </li>
                            </ul>
                          </form>
                        </div>
                    
                      
                     
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shop Tab Start */}
                <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                  <div className="ltn__shop-details-tab-menu">
                    <div className="nav">
                      <a
                        className="active show"
                        data-toggle="tab"
                        href="#liton_tab_details_1_1"
                      >
                        Mô tả
                      </a>
                 
                    </div>
                  </div>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="liton_tab_details_1_1"
                    >
                      <div className="ltn__shop-details-tab-content-inner">
                        <h4 className="title-2">Mô tả sản phẩm</h4>
                        <p>{productDetail.description}</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="liton_tab_details_1_2">
                      <div className="ltn__shop-details-tab-content-inner">
                        <h4 className="title-2">Customer Reviews</h4>
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="far fa-star" />
                              </a>
                            </li>
                            <li className="review-total">
                              {" "}
                              <a href="#"> ( 95 Reviews )</a>
                            </li>
                          </ul>
                        </div>
                        <hr />
                        {/* comment-area */}
                        <div className="ltn__comment-area mb-30">
                          <div className="ltn__comment-inner">
                            <ul>
                              {commentByProduct.map((data) => (
                                <li key={data.id}>
                                  <div className="ltn__comment-item clearfix">
                                    <div className="ltn__commenter-img">
                                      <img
                                        src="/assets/img/testimonial/1.jpg"
                                        alt="Image"
                                      />
                                    </div>
                                    <div className="ltn__commenter-comment">
                                      <h6>
                                        <a href="#">{data.name}</a>
                                      </h6>
                                      <div className="product-ratting">
                                        <ul>
                                          <li>
                                            <a href="#">
                                              <i className="fas fa-star" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <i className="fas fa-star" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <i className="fas fa-star" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <i className="fas fa-star-half-alt" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <i className="far fa-star" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <p>{data.content}</p>
                                      <span className="ltn__comment-reply-btn">
                                        September 3, 2020
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* comment-reply */}
                        <div className="ltn__comment-reply-area ltn__form-box mb-30">
                          <form onSubmit={handleSubmit(onadd)}>
                            <h4 className="title-2">Add a Review</h4>
                            <div className="mb-30">
                              <div className="add-a-review">
                                <h6>Your Ratings:</h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="input-item input-item-textarea ltn__custom-icon">
                              <input
                                type="text"
                                hidden
                                {...register("idProduct")}
                                value={productDetail.id}
                              />
                              {errors?.content?.type === "required" && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                              <textarea
                                {...register("content", { required: true })}
                                placeholder="Type your comments...."
                              />
                            </div>
                            <div className="input-item input-item-name ltn__custom-icon">
                              {errors?.name?.type === "required" && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                              <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Type your name...."
                              />
                            </div>
                            <div className="input-item input-item-email ltn__custom-icon">
                              {errors?.email?.type === "required" && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                              <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Type your email...."
                              />
                            </div>
                            <label className="mb-0">
                              <input type="checkbox" name="agree" /> Save my
                              name, email, and website in this browser for the
                              next time I comment.
                            </label>
                            <div className="btn-wrapper">
                              <button
                                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                type="submit"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shop Tab End */}
              </div>
              <div className="col-lg-4">
                <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                  {/* Top Rated Product Widget */}
 
                  {/* Banner Widget */}
                </aside>
              </div>
            </div>
          </div>
        </div>
        {/* SHOP DETAILS AREA END */}
        {/* PRODUCT SLIDER AREA START */}

        {/* PRODUCT SLIDER AREA END */}
      </div>
      <ModalArea viewP={viewP} />
      <FooterArea />
    </>
  );
};

export default ProductDetailPage;
