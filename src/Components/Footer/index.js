import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Navbar,Nav} from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
      <>
    <hr/>
    <div style={{backgroundColor: "white", border: "1px solid grey", margin: "50px 0px", padding: "5px"}}>
    <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav>

          <dl>
            <dt>Categories</dt>
              <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/">Web Development</Nav.Link>
              <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/">Mobile Development</Nav.Link>
              <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/">Data Science</Nav.Link>
              <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/">Operating System</Nav.Link>
              <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/">Blockchain</Nav.Link>
              <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/">Design Tools</Nav.Link>
              <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/">Database Design & Development</Nav.Link>
          </dl>

        <dl>
            <dt>About</dt>
            <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/privacypolicy">Privacy Policy</Nav.Link>
            <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/termsofservice">Terms of Service</Nav.Link>
            <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/footerabout">About US</Nav.Link>
        </dl>
        <dl>
            <dt>Support</dt>
            <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/contactus">Contact Us</Nav.Link>
            <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/freelancerfaq">Freelancer FAQ</Nav.Link>
            <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/recruiterfaq">Recruiter FAQ</Nav.Link>
        </dl>

        <dl>
            <dt>More From ShowSkills</dt>
            <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/startselling">Selling on ShowSkills</Nav.Link>
            <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/">Buying on ShowSkills</Nav.Link>
            <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/startselling">Become a Seller</Nav.Link>
        </dl>

    <dl>
        <dt>Community</dt>
        <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/blog">Blog</Nav.Link>
    </dl>
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    <footer>
    <hr/>
    <p>ShowSkills Ltd. ⓒ {currentYear}</p>
    </footer>
    </>
  );
}

export default Footer;
