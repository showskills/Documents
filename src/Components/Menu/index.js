import React, { useState } from "react";
import { Form ,FormControl,Button,Navbar,Nav,NavDropdown} from "react-bootstrap";
import {Link, NavLink, Redirect, useHistory} from "react-router-dom";
import GigCardsList from "../../Container/GigCardsList";
import useAuthListener from "../../hooks/use-auth-listener";
import'./menu.css'
const Menu = () => {

    const {user}=useAuthListener();
    const [val ,setVal]=useState('');
    
    const history=useHistory();
    return (
    
    <Navbar bg="light" expand="xl">
   <Nav.Link as={Link} to="/"><h1 className="siteTitle" >Showskills</h1></Nav.Link>

   <div className='inlineShowR searchBarR'>
     <input className="searchInput" style={{borderRadius:'3px'}} onChange={(e)=>{setVal(e.target.value)}} type="text" placeholder="Search" className="inputField" />
     <span className='material-icons SearchButton' style={{color:'black'}} onClick={()=>{
        history.push({pathname:'/gigscardslist',state:{value:val}})}}
      >search</span>
  </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className='navLink'>
      <Nav.Link className="mr-lg-3 mr-md-2" as={Link} to="/startselling">Become a Seller</Nav.Link>
      <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/lists">List</Nav.Link>
      <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/profile">profile</Nav.Link>
      <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/messages">messages</Nav.Link>
      <Nav.Link className="mr-lg-3 mr-md-2"  as={Link} to="/projects">projects</Nav.Link>
      {user ? <Nav.Link as={Link} to="/logout"> Logout </Nav.Link>: <Nav.Link as={Link} to="/signup"> Login </Nav.Link>}
    </Nav>
    <div className='searchBar'>
     <input className="searchInput" style={{borderRadius:'3px'}} onChange={(e)=>{setVal(e.target.value)}} type="text" placeholder="Search" className="inputField" />
     <span style={{color:'white'}} className='material-icons SearchButton' style={{color:'black'}} onClick={()=>{
        history.push({pathname:'/gigscardslist',state:{value:val}})}}
      >search</span>
  </div>
    
  </Navbar.Collapse>
</Navbar>
    )
};

export default Menu;
