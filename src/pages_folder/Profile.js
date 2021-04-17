import React, { useState } from "react";
import Profile_Photo from "../pages_folder/Profile/Profile_Photo";
import {Container, Row, Col, Button } from 'react-bootstrap';
import Footer from "../Components/Footer/Footer";

const Profile = () => {
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [skills, setSkills] = useState("");
  const [collegecountry, setCollegecountry] = useState("");
  const [collegename, setCollegename] = useState("");
  const [title, setTitle] = useState("");
  const [major, setMajor] = useState("");
  const [graduationyear, setGraduationyear] = useState("");
  const [certificate, setCertificate] = useState("");
  const [certified, setCertified] = useState("");
  const [certificateyear, setCertificateyear] = useState("");

  const [allEntry, setallEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { description: description, language: language, skills: skills, collegecountry: collegecountry, collegename: collegename, title: title, major: major, graduationyear: graduationyear, certificate:  certificate, certified: certified, certificateyear: certificateyear };
    setallEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <>
    <Container>
    <Row>
        <Col>
        <Profile_Photo/><br/>
    <div style={{border: "2px solid black"}}>
      <div className="container1_login">
      <div className=".form_login">
        <form action="" onSubmit={submitForm}>
          <div className="container_login">
              <label htmlFor="description">
                Description
              </label>
              <div style={{backgroundColor: "rgb(235, 232, 232)", padding: "20px"}}>
              <input style={{height: "100px"}}
                type="text" placeholder="Add description"
                name="description"
                id="description"
                autoComplete="off"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <hr/>

            <label htmlFor="language">Language</label>
            <div style={{backgroundColor: "rgb(235, 232, 232)", padding: "40px"}}>
            <input
                type="text" placeholder="Add Language"
                name="language"
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            <select id="country" name="country">
              <option value="language_level">Language Level</option>
              <option value="basic">Basic</option>
              <option value="controversial">Controversial</option>
              <option value="fluent">Fluent</option>
              <option value="native">Native</option>
            </select>
            </div>
            <hr/>

            <div>
            <p>Linked Accounts</p>
              <p><a href="#">+ Facebook</a></p>
              <p><a href="#">+ Google</a></p>
              <p><a href="#">+ Dribbble</a></p>
              <p><a href="#">+ Stack Overflow</a></p>
              <p><a href="#">+ GitHub</a></p>
              <p><a href="#">+ Vimeo</a></p>
              <p><a href="#">+ Twitter</a></p>
            </div><hr/>

            <label htmlFor="skills">Skills</label>
            <div style={{backgroundColor: "rgb(235, 232, 232)", padding: "40px"}}>
            <input
                type="text" placeholder="Add Skill(E.G. Voice Talent)"
                name="skills"
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            <select id="country" name="country">
              <option value="experience">Experience Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
            </div><hr/>

              <label style={{ color: "orange" }} htmlFor="education">
                Education
              </label>
              <div style={{backgroundColor: "rgb(235, 232, 232)", padding: "40px"}}>
              <input
                type="text" placeholder="Country of College"
                name="collegecountry"
                id="collegecountry"
                autoComplete="off"
                value={collegecountry}
                onChange={(e) => setCollegecountry(e.target.value)}
              />
              <input
                type="text" placeholder="College Name"
                name="collegename"
                id="collegename"
                autoComplete="off"
                value={collegename}
                onChange={(e) => setCollegename(e.target.value)}
              />
              <input
                type="text" placeholder="Title"
                name="title"
                id="title"
                autoComplete="off"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text" placeholder="Major"
                name="major"
                id="major"
                autoComplete="off"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
              <input
                type="text" placeholder="Year of graduation"
                name="graduationyear"
                id="graduationyear"
                autoComplete="off"
                value={graduationyear}
                onChange={(e) => setGraduationyear(e.target.value)}
              />
            </div><hr/>

            <label htmlFor="certification">Certification</label>
            <div style={{backgroundColor: "rgb(235, 232, 232)", padding: "40px"}}>
            <input
                type="text" placeholder="Certificate Or Award"
                name="certificate"
                id="certificate"
                value={certificate}
                onChange={(e) => setCertificate(e.target.value)}
              />
            <input
                type="text" placeholder="Certified From (E.G. Adobe)"
                name="certified"
                id="certified"
                value={certified}
                onChange={(e) => setCertified(e.target.value)}
              />
            <input
                type="text" placeholder="Year"
                name="certificateyear"
                id="certificateyear"
                autoComplete="off"
                value={certificateyear}
                onChange={(e) => setCertificateyear(e.target.value)}
              />
            </div><hr/>

            <br />
            <button type="submit">Add</button>
          </div>
        </form>
        </div>        
      </div>
      </div><br/>
      <div style={{border: "1px solid black", padding:"10px"}}>
      <h1>Your Profile:</h1>
          {
              allEntry.map((curElem) => {
                  return (
                      <div>
                          Description:
                          <p>{curElem.description}</p>
                          Language:
                          <p>{curElem.language}</p>
                          Skill:
                          <p>{curElem.skills}</p>
                          Education:
                          <p>{curElem.title} - {curElem.major}</p>
                          <p>{curElem.collegename}, {curElem.collegecountry}, Graduated {curElem.graduationyear}</p>
                          Certification:
                          <p>{curElem.certificate}</p>
                          <p>{curElem.certified} {curElem.certificateyear}</p>
                      </div>
                  )
              })
          }
      </div>
        </Col>

        <Col>
            
        </Col>

    </Row>
   </Container> 

   <Footer/>
    </>
  );
};

export default Profile;