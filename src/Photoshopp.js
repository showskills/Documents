import React from "react";
// import "./index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../src/Components/Card.css";
import Card from "../src/Components/Card/Card";
import Card_data from "../src/Components/Card/Card_data";
import "../src/Components/Card/Card.css";

function Photoshopp() {
    return(
        <>
          {Card_data.map(val => (
          <Card
            key= {val.id}
            imgsrc= {val.imgscr}
            title= {val.title}
            text= {val.text}
            price= {val.price}
          />
         ))}

        </>
    );
}

export default Photoshopp;