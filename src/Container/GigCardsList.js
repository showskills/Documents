import React from "react";
import {Card} from "../Components";
import CardData from "../Data/CardData";

function GigCardsList() {
    return(
        <>
        
          {CardData.map(val => (
          <Card
            key= {val.id}
            imgsrc= {val.imgscr}
            title= {val.title}
            sellername= {val.sellername}
            price= {val.price}
          />
         ))}

        </>
    );
}

export default GigCardsList;