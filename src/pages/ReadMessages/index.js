import './ReadMessages.css';
import { db, storage } from '../../lib/firebase.prod';
import useAuthListener from "../../hooks/use-auth-listener";
import { useEffect, useState } from 'react';
import DataHandeling from '../../Components/MessageForm/DataHandeling';

const ReadMessages = () => {

    const currentUser = useAuthListener().user;
    const [fileurls, setfileurls] = useState([]);
    const [numberOfMessages, setNumber] = useState(0);
    const [allData, setallData] = useState([]);
     const [disableButtons,setToogling]=useState(false);
    const [isloading, setisloading] = useState(true);

    const newMessages = async () => {

        var docRef = db.collection('messages').doc(currentUser.uid);
        await docRef.get().then(
            async (doc) => {
                const data = doc.data();
                console.log(data)
                const messagesArray = data.Messages;
                console.log(messagesArray)
                var n = messagesArray.length;
                var i;
                setallData(messagesArray);
                setNumber(n);

                for (i = 0; i < n; i++) {

                    await filesAttached(messagesArray[n - 1 - i].FromUID, messagesArray[n - 1 - i].ProjectId);
                }
                console.log('-------------------');
                setTimeout(() => {
                    setisloading(false);
                }, 500)


            })

    };


    const filesAttached = async (sender, projectid) => {
        console.log(projectid);
        var storageRef = storage.ref(`messages/${currentUser.uid}/${sender}/${projectid}`);
        await storageRef.listAll().then(res => {
            var array = [];
            res.items.forEach(async (fileRef) => {
                await fileRef.getDownloadURL()
                    .then((url) => {
                        array.push(url);
                    })
            })
            var x = fileurls;
            x.push(array);
            setfileurls(x);
            console.log(array)
        })
                                 
    }

    const sendMessage=async (status,senderId,projectTitle,projectid)=>{
        var newDate=new Date();
        const date=(newDate.toDateString());
        const time=(newDate.toTimeString());
        var message;
        if (status === 'accepted')  
         message=`Your request for project ${projectTitle} has been accepted `;
        else
         message=`Sorry to say , but your request for project ${projectTitle}
         has not been accepted . \n Seems like freelancer is busy with
        some other projects .You may contact other freelancers with similar profile`;


    const newEntry={message:message,ProjectTitle:projectTitle,recipient:senderId,
        sender:"showSkills",date:date ,time:time,projectid:projectid};
        console.log(newEntry)
         await DataHandeling(newEntry);
    

    }
    const projectConfirmed= async ({senderID,projectid,projectTitle,MessageNumber})=>{
    
      const ref=  db.collection('Projects').doc(projectid);
      await ref.set({
          freelancerID:currentUser.uid,
          recruiterID:senderID,
          status:'active'
      });


      await sendMessage("accepted",senderID,projectTitle,projectid);
      allData[MessageNumber].Response='Accepted';
      
    }


    const projectRejected=async ({senderID,projectid,projectTitle})=>{

        await sendMessage("rejected",senderID,projectTitle,projectid);
        
    }

    useEffect(() => {
        newMessages();
    }, [])

  
    
    return (
        <>
            <div>
                <h className="MessagesHeader">
                <h3 className="messagesHeading"> My  Messages</h3> <br />
                <img  className="headerImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5-ACdx9CAJYIT4x86KYaEzE1wJfsKBBv_g&usqp=CAU" alt="Notifications"/>
                </h>
                <hr/>
                {allData ? [...Array(numberOfMessages)].map((e, i) =>
                
                    <h className="printMessages">
            
                        <h id="subbox1">
                            <span>{allData[numberOfMessages-i-1].Time} </span>
                            <span>{allData[numberOfMessages-i-1].Date}</span>
                        </h>
                        <span> <em>From:</em> &nbsp; {allData[numberOfMessages-i-1].FromUID}</span>
                        <span><em>Message:</em> &nbsp; {allData[numberOfMessages-i-1].Message}</span>
                        <span><em>Files Attached: </em></span>
                        {!isloading ? fileurls[i] ? fileurls[i][1] ?
                            <div>
                                {fileurls[i].map((val, key) => {
                                    return (
                                        <div>
                                            <a href={fileurls[i][key]}>file {key+1} </a>
                                            <br />
                                        </div>
                                    )
                                })}
                            </div>
                            : <a href={fileurls[i][0]}>file 1</a> : 'None' : ''}
                        <br />

                {allData[numberOfMessages-i-1].FromUID !=='showSkills'?
                <p>
                {allData[numberOfMessages-i-1].Response === 'Rejected'?
                <p className="button-box">
                    <button className="message-button" 
                    onClick={()=>projectConfirmed({
                    senderID:allData[numberOfMessages-i-1].FromUID,
                    projectid:allData[numberOfMessages-i-1].ProjectId,
                    projectTitle:allData[numberOfMessages-i-1].ProjectTitle,
                    MessageNumber:numberOfMessages-i-1})}>
                    Confirm Order
                    </button>

                    <button className="message-button" 
                    onClick={()=>projectRejected({
                    senderID:allData[numberOfMessages-i-1].FromUID,
                    projectid:allData[numberOfMessages-i-1].ProjectId,
                    projectTitle:allData[numberOfMessages-i-1].ProjectTitle})}>
                     Not Intersted
                    </button>       
                </p>

                :'You accepted this project'}
                 </p>
                   : '' }
    
                    </h>
                  
                )
                    : ''}
            </div>
        </>
    )
}

export default ReadMessages;