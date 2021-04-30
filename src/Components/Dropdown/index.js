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

                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'html & css'} }}>HTML & CSS</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'javascript'} }}>Javascript</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'vue.js'} }}>Vue JS</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'express.js'} }}>Express.js</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'node.js'} }}>Node.js</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'php'} }}>PHP</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'angular'} }}>Angular</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'react'} }}>React</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'django'} }}>Django</Link>
                        </div>
                    </div>
                </div>
                

                {/* <div className="col DropDownButton" style={{margin:'0',padding:'0'}}> 
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
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'python'} }}>Python</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'java'} }}>Java</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'c#'} }}>C#</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'c++'} }}>C++</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'c'} }}>C</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'swift'} }}>Swift</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'go'} }}>Go</Link>
                        </div>
                    </div>
                </div> */}
                

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

                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'statistics'} }}>Statistics</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'linear algebra'} }}>Linear Algebra</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'machine learning'} }}>Machine Learning</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'artificial intelligence'} }}>Artificial Intelligence</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'deep learning'} }}>Deep Learning</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'data Visualization'} }}>Data Visualization</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'tensorflow'} }}>TensorFlow</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'data mining'} }}>Data Mining</Link>
                        </div>
                    </div>
                </div>


                {/* <div className="col DropDownButton" style={{margin:'0',padding:'0'}}>
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

                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'linux'} }}>Linux</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'powershell'} }}>PowerShell</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'window server'} }}>Windows Server</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'vmware Vspere'} }}>VMware Vspere</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'shell scripting'} }}>Shell Scripting</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'macos'} }}>macOS</Link>
                        </div>
                    </div>
                </div> */}
                

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
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'bitcoin'} }}> Bitcoin</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'ethereum'} }}>Ethereum</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'algorithmic trading'} }}>Algorithmic Trading</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'day trading'} }}>Day Trading</Link>
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
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'photoshop'} }}>Photoshop</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'adobe'} }}>Adobe</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'autocad'} }}>AutoCAD</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'solidworks'} }}>SOLIDWORKS</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'after effects'} }}>After Effects</Link>
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
                            Database
                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'sql'} }}>SQL</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'mysql'} }}>MySQL</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'oracle'} }}>Oracle SQL</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'apache'} }}>Apache Kafka</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'mongodb'} }}>MongoDB</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'sql server'} }}>SQL Server</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'database managment'} }}>Database Management</Link>
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

                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'flutter'} }}>Flutter</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'android development'} }}>Android Development</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'ios development'} }}>iOS Development</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'react native'} }}>React Native</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'dart'} }}>Dart</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'swift'} }}>Swift</Link>
                            <Link className="dropdown-item" to={{pathname:'/gigscardslist',state:{value:'kotlin'} }}>Kotlin</Link>
                        </div>
                    </div>
                </div>


                
                
                


            </div>
        </div>
    );
}

export default Dropdown;