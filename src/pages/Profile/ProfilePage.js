import {db} from '../../lib/firebase.prod';
import React, { useEffect, useState } from 'react';
import {Container,Row ,Col,Button} from 'react-bootstrap';
import './profilePage.css';
import { set } from 'react-hook-form';


const ProfilePage=()=>{

   const [GigURL,setGigURL]=useState("");
   const [UserURL,setUserURL]=useState("");
   


   const ProfileData=()=>{
   const uid="WTedB4smDdT22lSgV1yW1tzSQpu1";
     db.collection('freelancer-profile').doc(uid).get().
     then(doc=>{
        const data=doc.data();

        setUserURL(data['ProfilePhotoUrl']);
        document.getElementById('name').innerHTML=data['Username'];
        document.getElementById('des').innerHTML=data['Description'];
        document.getElementById('skills').innerHTML="Professional in: <br>";
        data['Skills'].map(skill=>{
         document.getElementById('skills').innerHTML+="\xa0# ";
         document.getElementById('skills').innerHTML+=skill.skillName;
         document.getElementById('skills').innerHTML+="<br>";
        })
              
     })   
   }

   const GigData=()=>{
      
         const uid="WTedB4smDdT22lSgV1yW1tzSQpu1";
   
         db.collection('Gig-Data').doc(uid).get().then(doc=>{
              const data=doc.data();
              document.getElementById('instructions').innerHTML=" Message to the Users:<br>"+data['Instructions']
            document.getElementById('gigTitle').innerHTML=data['Title'];
            document.getElementById('gigDes').innerHTML=data['Description'];
            document.getElementById('gigCategory').innerHTML=data['Category']+" projects";
            document.getElementById('gigSubcategory').innerHTML= "\xa0 prefably on "+data['SubCategory'];
            document.getElementById('gigPrice').innerHTML=" Starting from Rs."+ data['Price'];
            document.getElementById('gigDuration').innerHTML=data['Duration']+" delivery";          
             setGigURL(data['PhotoURL']);
          })
   }
   useEffect(()=>{
      GigData();
   },[]);

   useEffect(()=>{
      ProfileData();
   },[]);

   



   return ( <>
   <div >
   <Container>
     <Row>
        <Col>
        <h2 id="gigTitle" ></h2>
         <img class="gigPic" src={GigURL} />
        <h1>About the gig</h1>
     
       <h id="gigDes" ></h><br></br><br></br>
       <h>Like to work on </h>
       <p id="gigCategory"></p>
        <p id="gigSubcategory"></p><br></br>
       <p id="gigPrice"></p> 
       <p id="gigDuration"></p> <br></br>
       <p id='instructions'></p>
     
   </Col>
   </Row>
   </Container>
    </div>

   <div>
    <Container>
  <Row>
    <Col>
       <h1>About The Seller</h1>
       <img id="profilePic" src={UserURL}/><br></br>
       <div id="user">
       <p id="name"></p>
       <p id="des" ></p>
       <p id="skills"></p>   
       </div> 
       
    </Col>
  </Row>
</Container>
    </div>



           </>
   );
};

export default ProfilePage;