import React from "react";
import HeaderAdmin from "../../../HeaderAdmin";
import NavAdmin from "../../../NavAdmin";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

const AddCate = ({ onAdd }) => {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dataSubmit = {
        id : uuidv4(),
      ...data,
    };

    onAdd(dataSubmit);
    history.push("/admincate");
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
              <h2>Thêm danh mục</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                  <div class="col-6">
                    <div className="form-group">
                      <span>Tên danh mục : </span>
                      <input
                        {...register("name", { required: true, minLength: 6 })}
                        type="text"
                        placeholder="Name cate"
                        className="form-control"
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
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="payment-adress">
                      <button
                        type="submit"
                        className="btn btn-primary btn-sbmt"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </main>
            {/* content admin */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCate;
