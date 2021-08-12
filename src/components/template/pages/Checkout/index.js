import React from "react";
import FooterArea from "../../FooterArea";
import HeaderTemplate from "../../HeaderTemplate";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Checkout = ({
  cartItems,
  onRemoveCart,
  handleAddInvoice,
  loginUser,
  handlLogOut,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const subtotal = cartItems.reduce((a, x) => a + x.qty * x.price, 0);

  const onSubmit = (data) => {
   handleAddInvoice(data)
    console.log(data);
  };

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
          style={{ backgroundImage: "url(./assets/img/bg/9.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                  <div className="section-title-area ltn__section-title-2">
                    <h6 className="section-subtitle ltn__secondary-color">
                      // Welcome to our company
                    </h6>
                    <h1 className="section-title white-color">Checkout </h1>
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

        {/* WISHLIST AREA START */}
        <div className="ltn__checkout-area mb-105">
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltn__checkout-inner">
                    <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                      <h5>
                        Returning customer?{" "}
                        <a
                          className="ltn__secondary-color"
                          href="#ltn__returning-customer-login"
                          data-toggle="collapse"
                        >
                          Click here to login
                        </a>
                      </h5>
                      <div
                        id="ltn__returning-customer-login"
                        className="collapse ltn__checkout-single-content-info"
                      >
                        <div className="ltn_coupon-code-form ltn__form-box">
                          <p>Please login your accont.</p>
                          <form action="#">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-item input-item-name ltn__custom-icon">
                                  <input
                                    type="text"
                                    name="ltn__name"
                                    placeholder="Enter your name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-item input-item-email ltn__custom-icon">
                                  <input
                                    type="email"
                                    name="ltn__email"
                                    placeholder="Enter email address"
                                  />
                                </div>
                              </div>
                            </div>
                            <button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                              Login
                            </button>
                            <label className="input-info-save mb-0">
                              <input type="checkbox" name="agree" /> Remember me
                            </label>
                            <p className="mt-30">
                              <a href="register.html">Lost your password?</a>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                      <h5>
                        Have a coupon?{" "}
                        <a
                          className="ltn__secondary-color"
                          href="#ltn__coupon-code"
                          data-toggle="collapse"
                        >
                          Click here to enter your code
                        </a>
                      </h5>
                      <div
                        id="ltn__coupon-code"
                        className="collapse ltn__checkout-single-content-info"
                      >
                        <div className="ltn__coupon-code-form">
                          <p>
                            If you have a coupon code, please apply it below.
                          </p>
                          <form action="#">
                            <input
                              type="text"
                              name="coupon-code"
                              placeholder="Coupon code"
                            />
                            <button className="btn theme-btn-2 btn-effect-2 text-uppercase">
                              Apply Coupon
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="ltn__checkout-single-content mt-50">
                      <h4 className="title-2">Billing Details</h4>
                      <div className="ltn__checkout-single-content-info">
                        <h6>Personal Information</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                              {errors?.fsname?.type === "required" && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                              <input
                                {...register("fsname", { required: true })}
                                type="text"
                                placeholder="First name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                              {errors?.lsname?.type === "required" && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                              <input
                                {...register("lsname", { required: true })}
                                type="text"
                                placeholder="Last name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-email ltn__custom-icon">
                              {errors?.email?.type === "required" && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                              <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="email address"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-phone ltn__custom-icon">
                              {errors?.phone?.type === "required" && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                              <input
                                {...register("phone", { required: true })}
                                type="text"
                                placeholder="phone number"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <h6>Address</h6>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-item">
                                  {errors?.address?.type === "required" && (
                                    <span style={{ color: "red" }}>
                                      This field is required
                                    </span>
                                  )}
                                  <input
                                    {...register("address", { required: true })}
                                    type="text"
                                    placeholder="House number and street name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-item">
                                  {errors?.city?.type === "required" && (
                                    <span style={{ color: "red" }}>
                                      This field is required
                                    </span>
                                  )}
                                  <select
                                    className="nice-select"
                                    {...register("city", { required: true })}
                                  >
                                    <option selected disabled value="">
                                      Select Country
                                    </option>
                                    <option value="đà nẵng">Đà nẵng</option>
                                    <option value="hà nội">Hà nội</option>
                                    <option value="tp hồ chí minh">
                                      TP hồ chí minh
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p>
                          <label className="input-info-save mb-0">
                            <input type="checkbox" name="agree" /> Create an
                            account?
                          </label>
                        </p>
                        <h6>Order Notes (optional)</h6>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          {errors?.note?.type === "required" && (
                            <span style={{ color: "red" }}>
                              This field is required
                            </span>
                          )}
                          <textarea
                            {...register("note", { required: true })}
                            placeholder="Notes about your order, e.g. special notes for delivery."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ltn__checkout-payment-method mt-50">
                    <h4 className="title-2">Payment Method</h4>
                    <div id="checkout_accordion_1">
                      {/* card */}{" "}
                      {errors?.payment?.type === "required" && (
                        <span style={{ color: "red" }}>
                          This field is required
                        </span>
                      )}
                      <div className="card">
                        <input
                          {...register("payment", { required: true })}
                          type="radio"
                          name="payment"
                          value="check payment"
                          className="input-radio-1"
                        />
                        <h5
                          className="collapsed ltn__card-title"
                          data-toggle="collapse"
                          data-target="#faq-item-2-1"
                          aria-expanded="false"
                        >
                          Check payments
                        </h5>
                        <div
                          id="faq-item-2-1"
                          className="collapse"
                          data-parent="#checkout_accordion_1"
                        >
                          <div className="card-body">
                            <p>
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className="card">
                        <input
                          {...register("payment", { required: true })}
                          type="radio"
                          name="payment"
                          value="Cash"
                          className="input-radio-2"
                        />
                        <h5
                          className="ltn__card-title"
                          data-toggle="collapse"
                          data-target="#faq-item-2-2"
                          aria-expanded="true"
                        >
                          Cash on delivery
                        </h5>
                        <div
                          id="faq-item-2-2"
                          className="collapse show"
                          data-parent="#checkout_accordion_1"
                        >
                          <div className="card-body">
                            <p>Pay with cash upon delivery.</p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className="card">
                        <input
                          {...register("payment", { required: true })}
                          type="radio"
                          name="payment"
                          value="Via paypal"
                          className="input-radio-3"
                        />
                        <h5
                          className="collapsed ltn__card-title"
                          data-toggle="collapse"
                          data-target="#faq-item-2-3"
                          aria-expanded="false"
                        >
                          <img src="./assets/img/icons/payment-3.png" alt="#" />
                        </h5>
                        <div
                          id="faq-item-2-3"
                          className="collapse"
                          data-parent="#checkout_accordion_1"
                        >
                          <div className="card-body">
                            <p>
                              Pay via PayPal; you can pay with your credit card
                              if you don’t have a PayPal account.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ltn__payment-note mt-30 mb-30">
                      <p>
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our privacy policy.
                      </p>
                    </div>
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit"
                    >
                      Place order
                    </button>
                  </div>
                </div>
                <input
                  {...register("idProduct")}
                  type="text"
                
                  hidden
                  value={cartItems.map(x=> x.id)}
                />
                <div className="col-lg-6">
                  <div className="shoping-cart-total mt-50">
                    <h4 className="title-2">Cart Totals</h4>
                    <table className="table">
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={index}>
                            <td>
                              {item.name} <strong>× {item.qty}</strong>
                            </td>
                            <td>
                              $
                              {new Intl.NumberFormat("ja-JP").format(
                                item.price
                              )}
                            </td>
                          </tr>
                        ))}

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
                            <input
                              {...register("total")}
                              type="text"
                              hidden
                              value={new Intl.NumberFormat("ja-JP").format(
                                subtotal + 30
                              )}
                            />
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
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* WISHLIST AREA START */}
      </div>

      <FooterArea />
    </>
  );
};

export default Checkout;
