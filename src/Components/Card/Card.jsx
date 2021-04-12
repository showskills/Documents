import React from "react";

function Card(props) {
    return (
        <>
         <div className="card" style={{width: "18rem"}}>
                       <div>
                         <img src={props.imgsrc} className="card-img-top" alt="..." height= "200px"/>
                         <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.text}</p>
                            <p className="card-text"><small className="text-muted">VERIFIED</small></p>
                         <div className="card-footer"><small className="text-muted">{props.price}</small></div>
                         {/* <a href= {props.link} target= "_blank">
                           <button> Watch now </button>
                        </a> */}
         </div></div></div>
         </>
    );
}

export default Card;