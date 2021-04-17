import React from "react";
import ImageTwo from "../Data/Images/ImageTwo";
import { Link } from "react-router-dom";
import {Footer,Card} from "../Components";
import CardData from "../Data/CardData";

const HomePageGigsList = () => {
    return(
      <React.Fragment>
      <div style= {{backgroundColor: "rgb(235, 232, 232)"}}>
         <div style= {{padding: "100px 50px 0px 50px"}}>
           <p style={{float: "right"}}> <Link to='/gigscardslist'>View All In Photoshop Editing</Link></p>
           <h3><b> Pro Photoshop Editing Services </b></h3>
           <Card
            key= {CardData[0].name}
            imgsrc= {CardData[0].imgscr}
            title= {CardData[0].title}
            sellername= {CardData[0].sellername}
            price= {CardData[0].price}
          />
          <Card
            key= {CardData[1].name}
            imgsrc= {CardData[1].imgscr}
            title= {CardData[1].title}
            sellername= {CardData[1].sellername}
            price= {CardData[1].price}
          />
          <Card
            key= {CardData[2].name}
            imgsrc= {CardData[2].imgscr}
            title= {CardData[2].title}
            sellername= {CardData[2].sellername}
            price= {CardData[2].price}
          />
         </div>
         
         <div style= {{padding: "130px 50px 130px 50px"}}>
           <p style={{float: "right"}}> <Link to='/gigscardslist'>View All In Photoshop Editing</Link></p>
           <h3><b> Pro Photoshop Editing Services </b></h3>
           <Card
            key= {CardData[0].name}
            imgsrc= {CardData[0].imgscr}
            title= {CardData[0].title}
            sellername= {CardData[0].sellername}
            price= {CardData[0].price}
          />
          <Card
            key= {CardData[1].name}
            imgsrc= {CardData[1].imgscr}
            title= {CardData[1].title}
            sellername= {CardData[1].sellername}
            price= {CardData[1].price}
          />
          <Card
            key= {CardData[2].name}
            imgsrc= {CardData[2].imgscr}
            title= {CardData[2].title}
            sellername= {CardData[2].sellername}
            price= {CardData[2].price}
          />
         </div>
         <ImageTwo />
     </div>
     <Footer />
     </React.Fragment>
    );
};

export default HomePageGigsList;