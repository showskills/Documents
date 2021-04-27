import './ReadMessages.css';
import { db, storage } from '../../lib/firebase.prod';
import useAuthListener from "../../hooks/use-auth-listener";
import { useEffect, useState } from 'react';
import DataHandeling from '../../Components/MessageForm/DataHandeling';
import {UpdateData}from './DataUpdateDelete';
import {DeleteData} from './DataUpdateDelete';
import {ActiveProjectsDataUpdate} from '../UserProjects/DataHandeling';

const ReadMessages = () => {

    const currentUser = useAuthListener().user;
    const [fileurls, setfileurls] = useState([]);
    const [numberOfMessages, setNumber] = useState(0);
    const [allData, setallData] = useState([]);
    
    const [isloading, setisloading] = useState(true);
    const [toogle,setToogling]=useState(false);


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
            array?console.log('not working'):console.log('workigg')
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
          status:'active',
          projectName:projectTitle
      });

      await sendMessage("accepted",senderID,projectTitle,projectid);
      var array=allData;
      array[MessageNumber].Response='Accepted';
      console.log(array)
      
      setTimeout(async()=>{
       await setToogling(!toogle);
       await setallData(array);
    },200) 
     console.log(allData);

     await UpdateData({sender :senderID,recipient:currentUser.uid,projectid});
     await ActiveProjectsDataUpdate({freelancerid:currentUser.uid,recruiterid:senderID,
                                      projectid:projectid});


  }
       


    const projectRejected=async ({senderID,projectid,projectTitle})=>{

        await sendMessage("rejected",senderID,projectTitle,projectid);
        
    var newdata=await DeleteData({sender:senderID,recipient:currentUser.uid,projectid});

       
  /*  setTimeout(async()=>{
            setToogling(!toogle);
            setallData(newdata);
               },500) ;
         console.log(allData)
              this should have solved the refresh problem,but hadnt,
              not updating allData even after setallData
    */
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
                        {!isloading ? fileurls[i][0] !==[] ? fileurls[i][1] !== [] ?
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
                            : <a href={fileurls[i][0]}>file 1</a> : <p>'None' </p>: ''}
                        <br />

                {allData[numberOfMessages-i-1].FromUID !=='showSkills'?
                <p>
                {allData[numberOfMessages-i-1].Response === 'Rejected'?
                <p className="button-box">
                    <button className="message-button" 
                    onClick={()=>
                    projectConfirmed({
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
    );}

export default ReadMessages;