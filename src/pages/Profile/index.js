import React, { useContext, useState } from "react";

import { Footer, AddPhoto } from "../../Components";
import GigModal from "../../Container/GigModal";

import useAuthListener from "../../hooks/use-auth-listener";

import "./profile.css";

const Profile = () => {
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState({ language: "", languageLevel: "" });
  const [skills, setSkills] = useState({skillName:"",skillLevel:""});
  const [education,setEducation] = useState({collegename:'',title:'',major:'',graduationYear:''})

  // const [collegecountry, setCollegecountry] = useState("");

  // const [certificate, setCertificate] = useState("");
  // const [certified, setCertified] = useState("");
  // const [certificateyear, setCertificateyear] = useState("");


  const [editDescription, setEditDesc] = useState(false);

  const [addLang, setAddLang] = useState(false);
  const [selectLang, setSelectLang] = useState("");
  const [langLevel, setLangLevel] = useState("");

  const [addSkill, setAddSkill] = useState(false);
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  const [addEducation, setAddEducation] = useState(false);
  const [collegename, setCollegename] = useState("");
  const [title, setTitle] = useState("");
  const [major, setMajor] = useState("");
  const [graduationyear, setGraduationyear] = useState("");


  // const { firebase } = useContext(FirebaseContext);
  const user = useAuthListener().user;



  const editDes = () => {
    setEditDesc(!editDescription);
  };


  return (
    <>
      <div>
        <AddPhoto />
        <div className="profileForm">
          <div className="container">
            <div className="Header">
              <p className="heading">Description</p>
              <button className="editDescription" onClick={editDes}>
                {!editDescription?'Edit Description':''}
              </button>
            </div>
            <textarea
              disabled={!editDescription}
              className="descArea"
              placeholder="Please tell us about any hobbies,
              additional expertise, or anything else you’d like to add."
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            ></textarea>
            {editDescription ? <button onClick={editDes}>Update</button> : <p></p>}
          </div>

          {/* language */}
          <div className="container">
            <div className="Header">
              <p className="heading">Languages</p>
              <button
                className="editDescription"
                onClick={(e) => {
                  setAddLang(!addLang);
                }}
              >
                {!addLang ? "Add new" : "cancel"}
              </button>
            </div>

            {/* add language form*/}
            {addLang ? (
              <div className="headerContainer">
                <input
                  className="inputField"
                  type="text"
                  onChange={(e) => {
                    setLanguage({language:'',languageLevel:''})
                    setLangLevel('')
                    setSelectLang('')
                    setSelectLang(e.target.value);
                  }}
                />
                <select
                  className="inputField"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setLangLevel(e.target.value);
                  }}
                >
                  <option value="0" class="hidden">
                    Language Level
                  </option>
                  <option value="basic">Basic</option>
                  <option value="conversational">Conversational</option>
                  <option value="fluent">Fluent</option>
                  <option value="native_or_bilingual">Native/Bilingual</option>
                </select>

                {/*add button */}
                <button className='addButton'
                  onClick={(e) => {
                    console.log("a");
                    setLanguage({ languageLevel: langLevel, language: selectLang});
                    setAddLang(!addLang);
                    console.log(language);
                  }}
                >
                  Add
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {/*show languages */}
            {language.language ? language.language : "Add language"}
          </div>

          {/* skills */}
          <div className="container">
            <div className="Header">
              <p className="heading">Skills</p>
              <button
                className="editDescription"
                onClick={(e) => {
                  setSkills({ skillLevel:'',skillName:'',})
                  setSkillLevel('')
                  setSkillName('')
                  setAddSkill(!addSkill);
                }}
              >
                {!addSkill ? "Add new" : "cancel"}
              </button>
            </div>

            {/* add skills form*/}
            {addSkill ? (
              <div className="headerContainer">
                <input
                  className="inputField"
                  type="text"
                  onChange={(e) => {
                    setSkillName(e.target.value);
                  }}
                />
                <select
                  className="inputField"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setSkillLevel(e.target.value);
                  }}
                >
                  <option value="0" class="hidden">
                    Skill Level
                  </option>
                  <option value="basic">Beginner</option>
                  <option value="conversational">Intermediate</option>
                  <option value="fluent">Expert</option>
                </select>

                {/*add button */}
                <button className='addButton'
                  onClick={(e) => {
                    console.log("a");
                    setSkills({ skillLevel: skillLevel, skillName: skillName });
                    setAddSkill(!addSkill);
                    console.log(skills);
                  }}
                >
                  Add
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {/*show skills */}
            {skills.skillName ? skills.skillName : "Add skill"}
          </div>




          {/* education */}
          <div className="container">
            <div className="Header">
              <p className="heading">Educations</p>
              <button
                className="editDescription"
                onClick={(e) => {
                  setEducation({collegename:'',title:'',major:'',graduationYear:''})
                  setTitle('');setCollegename('');setMajor('');setGraduationyear('');
                  setAddEducation(!addEducation);
                  
                }}
              >
                {!addEducation ? "Add new" : "cancel"}
              </button>
            </div>

            {/* add education form*/}
            {addEducation ? (
              <div className="headerContainer">
                <input
                  className="inputField"
                  type="text"
                  placeholder='College Name'
                  onChange={(e) => {
                    setCollegename(e.target.value);
                  }}
                />

                <input
                  className="inputField"
                  type="text"
                  placeholder='Title eg. B.Tech'
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />

                <input
                  className="inputField"
                  type="text"
                  placeholder='Major eg.Computer Science'
                  onChange={(e) => {
                    setMajor(e.target.value);
                  }}
                />
                <input
                  className="inputField"
                  type="text"
                  placeholder='Graduation Year'
                  onChange={(e) => {
                    setGraduationyear(e.target.value);
                  }}
                />


                {/*add button */}
                <button
                  onClick={(e) => {
                    setEducation({collegename:collegename,graduationyear:graduationyear,title:title,major:major})
                    setAddEducation(!addEducation);
                    console.log(education)
                  }}
                >
                  Add
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {/*show educations */}
            { education.title? education.title : "Add education"}
          </div>


        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Profile;
