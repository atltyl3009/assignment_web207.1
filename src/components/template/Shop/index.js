import React, { useState } from "react";
import FooterArea from "../FooterArea";
import HeaderTemplate from "../HeaderTemplate";
import ModalArea from "../pages/homePages/uncommon/ModalArea";
import ProductShop from "../pages/ProductShop";

const Shop = ({
  dataProduct,
  dataCate,
  cartItems,
  onRemoveCart,
  onAddCart,
  handleViewP,
  viewP,loginUser,handlLogOut
}) => {


  return (
    <>
      <HeaderTemplate loginUser={loginUser} handlLogOut={handlLogOut} cartItems={cartItems} onRemoveCart={onRemoveCart} />
      <ProductShop
        dataProduct={dataProduct}
        dataCate={dataCate}
        handleViewP={handleViewP}
        onAddCart={onAddCart}
        viewP={viewP} 
      />
      <ModalArea viewP={viewP} onAddCart={onAddCart} />
      <FooterArea />
    </>
  );
};

export default Shop;
