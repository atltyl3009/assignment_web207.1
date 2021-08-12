import React from "react";
import HeaderAdmin from "../../HeaderAdmin";
import NavAdmin from "../../NavAdmin";
import { Link } from "react-router-dom";
const CommentAdmin = ({ dataComment ,onHandleDelComment ,dataProduct}) => {
 
  const listProduct = dataProduct.filter(x =>  dataComment.find(a => a.idProduct === x.id));

   console.log(listProduct );
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
                Comment Data
              </h2>
         
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name Products</th>
                      <th>Image </th>
                   
                      <th>Count Comment</th>
                     
                      
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    
                  </tr>
                    {listProduct.map((dataC, index) => {
                    
                    const countComment = dataComment.filter(x => x.idProduct === dataC.id).length;
                
                  return  (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{dataC.name}</td>

                      
                        <td><img width={"50px"} src={dataC.image} alt=""/></td>
                     
                   <td>{countComment }</td>
                        <td>
                          <Link to={`/admindetailcomment/${dataC.id}`}>
                            <button>
                              Detail
                            </button>
                          </Link>

                       
                        </td>
                      </tr>
                    )})}
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

export default CommentAdmin;
