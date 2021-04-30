import BankDetailsForm from '../Components/BankDetailsForm';
import React, { useEffect, useState } from "react";
import {Button,Modal} from 'react-bootstrap'; 


const BankDetailsModal = () => {

   
   
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);

    
     
   
    return (
      <>
        <Button variant="primary" onClick={()=>{setShow(!show)}}>
         Add Bank Details
        </Button>
        {/* {show?<MessageForm/>:''} */}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body><BankDetailsForm /></Modal.Body>
          <Modal.Footer>
        
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default BankDetailsModal;