import {db} from '../../lib/firebase.prod';
import React, { useEffect, useState } from 'react';
import {Carousel,Container,Row ,Col,Button} from 'react-bootstrap';
import './profilePage.css';
import { Link } from "react-router-dom";


const ProfileDescription=()=>{
      const [profiledata,setprofileData]=useState({});
      const [gigdata,setgigData]=useState({});
      const [skills,setSkills]=useState([]);

      const profiledb=()=>{
         const uid="WTedB4smDdT22lSgV1yW1tzSQpu1";
     db.collection('freelancer-profile').doc(uid).get().
     then(doc=>{
        var array=[]; 
        document.getElementById('print').innerHTML="";
        doc.data()['Skills'].map(skill=>{
        array.push(skill.skillName);
        document.getElementById('print').innerHTML+='<br/># ';    
        document.getElementById('print').innerHTML+=skill.skillName;
        })
        setSkills(array);
        console.log(array)
         setprofileData(doc.data());                   
     })   
      }

      const gigdb=()=>{
         const uid="WTedB4smDdT22lSgV1yW1tzSQpu1";
     db.collection('Gig-Data').doc(uid).get().
     then(doc=>{
         setgigData(doc.data());                   
     })   
      }

      useEffect(()=>{
         gigdb();
      },[]);
   
      useEffect(()=>{
         profiledb();
      },[]);
   
      


   return ( <>

             <div >
             <Container>
                <Row>
                   <Col>

                   <div>
                     
                    <h className="heading12">{gigdata['Title']}</h><br/>
                    <Button className="confirmOrder">Continue &#8377; ({gigdata['Price']})</Button>
                  
                     <span><img class="pic11" src={profiledata['ProfilePhotoUrl']}/></span>
                     <span>{profiledata['Username']}</span>&nbsp;
                     <span className="staryell">{4.9}&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                    </div>
                     <br/>
                     
                   </Col>
                </Row>

                <Row>
                   <Col>
                   <img className="gigpic34" src={gigdata['PhotoURL']}/><br/>

                   <h1>About the Gig</h1>
                   <p>{gigdata['Description']}</p><br></br>
                   <p> I like to work on {gigdata['Category']}&nbsp; projects</p>
                   <p>&nbsp;&#10004; Expertise in {gigdata['SubCategory']}</p>
                   <p>Starting from Rs. {gigdata['Price']}</p>
                   <p>{gigdata['Duration']} Delivery</p><br></br>
                   <p>Instructions for the User:<br/> {gigdata['Instructions']}</p>              
                   </Col>
                </Row>
                  <br/><br/>

                <Row>
                   <Col>
                      <h1>About the Seller </h1>

                      <div className="box12">
                      <img className="userpic2" src={profiledata['ProfilePhotoUrl']}/>

                      <div className="box123">
                        <p>{profiledata['Username']}</p>
                        <p>{profiledata['Description']}</p>
                        <p className="staryell">{4.9}&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</p>
                        <Button >Contact me</Button>
                       </div>
                     </div><br/>
                     
                   <div className="box1234">
                   <h1>Proffesional in :</h1>
                   <p id="print"></p>
                   {/* <p>{ 
                       skills.map(skill=>{                    
                        <p>{skill}</p>
                       })
                    }
                  </p>*/}
                  
                  </div>
                   </Col>
                </Row>
             </Container>
    


             </div>
             <h className="heading123">What people loved about this Seller</h><br/><br/>
            
             <Carousel>

  <Carousel.Item interval={5000}>
  <p>Absolutely Incredible!! The best value, best communication! First time using Fiverr and investing in my side business! BEST THING MONEY COULD BUY!!!</p>
  <Link className="link34" to="/">more...</Link>
    <img
      className="d-block w-100"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODcYhAAEl463hAAAAAElFTkSuQmCC"
      alt="First slide"
    />  
    
  </Carousel.Item>
  <Carousel.Item interval={5000}>
  <p>I don‘t have anything to say thats negative. He did his work exactly like I described it to him, he was very kind, answered my questions if I had some, answered and delivered in hours. I would recommend him to everybody who is thinking about ordering a logo. His work is amazing</p>
  <Link className="link34" to="/">more...</Link>
    <img
      className="d-block w-100"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODcYhAAEl463hAAAAAElFTkSuQmCC"
      alt="First slide"
    />  
   
  </Carousel.Item>
</Carousel>
<br></br>
           </>
   );
};

export default ProfileDescription;