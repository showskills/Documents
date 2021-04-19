import useAuthListener from "../hooks/use-auth-listener";
import { db } from "../lib/firebase.prod";


// addEducation,
// collegename, 
// title, setTit
// major, setMaj
// graduationyea

const FpDb = () => {
    // console.log('a----------');
  var user=useAuthListener().user;
 
//  console.log('a----------');
 var uid=user.uid;
 var DocData={
     Description:"",
     Languages:[],
     Skills:[],
     Education:[]
     
 }


 db.collection('Free-Lancer').doc(uid).set(DocData).then(()=>{
     console.log('doc addedd');
 })

    return ( DocData);
}
 
export default FpDb;