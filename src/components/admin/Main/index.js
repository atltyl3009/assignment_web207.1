import React from "react";
import { Link } from "react-router-dom";
import Content from "../Content";
import HeaderAdmin from "../HeaderAdmin";
import NavAdmin from "../NavAdmin";

const Main = ({ dataProduct, dataCate ,onHandleDel }) => {
  return (
    <>
      <div>
        <HeaderAdmin />

        <div className="container-fluid" style={{ marginTop: "15px" }}>
          <div className="row">
            <NavAdmin />
            {/* content admin */}

            <Content dataCate={dataCate}  dataProduct={dataProduct} onHandleDel={onHandleDel} />
         
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
