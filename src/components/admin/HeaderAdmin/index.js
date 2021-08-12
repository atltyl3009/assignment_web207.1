import React from "react";
import {Link} from "react-router-dom"
const HeaderAdmin = () => {

  const handleChange = (value) => {
    console.log(value);
  };
  
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-info flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to={"/"}>
         <button className="btn btn-dark">Trang chủ</button>
        </Link>
      </header>
    </>
  );
};

export default HeaderAdmin;
