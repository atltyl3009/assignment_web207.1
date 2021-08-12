import React from "react";
import FooterArea from "../../FooterArea";
import HeaderTemplate from "../../HeaderTemplate";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = ({
  cartItems,
  onRemoveCart,
  handlLogOut,
  loginUser,
  setLoginUser,dataUser
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory()
  const handleLogin = (data) => {
    const listEmail = dataUser.find(
      (x) => x.email === data.email && x.password === data.password
    );

    if (listEmail !== undefined) {
      setLoginUser(listEmail);
      alert("Login success !");
      history.push("/");
    } else {
      alert("Tài khoản mật khẩu không chính xác !");
    }
  };
  return (
    <>
      <HeaderTemplate
        loginUser={loginUser}
        handlLogOut={handlLogOut}
        cartItems={cartItems}
        onRemoveCart={onRemoveCart}
      
      />

      <div>
        {/* BREADCRUMB AREA START */}
        <div
          className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
          style={{ backgroundImage: "url(./assets/img/bg/9.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                  <div className="section-title-area ltn__section-title-2">
                  
                    <h1 className="section-title white-color">Đăng nhập</h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">Trang chủ</Link>
                      </li>
                      <li>Đăng nhập</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* LOGIN AREA START */}
        <div className="ltn__login-area pb-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="account-login-inner">
                  <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="ltn__form-box contact-form-box"
                  > {errors?.email?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                    <input
                      type="text"
                      {...register("email",{required:true})}
                      placeholder="Email*"
                    />{" "}
                 
                   {errors?.password?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                    <input
                      type="password"
                      {...register("password",{required:true})}
                      placeholder="Password*"
                    />
                    
                    <div className="btn-wrapper mt-0">
                      <button
                        className="theme-btn-1 btn btn-block"
                        type="submit"
                      >
                        SIGN IN
                      </button>
                    </div>
                    <div className="go-to-btn mt-20">
              
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="account-create text-center pt-50">
                  <h4>Không có tài khoản?</h4>
               
                  <div className="btn-wrapper">
                    <Link to="/register" className="theme-btn-1 btn black-btn">
                      Chuyển tới đăng ký
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LOGIN AREA END */}
      </div>

      <FooterArea />
    </>
  );
};

export default Login;
