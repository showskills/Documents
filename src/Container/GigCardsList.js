import React, { useEffect, useState } from "react";
import {Card} from "../Components";
import CardData from "../Data/CardData";
// import { db } from "../lib/firebase.prod";

import firebase from "firebase/app"


function GigCardsList() {

   const db=firebase.firestore();
    var ref=db.collection('Gig-Data');
    var ref1=db.collectionGroup('Tag');
   var [data,setData]=useState([]);
   var allData=[];
   
    
    
    var [isloading,setisloading]=useState(true);
    const getData =async()=>{
      ref1.where('a','==',"b").get().then((doc)=>{
      console.log('++++++++++')
    })

      await ref.where('SubCategory','==','photoshop').get().then((querySnapshot)=>{
        // console.log(querySnapshot)
        querySnapshot.forEach((doc)=>{
        
          // console.log(doc.data(),'===',doc.id);   
           allData.push(doc.data())
           console.log(allData)
           
        })
      })
      setData(allData);
      setisloading(false);
      allData=[];
    }

    useEffect(()=>{ getData()},[])
    
     if(isloading){
       return(<p>Loading.......</p>)
     }

    return(
        <>

          
          {console.log(data)}
          {data.map((val,i) => (
          <Card
            key={i}
            imgsrc= {val.PhotoURL}
            title= {val.Title}
            sellername= {val.Category}
            price= {val.Price}
          />
          
         ))}

        </>
    );
}

export default GigCardsList;


