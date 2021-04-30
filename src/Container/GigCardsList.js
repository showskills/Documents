import React, { useEffect, useState } from "react";
import { Card } from "../Components";

import { db } from "../lib/firebase.prod";

import firebase from "firebase/app"


function GigCardsList(props) {

  if(props.location.state===undefined){props.location.state={value:'react'}};

  // const db = firebase.firestore();
  var ref = db.collection('Gig-Data');

  var [data, setData] = useState([]);
  var allData = [];

  var [isloading, setisloading] = useState(true);
  const getData = async (val) => {

    console.log(val);
    await ref.where('Tag', 'array-contains', val).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        allData.push(doc.data())
      })
    })
    setData(allData);
    setisloading(false);
    allData = [];
  }

  useEffect(() => {
    getData(props.location.state.value  )
  },
    [props.location.state.value])

  if (isloading) {
    return (<p>Loading.......</p>)
  }

  return (
    <>
      
      {console.log(data)}
      
     {data && data.length!==0? <div className="CardsList">{
            data.map((val, i) => (

              <Card
                key={i}
                imgsrc={val.PhotoURL}
                profileImg={val.PhotoURL}
                title={val.Title}
                sellername={val.Username}
                price={val.Price}
                uid={val.Uid}
              />

            ))}
             
          </div>:
          <div>
            Ooops..... &nbsp;  No data available for search tag {props.location.state.value}
            <p>Try searching for popular fields like react</p>
          </div>
          }

    </>
  );
}

export default GigCardsList;


