
import React,{ useState,useEffect } from "react";
import  './MessageForm.css';
import {Link} from 'react-router-dom';
const MessageForm=()=>{
  

    const [message,setmessage]=useState("");
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const currentDate =()=>{
     var newDate=new Date();
     
     setDate(newDate.toDateString());
     setTime(newDate.toTimeString());

    }
    useEffect(()=>{
         currentDate()  ;   
    },[])

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
                <input className='messageInput'
                  type="text" placeholder="Enter your message here"
                  name="message1"
                  id="message1"

                  autoComplete="off"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                /><br/>
                <Link to="/"><span class="material-icons">insert_link</span></Link>
                </div>
                <button type="submit" >Send</button>
            </div>
        </>
    );


}
export default MessageForm;