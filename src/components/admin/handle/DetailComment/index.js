import React from "react";
import HeaderAdmin from "../../HeaderAdmin";
import NavAdmin from "../../NavAdmin";
import { Link,useParams  } from "react-router-dom";


const DetailComment = ({ dataComment ,onHandleDelComment ,dataProduct}) => {
  let { id } = useParams();
  const listComment = dataComment.filter(x => x.idProduct === id);
  
   
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
                Detail comment Data
              </h2>
         
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name </th>
                      <th>Email </th>
                      <th>Content </th>
                     
                      
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    
                  </tr>
                    {listComment.map((dataC, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{dataC.name}</td>

                        <td>{dataC.email}</td>
                        <td>{dataC.content}</td>
                 
                        <td>
                          <Link to={`/editcontact/${dataC.id}`}>
                            <button>
                              <i className="far fa-edit" />
                            </button>
                          </Link>

                          <button
                            style={{ marginLeft: "10px" }}
                              onClick={() => onHandleDelComment(dataC.id)}
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

export default DetailComment;
