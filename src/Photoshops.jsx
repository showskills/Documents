import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ImageTwo from "../src/pages_folder/Home/ImageTwo";
// import Photoshopp from "./Photoshopp";
import { Link } from "react-router-dom";
import Footer from "../src/Components/Footer/Footer";
import Card from "../src/Components/Card/Card";
import Card_data from "../src/Components/Card/Card_data";

const Photoshops = () => {
    return(
      <React.Fragment>
      <div style= {{backgroundColor: "rgb(235, 232, 232)"}}>
         <div style= {{padding: "100px 50px 0px 50px"}}>
           <p style={{float: "right"}}> <Link to='/mainphotoshops'>View All In Photoshop Editing</Link></p>
           <h3><b> Pro Photoshop Editing Services </b></h3>
           <Card
            key= {Card_data[0].name}
            imgsrc= {Card_data[0].imgscr}
            title= {Card_data[0].title}
            text= {Card_data[0].text}
            price= {Card_data[0].price}
          />
          <Card
            key= {Card_data[1].name}
            imgsrc= {Card_data[1].imgscr}
            title= {Card_data[1].title}
            text= {Card_data[1].text}
            price= {Card_data[1].price}
          />
          <Card
            key= {Card_data[2].name}
            imgsrc= {Card_data[2].imgscr}
            title= {Card_data[2].title}
            text= {Card_data[2].text}
            price= {Card_data[2].price}
          />
         </div>
         
         <div style= {{padding: "130px 50px 130px 50px"}}>
           <p style={{float: "right"}}> <Link to='/mainphotoshops'>View All In Photoshop Editing</Link></p>
           <h3><b> Pro Photoshop Editing Services </b></h3>
           <Card
            key= {Card_data[0].name}
            imgsrc= {Card_data[0].imgscr}
            title= {Card_data[0].title}
            text= {Card_data[0].text}
            price= {Card_data[0].price}
          />
          <Card
            key= {Card_data[1].name}
            imgsrc= {Card_data[1].imgscr}
            title= {Card_data[1].title}
            text= {Card_data[1].text}
            price= {Card_data[1].price}
          />
          <Card
            key= {Card_data[2].name}
            imgsrc= {Card_data[2].imgscr}
            title= {Card_data[2].title}
            text= {Card_data[2].text}
            price= {Card_data[2].price}
          />
         </div>
         <ImageTwo />
     </div>
     <Footer />
     </React.Fragment>
    );
};

export default Photoshops;