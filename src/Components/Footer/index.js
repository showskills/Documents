import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
              <Link to='/termsofservice'><dd>Terms of Service</dd></Link>
              <Link to='/footerabout'><dd>About US</dd></Link>
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
              <Link to='/freelancerfaq'><dd>Freelancer FAQ</dd></Link>
              <Link to='/recruiterfaq'><dd>Recruiter FAQ</dd></Link>
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
