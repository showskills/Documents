import React from "react";
import "./Image.css";

function ImageThree() {
  return (
    <div className="img_container">
        <img src= "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2020/10/9a9b7445a57cc60a297fd730b15d3292.jpg?itok=ltOLxJXC&timestamp=1603812691" alt="Snow" style={{width: "100%", height: "350px"}}/>
        <div className="img_text_centered">
            <h1>ShowSkills</h1><br/>
            <p>Picture perfect. Get hand-vetted Photoshop Editing experts for any need.</p>
        </div>
    </div>
  );
}

export default ImageThree;
