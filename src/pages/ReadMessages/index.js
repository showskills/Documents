import './ReadMessages.css';
import {db,storage} from '../../lib/firebase.prod';
import useAuthListener from "../../hooks/use-auth-listener";
import { useEffect, useState } from 'react';

const ReadMessages= ()=>{
    
    const currentUser=useAuthListener().user;
    const [sender,setSender]=useState([]);
    const [date,setDate]=useState([]);
    const [time,settime]=useState([]);
    const [message,setmessage]=useState([]);
    const [fileurls,setfileurls]=useState([]);
    const [projectid,setpid]=useState([]);
    const [numberOfMessages,setNumber]=useState(0);

    
    const newMessages=async ()=>{
        
        var  docRef=db.collection('messages').doc(currentUser.uid);
         await docRef.get().then(
            async (doc)=>{
            const data=doc.data();
            const messagesArray=data.Messages;
            var n=messagesArray.length,i,temp;
            setNumber(n);
            for(i=0;i<n;i++)
            {     
                 temp=sender;
                temp.push(messagesArray[n-1-i].FromUID);
                setSender(temp);
                temp=date;
                temp.push(messagesArray[n-1-i].Date);
                setDate(temp);
                console.log(temp)
                temp=time;
                temp.push(messagesArray[n-1-i].Time);
                settime(temp);
                temp=message;
                temp.push(messagesArray[n-1-i].Message);
                setmessage(temp);
                temp=projectid;
                temp.push(messagesArray[n-1-i].ProjectId);
                setpid(temp);
                await filesAttached(n-i-1);
                console.log(fileurls);
           }                  
            })

};
console.log(message);

    const filesAttached= async(i)=>{
            
     var storageRef=storage.ref(`messages/${currentUser.uid}/${sender[i]}/${projectid[i]}`);
      /*  await storageRef.getDownloadURL()
       .then( (url) => {
           console.log("vbsjkvb cs, ");
           setFilesurl(url);      
       })*/
    console.log(storageRef);
    await storageRef.listAll().then(res=>{
          var array=[];
        res.items.forEach(async (fileRef) => { 
            await fileRef.getDownloadURL()
			    .then( (url) => {
					  	array.push(url);
			    })
         })
        setfileurls(array);
        console.log(array)
        })

    }


useEffect(()=>{
    newMessages()
},[])



console.log(fileurls)
console.log(JSON.stringify(fileurls[fileurls.length-1]))
    return (
    
        <>
             <div>
                 <h3 className="messagesHeading">My  Messages</h3><br/>

                {[...Array(numberOfMessages)].map((e,i)=>
                 <h className="printMessages">
                  <h id="subbox1">
                   <span>{time[i]} </span>
                   <span>{date[i]}</span>
                   </h>
                   <span>From: {sender[i]}</span>
                   <span>Message: {message[i]}</span>
                   <span>Files Attached: </span>
                    <a href={fileurls[0]}>file 1</a>
                   <br/>
                 </h>
    
                )}
                 
             </div>

        </>
    )
}

export default ReadMessages;