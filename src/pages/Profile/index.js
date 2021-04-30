import React, { useContext, useEffect, useState } from "react";

import { Footer, AddPhoto } from "../../Components";
import GigModal from "../../Container/GigModal";
import BankDetailsModal from '../../Container/BankDetailsModal';
import useAuthListener from "../../hooks/use-auth-listener";

import "./profile.css";

import {descriptiondb,languagedb,skillsdb,educationdb} from "./DataHandeling";
import FpDb from "../../tools/FpDb";
import { db } from "../../lib/firebase.prod";
import { FirebaseContext } from "../../context/firebase";
import firebase from'firebase/app';


const Profile = () => {
  // const {firebase}=useContext(FirebaseContext);
  
  const toi =1000; //timeout interval
  const [dba,setdba]=useState('null')
  const currentUser=useAuthListener().user;
  const [isLoading, setLoading] = useState(true);

  const loadData=async()=>{
    if(checkdb){
   await db.collection('freelancer-profile').doc(currentUser.uid).get().then((doc)=>{
      setdba(doc.data())
      setLoading(false)
      console.log('1')
      console.log(doc.data());
    })
  }}

  const checkdb=()=>{
     try{
      if(typeof(db.collection('freelancer-profile').doc(currentUser.uid))==='undefined')
      return false;
     }
     catch{return false;}
     return true;
  }
  
  // loadData();
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState({ language: "", languageLevel: "" });
  const [skills, setSkills] = useState({skillName:"",skillLevel:""});
  const [education,setEducation] = useState({collegename:'',title:'',major:'',graduationYear:''})
  
  // const [collegecountry, setCollegecountry] = useState("");

  // const [certificate, setCertificate] = useState("");
  // const [certified, setCertified] = useState("");
  // const [certificateyear, setCertificateyear] = useState("");
  
  const [err,seterr]= useState(false)
  
  const [editDescription, setEditDesc] = useState(false);

  const [addLang, setAddLang] = useState(false);
  const [selectLang, setSelectLang] = useState("");
  const [langLevel, setLangLevel] = useState("Basic");

  const [addSkill, setAddSkill] = useState(false);
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("Beginner");

  const [addEducation, setAddEducation] = useState(false);
  const [collegename, setCollegename] = useState("");
  const [title, setTitle] = useState("");
  const [major, setMajor] = useState("");
  const [graduationyear, setGraduationyear] = useState("");
  // FpDb();
  
  
  useEffect(()=>{
    loadData();
  },[]);

  const user = useAuthListener().user;
  
  
  const editDes = () => {
    setEditDesc(!editDescription);
    if(typeof(db.collection('freelancer-profile').doc(currentUser.uid))!=='undefined')
    setDescription(checkUnd(dba,'Description')?dba['Description'].valueOf():'')
    
    descriptiondb({uid:user.uid,description});
    setTimeout(() => { loadData(); }, toi);
  };
 
  // if (isLoading) {
  //   return <div className="App">Loading...</div>;
  // }

  const deleteItem=(field,value)=>{
  console.log('2');
  
   var ref= db.collection('freelancer-profile').doc(currentUser.uid);
   ref.update({
     [field]:firebase.firestore.FieldValue.arrayRemove(value)
   })
   setTimeout(() => { loadData(); }, toi);
   return;

  }

  const checkUnd=(e,v)=>{
  try{
    if(typeof(e[v])==='undefined'){return false;} 
  }
  catch{
   
     return false;
  }
 
  return true;
  }



  return (
    <>
    <script src="./ProfilePrinting"></script>
      <div className='ProfileContainer'>
        <div className="as">
          <div className="PPContainer">
        <AddPhoto />
        
        <div className="profileForm">
          <div className="container">
            <div className="Header">
              <p className="heading">Description</p>
              
              <button className="editButton" onClick={()=>{
                setEditDesc(!editDescription);
                setDescription(checkUnd(dba,'Description')?dba['Description'].valueOf():'')

              } }>
                {!editDescription?'Edit Description':'cancel'}
              </button>
            </div>
            {editDescription ?<textarea
              disabled={!editDescription}
              className="descArea"
              value={description}
              placeholder='Please tell us about any hobbies, additional expertise, or anyhting'
              onChange={(e) => {
                setDescription(e.target.value);
                
              }}
            
            ></textarea>:''}

            {editDescription ? <button onClick={editDes}>Update</button> : <p></p>}
            {!editDescription ?checkUnd(dba,'Description')?dba['Description']:'':''}
          </div>

          {/* language */}
          <div className="container">
            <div className="Header">
              <p className="heading">Languages</p>
              <button
                className="editButton"
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
                    setLangLevel('Basic')
                    setSelectLang('')
                    setSelectLang(e.target.value);
                  }}
                />
                {err?<div className='error'>fill the required value</div>:''}
                <select
                  className="inputField"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setLangLevel(e.target.value);
                    seterr(false);
                  }}
                >
                  <option value="0" class="hidden">
                    Language Level (default basic)
                  </option>
                  <option value="basic">Basic</option>
                  <option value="conversational">Conversational</option>
                  <option value="fluent">Fluent</option>
                  <option value="native_or_bilingual">Native/Bilingual</option>
                </select>

                {/*add button */}
                <button className='addButton'
                  onClick={async (e) => {
                    if(selectLang===''){seterr(!err);return}
                    setLanguage({ languageLevel: langLevel, language: selectLang });
                    setAddLang(!addLang);
                    await languagedb({uid:user.uid,language:selectLang,languageLevel:langLevel}).then((e)=>{
                       console.log(e)
                    });
                    setTimeout(() => { loadData(); }, toi);
             
                  }}
                >
                  Add
                  
                </button>
              </div>
            ) : (
              <div></div>
            )}
           {/*show language */}
            {checkUnd(dba,'Languages')? 
              <div>{dba['Languages'].map((item,i)=>{
              
              return <div key={i} class='inlineShow'>
              <p>{item.Language} - </p>
              <p className='SkillLevel'>{item.LanguageLevel}</p>
              <button className="deleteButton" onClick={()=>{deleteItem('Languages',item);}}><span className="material-icons">delete</span></button> 
              </div>
            })}</div>:''}
            
          </div>

          {/* skills */}
          <div className="container">
            <div className="Header">
              <p className="heading">Skills</p>
              <button
                className="editButton"
                onClick={(e) => {
                  setSkills({ skillLevel:'',skillName:'',})
                  setSkillLevel('Beginner')
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
                    seterr(false);
                  }}
                />
                 {err?<div className='error'>fill the required value</div>:''}
                <select
                  className="inputField"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setSkillLevel(e.target.value);
                    seterr(false);
                  }}
                >
                  <option value="0" class="hidden">
                    Skill Level  (default Beginner)
                  </option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>

                {/*add button */}
                <button className='addButton'
                  onClick={async (e) => {
                    if(skillName===''){seterr(!err);return}
                    setSkills({ skillLevel: skillLevel, skillName: skillName });
                    setAddSkill(!addSkill);
                    console.log(skills);
                    await skillsdb({uid:user.uid,skillName,skillLevel}).then(e=>
                      console.log(e));
                      setTimeout(() => { loadData(); }, toi);
                  }}
                >
                  Add
                </button>
              </div>
            ) : (
              <div></div>
            )}

            {/*show skills */}
            {checkUnd(dba,'Skills')? 
              <div>{dba['Skills'].map((item,i)=>{
              return <div key={i} class='inlineShow'>
              <p>{item.skillName} - </p>
              <p  className='SkillLevel'>{item.skillLevel}</p>
              <button className="deleteButton" onClick={()=>{deleteItem('Skills',item);}}><span className="material-icons">delete</span></button> 
              </div>
            })}</div>:''}

            {/* {skills.skillName ? <div id='skills'></div> : "Add skill"} */}
          </div>

          {/* education */}
          <div className="container">
            <div className="Header">
              <p className="heading">Educations</p>
              <button
                className="editButton"
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
                    seterr(false);
                  }}
                />

                <input
                  className="inputField"
                  type="text"
                  placeholder='Title eg. B.Tech'
                  onChange={(e) => {
                    setTitle(e.target.value);
                    seterr(false);
                  }}
                />

                <input
                  className="inputField"
                  type="text"
                  placeholder='Major eg.Computer Science'
                  onChange={(e) => {
                    setMajor(e.target.value);
                    seterr(false);
                  }}
                />
                <input
                  className="inputField"
                  type="text"
                  placeholder='Graduation Year'
                  onChange={(e) => {
                    setGraduationyear(e.target.value);
                    seterr(false);
                  }}
                />
                {err?<div className='error'>fill the required value</div>:''}

                {/*add button */}
                <button
                  onClick={async (e) => {
                    if(collegename==='' || title ==='' || major==='' || graduationyear===''){seterr(!err);return;}

                    setEducation({collegename:collegename,graduationyear:graduationyear,title:title,major:major})
                    setAddEducation(!addEducation);
                    console.log(education);
                    
                    await educationdb({uid:user.uid,collegename:collegename,
                      graduationyear:graduationyear,title:title,major:major}).then(e=>{
                        console.log(e)
                      });
                      setTimeout(() => { loadData(); }, toi);
                  }}
                >
                  Add
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {/*show educations */}
            {checkUnd(dba,'Education')? 
              <div>{dba['Education'].map((item,i)=>{
              
              return <div key={i} > <div  class='inlineShow'>
              <p style={{marginBottom:'0px'}}>{item.title} - </p>
              <p style={{marginBottom:'0px'}}>{item.major}</p>
              <button className="deleteButton"onClick={()=>{deleteItem('Education',item);}}><span className="material-icons">delete</span></button> 
              </div>
              <div  class='inlineShow'>
              <p  className='SkillLevel'>{item.collegename}{`, Graduated - ${item.graduationyear}`} </p>
              </div>
              
              </div>
              
            })}</div>:''}
          </div>

        </div>
        </div>
        <p className="UserDetails56">
        <div className='GigFormButton'><GigModal/></div><br/>
        <div className='GigFormButton'><BankDetailsModal/></div>
        </p>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Profile;
