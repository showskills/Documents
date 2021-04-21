import { useState,useEffect } from "react";
import useAuthListener from "../../hooks/use-auth-listener";
import { storage,db } from "../../lib/firebase.prod";
import "./AddPhoto.css";

const AddPhoto = () => {

	
	
	const [url, setUrl] = useState('images/user.jpg');
	var currentUser = useAuthListener().user;
    
	const [newUsername,setNewUsername] =useState(currentUser.displayName.valueOf());

    var ref=db.collection('freelancer-profile').doc(currentUser.uid);

	ref.update({
		ProfilePhotoUrl:url
	})

	var storageRef = storage.ref(`images/${currentUser.uid}/profilePhoto`);
	const dowloadURL=()=>{
		
		storageRef.getDownloadURL()
			.then(async (url) => {
				console.log(url);
				setUrl(url);
			}).then((e)=>console.log(e))

	}

	useEffect(()=>{
		dowloadURL()
	},[])

    ref.update({
		Username:currentUser.displayName
	})


    const handleChange =async(e)=>{
		e.preventDefault();
		var image=e.target.files[0];
		console.log(image)
		await storageRef.put(image);
		console.log('a')
		await storageRef.getDownloadURL()
	   .then(async (url) => {
		 console.log(url);

		currentUser.updateProfile({
			photoURL:url
		 })
         ref.update({
			 ProfilePhotoUrl:url
		 })
		 console.log(currentUser.photoURL);
		 setUrl(url);
		}
		
	   ).catch((e)=>{
		   console.log(e);
	   })
	}


	const deletePhoto=()=>{
       storageRef.delete().then(()=>{ console.log('photo deleted')})
	   setUrl('images/user.jpg')
	   currentUser.updateProfile({
		photoURL:'images/user.jpg'
	 })
	 ref.update({
		ProfilePhotoUrl:'images/user.jpg'
	})
	}

	return (
		 <div className='PhotoContainer'>
	      <label className='label' htmlFor='upload' >
		 <div className='avatar'>
		 <img className='image' src={url} alt='avatar'/>
         {<span className="material-icons md-48">local_see</span>}
		 <input type='file' id='upload' hidden onChange={handleChange}/>
		 </div>
		 </label>
		<button className="deletePhotoButton" onClick={deletePhoto}><span className="material-icons">delete</span></button> 
			<div className='usernameText'>{currentUser?currentUser.displayName:<h3>please login</h3>}</div>
			{/* <input type="text" value={newUsername} onChange={(e)=>{setNewUsername(e.target.value)}} /> */}
		 </div>
);
}
 
export default AddPhoto;