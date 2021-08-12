import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const ProductShop = ({ dataProduct, dataCate, onAddCart, handleViewP }) => {
  const [searchArray, setSearchArray] = useState(dataProduct.slice(0));

  const { register, handleSubmit } = useForm();
  const onSearch = ({ search }, e) => {
    const filterP = dataProduct.filter((pd) => {
      return pd.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchArray(filterP);
    // e.target.reset();
  };
  const handleCate = (idcate) => {
    const filterIdCate = dataProduct.filter(
      (listCate) => listCate.categoriesID === idcate
    );
    setSearchArray(filterIdCate);
  };

  const [pageNumber, setPageNumber] = useState(0);
  const limit = 9;
  const page = pageNumber * limit;
  const currentPageData = searchArray.slice(page, page + limit);
  const pageCount = Math.ceil(searchArray.length / limit);
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  const [sort, setSort] = useState("");

  const handleSort = (sort) => {
    setSort(sort);
    switch (sort) {
      case "low":
        const setLow = searchArray.sort((a, b) => a.price - b.price);
        setSearchArray(setLow);
        break;
      case "high":
        const setHigh = searchArray.reverse();
        setSearchArray(setHigh);
        break;
      case "new":
        setSearchArray(dataProduct.slice(0));
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* <!-- BREADCRUMB AREA START --> */}
      <div
        className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image plr--9---"
        style={{ backgroundImage: "url(/assets/img/bg/9.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div className="section-title-area ltn__section-title-2">
                 
                  <h1 className="section-title white-color">Danh mục</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li>Danh mục</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- BREADCRUMB AREA START --> */}

      <div className="ltn__product-area ltn__product-gutter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-2 mb-120">
              <div className="ltn__shop-options">
                <ul>
                  <li>
                    <div className="ltn__grid-list-tab-menu ">
           
                    </div>
                  </li>
                  <li>
                  
                  </li>
                  <li>
               
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="liton_product_grid"
                >
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                      {/* ltn__product-item */}
                      {currentPageData.map((dataPd, index) => (
                        <div className="col-xl-4 col-sm-6 col-6" key={index}>
                          <div className="ltn__product-item ltn__product-item-3 text-center">
                            <div className="product-img">
                              <Link to={`/shopdetail/${dataPd.id}`}>
                                <img src={dataPd.image} alt="#" />
                              </Link>
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badge">New</li>
                                </ul>
                              </div>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="/shop"
                                      title="Quick View"
                                      data-toggle="modal"
                                      data-target="#quick_view_modal"
                                      onClick={() => handleViewP(dataPd.id)}
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/shop"
                                      title="Add to Cart"
                                      data-toggle="modal"
                                      data-target="#add_to_cart_modal"
                                      onClick={() => onAddCart(dataPd)}
                                    >
                                      <i className="fas fa-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/shop"
                                      title="Wishlist"
                                      data-toggle="modal"
                                      data-target="#liton_wishlist_modal"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="/shop">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/shop">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/shop">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/shop">
                                      <i className="fas fa-star-half-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/shop">
                                      <i className="far fa-star" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <Link to={`/shopdetail/${dataPd.id}`}>
                                <h2 className="product-title">
                                  <Link to={`/shopdetail/${dataPd.id}`}>
                                    {dataPd.name}
                                  </Link>
                                </h2>
                                <div className="product-price">
                                  <span>
                                    $
                                    {new Intl.NumberFormat("ja-JP").format(
                                      dataPd.price
                                    )}
                                  </span>
                                  {/* <del>$162.00</del> */}
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* ltn__product-item */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_product_list">
                  <div className="ltn__product-tab-content-inner ltn__product-list-view">
                    <div className="row">
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        {searchArray.map((dataPd, index) => (
                          <div
                            className="ltn__product-item ltn__product-item-3"
                            key={index}
                          >
                            <div className="product-img">
                              <a href="product-details.html">
                                <img src={dataPd.image} alt="#" />
                              </a>
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badge">New</li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info">
                              <h2 className="product-title">
                                <a href="product-details.html">{dataPd.name}</a>
                              </h2>
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="/shop">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/shop">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/shop">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/shop">
                                      <i className="fas fa-star-half-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/shop">
                                      <i className="far fa-star" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product-price">
                                <span>
                                  $
                                  {new Intl.NumberFormat("ja-JP").format(
                                    dataPd.price
                                  )}
                                </span>
                                <del>$1720.00</del>
                              </div>
                              <div className="product-brief">
                                <p>{dataPd.description}</p>
                              </div>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="/shop"
                                      title="Quick View"
                                      data-toggle="modal"
                                      data-target="#quick_view_modal"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/shop"
                                      title="Add to Cart"
                                      data-toggle="modal"
                                      data-target="#add_to_cart_modal"
                                    >
                                      <i className="fas fa-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/shop"
                                      title="Wishlist"
                                      data-toggle="modal"
                                      data-target="#liton_wishlist_modal"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                   
                    </div>
                  </div>
                </div>
              </div>
 
            </div>
            <div className="col-lg-4  mb-120">
              <aside className="sidebar ltn__shop-sidebar">
          
                <div className="widget ltn__banner-widget">
                  <a href="shop.html">
                    <img src="/assets/img/banner/13.png" alt="#" />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShop;
