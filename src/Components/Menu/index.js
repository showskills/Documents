import React from "react";
import {NavLink} from "react-router-dom";
import useAuthListener from "../../hooks/use-auth-listener";

const Menu = () => {

    const {user}=useAuthListener();
    
    return (
        <ul>
            <li><NavLink exact activeClassName="active_class" to="/"> Show Skills </NavLink></li>
            <li><NavLink exact activeClassName="active_class" to="/startselling"> Become A Seller </NavLink></li>
            {!user?<li style={{ float: "right" }}><NavLink exact activeClassName="active_class" to="/signup"> Login </NavLink></li>: ''}
            <li><NavLink exact activeClassName="active_class" to="/lists"> Lists </NavLink></li>
            <li><NavLink exact activeClassName="active_class" to="/profile"> Profile </NavLink></li>
            {user ? <li><NavLink exact activeClassName="active_class" to="/logout"> Logout </NavLink></li>: ''}
            
        </ul>
    )
};

export default Menu;
