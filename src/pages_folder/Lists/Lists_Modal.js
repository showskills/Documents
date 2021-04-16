import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import ListsForm from "../Lists/ListsForm";

const Lists_Modal = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          +Create a List
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>
            <h1>Create a new list</h1>
            <p>Create a list around a project, a topic or for inspiration.</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body><ListsForm/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default Lists_Modal;