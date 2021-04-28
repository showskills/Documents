import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import './ReviewModel.css'


const ReviewModel = (props) => {
   
    const [modalShow, setModalShow] =useState(false);
    

   const ToggleShow=()=>{
    setModalShow(!modalShow)
    }
 
 return (

        <>
        <button onClick={() => ToggleShow()}>
          Launch Review
        </button>
  
        <Modal
        show={modalShow}
        onHide={ToggleShow }
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Write your feedback</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ToggleShow}>Close</Button>
        </Modal.Footer>
      </Modal>
    
      </>
    );
}
 
export default ReviewModel;