import {db} from '../../lib/firebase.prod';
import Firebase from 'firebase/app';

const DataHandeling= async (props)=>{
    const {recipient,sender,date,time,message}=props;
    console.log(props);
  var docRef=db.collection('messages').doc(recipient);
   await docRef.get().then(doc=>{

       var messagearray={FromUID:sender,Message:message,Time:time,Date:date};
       console.log(messagearray)
       if(doc.exists)
       {
         docRef.update({
               Messages:Firebase.firestore.FieldValue.arrayUnion(messagearray)
           });
       }
       else{
             docRef.set(
                {Messages:[messagearray]}
            );
       }
   })

}
export default DataHandeling;