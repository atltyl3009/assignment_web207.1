import React from "react";

import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import HeaderAdmin from "../../HeaderAdmin";
import NavAdmin from "../../NavAdmin";
import firebase from "../../../../firebase";

const EditProduct = ({ dataProduct, onHandleUpdate, dataCate }) => {
  let history = useHistory();
  let { id } = useParams();

  const { register, handleSubmit } = useForm();
  const productNew = dataProduct.find((item) => item.id === id);

  const onSubmit = (productUp) => {
    const file = productUp.image[0];
    if (file === undefined) {
      const onUpdateNew = {
        ...productNew,
        ...productUp,
        image: productNew.image,
      };
      onHandleUpdate(onUpdateNew);
      history.push("/admin");
    } else {
      const storageRef = firebase.storage().ref(`image/${file.name}`);
      storageRef.put(file).then(() => {
        console.log("upload thành công");
        storageRef.getDownloadURL().then((url) => {
          console.log(url);
          const onUpdateNew = {
            ...productNew,
            ...productUp,
            image: url,
          };
          onHandleUpdate(onUpdateNew);
          history.push("/admin");
        });
      });
    }
  };

  return (
    <div>
      <div>
        <HeaderAdmin />

        <div className="container-fluid" style={{ marginTop: "15px" }}>
          <div className="row">
            <NavAdmin />
            {/* content admin */}
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <h2>Sửa sản phẩm</h2>
              {/* form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <span> Tên :</span>
                      <input
                        style={{ marginBottom: "0px" }}
                        {...register("name")}
                        type="text"
                        className="form-control"
                        defaultValue={productNew.name}
                        placeholder="Your Price"
                      />
                    </div>

                    <div className="form-group">
                      <span> Giá :</span>
                      <input
                        {...register("price")}
                        type="number"
                        className="form-control"
                        placeholder="Your Price"
                        defaultValue={productNew.price}
                      />
                    </div>
                    <div className="form-group">
                      <span> Số lượng :</span>
                      <input
                        {...register("quantity")}
                        name="quantity"
                        type="number"
                        className="form-control"
                        placeholder="Your quantity"
                        defaultValue={productNew.quantity}
                      />
                    </div>
                    <div className="form-group">
                      <label>Danh mục : </label>

                      <select
                        className="form-control"
                        {...register("categoriesID")}
                      >
                        {dataCate.map((dataC, index) => (
                          <option
                            key={index}
                            value={dataC.id}
                            selected={
                              dataC.id === productNew.categoriesID
                                ? true
                                : false
                            }
                          >
                            {dataC.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group div-image-update">
                      <div>Ảnh :</div>
                      <img
                        className="image-update"
                        src={productNew.image}
                        alt=""
                      />

                      <input
                        type="file"
                        {...register("image")}
                        className="input-image-update"
                      />
                    </div>

                    <div className="form-group">
                      <span> Mô tả :</span>
                      <textarea
                        style={{ marginBottom: "0px" }}
                        {...register("description")}
                        name="description"
                        className="description-pd"
                        rows={4}
                        cols={77}
                        defaultValue={productNew.description}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="payment-adress">
                      <center>
                        <button
                          type="submit"
                          className="btn btn-primary btn-sbmt"
                        >
                          Submit
                        </button>
                      </center>
                    </div>
                  </div>
                </div>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
