import './ReadMessages.css';
import { db, storage } from '../../lib/firebase.prod';
import useAuthListener from "../../hooks/use-auth-listener";
import { useEffect, useState } from 'react';
import DataHandeling from '../../Components/MessageForm/DataHandeling';
import { UpdateData } from './DataUpdateDelete';
import { DeleteData } from './DataUpdateDelete';
import { ActiveProjectsDataUpdate } from '../UserProjects/DataHandeling';
import { useHistory } from 'react-router';

const ReadMessages = () => {

    const currentUser = useAuthListener().user;
    const [fileurls, setfileurls] = useState([]);
    // const [numberOfMessages, setNumber] = useState(0);
    const [allData, setallData] = useState([]);
    const [paymentStatus, setPaymentStatus] = useState([]);

    const [isloading, setisloading] = useState(true);
    const [toogle, setToogling] = useState(false);

    const history = useHistory();


    const newMessages = async () => {

        var docRef = db.collection('messages').doc(currentUser.uid);
        await docRef.get().then(
            async (doc) => {
                const data = doc.data();
                // console.log(data)
                const messagesArray = data.Messages;
                // console.log(messagesArray)
                var n = messagesArray? messagesArray.length:0;
                var i;

              messagesArray && setallData(messagesArray.reverse());
                const apiCalls = [];
               messagesArray && messagesArray.forEach((message) => {
                    apiCalls.push(db.collection('Projects').doc(message.ProjectId).get());
                })
                const paymentsDataPromise = await Promise.all(apiCalls);
                const paymentsData = paymentsDataPromise.map((payment) => {
                    return payment.data();
                })
                setPaymentStatus(paymentsData);
                // setNumber(n);

                for (i = 0; i < n; i++) {

                    await filesAttached(messagesArray[i].FromUID, messagesArray[i].ProjectId);
                }
                console.log('-------------------');


                setTimeout(() => {
                    setisloading(false);
                }, 500)

            })

    };


    const filesAttached = async (sender, projectid) => {
        // console.log(projectid);
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
            // array?console.log('not working'):console.log('workigg')
            setfileurls(x);
            // console.log(array)
        })

    }



    const sendMessage = async (status, senderId, projectTitle, projectid) => {
        var newDate = new Date();
        const date = (newDate.toDateString());
        const time = (newDate.toTimeString());
        var message;
        if (status === 'accepted')
            message = `Your request for project ${projectTitle} has been accepted `;
        else
            message = `Sorry to say , but your request for project ${projectTitle}
         has not been accepted . \n Seems like freelancer is busy with
        some other projects .You may contact other freelancers with similar profile`;


        const newEntry = {
            message: message, ProjectTitle: projectTitle, recipient: senderId,
            sender: "showSkills", date: date, time: time, projectid: projectid
        };
        console.log(newEntry)
        await DataHandeling(newEntry);


    }




    const projectConfirmed = async ({ senderID, projectid, projectTitle, MessageNumber }) => {

        const ref = db.collection('Projects').doc(projectid);
        await ref.set({
            freelancerID: currentUser.uid,
            recruiterID: senderID,
            status: 'active',
            projectName: projectTitle,
            RecruiterReviewAdded: "No",
            Payment: ""

        });

        await sendMessage("accepted", senderID, projectTitle, projectid);
        var array = allData;
        array[MessageNumber].Response = 'Accepted';
        console.log(array)

        // setTimeout(async () => {
        //     await setToogling(!toogle);
        //     await setallData(array);
        // }, 200)
        console.log(allData);

        await UpdateData({ sender: senderID, recipient: currentUser.uid, projectid });
        await ActiveProjectsDataUpdate({
            freelancerid: currentUser.uid, recruiterid: senderID,
            projectid: projectid
        });
       newMessages();

    }



    const projectRejected = async ({ senderID, projectid, projectTitle }) => {

        await sendMessage("rejected", senderID, projectTitle, projectid);

        var newdata = await DeleteData({ sender: senderID, recipient: currentUser.uid, projectid });


        /*  setTimeout(async()=>{
                  setToogling(!toogle);
                  setallData(newdata);
                     },500) ;
               console.log(allData)
                    this should have solved the refresh problem,but hadnt,
                    not updating allData even after setallData
          */
                    newMessages();
    }




    useEffect(() => {
        newMessages();
    }, [])



    const payment = async (Puid) => {
        console.log(Puid);
        var uid;
        var price;
        await db.collection('Projects').doc(Puid).get().then(doc => {
            uid = doc.data().freelancerID;
        })
        console.log(uid)
        await db.collection('Gig-Data').doc(uid).get().then(doc => {
            price = doc.data().Price;
        })
        console.log(price)
        history.push({ pathname: '/payment/' + currentUser.uid, state: { uid: uid, amount: price, orderId: Puid } })
    }


    const getPaymenStatus = async (Pid) => {
        const doc = await db.collection('Projects').doc(Pid).get();
        return doc.data().Payment === 'No'

    }


    return (
        <>
            <div>
                <h className="MessagesHeader">
                    <h3 className="messagesHeading"> My  Messages</h3> <br />
                    <img className="headerImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5-ACdx9CAJYIT4x86KYaEzE1wJfsKBBv_g&usqp=CAU" alt="Notifications" />
                </h>
                <hr />
                {allData ? [...Array(allData.length)].map((e, i) =>

                    <h className="printMessages">

                        <h id="subbox1">
                            <span>{allData[i].Time} </span>
                            <span>{allData[i].Date}</span>
                        </h>
                        <span> <em>From:</em> &nbsp; {allData[i].FromUID}</span>
                        <span><em>Message:</em> &nbsp; {allData[i].Message}</span>
                        <span><em>Files Attached: </em></span>
                        {!isloading ? fileurls[i][0] !== [] ? fileurls[i][1] !== [] ?
                            <div>
                                {fileurls[i].map((val, key) => {
                                    return (
                                        <div>
                                            <a href={fileurls[i][key]}>file {key + 1} </a>
                                            <br />
                                        </div>
                                    )
                                })}
                            </div>
                            : <a href={fileurls[i][0]}>file 1</a> : <p>'None' </p> : ''}

                        {console.log("pstatus: ", paymentStatus[i], paymentStatus[i]?.Payment === "")}
                        {
                            allData[i].Message.startsWith('Your request for project') &&
                            paymentStatus[i] && !paymentStatus[i].Payment &&
                            <button
                                onClick={() => {
                                    payment(allData[i].ProjectId);

                                }}
                            >Continue to payment
                            </button>
                        }
                        <br />

                        {allData[i].FromUID !== 'showSkills' ?
                            <p>
                                {allData[i].Response === 'Rejected' ?
                                    <p className="button-box">
                                        <button className="message-button"
                                            onClick={() =>
                                                projectConfirmed({
                                                    senderID: allData[i].FromUID,
                                                    projectid: allData[i].ProjectId,
                                                    projectTitle: allData[i].ProjectTitle,
                                                    MessageNumber: i
                                                })}>
                                            Confirm Order
                    </button>

                                        <button className="message-button"
                                            onClick={() => projectRejected({
                                                senderID: allData[i].FromUID,
                                                projectid: allData[i].ProjectId,
                                                projectTitle: allData[i].ProjectTitle
                                            })}>
                                            Not Intersted
                    </button>
                                    </p>

                                    : 'You accepted this project'}
                            </p>
                            : ''}

                    </h>

                )
                    : ''}
            </div>
        </>
    );
}

export default ReadMessages;