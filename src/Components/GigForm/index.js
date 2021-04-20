import React, { useState ,useEffect} from "react";
import AddGigPhotos  from "../AddGigPhotos";
import './GigForm.css';
import DataHandeling from './DataHandeling';
// import userEvent from "@testing-library/user-event";
import useAuthListener from '../../hooks/use-auth-listener';
import {db, storage} from '../../lib/firebase.prod';



const GigForm = () => {
  const [title, setTitle] = useState("");
  // const [tag, setTag] = useState("");
  const [gigdesciption, setGigdesciption] = useState("");
  const [price, setPrice] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [duration, setDuration] = useState("");
  const submitForm = async(e) => {

    e.preventDefault();
    var URL;
		var downRef = storage.ref(`images/${currentUser.uid}/gigPhotos`);
		await downRef.getDownloadURL()
			.then(async (url) => {
				console.log(url);
        URL=url;
			}
			).catch((e) => {
				console.log(e);
			});

    
    const newEntry = {uid:currentUser.uid, title: title, gigdesciption: gigdesciption,category: category,subCategory: subCategory,duration: duration,price: price, instructions: instructions,gigPhotoUrl:URL };
    
    
    
    await DataHandeling(newEntry);
  };

  const currentUser=useAuthListener().user;

 const  check=()=>{
       var docref=db.collection('Gig-Data').doc(currentUser.uid);
       console.log('aman');
        docref.get().then(doc=>{
       if(doc.exists)
       { 
       
        const data=doc.data();
        setTitle(data['Title'].valueOf());
        setGigdesciption(data['Description'].valueOf());
        setPrice(data['Price'].valueOf());
        setInstructions(data['Instructions'].valueOf());
        setCategory(data['Category'].valueOf());
        setSubCategory(data['SubCategory'].valueOf());
        setDuration(data['Duration'].valueOf());
       
       }     
       })
     
  }
   useEffect(()=>{
     check();
   },[])
  return (
    <> <div></div>
      <div className="container1_login">
        <div className=".form_login">
          <form action="" >
            <div className="container_login">
              <div>
                <label style={{ color: "#333" }} htmlFor="title">
                  Gig Title
              </label>
                <input className='gigInput'
                  type="text" placeholder="E.G.- I will do something I'm really good at"
                  name="title"
                  id="title"
                  
                  autoComplete="off"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div><br />
            
              <label htmlFor="category">
                Category
              </label>
              <div>
                <select className="gigDropdown" id="category" name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                  <option style={{ padding: '10px', margin: '10px' }} value="category">SELECT A CATEGORY</option>
                  <option value="graphics" name='graphics' >Graphics & Design</option>
                  <option value="video">Video & Animation</option>
                  <option value="music">Music & Audio</option>
                  <option value="digital">Digital Marketing</option>
                  <option value="lifestyle">Lifestyle</option>

                </select>
              </div><br />
              <div>
                <label htmlFor="subcategory">
                  Subcategory
              </label>
                <div>
                  <select className="gigDropdown" id="subcategory"  name="subcategory" value={subCategory}onChange={(e)=>{setSubCategory(e.target.value)}}>
                    <option value="subcategory">SELECT A SUBCATEGORY</option>
                    <option value="photoshop">Photoshop Editing</option>
                    <option value="architecture">Architecture & Interior Design</option>
                    <option value="business">Business Cards & Stationery</option>
                    <option value="whiteboard">Whiteboard & Animated Explainers</option>
                    <option value="videography">Drone Videography</option>
                    <option value="photography">Local Photography</option>
                    <option value="producers">Producers & Composers</option>
                    <option value="remixing">Remixing & Mashups</option>
                    <option value="dj">DJ Drops & Tags</option>
                    <option value="sem">Search Engine Marketing (SEM)</option>
                    <option value="seo">Search Engine Optimization (SEO)</option>
                    <option value="text">Text Message Marketing</option>
                    <option value="health">Health, Nutrition & Fitness</option>
                    <option value="fitness">Fitness Lessons</option>
                    <option value="greeting">Greeting Crads & Videos</option>
                  </select>
                </div>
              </div><br />

              {/* <div>
                <label htmlFor="tag">
                  Search Tags
              </label>
                <input className='gigInput'
                  type="text" placeholder=""
                  name="tag"
                  id="tag"
                  autoComplete="off"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
              </div><br /> */}

              <div>
                <label htmlFor="gigdesciption">
                  Gig Description
              </label>
                <textarea 
                  className='gigInputArea'
                  type="text" placeholder=""
                  name="gigdesciption"
                  id="gigdesciption"
                  autoComplete="off"
                  value={gigdesciption}
                  onChange={(e) => setGigdesciption(e.target.value)}
                />
              </div><br />

              <div>
                <label htmlFor="price">
                  Price
              </label>
                <input className='gigInput'
                  type="text" placeholder=""
                  name="price"
                  id="price"
                  autoComplete="off"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div><br />

              <label htmlFor="duration">
                Duration
              </label>
              <div>
                <select   className="gigDropdown" value={duration} style={{ height: '35px' }} id="duration" name="duration"  onChange={(e)=>{setDuration(e.target.value)}}>
                  <option value="1 Day">1 DAY</option>
                  <option value="2-5 Days">2-5 DAYS</option>
                  <option value="6-10 Days">6-10 DAYS</option>
                  <option value="10-20 Days">10-20 DAYS</option>
                  <option value="1 month">1 MONTH</option>
                </select> To deliver
            </div><br />

              <div>
                <label htmlFor="imgscr">
                  GIG PHOTOS
              </label>
                
                <AddGigPhotos/>
              </div><br />

              <div>
                <label htmlFor="instructions">
                  INSTRUCTIONS FOR BUYER
              </label>
                <input style={{ height: "100px" }}
                  className='gigInput'
                  type="text" placeholder=""
                  name="instructions"
                  id="instructions"
                  autoComplete="off"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </div>

              <br />
              <button type="submit" onClick={submitForm
               
              }>
                PUBLISH
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GigForm;