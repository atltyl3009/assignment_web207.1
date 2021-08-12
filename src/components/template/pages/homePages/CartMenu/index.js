import React from "react";
  import { Link } from "react-router-dom";
const CartMenu = ({ openCart ,cartItems,onRemoveCart,setOpenCart }) => {

const subtotal = cartItems.reduce((a,x) =>a+ x.qty * x.price ,0);
  return (
    <>
      <div
        id="ltn__utilize-cart-menu"
        className={`ltn__utilize ltn__utilize-cart-menu ${openCart}`}
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <span className="ltn__utilize-menu-title">Cart</span>
            <button
              className="ltn__utilize-close"
              onClick={() => {
                setOpenCart("");
              }}
            >
              ×
            </button>
          </div>
          <div className="mini-cart-product-area ltn__scrollbar">
            {cartItems.map((item, index) => (
              <div className="mini-cart-item clearfix" key={index}>
                <div className="mini-cart-img">
                  <a href="#">
                    <img src={item.image} alt="Image" />
                  </a>
                  <span
                    className="mini-cart-item-delete"
                    onClick={() => onRemoveCart(item)}
                  >
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info">
                  <h6>
                    <a href="#">{item.name}</a>
                  </h6>
                  <span className="mini-cart-quantity">
                    {item.qty} x ${item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mini-cart-footer">
            <div className="mini-cart-sub-total">
              <h5>
                Subtotal: <span>${subtotal}</span>
              </h5>
            </div>
            <div className="btn-wrapper">
              <Link to={"/cart"} className="theme-btn-1 btn btn-effect-1">
                View Cart
              </Link>
              <Link to={"/cart"} className="theme-btn-2 btn btn-effect-2">
                Checkout
              </Link>
            </div>
            <p>Free Shipping on All Orders Over $100!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartMenu;