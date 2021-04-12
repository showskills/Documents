import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <ul>
            <li><NavLink exact activeClassName="active_class" to="/"> Show Skills </NavLink></li>
            <li><NavLink exact activeClassName="active_class" to="/startselling"> Become A Seller </NavLink></li>
            <li style={{ float: "right" }}><NavLink exact activeClassName="active_class" to="/signup"> Login </NavLink></li>
            
        </ul>
    )
};

export default Menu;
