import React, { useContext, useEffect, useState } from "react";

import { Footer, AddPhoto } from "../../Components";
import GigModal from "../../Container/GigModal";

import useAuthListener from "../../hooks/use-auth-listener";

import "./profile.css";

import {descriptiondb,languagedb,skillsdb,educationdb} from "./DataHandeling";
import FpDb from "../../tools/FpDb";
import { db } from "../../lib/firebase.prod";


const Profile = () => {
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState({ language: "", languageLevel: "" });
  const [skills, setSkills] = useState({skillName:"",skillLevel:""});
  const [education,setEducation] = useState({collegename:'',title:'',major:'',graduationYear:''})
  
  // const [collegecountry, setCollegecountry] = useState("");

  // const [certificate, setCertificate] = useState("");
  // const [certified, setCertified] = useState("");
  // const [certificateyear, setCertificateyear] = useState("");

  const currentUser=useAuthListener().user;

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
  // FpDb();
  

  function printLanguageData(arr,eid){
    document.getElementById(eid).innerHTML+="";

      arr.forEach(obj=>{
        
        document.getElementById(eid).innerHTML+=obj['Language'];
        document.getElementById(eid).innerHTML+="\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        document.getElementById(eid).innerHTML+=obj['LanguageLevel'];
        document.getElementById(eid).innerHTML+="<br>"
       });
       document.getElementById(eid).innerHTML+="<br> ";

   }

   function printSkillsData(arr,eid){
    document.getElementById(eid).innerHTML+="";

      arr.forEach(obj=>{
        
        document.getElementById(eid).innerHTML+=obj['skillName'];
        document.getElementById(eid).innerHTML+="\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        document.getElementById(eid).innerHTML+=obj['skillLevel'];
        document.getElementById(eid).innerHTML+="<br>"
       });
       document.getElementById(eid).innerHTML+="<br> ";

   } 

   function printEducationData(arr,eid){
    document.getElementById(eid).innerHTML+="";

      arr.forEach(obj=>{
        
        document.getElementById(eid).innerHTML+=obj['collegename'];
        document.getElementById(eid).innerHTML+="\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        document.getElementById(eid).innerHTML+=obj['graduationyear'];
        document.getElementById(eid).innerHTML+="\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        document.getElementById(eid).innerHTML+=obj['major'];
        
        document.getElementById(eid).innerHTML+=obj['title'];
        document.getElementById(eid).innerHTML+="<br>"
       });
       document.getElementById(eid).innerHTML+="<br> ";

   } 
  // const { firebase } = useContext(FirebaseContext);
  const user = useAuthListener().user;

   
  
  const editDes = () => {
    setEditDesc(!editDescription);
      //console.log(user.uid)
    descriptiondb({uid:user.uid,description});
     console.log(user.uid);
  };

  useEffect(()=>{
    
      db.collection('freelancer-profile').doc(currentUser.uid).onSnapshot((doc)=>{
        console.log(doc.data());
      })
  })
   
  // var array;
  const asd=()=>{
    
    return(<p>qwert</p>)
  }

  return (
    <>
    <script src="./ProfilePrinting"></script>
      <div className='ProfileContainer'>
        <div className="as">
          <div className="PPContainer">
        <AddPhoto />
        {}
        <div className="profileForm">
          <div className="container">
            <div className="Header">
              <p className="heading">Description</p>
              
              <button className="editDescription" onClick={editDes }>
                {!editDescription?'Edit Description':''}
              </button>
            </div>
            <textarea
              disabled={!editDescription}
              className="descArea"
              placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."
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
                  onClick={async (e) => {

                    console.log("a");
                    setLanguage({ languageLevel: langLevel, language: selectLang });
                    setAddLang(!addLang);
                    console.log(language);
                    
                          var array;
                    await languagedb({uid:user.uid,language:selectLang,languageLevel:langLevel}).then((e)=>{
                       array=e;
                    });
                    console.log(array);
                   printLanguageData(array,'languages');
                  }}
                >
                  Add
                  
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {/*show languages */}
            {language.language ? <div id="languages"></div> : "Add language"}
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
                  onClick={async (e) => {
                    console.log("a");
                    setSkills({ skillLevel: skillLevel, skillName: skillName });
                    setAddSkill(!addSkill);
                    console.log(skills);
                    var array;
                    await skillsdb({uid:user.uid,skillName,skillLevel}).then(e=>
                      array=e);
                    printSkillsData(array,"skills");
                  }}
                >
                  Add
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {/*show skills */}
            {skills.skillName ? <div id='skills'></div> : "Add skill"}
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
                  onClick={async (e) => {
                    setEducation({collegename:collegename,graduationyear:graduationyear,title:title,major:major})
                    setAddEducation(!addEducation);
                    console.log(education);
                    var array;
                    await educationdb({uid:user.uid,collegename:collegename,
                      graduationyear:graduationyear,title:title,major:major}).then(e=>{
                        array=e;
                      });
                    printEducationData(array,"edu");

                  }}
                >
                  Add
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {/*show educations */}
            { education.title? <div id="edu"></div> : "Add education"}
          </div>


        </div>
        </div>
        <div className='GigFormButton'><GigModal/></div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Profile;
