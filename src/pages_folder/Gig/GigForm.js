import React, { useState } from "react";
// import "./Login.css";
import {Container, Row, Col } from 'react-bootstrap';

const GigForm = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  const [allEntry, setallEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { title: title, tag: tag };
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
                type="text" placeholder="I will do something I'm really good at"
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
            <select id="country" name="country">
              <option value="experience">SELECT A CATEGORY</option>
              <option value="beginner">Graphics & Design</option>
              <option value="intermediate">Video & Animation</option>
              <option value="expert">Music & Audio</option>
              <option value="expert">Digital Marketing</option>
              <option value="expert">Lifestyle</option>
            </select>
            </div><br/>
            <div>
            <select id="country" name="country">
              <option value="experience">SELECT A SUBCATEGORY</option>
              <option value="beginner">Photoshop Editing</option>
              <option value="intermediate">Architecture & Interior Design</option>
              <option value="expert">Business Cards & Stationery</option>
              <option value="beginner">Whiteboard & Animated Explainers</option>
              <option value="intermediate">Drone Videography</option>
              <option value="expert">Local Photography</option>
              <option value="beginner">Producers & Composers</option>
              <option value="intermediate">Remixing & Mashups</option>
              <option value="beginner">DJ Drops & Tags</option>
              <option value="expert">Search Engine Marketing (SEM)</option>
              <option value="intermediate">Search Engine Optimization (SEO)</option>
              <option value="expert">Text Message Marketing</option>
              <option value="beginner">Health, Nutrition & Fitness</option>
              <option value="intermediate">Fitness Lessons</option>
              <option value="expert">Greeting Crads & Videos</option>
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
            </div>

            <br />
            <button type="submit">Save & Continue</button>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default GigForm;