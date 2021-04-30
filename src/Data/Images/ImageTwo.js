import React from "react";
import "./Image.css";

function ImageTwo() {
  return (
    <div className="img_container">
        <img src= "https://media.istockphoto.com/photos/top-view-of-black-office-desk-with-computer-and-supplies-picture-id675705028?k=6&m=675705028&s=612x612&w=0&h=a-DdkdeSrIjSZ6Myx0sAFgj3Lmvui-0XP4gdKMj87Lg=" alt="Snow" style={{width: "100%", height: "350px",opacity:1}}/>
        <div className="img_text_centered">
            <h1 >ShowSkills</h1><br/>
            <p>Be inspired to achieve more, and faster with top-quality work delivered by our Pros.</p>
        </div>
    </div>
  );
}

export default ImageTwo;
