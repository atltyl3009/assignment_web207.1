import React from "react";
import HeaderAdmin from "../../HeaderAdmin";
import NavAdmin from "../../NavAdmin";
import { Link } from "react-router-dom";
const ContactAdmin = ({ dataContact,onHandleDelContact }) => {
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
                Contact Data
              </h2>
              <Link to={"/addcontact"}>
                <button
                  className="btn-success btn-add-admin"
               
                >
                  Thêm mới
                </button>
              </Link>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name </th>
                      <th>Email </th>
                      <th>Service </th>
                      <th>Phone </th>
                      <th>Message </th>
                      
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataContact.map((dataC, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{dataC.nameContact}</td>

                        <td>{dataC.emailContact}</td>
                        <td>{dataC.serviceContact}</td>
                        <td>{dataC.phoneContact}</td>
                        <td>{dataC.messageContact}</td>
                        <td>
                          <Link to={`/editcontact/${dataC.id}`}>
                            <button>
                              <i className="far fa-edit" />
                            </button>
                          </Link>

                          <button
                            style={{ marginLeft: "10px" }}
                              onClick={() => onHandleDelContact(dataC.id)}
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

export default ContactAdmin;
