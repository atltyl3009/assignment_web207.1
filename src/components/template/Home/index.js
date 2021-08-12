import React,{useState} from "react";
import BannerArea from "../pages/homePages/uncommon/BannerArea";
import BannerAreaNone from "../pages/homePages/uncommon/BannerAreaNone";
import CountDownArea from "../pages/homePages/uncommon/CountDownArea";
import FooterArea from "../FooterArea";
import ModalArea from "../pages/homePages/uncommon/ModalArea";
import ProductTabArea from "../pages/homePages/ProductTabArea";
import SliderArea from "../pages/homePages/uncommon/SliderArea";
import HeaderTemplate from "../HeaderTemplate";

const Home = ({ viewP,cartItems,loginUser,handlLogOut,dataProduct,onAddCart,dataCate}) => {

  const handleScrollUp = () => {  
    const scrol = window.scrollY;
    console.log(scrol-scrol);
  
  };
  const [openCart, setOpenCart] = useState("");
  

  return (
    <>
      {/* Body main wrapper start */}
      <div className="body-wrapper">
        {/* HEADER AREA START (header-5) */}
        <HeaderTemplate   loginUser={loginUser} handlLogOut={handlLogOut}   cartItems={cartItems} setOpenCart={setOpenCart} />

        {/* Utilize Mobile Menu End */}
        <div className="ltn__utilize-overlay" />
        {/* SLIDER AREA START (slider-3) */}
        <SliderArea />
        {/* SLIDER AREA END */}
        {/* BANNER AREA START */}
        <BannerAreaNone />
        {/* BANNER AREA END */}
        {/* BANNER AREA START */}
        <BannerArea />
        {/* BANNER AREA END */}
        {/* PRODUCT TAB AREA START (product-item-3) */}
        <ProductTabArea dataProduct={dataProduct} onAddCart={onAddCart} dataCate={dataCate}/>
        {/* PRODUCT TAB AREA END */}
        {/* COUNTDOWN AREA START */}
        <CountDownArea />
        {/* COUNTDOWN AREA END */}
   
        {/* VIDEO AREA START */}
     

        {/* VIDEO AREA END */}
        {/* TESTIMONIAL AREA START (testimonial-4) */}

        
        {/* TESTIMONIAL AREA END */}
        {/* BLOG AREA START (blog-3) */}
        
        {/* BLOG AREA END */}

        {/* FOOTER AREA START */}
        <FooterArea />
        {/* FOOTER AREA END */}

        {/* MODAL AREA One START (Quick View Modal) */}
        <ModalArea viewP={viewP} />
        {/* MODAL AREA END */}
      </div>
      {/* Body main wrapper end */}
      {/* preloader area start */}
      <div className="preloader d-none" id="preloader">
        <div className="preloader-inner">
          <div className="spinner">
            <div className="dot1" />
            <div className="dot2" />
          </div>
        </div>
      </div>
      <a
        id="scrollUp"
        style={{ position: "fixed", zIndex: "2147483647" }}
        onClick={() => handleScrollUp()}
      >
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};

export default Home;
