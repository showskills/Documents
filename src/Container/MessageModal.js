import MessageForm from '../Components/MessageForm';
import React, { useEffect, useState } from "react";
import {Button,Modal} from 'react-bootstrap'; 

const MessageModal = (props) => {

   
   
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);

    const [recipientUid,setrecipientUid]=useState("");


    useEffect(()=>{
      
       setrecipientUid(props.recipient);
    },[props])

    console.log(recipientUid);
  
    return (
      <>
        <Button variant="primary" onClick={()=>{setShow(!show)}}>
          Contact me
        </Button>
        {/* {show?<MessageForm/>:''} */}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body><MessageForm recipient={recipientUid}/></Modal.Body>
          <Modal.Footer>
        
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default MessageModal;
