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
              <Link to='/'><dd>Web Development</dd></Link>
              <Link to='/'><dd>Mobile Development</dd></Link>
              <Link to='/'><dd>Data Science</dd></Link>
              <Link to='/'><dd>Operating System</dd></Link>
              <Link to='/'><dd>Blockchain</dd></Link>
              <Link to='/'><dd>Design Tools</dd></Link>
              <Link to='/'><dd>Database Design & Development</dd></Link>
          </dl>
        </div>
  <div>
        <dl>
            <dt>About</dt>
              <Link to='/privacypolicy'><dd>Privacy Policy</dd></Link>
              <Link to='/termsofservice'><dd>Terms of Service</dd></Link>
              <Link to='/footerabout'><dd>About US</dd></Link>
        </dl>
  </div>  
  <div>
        <dl>
            <dt>Support</dt>
              <Link to='/contactus'><dd>Contact Us</dd></Link>
              <Link to='/freelancerfaq'><dd>Freelancer FAQ</dd></Link>
              <Link to='/recruiterfaq'><dd>Recruiter FAQ</dd></Link>
        </dl>
  </div>  
  <div>
        <dl>
            <dt>More From ShowSkills</dt>
              <Link to='/startselling'><dd>Selling on ShowSkills</dd></Link>
              <Link to='/'><dd>Buying on ShowSkills</dd></Link>
              <Link to='/startselling'><dd>Become a Seller</dd></Link>
        </dl>
  </div>  
  <div>
        <dl>
            <dt>Community</dt>
              <Link to='/blog'><dd>Blog</dd></Link>
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
