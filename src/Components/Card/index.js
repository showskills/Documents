import React from "react";
import './Card.css';
function Card(props) {
    return (
        <>
         <div className="card" style={{width: "18rem"}}>
                       <div>
                         <img src={props.imgsrc} className="card-img-top" alt="..." height= "200px"/>
                         <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.sellername}</p>
                            <div className="review"><span style={{color:'#FFBE5B',marginRight:'3%'}} className="material-icons">star</span><p style={{color:'#888',margin:'0'}}>4.6(73)</p></div>
                         <div className="inlinefooter">
                           <div>
                             {props.price}</div>
                             <div className="addList"><span class="material-icons-outlined">playlist_add</span></div>
                            </div>

                         {/* <a href= {props.link} target= "_blank">
                           <button> Watch now </button>
                        </a> */}


         </div>
         </div>
         </div>
         </>
    );
}

export default Card;