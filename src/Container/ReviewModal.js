import React, { useEffect, useState } from "react";
import {Button,Modal} from 'react-bootstrap'; 
import ReviewForm from '../Components/ReviewForm';

const ReviewModal = (props) => {

   
   const [Freelancerid,setFid]=useState('');
   const [Recruiterid,setRid]=useState('');
   const [projectid,setpid]=useState('');

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    
    
  
   useEffect(()=>{
      setFid(props.freelancerid);
      setRid(props.recruiterid);
      setpid(props.projectid);
   },[])
  

   
  
    return (
      <>
        <Button variant="primary" onClick={()=>{setShow(!show)}}>
        Add a review
        </Button>
        {/* {show?<MessageForm/>:''} */}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body><ReviewForm freelancerid={Freelancerid} 
          recruiterid={Recruiterid} projectid={projectid}/></Modal.Body>
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
