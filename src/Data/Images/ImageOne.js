import React from "react";
import "./Image.css";

function ImageOne() {
  return (
    <div className="img_container1">
        <img className='img1' src= "https://media.istockphoto.com/photos/the-setup-for-success-picture-id1165916723?k=6&m=1165916723&s=612x612&w=0&h=jk4D-OaGU9laTNFlLdPrYd-dJYuJPhKr1DVYixQ0N3s=" alt="Snow" />
        <div className="img_text_centered">
            <h3>ShowSkills</h3><br/>
            <p style={{color:'#fff'}}>Be inspired to achieve more, and faster with top-quality work delivered by our Pros.</p>
        </div>
    </div>
  );
}

export default ImageOne;
