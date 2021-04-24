
import React,{ useState,useEffect } from "react";
import  './MessageForm.css';
import {Link} from 'react-router-dom';
import useAuthListener from '../../hooks/use-auth-listener';
import DataHandeling from './DataHandeling';
import AttachMessageFiles from '../AttachMessageFiles';
const MessageForm=(props)=>{
   
    const [message,setmessage]=useState("");
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const currentUser=useAuthListener().user;
    const [recipientUid,setrecipientUid]=useState("");
    


   
    const currentDate =()=>{
     var newDate=new Date();
     
     setDate(newDate.toDateString());
     setTime(newDate.toTimeString());

    }

    const submitForm= async(e)=>{
      console.log('vnh ')
        e.preventDefault();



const newEntry={message:message,recipient:recipientUid,sender:currentUser.uid,date:date,time:time};
  await DataHandeling(newEntry);

    }


    useEffect(()=>{
         currentDate()  ;   
    },[])

    useEffect(()=>{
        
        setrecipientUid(props.recipient);
     },[props])
     console.log(recipientUid);


    return(
        <>

            <div>
                <div>
                <div className="dateAndTime">
                <span>{time}</span>
                <span id="time5">{date}</span>
                </div><br/>
                <label className="formHeading12">
                    Give a brief description about your project
                </label>
                <textarea className='gigInputArea'
                  type="text" placeholder="Enter your message here"
                  name="message1"
                  id="message1"

                  autoComplete="off"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                ></textarea>
                <br/>
                <AttachMessageFiles recipient={recipientUid} sender={currentUser.uid}/>
                
                </div>
                <button type="submit" onClick={submitForm}>Send</button>
            </div>
        </>
    );


}
export default MessageForm;