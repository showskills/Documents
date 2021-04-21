import React, { useState } from "react";
// import { Form ,FormControl,Button} from "react-bootstrap";
import {NavLink, Redirect, useHistory} from "react-router-dom";
import GigCardsList from "../../Container/GigCardsList";
import useAuthListener from "../../hooks/use-auth-listener";
import'./menu.css'
const Menu = () => {

    const {user}=useAuthListener();
    const [val ,setVal]=useState('');
    
    const history=useHistory();
    return (
        <ul>
            <li><NavLink exact activeClassName="active_class" to="/"> Show Skills </NavLink></li>
            <li><NavLink exact activeClassName="active_class" to="/startselling"> Become A Seller </NavLink></li>
            {!user?<li style={{ float: "right" }}><NavLink exact activeClassName="active_class" to="/signup"> Login </NavLink></li>: ''}
            <li><NavLink exact activeClassName="active_class" to="/lists"> Lists </NavLink></li>
            <li><NavLink exact activeClassName="active_class" to="/profile"> Profile </NavLink></li>
            {user ? <li><NavLink exact activeClassName="active_class" to="/logout"> Logout </NavLink></li>: ''}
            <div className='inlineShow'>
       <input style={{maxWidth:'200px'}} onChange={(e)=>{setVal(e.target.value)}} type="text" placeholder="Search" className="inputField" />
       
      <span style={{color:'white'}} className='material-icons SearchButton'  onClick={()=>{
          console.log('a');
          history.push({pathname:'/gigscardslist',state:{value:val}})
        //   <Redirect to='/lists'/>
        // <Redirect to={{pathname:'/gigscardslist',state:{value:val}}}/>
        }}>search</span>
     {}
    </div>
    
        </ul>
    )
};

export default Menu;
