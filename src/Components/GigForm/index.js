import React, { useState, useEffect } from "react";
import AddGigPhotos from "../AddGigPhotos";
import './GigForm.css';
import DataHandeling from './DataHandeling';
import useAuthListener from '../../hooks/use-auth-listener';
import { db, storage } from '../../lib/firebase.prod';



const GigForm = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState([]);
  const [gigdesciption, setGigdesciption] = useState("");
  const [price, setPrice] = useState(Number(1));
  console.log(typeof(price))
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [addTag, setAddTag] = useState(false);
  const[tagInput,setTagInput]=useState('');

  const submitForm = async (e) => {

    e.preventDefault();
    var URL;
    var downRef = storage.ref(`images/${currentUser.uid}/gigPhotos`);
    await downRef.getDownloadURL()
      .then(async (url) => {
        console.log(url);
        URL = url;
      }
      ).catch((e) => {
        console.log(e);
      });

      
      if(typeof(URL)==='undefined'){URL='images/user.jpg'}

   
    const newEntry = { uid: currentUser.uid,id:currentUser.uid,title: title, gigdesciption: gigdesciption, category: category, subCategory: subCategory, duration: duration, price: Number(price), instructions: instructions, gigPhotoUrl: URL,Tag:tag,Username:currentUser.displayName };



    await DataHandeling(newEntry);
  };

  const currentUser = useAuthListener().user;

  const check = () => {
    var docref = db.collection('Gig-Data').doc(currentUser.uid);
    console.log('aman');
    docref.get().then(doc => {
      if (doc.exists) {

        const data = doc.data();
        setTitle(data['Title'].valueOf());
        setGigdesciption(data['Description'].valueOf());
        setPrice(data['Price'].valueOf());
        setInstructions(data['Instructions'].valueOf());
        setCategory(data['Category'].valueOf());
        setSubCategory(data['SubCategory'].valueOf());
        setDuration(data['Duration'].valueOf());
        setTag(data['Tag'].valueOf());

      }
    })

  }
  useEffect(() => {
    check();
  }, [])
  return (
    <> <div></div>
      <div className="container1_login">
        <div className=".form_login">
          <div action="" >
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
                <select className="gigDropdown" id="category" name="category" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                  <option style={{ padding: '10px', margin: '10px' }} value="category">SELECT A CATEGORY</option>
                  <option value="Web Development" name='Web Development' >Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Programming Languages">Programming Languages</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Operating System">Operating System</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="Design Tools">Design Tools</option>
                  <option value="Database Design & Development">Database Design & Development</option>



                </select>
              </div><br />
              <div>
                <label htmlFor="subcategory">
                  Subcategory
              </label>
                <div>
                  <select className="gigDropdown" id="subcategory" name="subcategory" value={subCategory} onChange={(e) => { setSubCategory(e.target.value) }}>
                    <option value="subcategory">SELECT A SUBCATEGORY</option>
                    <option value="HTML & CSS">HTML & CSS</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Vue JS">Vue JS</option>
                    <option value="Express.js">Express.js</option>
                    <option value="Node.js">Node.js</option>
                    <option value="PHP">PHP</option>
                    <option value="Angular">Angular</option>
                    <option value="React">React</option>
                    <option value="Django">Django</option>
                    <option value="Flutter">Flutter</option>
                    <option value="Android Development">Android Development</option>
                    <option value="iOS Development">iOS Development</option>
                    <option value="React Native">React Native</option>
                    <option value="Dart">Dart</option>
                    <option value="Swift">Swift</option>
                    <option value="Kotlin">Kotlin</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                    <option value="C++">C++</option>
                    <option value="Go">Go</option>
                    <option value="Statistics">Statistics</option>
                    <option value="Linear Algebra">Linear Algebra</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Deep Learning">Deep Learning</option>
                    <option value="Data Visualization">Data Visualization</option>
                    <option value="TensorFlow">TensorFlow</option>
                    <option value="Data Mining">Data Mining</option>
                    <option value="Linux">Linux</option>
                    <option value="PowerShell">PowerShell</option>
                    <option value="Windows Server">Windows Server</option>
                    <option value="VMware Vspere">VMware Vspere</option>
                    <option value="Shell Scripting">Shell Scripting</option>
                    <option value="macOS">macOS</option>
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="Ethereum">Ethereum</option>
                    <option value="Algorithmic Trading">Algorithmic Trading</option>
                    <option value="Day Trading">Day Trading</option>
                    <option value="Photoshop">Photoshop</option>
                    <option value="Adobe">Adobe</option>
                    <option value="AutoCAD">AutoCAD</option>
                    <option value="SOLIDWORKS">SOLIDWORKS</option>
                    <option value="After Effects">After Effects</option>
                    <option value="SQL">SQL</option>
                    <option value="MySQL">MySQL</option>
                    <option value="Apache Kafka">Apache Kafka</option>
                    <option value="MongoDB">MongoDB</option>
                    <option value="SQL Server">SQL Server</option>
                    <option value="Database Management">Database Management</option>
                    

                  </select>
                </div>
              </div><br />

              {/* Tag */}

              <div>
                <div className='Header'>
                <label style={{minWidth:'100px'}} htmlFor="tag">
                  Search Tags
                </label>
                <button className='editTagButton' onClick={()=>{setAddTag(!addTag)}}>{!addTag?'Add Tags':'cancel'}</button>
                </div>
                {addTag ? <div>
                  <input className='gigInput'
                    type="text" placeholder=""
                    name="tag"
                    id="tag"
                    autoComplete="off"
                    // value={tag}
                    onChange={(e) => setTagInput(e.target.value)}
                  />
                  <button  onClick={()=>{setTag([...tag,tagInput]);console.log(tag); setAddTag(false)}}>Add</button>
                  </div> : ''}
               {tag.length?tag.map((val,i)=>{
                 return(
                   <div className="inlineShow">
                     <div key={i}>{val}</div>
                     <button className="deleteButton" onClick={()=>{console.log('a');setTag(tag.filter(e=> e!==val))}} ><span className="material-icons">delete</span></button> 

                   </div>
                 )
               }):<p style={{color:'#777',fontSize:'13px'}}>search tags will be used in searching your profile</p>}
              </div><br />


              {/* Description */}
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

              <div className='gigPriceInput'>
                <label htmlFor="price">
                  Price in INR
              </label>
                <input className='gigInput'
                  style={{height:'40px', padding:' 0px 6px'}}
                  type="number" placeholder="1000"
                  name="price"
                  id="price"
                  autoComplete="off"
                  min={1}
                  step={50}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div><br />

              <label htmlFor="duration">
                Duration
              </label>
              <div>
                <select className="gigDropdown" value={duration} style={{ height: '35px' }} id="duration" name="duration" onChange={(e) => { setDuration(e.target.value) }}>
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

                <AddGigPhotos />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default GigForm;


