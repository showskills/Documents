import { useState } from "react";
import useAuthListener from "../../hooks/use-auth-listener";
import { storage } from "../../lib/firebase.prod";
import "./AddPhoto.css";

const AddPhoto = () => {
	
	const [url,setUrl]=useState('images/user.jpg');
    var currentUser =useAuthListener().user;
	// console.log(useAuthListener());
	// console.log(currentUser.photoURL)
	// console.log(currentUser.uid)
    const handleChange =async(e)=>{
		e.preventDefault();
		var image=e.target.files[0];
		console.log(image);
		var storageRef = storage.ref(`images/${currentUser.uid}/profilePhoto`);
		var downRef=storage.ref(`images/${currentUser.uid}/profilePhoto`);
		await storageRef.put(image);
		console.log('a')
		await downRef.getDownloadURL()
	   .then(async (url) => {
		 console.log(url);
		 setUrl(url);
		 
		await currentUser.updateProfile({
			photoURL:url
		 })

		 console.log(currentUser.photoURL);
		}
		
	   ).catch((e)=>{
		   console.log(e);
	   })
	}

	return (
		 <div className='PhotoContainer'>
	      <label className='label' htmlFor='upload' >
		 <div className='avatar'>
		 <img className='image' src={currentUser?currentUser.photoURL? currentUser.photoURL:url:url} alt='avatar'/>
         {currentUser?currentUser.photoURL? <span class="material-icons md-48">local_see</span>:'':''}
		 <input type='file' id='upload' hidden onChange={handleChange}/>
		 </div>
		 </label>
		 <div className='usernameText'>{currentUser?currentUser.displayName:<h3>please login</h3>}</div>
		 
		 </div>
);
}
 
export default AddPhoto;