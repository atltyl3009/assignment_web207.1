import React from "react";
import HeaderAdmin from "../../HeaderAdmin";
import NavAdmin from "../../NavAdmin";
import { Link } from "react-router-dom";
const CategoriesAdmin = ({dataCate,onHandleDelCate}) => {
  return (
    <>
      <div>
        <HeaderAdmin />

        <div className="container-fluid" style={{ marginTop: "15px" }}>
          <div className="row">
            <NavAdmin />
            {/* content admin */}
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <h2 style={{ width: "350px", marginRight: "0", float: "left" }}>
                Danh mục sản phẩm
              </h2>{" "}
              <Link to={"/addcate"}>
                <button
                  className="btn-primary btn-add-admin"
                
                >
                  Thêm mới
                </button>
              </Link>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Danh mục</th>
                      <th>Sửa/Xoá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataCate.map((dataC, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{dataC.name}</td>

                        <td>
                          <Link to={`/editcate/${dataC.id}`}>
                            <button className="btn btn-warning">
                             Sửa
                            </button>
                          </Link>

                          <button className="btn btn-danger"
                            style={{ marginLeft: "10px" }}
                             onClick={() => onHandleDelCate(dataC.id)}
                          >Xoá
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

export default CategoriesAdmin;
