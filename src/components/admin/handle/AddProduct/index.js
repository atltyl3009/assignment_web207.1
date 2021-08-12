import React from "react";
import HeaderAdmin from "../../HeaderAdmin";
import NavAdmin from "../../NavAdmin";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import firebase from "../../../../firebase";

const AddProduct = ({ onAdd, dataCate }) => {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const file = data.image[0];
    const storageRef = firebase.storage().ref(`image/${file.name}`);
    storageRef.put(file).then(() => {
      console.log("upload thành công");
      storageRef.getDownloadURL().then((url) => {
        console.log(url);
        const dataSubmit = {
          ...data,
          image: url,
          qty : 1
        };
        onAdd(dataSubmit) 
        history.push("/admin");
      });
    });
  };

  return (
    <>
      <div>
        <HeaderAdmin />

        <div className="container-fluid" style={{ marginTop: "15px" }}>
          <div className="row">
            <NavAdmin />
            {/* content admin */}
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <h2>Add Products</h2>
              {/* form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <span> Tên :</span>
                      <input
                        style={{ marginBottom: "0px" }}
                        {...register("name", { required: true, minLength: 6 })}
                        type="text"
                        className="form-control"
                        placeholder="tên"
                      />

                      {errors?.name?.type === "required" && (
                        <span style={{ color: "red" }}>
                          This field is required
                        </span>
                      )}
                      {errors?.name?.type === "minLength" && (
                        <span style={{ color: "red" }}>
                          This field is min leght 6
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <span> Giá :</span>
                      <input
                        {...register("price", { required: true, min: 0 })}
                        type="number"
                        className="form-control"
                        placeholder="giá"
                      />
                      {errors?.price?.type === "required" && (
                        <span style={{ color: "red" }}>
                          This field is required
                        </span>
                      )}

                      {errors?.price?.type === "min" && (
                        <span style={{ color: "red" }}>
                          This field is Min 0
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <span> Số lượng :</span>
                      <input
                        {...register("quantity", { required: true, min: 0 })}
                        name="quantity"
                        type="number"
                        className="form-control"
                        placeholder="Giá"
                      />
                      {errors?.quantity?.type === "required" && (
                        <span style={{ color: "red" }}>
                          This field is required
                        </span>
                      )}
                      {errors?.quantity?.type === "min" && (
                        <span style={{ color: "red" }}>
                          This field is Min 0
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Danh mục : </label>
                      <select
                        className="form-control"
                        {...register("categoriesID", { required: true })}
                      >
                        <option defaultValue="" disabled>
                          Chọn danh mục
                        </option>
                        {dataCate.map((dataC, index) => (
                          <option key={index} value={dataC.id}>
                            {dataC.name}
                          </option>
                        ))}
                      </select>
                      {errors?.categoriesID?.type === "required" && (
                        <span style={{ color: "red" }}>
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <span>Ảnh :</span>
                      <input
                        type="file"
                        {...register("image" , { required: true })}
                        className="form-control"
                      />
                      {errors?.image?.type === "required" && (
                        <span style={{ color: "red" }}>
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <span> Mô tả :</span>
                      <textarea
                        style={{ marginBottom: "0px" }}
                        {...register("description", { required: true })}
                        name="description"
                        className="description-pd"
                        rows={4}
                        cols={77}
                      />
                      {errors?.description?.type === "required" && (
                        <span style={{ color: "red" }}>
                          This field is required
                        </span>
                      )}
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
    </>
  );
};

export default AddProduct;
