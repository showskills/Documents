import MessageForm from '../Components/MessageForm';
import React, { useState } from "react";
import {Button,Modal} from 'react-bootstrap'; 

const MessageModal = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    
  
    return (
      <>
        <Button variant="primary" onClick={()=>{setShow(!show)}}>
          Contact me
        </Button>
        {/* {show?<MessageForm/>:''} */}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body><MessageForm/></Modal.Body>
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
