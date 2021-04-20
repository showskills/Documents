import { useState } from "react";
import useAuthListener from "../../hooks/use-auth-listener";
import { storage } from "../../lib/firebase.prod";
import "./AddGigPhoto.css";

const AddGigPhotos = () => {

	const [url, setUrl] = useState('images/user.jpg');
	var currentUser = useAuthListener().user;

	// console.log(currentUser.photoURL)
	// console.log(currentUser.uid)
	const handleChange = async (e) => {
		
		
		e.preventDefault();
		var image = e.target.files[0];
		console.log(image);
		var storageRef = storage.ref(`images/${currentUser.uid}/gigPhotos`);
		var downRef = storage.ref(`images/${currentUser.uid}/gigPhotos`);
		await storageRef.put(image);
		await downRef.getDownloadURL()
			.then(async (url) => {
				console.log(url);
				setUrl(url);
				localStorage.setItem('gigPhotoUrl', url);
				// console.log(localStorage.getItem('gigPhotoUrl'))
			}

			).catch((e) => {
				console.log(e);
			})
	}

	return (
		<div className='GigPhotoContainer'>
			<label className='label' htmlFor='uploadGig' >
				<div className='Gigavatar'>
					<img className='GigImage' src={localStorage.getItem('gigPhotoUrl')} alt='avatar' />
					{currentUser ? currentUser.photoURL ? <span class="material-icons md-48">local_see</span> : '' : ''}
					<input type='file' id='uploadGig' hidden onChange={handleChange} />
				</div>
			</label>
		</div>
	);
}

export default AddGigPhotos;