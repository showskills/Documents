import React, { useEffect, useState } from "react";
import { Footer} from "../../Components";
import { db } from "../../lib/firebase.prod";
import useAuthListener from "../../hooks/use-auth-listener";
import { useHistory } from "react-router";
import firebase from 'firebase/app'
import './Lists.css'

const Lists = () => {
    const history = useHistory();
    const currentUser = useAuthListener().user;
    const [addlist, setaddList] = useState(false);
    const [listData, setlistData] = useState({});
    const [isloading, setisloading] = useState(true);
    const [newlistname,setnewlistname] = useState('');


    const ref = db.collection('List').doc(currentUser.uid);
    // const gigref=db.collection('Gig-Data')
    const getData = async () => {
        await ref.get().then(doc => {
            if (doc.exists) {
                setlistData(doc.data());
                console.log(Object.keys(doc.data()))
                // console.log(doc.data()['react'])
                // setListName(Object.keys(doc.data()))
            }
        })
    }


    const deleteValue = async (key) => {
        await ref.update({
            [key]: firebase.firestore.FieldValue.delete()
        })
        setTimeout(() => {
            getData();
          },500)
    }


    useEffect(() => {
        getData();
        setisloading(false);
        
    }, [])

  const addNewList=()=>{
    ref.get().then(doc=>{
        if(doc.exists){
          ref.update({ 
            [newlistname]:[]
          })
        }
        else{
          ref.set({
            [newlistname]:[]
          })
        }
      })
      setTimeout(() => {
        getData();
      },500)
      
  }


    if (isloading) {
        return (<p>loading.....</p>)
    }

    return (<>
        <div className="ListContainer">

            <div className='ListIntroContainer'>
                <h1>My lists</h1>
                <div clasName="ListIntroText">Organize your go-to freelancers and favorite services into custom lists you can easily access and share with your team.</div>

            </div>

            <div className="ListNamesContainer">
                {
                    Object.keys(listData).map(key => {

                        return (
                            <div className="ListNames">
                                <div className="ListValue" onClick={async () => {
                                    console.log(listData[key])
                                    history.push({ pathname: '/lists/listItems', state: { uids: listData[key] } })
                                }} style={{ fontWeight: 'bolder' }}>{key}</div>

                                <button onClick={async () => { await deleteValue(key) }} className="deleteButton"><span className="material-icons">delete</span></button>
                                <br />
                                <br />
                            </div>

                        )
                    })
                }
            </div>
            {addlist ? <div className="InputList">
                <input type="text"  onChange={(e)=>{setnewlistname(e.target.value)}} />
                <button onClick={()=>{addNewList();setaddList(false)}}>Add</button>
            </div> : ''}
          <button onClick={() => { setaddList(!addlist) }} className="createButton">
                {!addlist?'Create New List':'Cancel'}
              </button>
        </div>
        {/* <GigCardsList/> */}
        <Footer />

    </>);
};

export default Lists;
