import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MainNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", showLogin);
  }, [showLogin]);

  const loginButtonStyle = {
    backgroundColor: "rgba(0, 186, 242, 1)",
    borderColor: "rgba(0, 186, 242, 1)",
    color: "white"
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "rgba(240,240,240,1)", fontSize: "20px" }}
      >
        <div className="container">
          {/* โลโก้ */}
          <a className="navbar-brand p-0 m-0 me-3" href="#Home">
            <img
              src="https://www.baraliresort.com/images/logo.png"
              alt="logo"
              height="60"
              style={{ padding: "0", margin: "0" }}
            />
          </a>

          {/* toggle mobile */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center gap-lg-4">
              <li className="nav-item">
                <a className="nav-link" href="#Home">หน้าแรก</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Promotion">โปรโมชัน</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Room-type">ประเภทห้อง</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact-us">ติดต่อเรา</a>
              </li>

              {/* TH/THB Mobile */}
              <li className="nav-item d-flex align-items-center gap-2 d-lg-none mt-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ick2xvSWyHyDFgl5YWf3xLQ8qRKQByx2ScOAjyEoiA&s&ec=72940543"
                  alt="ธง"
                  width="24"
                  height="18"
                />
                <span>TH/THB</span>
              </li>

              {/* เข้าสู่ระบบ Mobile */}
              <li className="nav-item d-lg-none mt-2">
                <button
                  className="btn w-100"
                  style={loginButtonStyle}
                  onClick={openLogin}
                >
                  เข้าสู่ระบบ
                </button>
              </li>
            </ul>

            {/* TH/THB + เข้าสู่ระบบ Desktop */}
            <div className="d-none d-lg-flex align-items-center gap-3 ms-auto">
              <div className="d-flex align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ick2xvSWyHyDFgl5YWf3xLQ8qRKQByx2ScOAjyEoiA&s&ec=72940543"
                  alt="ธง"
                  width="32"
                  height="24"
                  className="me-2"
                />
                <span>TH/THB</span>
              </div>
              <button
                className="btn"
                style={loginButtonStyle}
                onClick={openLogin}
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content p-3" style={{ fontSize: "20px" }}>
              <div className="modal-header">
                <h5 className="modal-title">เข้าสู่ระบบ</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeLogin}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src="https://www.baraliresort.com/images/logo.png"
                  alt="logo"
                  width="113"
                  height="88"
                  className="mb-3"
                />
                <p>กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ</p>
                <form action="your-login-endpoint" method="post">
                  <div className="mb-3 text-start">
                    <label htmlFor="username" className="form-label">
                      ชื่อผู้ใช้
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="username"
                      name="username"
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label htmlFor="password" className="form-label">
                      รหัสผ่าน
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn w-100"
                    style={loginButtonStyle}
                  >
                    เข้าสู่ระบบ
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={closeLogin}></div>
        </div>
      )}
    </>
  );
};

export default MainNavbar;
