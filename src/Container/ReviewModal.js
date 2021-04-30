import React, { useEffect, useState } from "react";
import {Button,Modal} from 'react-bootstrap'; 
import ReviewForm from '../Components/ReviewForm';

const ReviewModal = (props) => {

   
   const [Freelancerid,setFid]=useState('');
   const [Recruiterid,setRid]=useState('');
   const [projectid,setpid]=useState('');
   const [details,setdetails]=useState('');
   

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    
    
  
   useEffect(()=>{
      setFid(props.freelancerid);
      setRid(props.recruiterid);
      setpid(props.projectid);
      setdetails(props.details);
      
   },[props])
  

   
  
    return (
      <>
        <button className='AddReviewButton' onClick={()=>{setShow(!show)}}>
        Add a review
        </button>
        {/* {show?<MessageForm/>:''} */}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body><ReviewForm freelancerid={Freelancerid} 
          recruiterid={Recruiterid} projectid={projectid} details={details} updateReview={props.updateReview}/></Modal.Body>
          <Modal.Footer>
        
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default ReviewModal;
