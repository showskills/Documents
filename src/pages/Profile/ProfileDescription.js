import {db} from '../../lib/firebase.prod';
import React, { useEffect, useState } from 'react';
import {Carousel,Container,Row ,Col,Button} from 'react-bootstrap';
import './profilePage.css';
import { Link, Redirect, useHistory } from "react-router-dom";
import useAuthListener from '../../hooks/use-auth-listener';

import MessageModal from '../../Container/MessageModal';
const ProfileDescription=()=>{
      const [profiledata,setprofileData]=useState({});
      const [gigdata,setgigData]=useState({});
      const [skills,setSkills]=useState([]);
      const [Reviews,setReviews]=useState({});
      const currentUser=useAuthListener().user;
      // arrays to how user reviews
      const [getReview,setReview]=useState([]);
      const [getRating,setRating]=useState([]);
      const [reviewUsername,setUsername]=useState([]);
     const history=useHistory();
     
      const profiledb=()=>{
         const uid="WTedB4smDdT22lSgV1yW1tzSQpu1";
     db.collection('freelancer-profile').doc(uid).get().
     then(doc=>{
        var array=[]; 
        
        doc.data()['Skills'].map(skill=>{
        array.push(skill.skillName);
      
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

      const reviewdb=()=>{
         console.log('jcb kcb');
         const uid="WTedB4smDdT22lSgV1yW1tzSQpu1";
          db.collection("Reviews").doc(uid).get().
         then(doc=>{
               setReviews(doc.data());
         });
         
      }
      const getreviewdb=()=>{
       db.collectionGroup('CoustomerReviews').get().then(docs=>{
          var showRatings=[];
          var showReviews=[];
          var username=[];
          var count=0;
           docs.forEach(doc=>{
              console.log(showReviews);
              const data=doc.data();
              
              count+=1;
              if(count< 4)
              {username.push(data.FromUser);
               showRatings.push(data.Rating);
               showReviews.push(data.Review);
              }
            })
            setReview(showReviews);
            setRating(showRatings);
            setUsername(username);
       })
      }

      useEffect(()=>{
         gigdb();
      },[]);
   
      useEffect(()=>{
         profiledb();
      },[]);
   
      useEffect(()=>{
         reviewdb();
      },[]);

      useEffect(()=>{
         getreviewdb();
      },[]);

   return ( <>

             <div >
             <Container>
                <Row>
                   <Col>
                   
                   <div>
                   
                    <h className="heading12">{gigdata['Title']}</h><br/>
                    <Button className="confirmOrder" onClick={()=>{
                       history.push('/payment/'+ currentUser.uid)
                    }}>Continue &#8377; ({gigdata['Price']})</Button>
                       <div className="box39">
                     <span><img class="pic11" src={profiledata['ProfilePhotoUrl']}/></span>     
                     <span>{profiledata['Username']}</span>&nbsp;
                      {[...Array(Reviews.AverageRating)].map((e, i) => <span className="material-icons" key={i} style={{color:'#FFBE5B'}}>star</span>)}
                     <span className="staryell">{Reviews['AverageRating']}({Reviews['NumberOfReviews']})</span>
                    
                    </div>
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
                        <p>{profiledata['Username']} </p>
                        <p>{profiledata['Description']}</p>
                        <div className="box12">
                        {[...Array(Reviews.AverageRating)].map((e, i) => <span className="material-icons" key={i} style={{color:'#FFBE5B'}}>star</span>)}  
                        <p className="staryell">{Reviews['AverageRating']}({Reviews['NumberOfReviews']})</p>
                        
                        </div>
                       <div> <MessageModal/></div>
                       </div>
                     </div><br/>
                     
                   <div className="box1234">
                   <h1>Proffesional in :</h1>
                  
                   { skills.map((skill,i)=>
                   <span className="box39">
                       <span className="material-icons" key={i} style={{color:'brown'}}>done</span>
                      <span id="print2">{skill}</span>
                   </span>
                   )
                  }              
                  </div>
                   </Col>
                </Row>
             </Container>
    
             </div>
             <h className="heading123">What people loved about this Seller</h><br/><br/>
            
 <Carousel>
             {[...Array(2)].map((e,i)=>
               <Carousel.Item interval={5000}>
  <p className="rating78"> {reviewUsername[i]} &#x2605; {getRating[i]} </p>
  <p>{getReview[i]}</p>
  <Link className="link34" to="/">more...</Link>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqYuAnPXkbXUIBV01VJwjsWUvTojVTQ88lg&usqp=CAU"
      alt="First slide"
    />  
    
  </Carousel.Item>
             )}
  
  
</Carousel>
<br></br>
           </>
   );
};

export default ProfileDescription;