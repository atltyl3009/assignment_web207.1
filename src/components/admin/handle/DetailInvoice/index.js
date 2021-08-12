import React from "react";
import HeaderAdmin from "../../HeaderAdmin";
import NavAdmin from "../../NavAdmin";
import { useParams } from "react-router-dom";
const DetailInvoice = ({ dataInvoice,dataProduct }) => {

 let { id } = useParams();
 const invoiceDetail = dataInvoice.find((item) => item.id === id);

 const idProduct =  invoiceDetail.idProduct.split(",");

 const listProduct =  dataProduct.filter(x => idProduct.find(a => a === x.id) );

 
 


  return (
    <>
      <div>
        <HeaderAdmin />

        <div className="container-fluid" style={{ marginTop: "15px" }}>
          <div className="row">
            <NavAdmin />
            {/* content admin */}
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <h2 style={{ width: "300px", marginRight: "0", float: "left" }}>
                Detail Invoice
              </h2>

              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th> products </th>
                    
                      <th>Quantity </th>
                      <th>Price </th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    listProduct.map((product,index)=>(
                      <tr key={index}>
                      
                      <td>{index+1}</td>
                     <td><img width={"50px"} style={{marginRight:"20px"}} src={product.image} />  {product.name}</td>
                 
                      <td>1</td> 
                      <td>{product.price}</td>
                    </tr>
                    ))
                  }
                    
                  </tbody>
                </table>
                <div>
                  <h4>
                    Tổng tiền : <span>{invoiceDetail.total}</span>
                  </h4>
                </div>
              </div>
            </main>
            {/* content admin */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailInvoice;
