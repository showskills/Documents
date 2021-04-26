import {db} from '../../lib/firebase.prod';
import Firebase from 'firebase/app';

const DataHandeling= async (props)=>{
    const {recipient,sender,date,time,message,projectid,ProjectTitle}=props;
    console.log(props);
    
    // status could be set from  here only 


var newmessage={FromUID:sender,Message:message,Time:time,Date:date,ProjectId:projectid,ProjectTitle:ProjectTitle,Response:'Rejected'};
    console.log(newmessage)
  var docRef=db.collection('messages').doc(recipient);
   await docRef.get().then(doc=>{

       if(doc.exists)
       {
         docRef.update({
               Messages:Firebase.firestore.FieldValue.arrayUnion(newmessage)
           });
       }
       else{
             docRef.set(
                {Messages:[newmessage]}
            );
       }
   })

}
export default DataHandeling;