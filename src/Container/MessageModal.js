import MessageForm from '../Components/MessageForm';
import React, { useEffect, useState } from "react";
import {Button,Modal} from 'react-bootstrap'; 
import useAuthListener from '../hooks/use-auth-listener';
import { useHistory } from "react-router";

const MessageModal = (props) => {

   
    const currentUser=useAuthListener().user;
    const [show, setShow] = useState(false);
   const history= useHistory();
   
    const handleClose = () => setShow(false);

    const [recipientUid,setrecipientUid]=useState("");
     

    useEffect(()=>{
      
       setrecipientUid(props.recipient);
    },[props])

    console.log(recipientUid);
  
    return (
      <>
        <Button style={{backgroundColor:'#20A3D6',color:'white'}} variant="primary" onClick={()=>{
       
          !currentUser ?history.push('/signup') :
          setShow(!show)}}>
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
