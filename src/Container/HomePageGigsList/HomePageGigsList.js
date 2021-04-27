import React from "react";
import ImageTwo from "../../Data/Images/ImageTwo";
import { Link } from "react-router-dom";
import { Footer, Card } from "../../Components";
import CardData from "../../Data/CardData";

import { useEffect, useState } from "react";

import { db } from "../../lib/firebase.prod";

import './HPGL.css'

const HomePageGigsList = () => {

  // if(props.location.state===undefined){props.location.state={value:'react'}};

  // const db = firebase.firestore();
  var ref = db.collection('Gig-Data');

  var [data, setData] = useState([]);
  var [fdata, setfData] = useState([]);
  var allData = [];

  var [isloading, setisloading] = useState(true);
  const getData = async (val) => {

    console.log(val);
    await ref.where('Tag', 'array-contains', val).orderBy('Price', 'asc').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        allData.push(doc.data())
      })
    })
    console.log(data)
    if(val==='react')
    setData(allData);
    else
    setfData(allData);
    setisloading(false);
    allData = [];
  }

  useEffect(() => {
    getData('react');
    getData('flutter');
  },
    [])

  if (isloading) {
    return (<p>Loading.......</p>)
  }



  return (
    <React.Fragment>
      <div >

        <div style={{ padding: "100px 0px 0px 0px" }}>
          <p style={{ float: "right" }}> <Link to='/gigscardslist'>View All In React</Link></p>
         
          <h3><b> React </b></h3>
          <div className="CardsList">{
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
          </div>
          <h3><b> Flutter </b></h3>
          
          <div className="CardsList">{
            fdata.map((val, i) => (

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
          </div>
        </div>
        


      </div>
      <ImageTwo />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default HomePageGigsList;































// {/* <div style= {{padding: "130px 50px 130px 50px"}}>
//            <p style={{float: "right"}}> <Link to='/gigscardslist'>View All In Photoshop Editing</Link></p>
//            <h3><b> Pro Photoshop Editing Services </b></h3>
//            <Card
//             key= {CardData[0].name}
//             imgsrc= {CardData[0].imgscr}
//             title= {CardData[0].title}
//             sellername= {CardData[0].sellername}
//             price= {CardData[0].price}
//           />
//           <Card
//             key= {CardData[1].name}
//             imgsrc= {CardData[1].imgscr}
//             title= {CardData[1].title}
//             sellername= {CardData[1].sellername}
//             price= {CardData[1].price}
//           />
//           <Card
//             key= {CardData[2].name}
//             imgsrc= {CardData[2].imgscr}
//             title= {CardData[2].title}
//             sellername= {CardData[2].sellername}
//             price= {CardData[2].price}
//           />
//          </div>   */}