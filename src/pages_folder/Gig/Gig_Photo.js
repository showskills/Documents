import React, { Component } from 'react';
import "../Profile/Profile_Photo.css";

export class Gig_Photo extends Component {
  state={
    gigImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({gigImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { gigImg} = this.state
		return (
			<div className="page">
				<div className="profilephotocontainer">
					<h1>Gig Picture:</h1>
					<div className="img-holder">
						<img src={gigImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="giginput" onChange={this.imgHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="giginput">
						Choose your Gig Photo
					</label>
          </div>
				</div>
			</div>
		);
	}
}

export default Gig_Photo;