import React from "react";
import "bootstrap/js/dist/dropdown.js";
import { Link } from "react-router-dom";
import './Dropdown.css';

function Dropdown() {
    return (
        <div className="dropDownContainer">
            <div className="row top-buffer" style={{margin:'0',padding:'0'}}>
                <div className="col DropDownButton" style={{margin:'0',padding:'0'}}> 
                    <div className="dropdown DropDownButton">
                        <button
                            className="ddButton"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true">
                            Graphics & Design
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to='/gigscardslist'>Photoshop Editing</Link>
                            <Link className="dropdown-item" to='/architecture'>Architecture & Interior Design</Link>
                            <Link className="dropdown-item" to='/businesscards'>Business Cards & Stationery</Link>
                        </div>
                    </div>
                </div>

                <div className="col DropDownButton" style={{margin:'0',padding:'0'}}>
                    <div className="dropdown DropDownButton">
                        <button
                            className="ddButton  "
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true">
                            Video & Animation
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <Link className="dropdown-item" to='/gigscardslist'>Whiteboard & Animated Explainers</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Drone Videography</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Local Photography</Link>
                        </div>
                    </div>
                </div>

                <div className="col DropDownButton" style={{margin:'0',padding:'0'}}>
                    <div className="dropdown DropDownButton">
                        <button
                            className="ddButton "
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true">
                            Music & Audio
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to='/gigscardslist'> Producers & Composers</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Remixing & Mashups</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>DJ Drops & Tags</Link>
                        </div>
                    </div>
                </div>

                <div className="col DropDownButton" style={{margin:'0',padding:'0'}}>
                    <div className="dropdown DropDownButton">
                        <button
                            className="ddButton "
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true">
                            Digital Marketing
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to='/gigscardslist'>Search Engine Marketing (SEM)</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Search Engine Optimization (SEO)</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Text Message Marketing</Link>
                        </div>
                    </div>
                </div>

                <div className="col DropDownButton" style={{margin:'0',padding:'0'}}>
                    <div className="dropdown DropDownButton">
                        <button
                            className="ddButton "
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true">
                            Lifestyle
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to='/gigscardslist'>Health, Nutrition & Fitness</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Fitness Lessons</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Greeting Cards & Videos</Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Dropdown;