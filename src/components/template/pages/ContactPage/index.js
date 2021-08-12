import React from "react";
import FooterArea from "../../FooterArea";
import HeaderTemplate from "../../HeaderTemplate";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ContactPage = ({ cartItems, onRemoveCart, loginUser, handlLogOut,handleAddContact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleAddContact(data)
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
                    <h6 className="section-subtitle ltn__secondary-color">
                    
                    </h6>
                    <h1 className="section-title white-color">Liên hệ với chúng tôi</h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">Trang chủ</Link>
                      </li>
                      <li>Liên hệ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        {/* CONTACT ADDRESS AREA END */}
        {/* CONTACT MESSAGE AREA START */}
        <div className="ltn__contact-message-area mb-120 mb--100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__form-box contact-form-box box-shadow white-bg">
                  <h4 className="title-2">Liên hệ ngay</h4>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">   {errors?.nameContact?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                          <input
                            {...register("nameContact",{required:true})}
                            type="text"
                            placeholder="Tên"
                          />
                        
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-email ltn__custom-icon">{errors?.emailContact?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                          <input
                            {...register("emailContact",{required:true})}
                            type="email"
                            placeholder="Email"
                          />
                           
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item">     {errors?.serviceContact?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                     
                     
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-phone ltn__custom-icon">    {errors?.phoneContact?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                        
                       
                        </div>
                      </div>
                    </div>
                    <div className="input-item input-item-textarea ltn__custom-icon">  {errors?.messageContact?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                      <textarea
                        {...register("messageContact",{required:true})}
                        placeholder="Tin nhắn"
                      />
                     
                    </div>
                    <p>
                
                    </p>
                    <div className="btn-wrapper mt-0">
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                      >
                        gửi
                      </button>
                    </div>
                    <p className="form-messege mb-0 mt-20" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT MESSAGE AREA END */}

      </div>

      <FooterArea />
    </>
  );
};

export default ContactPage;
