import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderTemplate = ({
  loginUser,
  handlLogOut,
}) => {
  const [menuActive, setMenuActive] = useState("");
  window.addEventListener("scroll", () => {
    const scrol = window.scrollY;
    if (scrol > 400) {
      setMenuActive("sticky-active");
    } else {
      setMenuActive("");
    }
  }); 

  return (
    <>
      <div>
        {/* HEADER AREA START (header-5) */}
        <header className="ltn__header-area ltn__header-5 ltn__header-transparent gradient-color-2">
          {/* ltn__header-top-area start */}
         
          {/* ltn__header-top-area end */}
          {/* ltn__header-middle-area start */}
          <div
            className={`ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black plr--9--- ${menuActive} `}
          >
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="site-logo-wrap">
                    <div className="site-logo">
                      <Link to={"/"}>
                        <img src="/assets/img/logogf.png" alt="Logo" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col header-menu-column menu-color-white">
                  <div className="header-menu d-none d-xl-block">
                    <nav>
                      <div className="ltn__main-menu">
                        <ul>
                          <li>
                            <Link to={"/"} href="#">
                              Trang chủ
                            </Link>
                          </li>

                          <li>
                            <Link to={"/shop"} href="#">
                              Danh mục
                            </Link>
                          </li>
                       
                          

                          <li>
                            <Link to={"/contact"}>Liên hệ</Link>
                          </li>
                       
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="ltn__header-options ltn__header-options-2">
                
                  {/* user-menu */}
                  <div className="ltn__drop-menu user-menu">
                    <ul>
                      <li>
                        <Link to="/login">
                          {loginUser == "" ? (
                            <i className="icon-user" />
                          ) : (
                            <i className="fas fa-user-shield" />
                          )}
                        </Link>
                        <ul>
                          {loginUser == "" ? (
                            <li>
                              <Link to="/login">Đăng nhập</Link>
                            </li>
                          ) : (
                            <li>
                             <Link to="/admin">ADMIN</Link>
                            </li>
                          )}

                          {loginUser == "" ? (
                            <li>
                              <Link to="/register">Đăng ký</Link>
                            </li>
                          ) : (
                            ""
                          )}
                          {loginUser === "" ? (
                            " "
                          ) : (
                            <li>
                              <i className="fas fa-sign-in-alt" />{" "}
                              <a onClick={() => handlLogOut()}>Đăng xuất</a>
                            </li>
                          )}
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* mini-cart */}
               
                  {/* mini-cart */}
                  {/* Mobile Menu Button */}
                  <div className="mobile-menu-toggle d-xl-none">
                    <a
                      href="#ltn__utilize-mobile-menu"
                      className="ltn__utilize-toggle"
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        />
                        <path d="M300,320 L540,320" id="middle" />
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__header-middle-area end */}
        </header>
    
      </div>

      {/* <!-- BREADCRUMB AREA START --> */}

      {/* <!-- BREADCRUMB AREA START --> */}
    </>
  );
};

export default HeaderTemplate;
