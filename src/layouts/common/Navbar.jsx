import React, { useState, useEffect } from 'react';
import '../../../css/Navbar.css';

const MainNavbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleMobileMenu = () => setShowMobileNav(!showMobileNav);
  const openLogin = () => {
    setShowLogin(true);
    setShowMobileNav(false);
  };
  const closeLogin = () => setShowLogin(false);

  useEffect(() => {
    document.body.classList.toggle('modal-open', showLogin);
  }, [showLogin]);

  return (
    <>
      <header>
        <div className="head-left">
          <div className="logo">
            <img src="https://www.baraliresort.com/images/logo.png" alt="logo" />
          </div>
          <nav className="desktop-nav desktop-only">
            <a href="#Home">หน้าแรก</a>
            <a href="#Promotion">โปรโมชัน</a>
            <a href="#Room-type">ประเภทห้อง</a>
            <a href="#Contact-us">ติดต่อเรา</a>
          </nav>
        </div>

        <div className="head-right">
          <div className="lang desktop-only">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ick2xvSWyHyDFgl5YWf3xLQ8qRKQByx2ScOAjyEoiA&s&ec=72940543" alt="ธง" />
            <a href="#">TH/THB</a>
          </div>
          <button className="button-login desktop-only" onClick={openLogin}>เข้าสู่ระบบ</button>

          <button className="burger" onClick={toggleMobileMenu}>
            <i className="bi bi-list" style={{ fontSize: '1.75rem' }}></i>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${showMobileNav ? 'show' : ''}`}>
        <div className="mobile-lang">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ick2xvSWyHyDFgl5YWf3xLQ8qRKQByx2ScOAjyEoiA&s&ec=72940543" alt="ธง" />
          <a href="#">TH/THB</a>
        </div>
        <a href="#Home" onClick={toggleMobileMenu}>หน้าแรก</a>
        <a href="#Promotion" onClick={toggleMobileMenu}>โปรโมชัน</a>
        <a href="#Room-type" onClick={toggleMobileMenu}>ประเภทห้อง</a>
        <a href="#Contact-us" onClick={toggleMobileMenu}>ติดต่อเรา</a>

        <div className="mobile-extra">
          <button className="button-login" onClick={openLogin}>เข้าสู่ระบบ</button>
        </div>
      </div>

      {/* Login Popup */}
      {showLogin && (
        <div className="overlay active">
          <div className="login-popup">
            <button className="close-btn" onClick={closeLogin}>
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="container-popup">
              <img src="https://www.baraliresort.com/images/logo.png" alt="logo" width="113" height="88" />
              <h2>เข้าสู่ระบบ</h2>
              <p>กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ</p>
            </div>
            <form className="user" action="your-login-endpoint" method="post">
              <label htmlFor="username">ชื่อผู้ใช้</label>
              <input type="email" id="username" name="username" required />
              <label htmlFor="password">รหัสผ่าน</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">เข้าสู่ระบบ</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNavbar;
