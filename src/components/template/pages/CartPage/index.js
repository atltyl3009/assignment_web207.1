import React from "react";
import FooterArea from "../../FooterArea";
import HeaderTemplate from "../../HeaderTemplate";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
const CartPage = ({
  cartItems,
  onInc,
  onDec,
  onRemoveCart,
  loginUser,
  handlLogOut,
  dataProduct,
  setCartItems,
  subtotal,onBlurQty
}) => {


 


  return (
    <>
      <HeaderTemplate
        loginUser={loginUser}
        handlLogOut={handlLogOut}
        cartItems={cartItems}
        onRemoveCart={onRemoveCart}
      />

      <div>
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
                    <h6 className="section-subtitle ltn__secondary-color">
                      // Welcome to our company
                    </h6>
                    <h1 className="section-title white-color">Cart</h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        <div>
          {/* SHOPING CART AREA START */}
          {cartItems.length === 0 ? (
            <center>
              <h1> Bạn chưa có sản phẩm nào trong giỏ ? </h1>
              <Link to="/shop">
                <h1 style={{ marginBottom: "165px", color: "green" }}>
                  Trở lại shop !
                </h1>
              </Link>
            </center>
          ) : (
            <div className="liton__shoping-cart-area mb-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="shoping-cart-inner">
                      <div className="shoping-cart-table table-responsive">
                 
                        <table className="table">
                          <tbody>
                   
                            {/* map cart */}

                            {cartItems.map((item, index) => {
                          

                       

                              return (
                                <tr key={index}>
                                  <td
                                    className="cart-product-remove"
                                    onClick={() => onRemoveCart(item)}
                                  >
                                    x
                                  </td>
                                  <td className="cart-product-image">
                                    <a href="product-details.html">
                                      <img src={item.image} alt="#" />
                                    </a>
                                  </td>
                                  <td className="cart-product-info">
                                    <h4>
                                      <a href="product-details.html">
                                        {item.name}
                                      </a>
                                    </h4>
                                  </td>
                                  <td className="cart-product-price">
                                    $
                                    {new Intl.NumberFormat("ja-JP").format(
                                      item.price
                                    )}
                                  </td>
                                  <td className="cart-product-quantity">
                                    <div className="cart-plus-minus">
                                      <div
                                        className="dec qtybutton"
                                        onClick={() => onInc(item)}
                                      >
                                        -
                                      </div>
                                      <input
                                   
                                        type="number"
                                        defaultValue={item.qty}
                                        id="inpQty"
                                        onBlur={(e) =>
                                          onBlurQty(e.target.value,item.id)
                                        }
                                        name="qtybutton"
                                        className="cart-plus-minus-box"
                                      />
                                      <div
                                        className="inc qtybutton"
                                        onClick={() => onDec(item)}
                                      >
                                        +
                                      </div>
                                    </div>
                                  </td>
                                  <td className="cart-product-subtotal">
                                    $
                                    {new Intl.NumberFormat("ja-JP").format(
                                      item.qty * item.price
                                    )}
                                  </td>
                                </tr>
                              );
                            })}

                            {/* map cart */}

                            <tr className="cart-coupon-row">
                              <td colSpan={6}>
                                <div className="cart-coupon">
                                  <input
                                    type="text"
                                    name="cart-coupon"
                                    placeholder="Coupon code"
                                  />
                                  <button
                                   
                                    className="btn theme-btn-2 btn-effect-2"
                                  >
                                    Apply Coupon
                                  </button>
                                </div>
                              </td>
                              <td>
                                <button
                                  type="submit"
                                  className="btn theme-btn-2 btn-effect-2-- "
                                >
                                  Update Cart
                                </button>
                              </td>
                            </tr>
                       
                          </tbody>
                        </table>   
              
                      </div>
                      <div className="shoping-cart-total mt-50">
                        <h4>Cart Totals</h4>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Cart Subtotal</td>
                              <td>
                                ${" "}
                                {new Intl.NumberFormat("ja-JP").format(
                                  subtotal
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>Shipping and Handing</td>
                              <td>$30</td>
                            </tr>
                            <tr>
                              <td>Vat</td>
                              <td>$00.00</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Order Total</strong>
                              </td>
                              <td>
                                <strong>
                                  $
                                  {new Intl.NumberFormat("ja-JP").format(
                                    subtotal + 30
                                  )}
                                </strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="btn-wrapper text-right">
                          <Link
                            to={`/checkout`}
                            className="theme-btn-1 btn btn-effect-1"
                          >
                            Proceed to checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* SHOPING CART AREA END     */}
        </div>
      </div>

      <FooterArea />
    </>
  );
};

export default CartPage;
