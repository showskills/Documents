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
                            className="ddButton  "
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true">
                            Web Development
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <Link className="dropdown-item" to='/gigscardslist'>HTML & CSS</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Javascript</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Vue JS</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Express.js</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Node.js</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>PHP</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Angular</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>React</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Django</Link>
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
                            Mobile Development
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <Link className="dropdown-item" to='/gigscardslist'>Flutter</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Android Development</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>iOS Development</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>React Native</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Dart</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Swift</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Kotlin</Link>
                        </div>
                    </div>
                </div>


                <div className="col DropDownButton" style={{margin:'0',padding:'0'}}> 
                    <div className="dropdown DropDownButton">
                        <button
                            className="ddButton"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true">
                            Programming Languages
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to='/gigscardslist'>Python</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Java</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>C#</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>C++</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>C</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Swift</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Go</Link>
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
                            Data Science
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <Link className="dropdown-item" to='/gigscardslist'>Statistics</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Linear Algebra</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Machine Learning</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Artificial Intelligence</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Deep Learning</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Data Visualization</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>TensorFlow</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Data Mining</Link>
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
                            Operating System
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <Link className="dropdown-item" to='/gigscardslist'>Linux</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>PowerShell</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Windows Server</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>VMware Vspere</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Shell Scripting</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>macOS</Link>
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
                            Blockchain
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to='/gigscardslist'> Bitcoin</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Ethereum</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Algorithmic Trading</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Day Trading</Link>
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
                            Design Tools
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to='/gigscardslist'>Photoshop</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Adobe</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>AutoCAD</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>SOLIDWORKS</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>After Effects</Link>
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
                            Database Design & Development
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <Link className="dropdown-item" to='/gigscardslist'>SQL</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>MySQL</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Oracle SQL</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Apache Kafka</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>MongoDB</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>SQL Server</Link>
                            <Link className="dropdown-item" to='/gigscardslist'>Database Management</Link>
                        </div>
                    </div>
                </div>


                
                
                


            </div>
        </div>
    );
}

export default Dropdown;