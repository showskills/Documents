import React, { useState } from "react";
import useAuthListener from "../../hooks/use-auth-listener";
import { db } from "../../lib/firebase.prod";
// import "./Login.css";

const ListForm = () => {
  const [listname, setListName] = useState("");
  const [description, setDescription] = useState("");

  const [Entry, setEntry] = useState([]);
  const currentUser=useAuthListener().user;
  
  

  const submitForm = (e) => {
    e.preventDefault();
   
    const newEntry = { listname: listname, description: description };
    setEntry([newEntry]);
    var ref=db.collection('List').doc(currentUser.uid)

    ref.get().then(doc=>{
      if(doc.exists){
        ref.update({ 
          [listname]:[]
        })
      }
      else{
        ref.set({
          [listname]:[]
        })
      }
    })

    console.log(newEntry);

  };

  return (
    <>
      <div className="container1_login">
      <div className=".form_login">
        <form action="" onSubmit={submitForm}>
          <div className="container_login">
            <div>
              <label style={{ color: "orange" }} htmlFor="listname">
                List name
              </label>
              <input
                type="text" placeholder="My first list"
                name="listname"
                id="listname"
                autoComplete="off"
                value={listname}
                onChange={(e) => setListName(e.target.value)}
              />
            </div>

            <div>
              <label style={{ color: "orange" }} htmlFor="description">
                Description (Optional)
              </label>
              <input
                type="text" placeholder="Great designers for our marketing campaigns"
                name="description"
                id="description"
                autoComplete="off"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <br />
            <button type="submit">create List</button>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default ListForm;