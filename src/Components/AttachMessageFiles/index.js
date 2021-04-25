import React, {useEffect, useState} from 'react';
import { storage } from "../../lib/firebase.prod";
import './AttachFiles.css';
import {Link} from 'react-router-dom';


const AttachMessageFiles= (props)=>{

    var recipient=props.recipient;
    var sender=props.sender;
      var projectid=props.projectid;
    const [currentfiles,setCurrentFiles]=useState({})
    const [currentfileNames,setnames]=useState([])
    const [allfileNames,setallNames]=useState([])
    const [currentNumberOfFiles,setNumber]=useState(0);
    const [deletefxnCalled,setCall]=useState(false);
    
  
  	const checkChange=async (e)=>{
          e.preventDefault();
         var n=e.target.files.length;
         setNumber(n);
         setCurrentFiles(e.target.files);
           
      }

      console.log(currentNumberOfFiles);
      console.log(currentfiles);

      const postfiles=async ()=>{
        var i,temp=[];
       console.log(projectid)
        for(i=0;i<currentNumberOfFiles;i++)
          {  console.log('done');
               temp.push(currentfiles[i].name);
               var storageRef=storage.ref(`messages/${recipient}/${sender}/${projectid}/${currentfiles[i].name}`);
               await storageRef.put(currentfiles[i]).then(e=>{
            console.log('ith file done')
          })
        } 
        setnames(temp);
        
      }

      const deletefile=async(filename)=>{
        var storageRef=storage.ref(`messages/${recipient}/${sender}/${projectid}/${filename}`);
        await storageRef.delete().then(()=>{
          console.log('deleted successfully');
          var array=allfileNames;
          var i =array.indexOf(filename);   
          array.splice(i,1);
          console.log(array)
          setallNames(array);
           setCall(!deletefxnCalled);
        })
      }
    
      useEffect(()=>postfiles()
      ,[currentfiles])

      useEffect(()=>{
           setallNames(allfileNames.concat(currentfileNames))
      },[currentfileNames])
      
      useEffect(()=>{
        setallNames(allfileNames)
      },[deletefxnCalled])
      
    console.log(allfileNames)
return(
<>
  <div id="inputfiles">
  <input type='file' id='uploadMessageFile' onChange={checkChange} multiple />
  </div>
  { allfileNames.map((name,i)=>
 
    <p key={i} id="fileName"> 
    {name}
    <button className="deletefile" onClick={async()=> await deletefile(name)}>
      <span className="material-icons" id="removefile">delete</span></button> 
    </p>)  }

   
</>
);
    
}

export  default AttachMessageFiles;
