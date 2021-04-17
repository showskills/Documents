import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import {GigForm} from "../Components";

const GigModal = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Create a New Gig
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body><GigForm/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default GigModal;