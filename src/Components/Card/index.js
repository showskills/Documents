import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import useAuthListener from "../../hooks/use-auth-listener";
import { db } from "../../lib/firebase.prod";
import './Card.css';
import firebase from 'firebase/app'
import { useHistory } from "react-router";


function Card(props) {

const currentUser=useAuthListener().user;
const [listNames,setListName] = useState([])

const history=useHistory();
  
useEffect(() => {
 
},[])

const getLN =async()=>{
  await db.collection('List').doc(currentUser.uid).get().then((doc)=>{
    if(doc.exists){
      setListName(Object.keys(doc.data()));
        console.log(Object.keys(doc.data()))
      }
  
});
}

const AddList =(uid,listname)=>{
console.log(uid);

console.log(listNames)
db.collection('List').doc(currentUser.uid).update({
[listname]:firebase.firestore.FieldValue.arrayUnion(uid)
})


}





  return (
    <>
      <div className="card" onClick={()=>{
        history.push({pathname:'/ProfileDescription/'+ props.uid,state:{uid:props.uid}})
      }}>
        
          <div style={{height:'50%'}}><img  src={props.imgsrc} className="card-img-top" alt="..." height="100%" /></div>
          

          <div className="card-body">
            <div className="card-userinfo">
              <img class='card-profileImg' src={props.profileImg} alt='profile' />
              <p className="card-username">{props.sellername}</p>
            </div>
            <h6 className="card-title">{props.title}</h6>

            <div className="review"><span style={{ color: '#FFBE5B', marginRight: '1%', marginLeft: '-3px' }} className="material-icons">star</span><p style={{ color: '#888', margin: '0', fontWeight: 'bold' }}>4.6(73)</p></div>
            

            <div className="inlinefooter">
              <div className="PriceTag">
                <p style={{ marginRight: '7px' }}>Price</p>
                <i class="fas fa-rupee-sign" style={{ marginRight: '1px', fontSize: '14px' }}></i>
                <p>{props.price}</p>
              </div>

              <Dropdown  onClick={async()=>{ await getLN()}}
               className="addList"><Dropdown.Toggle  variant="" className="listIcon">
                <span class="material-icons-outlined md-48">playlist_add</span>
                </Dropdown.Toggle>
                <Dropdown.Menu >
                {
                  listNames.map((item,i)=>{
                    return(
                    <Dropdown.Item onClick={()=>{AddList(props.uid,item)}} key={i}>{item}</Dropdown.Item>)
                  })
                }
              <Dropdown.Item style={{display: 'flex',alignItems:'center',}} onClick={()=>{history.push('/lists')}}><span style={{fontSize:'20px'}} className="material-icons">add</span>New list</Dropdown.Item>
          </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* <a href= {props.link} target= "_blank">
                           <button> Watch now </button>
                        </a> */}

            
          </div>
        
      </div>
    </>
  );
}

export default Card;