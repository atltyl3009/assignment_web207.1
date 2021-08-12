import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
const Content = ({ dataCate, dataProduct, onHandleDel }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const limit = 5;
  const page = pageNumber * limit;
  const currentPageData = dataProduct.slice(page, page + limit);

  const pageCount = Math.ceil(dataProduct.length / limit);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h2 style={{ width: "350px", marginRight: "0", float: "left" }}>
        Sản phẩm
      </h2>{" "}
      <Link to={"/addproduct"}>
        <button className="btn-primary btn-add-admin">Thêm mới</button>
      </Link>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên sản phẩm</th>
              <th>Ảnh</th>
              <th>Giá</th>
              <th>Danh mục</th>
            

              <th>Số lượng</th>
              <th>Sửa/Xoá</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((dataPd, index) => {
              const listCate = dataCate.find(
                (x) => x.id === dataPd.categoriesID
              );

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dataPd.name}</td>
                  <td>
                    <img style={{ width: "50px" }} src={dataPd.image} />
                  </td>
                  <td>{dataPd.price}</td>
                  <td>{listCate.name}</td>
                
                  <td>{dataPd.quantity}</td>

                  <td>
                    <Link to={`/editproduct/${dataPd.id}`}>
                      <button className="btn btn-warning">
                        Sửa
                    
                      </button>
                    </Link>

                    <button
                    className="btn btn-danger"
                      style={{ marginLeft: "10px" }}
                      onClick={() => onHandleDel(dataPd.id)}
                    >
                     Xoá
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          pageClassName={"page_number"}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link prev"}
          nextLinkClassName={"pagination__link nex"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </main>
  );
};

export default Content;
