import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
      <>
    <hr/>
        <div className="main">
          <div>
          <dl>
            <dt>Categories</dt>
              <dd>Graphics & Design</dd>
              <dd>Degital Marketing</dd>
              <dd>Music & Audio</dd>
              <dd>Business</dd>
              <dd>Video & Animation</dd>
          </dl>
        </div>
  <div>
        <dl>
            <dt>About</dt>
              <dd>Privacy Policy</dd>
              <dd>Terms of Service</dd>
              <dd>Partnerships</dd>
        </dl>
  </div>  
  <div>
        <dl>
            <dt>Support</dt>
              <dd>Help & Support</dd>
              <dd>Trust & Safety</dd>
              <dd>Selling on ShowSkills</dd>
              <dd>Buying on ShowSkills</dd>
        </dl>
  </div>  
  <div>
        <dl>
            <dt>More From ShowSkills</dt>
              <dd>Logo Maker</dd>
              <dd>Studios</dd>
              <dd>Get Inspired</dd>
        </dl>
  </div>  
  <div>
        <dl>
            <dt>Community</dt>
              <dd>Events</dd>
              <dd>Blog</dd>
              <dd>Become a Seller</dd>
        </dl>
  </div>
</div>
    <footer>
    <hr/>
    <p>ShowSkills Ltd. ⓒ {currentYear}</p>
    </footer>
    </>
  );
}

export default Footer;
