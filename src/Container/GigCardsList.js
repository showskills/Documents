import React from "react";
import {Card} from "../Components";
import CardData from "../Data/CardData";
import { db } from "../lib/firebase.prod";

function GigCardsList() {

   
    // var ref=db.collection('Gig-Data');
    // var ref1=db.collectionGroup('Tag');
    // console.log(ref1)
    // 
    // ref1.where('a','==','b').get().then((querySnapshot)=>{
    //   querySnapshot.forEach((doc)=>{
    //    
    //     console.log(doc.data(),'===',doc.id);
    //   })
      
    // })


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


