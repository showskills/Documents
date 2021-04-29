import useAuthListener from '../../hooks/use-auth-listener';
import {getFreelancerName} from '../../Components/ReviewForm/DataHandeling';
import { useState,useEffect } from 'react';
import './AllReviews.css';
import {getCustomerReviews} from './DataHandeling';

const AllReviews=()=>{
   
    const currentuser=useAuthListener().user;
    const [FreelancerName,setFname]=useState('');
    const [CustomerReviews,setCr]=useState([]);

    const setinfo = async ()=>{

       var name= await getFreelancerName(currentuser.uid);

       setTimeout(()=>setFname(name),200);

       var array=await getCustomerReviews(currentuser.uid);
       setTimeout(()=>setCr(array),200);

      }  

  
   

    useEffect(async ()=>{
        await setinfo()
    },[] );

  console.log(CustomerReviews);

    return (
        <>
        <div id="rbody">
         <h className="userReviewsh12">
             {FreelancerName}'s Reviews -</h><br></br><br/>
         {CustomerReviews.map((review,i)=>
             <p key={i} className="printReviews72">
               <span>
                <p id="topline124">
              <span>{review.FromUser}</span>&nbsp;&nbsp;
              <span>{review.Rating}</span>&nbsp;
              <span className="material-icons" key={i} style={{ color: '#FFBE5B' }}>star</span>
               </p>
               </span><br></br>
               <span>{review.Review}</span>
               <br/>
             </p>
         )
         }   
        
        </div>
        </>
    )
}

export default AllReviews;