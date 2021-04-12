import React from "react";
// import "./index.css";
import "../index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown.js";
import { Link } from "react-router-dom";

function Dropdown() {
    return(
        <div style={{backgroundColor: "#333", border: "100px"}}>
        <div className="row top-buffer">
        <div className="col">
            <div className="dropdown">
                <button style={{backgroundColor: "#333", borderColor: "#333"}}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true">
                    Graphics & Design
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to='/mainphotoshops'>Photoshop Editing</Link>
                    <Link className="dropdown-item" to='/architecture'>Architecture & Interior Design</Link>
                    <Link className="dropdown-item" to='/businesscards'>Business Cards & Stationery</Link>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="dropdown">
                <button style={{backgroundColor: "#333", borderColor: "#333"}}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true">
                    Video & Animation
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                
                <Link className="dropdown-item" to='/mainphotoshops'>Whiteboard & Animated Explainers</Link>
                <Link className="dropdown-item" to='/mainphotoshops'>Drone Videography</Link>
                <Link className="dropdown-item" to='/mainphotoshops'>Local Photography</Link>
                    </div>
            </div>
        </div>

        <div className="col">
            <div className="dropdown">
                <button style={{backgroundColor: "#333", borderColor: "#333"}}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true">
                    Music & Audio
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to='/mainphotoshops'> Producers & Composers</Link>
                <Link className="dropdown-item" to='/mainphotoshops'>Remixing & Mashups</Link>
                <Link className="dropdown-item" to='/mainphotoshops'>DJ Drops & Tags</Link>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="dropdown">
                <button style={{backgroundColor: "#333", borderColor: "#333"}}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true">
                    Digital Marketing
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to='/mainphotoshops'>Search Engine Marketing (SEM)</Link>
                <Link className="dropdown-item" to='/mainphotoshops'>Search Engine Optimization (SEO)</Link>
                <Link className="dropdown-item" to='/mainphotoshops'>Text Message Marketing</Link>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="dropdown">
                <button style={{backgroundColor: "#333", borderColor: "#333"}}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true">
                    Lifestyle
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to='/mainphotoshops'>Health, Nutrition & Fitness</Link>
                <Link className="dropdown-item" to='/mainphotoshops'>Fitness Lessons</Link>
                <Link className="dropdown-item" to='/mainphotoshops'>Greeting Cards & Videos</Link>
                </div>
            </div>
        </div>


    </div>
        </div>
    );
}

export default Dropdown;