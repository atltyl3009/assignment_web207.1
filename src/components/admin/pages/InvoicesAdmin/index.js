import React from "react";
import HeaderAdmin from "../../HeaderAdmin";
import NavAdmin from "../../NavAdmin";
import { Link } from "react-router-dom";
const  InvoicesAdmin = ({ dataInvoice ,  onHandleDelInvoice}) => {
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
                invoices Data
              </h2>
        
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th> Name </th>
                    
                      <th>Phone </th>
                      <th>Email </th>
                      <th>Address </th>
                      <th>City</th>
                      <th>Notes </th>
                      <th>Payments </th>
                      <th>Total </th>


                  <center>   <th>Action </th></center>
                    </tr>
                  </thead>
                  <tbody>
                    {dataInvoice.map((dataC, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{dataC.fsname +" "+ dataC.lsname}</td>
                    
                        <td>{dataC.phone}</td>
                        <td>{dataC.email}</td>
                        <td>{dataC.address}</td>
                        <td>{dataC.city}</td>
                        <td>{dataC.note}</td>
                        <td>{dataC.payment}</td>
                        <td>{dataC.total}</td>
                     
                        <td>
                        <Link to={`/detailinvoiceadmin/${dataC.id}`}>
                            <button style={{color: "blue" , fontWeight: "bold"}}>
                              Detail
                            </button>
                          </Link>
                          <Link to={`/editinvoice/${dataC.id}`}>
                            <button>
                              <i className="far fa-edit" />
                            </button>
                          </Link>

                          <button
                            style={{ marginLeft: "10px" }}
                             onClick={() => onHandleDelInvoice(dataC.id)}
                          >
                            <i className="fas fa-trash-alt" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
            {/* content admin */}
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoicesAdmin;
