import { useEffect, useState } from "react";
import {getFreelancerName} from './DataHandeling';
import './ReviewForm.css';

const ReviewForm=(props)=>{

     const [FreelancerId,setFid]=useState('');
     const [Recruiterid,setRid]=useState('');
     const [FreelancerName,setFname]=useState('');
     const [review,setreview]=useState('');
     const [rating,setrating]=useState(5);
    const setinfo = async ()=>{

        setFid(props.freelancerid);
        setRid(props.recruiterid);
       var name= await getFreelancerName(props.freelancerid);
       setTimeout(()=>setFname(name),200);
      }  


    useEffect(async ()=>{
        await setinfo()
    },[props] );

    console.log(rating,review);
  
     return(
         <>
          <div className="reviewbody">
           <label className="formHeading89" >Let us know how was {FreelancerName}'s service</label>
        
           <textarea className='gigInputArea' id='message1'
                  type="text" placeholder="Enter your review here"
                  name="message1"
                  id="message1"

                  autoComplete="off"
                  value={review}
                  onChange={(e) => setreview(e.target.value)}
          ></textarea>
          <br></br>
          <div className='ratings'>
          <label>How you would like to rate {FreelancerName} : </label>
         <label>( Between 1-5 ) <input type='Number' min="1" max="5" onChange={(e)=>{
             setrating(e.target.value)
         }}/></label>
          </div>
            
        <button className="reviewbtn">Submit</button>
          </div>

         </>
     )

}

export default ReviewForm;