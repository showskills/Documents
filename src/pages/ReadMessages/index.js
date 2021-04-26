import './ReadMessages.css';
import { db, storage } from '../../lib/firebase.prod';
import useAuthListener from "../../hooks/use-auth-listener";
import { useEffect, useState } from 'react';

const ReadMessages = () => {

    const currentUser = useAuthListener().user;
    const [fileurls, setfileurls] = useState([]);
    const [numberOfMessages, setNumber] = useState(0);
    const [allData, setallData] = useState([]);

    const [isloading, setisloading] = useState(true);

    const newMessages = async () => {

        var docRef = db.collection('messages').doc(currentUser.uid);
        await docRef.get().then(
            async (doc) => {
                const data = doc.data();
                console.log(data)
                const messagesArray = data.Messages;
                console.log(messagesArray)
                var n = messagesArray.length, i;
                setallData(messagesArray);
                setNumber(n);

                for (i = 0; i < n; i++) {

                    await filesAttached(messagesArray[n - 1 - i].FromUID, messagesArray[n - 1 - i].ProjectId);
                }
                console.log('-------------------');
                setTimeout(() => {
                    setisloading(false);
                }, 500)


            })

    };


    const filesAttached = async (sender, projectid) => {
        console.log(projectid);
        var storageRef = storage.ref(`messages/${currentUser.uid}/${sender}/${projectid}`);
        await storageRef.listAll().then(res => {
            var array = [];
            res.items.forEach(async (fileRef) => {
                await fileRef.getDownloadURL()
                    .then((url) => {
                        array.push(url);
                    })
            })
            var x = fileurls;
            x.push(array);
            setfileurls(x);
            console.log(array)
        })

    }


    useEffect(() => {
        newMessages();
    }, [])
    
    return (
        <>
            <div>
                <h className="MessagesHeader">
                <h3 className="messagesHeading"> My  Messages</h3> <br />
                <img  className="headerImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5-ACdx9CAJYIT4x86KYaEzE1wJfsKBBv_g&usqp=CAU" alt="Notifications"/>
                </h>
                <hr/>
                {allData ? [...Array(numberOfMessages)].map((e, i) =>
                    <h className="printMessages">
                        <h id="subbox1">
                            <span>{allData[i].Time} </span>
                            <span>{allData[i].Date}</span>
                        </h>
                        <span> <em>From:</em> &nbsp; {allData[i].FromUID}</span>
                        <span><em>Message:</em> &nbsp; {allData[i].Message}</span>
                        <span><em>Files Attached: </em></span>
                        {!isloading ? fileurls[i] ? fileurls[i][1] ?
                            <div>
                                {fileurls[i].map((val, key) => {
                                    return (
                                        <div>
                                            <a href={fileurls[i][key]}>file {key+1} </a>
                                            <br />
                                        </div>
                                    )
                                })}
                            </div>
                            : <a href={fileurls[i][0]}>file 1</a> : '' : ''}
                        <br />
                    </h>
                )
                    : ''}
            </div>
        </>
    )
}

export default ReadMessages;