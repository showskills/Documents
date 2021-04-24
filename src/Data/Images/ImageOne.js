import React from "react";
import "./Image.css";

function ImageOne() {
  return (
    <div className="img_container">
        <img src= "https://media.istockphoto.com/photos/the-setup-for-success-picture-id1165916723?k=6&m=1165916723&s=612x612&w=0&h=jk4D-OaGU9laTNFlLdPrYd-dJYuJPhKr1DVYixQ0N3s=" alt="Snow" style={{width: "100%", height: "450px",opacity:'0.9'}}/>
        <div className="img_text_centered">
            <h1>ShowSkills</h1><br/>
            <h3 style={{color:'#fff'}}>Be inspired to achieve more, and faster with top-quality work delivered by our Pros.</h3>
        </div>
    </div>
  );
}

export default ImageOne;
