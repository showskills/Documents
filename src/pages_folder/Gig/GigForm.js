import React, { useState } from "react";
// import "./Login.css";
import {Container, Row, Col } from 'react-bootstrap';
import Gig_Photo from "../Gig/Gig_Photo";

const GigForm = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [gigdesciption, setGigdesciption] = useState("");
  const [price, setPrice] = useState("Starting at Rs ");
  const [instructions, setInstructions] = useState("");

  const [allEntry, setallEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { title: title, tag: tag, gigdesciption: gigdesciption, price: price, instructions: instructions };
    setallEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  
  return (
    <>
      <div className="container1_login">
      <div className=".form_login">
        <form action="" onSubmit={submitForm}>
          <div className="container_login">
            <div>
              <label style={{ color: "orange" }} htmlFor="title">
                Gig Title
              </label>
              <input style={{height: "100px"}}
                type="text" placeholder="E.G.- I will do something I'm really good at"
                name="title"
                id="title"
                autoComplete="off"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div><br/>

            <label style={{ color: "orange" }} htmlFor="category">
                Category
              </label>
            <div>
            <select id="category" name="category">
              <option value="category">SELECT A CATEGORY</option>
              <option value="graphics">Graphics & Design</option>
              <option value="video">Video & Animation</option>
              <option value="music">Music & Audio</option>
              <option value="digital">Digital Marketing</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
            </div><br/>
            <div>
            <select id="subcategory" name="subcategory">
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
            </div><br/>

            <div>
              <label style={{ color: "orange" }} htmlFor="tag">
                Search Tags
              </label>
              <input
                type="text" placeholder=""
                name="tag"
                id="tag"
                autoComplete="off"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </div><br/>

            <div>
              <label style={{ color: "orange" }} htmlFor="gigdesciption">
                 Gig Description
              </label>
              <input style={{height: "100px"}}
                type="text" placeholder=""
                name="gigdesciption"
                id="gigdesciption"
                autoComplete="off"
                value={gigdesciption}
                onChange={(e) => setGigdesciption(e.target.value)}
              />
            </div><br/>

            <div>
              <label style={{ color: "orange" }} htmlFor="price">
                 Price
              </label>
              <input
                type="text" placeholder=""
                name="price"
                id="price"
                autoComplete="off"
                value= {price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div><br/>

            <label style={{ color: "orange" }} htmlFor="duration">
                Duration
              </label>
            <div>
            <select id="duration" name="duration">
              <option value="1">1 DAY</option>
              <option value="2">2-5 DAYS</option>
              <option value="6">6-10 DAYS</option>
              <option value="10">10-20 DAYS</option>
              <option value="month">1 MONTH</option>
            </select> To deliver
            </div><br/>

            <div>
              <label style={{ color: "orange" }} htmlFor="imgscr">
                 GIG PHOTO
              </label>
              <Gig_Photo/>
            </div><br/>

            <div>
              <label style={{ color: "orange" }} htmlFor="instructions">
                 INSTRUCTIONS FOR BUYER
              </label>
              <input style={{height: "100px"}}
                type="text" placeholder=""
                name="instructions"
                id="instructions"
                autoComplete="off"
                value= {instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>

            <br />
            <button type="submit">PUBLISH</button>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default GigForm;