import React from "react";
import HeaderAdmin from "../../HeaderAdmin";
import NavAdmin from "../../NavAdmin";
import { Link } from "react-router-dom";
const UserAdmin = ({ dataUser,onHandleDelUser }) => {
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
                User Data
              </h2>
              <Link to={"/addcontact"}>
                <button
                  className="btn-success btn-add-admin"
               
                >
                  Addnew
                </button>
              </Link>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name </th>
                      <th>Email </th>
                      <th>Pass </th>
                      <th>Role </th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataUser.map((dataC, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{dataC.fsname +" "+ dataC.lsname}</td>

                        <td>{dataC.email}</td>
                        <td>{dataC.password}</td>
                        <td>{dataC.role}</td>
                        <td>
                          <Link to={`/editcontact/${dataC.id}`}>
                            <button>
                              <i className="far fa-edit" />
                            </button>
                          </Link>

                          <button
                            style={{ marginLeft: "10px" }}
                              onClick={() => onHandleDelUser(dataC.id)}
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

export default UserAdmin;
