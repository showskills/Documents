import { useContext} from "react";
import {  useHistory } from "react-router";
import { FirebaseContext } from "../../context/firebase";


const Logout = () => {

   
    const {firebase}=useContext(FirebaseContext);
    const history=useHistory()
    firebase.auth().signOut();
    setTimeout(() =>{
        history.push('/')
    },1000)
    
    return ( <>
      
    </> );
}
 
export default Logout;