import React, { useEffect, useState } from "react";
import { Footer,Card } from "../../Components";
import ListsModal from "../../Container/ListsModal";
// import GigCardsList from "../../Container/GigCardsList";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { db } from "../../lib/firebase.prod";
import useAuthListener from "../../hooks/use-auth-listener";
import { Redirect, useHistory } from "react-router";

const Lists = () => {
    const history=useHistory();
    const currentUser = useAuthListener().user;
    const [listname, setListName] = useState("");
    const [listData, setlistData] = useState({});
    const [isloading, setisloading] = useState(true);
    const [gigdata, setgigdata]=useState([]);
    const [showgigdata, setShowgigdata]=useState(false);

    const ref = db.collection('List').doc(currentUser.uid);
    const gigref=db.collection('Gig-Data')
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

    const setToggle =()=>{
        setShowgigdata(!showgigdata);
    }

    useEffect(() => {
        getData();
        setisloading(false);
        // getGigData()
    }, [])

   


    // useEffect(() => {},[gig])

    // const getGigData=async(uids)=>{
    //     console.log(uids)
    //     const uid='WTedB4smDdT22lSgV1yW1tzSQpu1';
    //     const arr=[];
    //     await  uids.map(async val=>{
    //          gigref.doc(val).get().then((doc)=>{
                
    //             arr.push(doc.data());  
    //           })  
    //     })
    //     console.log(arr);
    //     setgigdata(arr);
        
    //     return arr;
    
    // }

    if (isloading) {
        return (<p>loading.....</p>)
    }

    return (<>
        <Container>
            <Row>
                <Col>
                    <h1>My lists</h1>
                    <p>Organize your go-to freelancers and favorite services into custom lists you can easily access and share with your team.</p>
                </Col>
                <Col></Col>
                <Col>
                    <Button variant="link" type="submit" size="lg" width="1%">
                        <ListsModal />
                    </Button>
                </Col>
            </Row>
            
        </Container>

        <div>
            {
                Object.keys(listData).map(key => {

                    return (
                        <div>
                            <p onClick={async()=>{ 
                                console.log(listData[key])
                             history.push({pathname:'/lists/listItems', state:{uids:listData[key]}})
                                }}style={{ fontWeight: 'bolder' }}>{key}</p>

                              {/* {showgigdata?
                               <div className="CardsList">{
                                
                                gigdata.map((val, i) => (
                    
                                <Card
                                    key={i}
                                    imgsrc={val.PhotoURL}
                                    profileImg={val.PhotoURL}
                                    title={val.Title}
                                    sellername={val.Username}
                                    price={val.Price}
                                    uid={val.Uid}
                                  />
                    
                                ))}
                                
                    
                              </div>
                              :''} */}
                            <br />
                            <br/>
                        </div>

                    )


                })

            }
        </div>

        {/* <GigCardsList/> */}
        <Footer />

    </>);
};

export default Lists;
