import useAuthListener from "../../hooks/use-auth-listener";
import { useEffect, useState } from 'react';

import { db } from '../../lib/firebase.prod';
import Firebase from 'firebase/app';
import DataHandeling from "../../Components/MessageForm/DataHandeling";
// import { Button, Toast } from "react-bootstrap";
// import { set } from "react-hook-form";


const UserProjects = () => {
    const currentUser = useAuthListener().user;
    const [Fpid, setFpid] = useState();
    const [Rpid, setRpid] = useState();
    const [fpStatus, setfpStatus] = useState();
    const [RPStatus, setRPStatus] = useState();
    const [FprojectDetails, setFprojectDetails] = useState();
    const [RprojectDetails, setRprojectDetails] = useState();
    const [FcurrentStatus, setFcurrentStatus] = useState();
    const [RcurrentStatus, setRcurrentStatus] = useState();

    

    const projectIDS = async () => {
        let fprojects, rprojects;
        let FPIdarr = [];
        let FStatusarr = [];
        let RStatusarr = [];
        let RPIdarr = [];

        await db.collection('ActiveProjects').doc(currentUser.uid).get().then((doc) => {
            console.log(doc.data());
            fprojects = doc.data()['FreelancingProjects'];
            rprojects = doc.data()['RecruitingProjects'];

            fprojects.map((val) => {
                FPIdarr.push(val.ProjectId);
                FStatusarr.push(val.ProjectStatus)
            })

            rprojects.map((val) => {
                RPIdarr.push(val.ProjectId);
                RStatusarr.push(val.ProjectStatus)
            })
            // console.log(pidarr);
            setFpid(FPIdarr);
            setRpid(RPIdarr);
            setfpStatus(FStatusarr);
            setRPStatus(RStatusarr);
        });

        let temp = [];
        await FPIdarr.forEach(async (val) => {
            await db.collection('Projects').doc(val).get().then(item => {
                //   console.log(item.data());
                temp.push(item.data());
            })
        });
        setTimeout(() => { setFprojectDetails(temp); }, 1000)

        let temp1 = [];
        await RPIdarr.forEach(async (val) => {
            await db.collection('Projects').doc(val).get().then(item => {
                //   console.log(item.data());
                temp1.push(item.data());
            })
        });

        setTimeout(() => { setRprojectDetails(temp1); }, 1000)
    }


    useEffect(() => {
        setTimeout(() => {
            projectIDS();
        }, 1000)

    }, [FcurrentStatus, RcurrentStatus])

    useEffect(() => {
        projectIDS();
    }, [])


    const updateFProjectStatus = async (RecruiterId,freelancerId,projectName, ProjectId, prevstatus, currStatus) => {
        await db.collection('ActiveProjects').doc(currentUser.uid).update({
            "FreelancingProjects": Firebase.firestore.FieldValue.arrayRemove({ ProjectId: ProjectId, ProjectStatus: prevstatus }),
        });


        await db.collection('ActiveProjects').doc(RecruiterId).get().then(docs => {
            let temp = docs.data()['RecruitingProjects'];
            temp.map(async (item) => {
                if (item.ProjectId === ProjectId) {
                    if (item.ProjectStatus === currStatus) {
                        var x;
                        if (currStatus === 'Done') { x = 'Completed' }
                        if (currStatus === 'Abandoned') { x = 'Aborted' }
                        await db.collection('ActiveProjects').doc(currentUser.uid).update({
                            "FreelancingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x }),
                        });
                        await db.collection('ActiveProjects').doc(RecruiterId).update({
                            "RecruitingProjects": Firebase.firestore.FieldValue.arrayRemove({ ProjectId: ProjectId, ProjectStatus: currStatus }),
                        });
                        await db.collection('ActiveProjects').doc(RecruiterId).update({
                            "RecruitingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x }),
                        });
                        if(x==='Completed'){
                            let newDate=new Date();
                           let date=newDate.toDateString();
                           let time=newDate.toTimeString();
                           let newmessage="Your Project is completed!! You will get your money in your bank account within 7 working days "
                            
                            DataHandeling({recipient:freelancerId,sender:'showSkills',date:date,time:time,projectid:ProjectId,ProjectTitle:projectName,message:newmessage})
                        }
                    }
                    else {
                        await db.collection('ActiveProjects').doc(currentUser.uid).update({
                            "FreelancingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: currStatus }),
                        });
                    }
                }
            })
        })
    }


    const updateRProjectStatus = async (RecruiterId,freelancerId,projectName, ProjectId, prevstatus, currStatus) => {

        await db.collection('ActiveProjects').doc(currentUser.uid).update({
            "RecruitingProjects": Firebase.firestore.FieldValue.arrayRemove({ ProjectId: ProjectId, ProjectStatus: prevstatus }),
        });

        await db.collection('ActiveProjects').doc(freelancerId).get().then(docs => {
            let temp = docs.data()['FreelancingProjects'];
            temp.map(async (item) => {
                if (item.ProjectId === ProjectId) {
                    if (item.ProjectStatus === currStatus) {
                        var x;
                        if (currStatus === 'Done') { x = 'Completed' }
                        if (currStatus === 'Abandoned') { x = 'Aborted' }

                        await db.collection('ActiveProjects').doc(currentUser.uid).update({
                            "RecruitingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x }),
                        });
                        await db.collection('ActiveProjects').doc(freelancerId).update({
                            "FreelancingProjects": Firebase.firestore.FieldValue.arrayRemove({ ProjectId: ProjectId, ProjectStatus: currStatus }),
                        });
                        await db.collection('ActiveProjects').doc(freelancerId).update({
                            "FreelancingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x }),
                        });

                        if(x==='Completed'){
                            let newDate=new Date();
                           let date=newDate.toDateString();
                           let time=newDate.toTimeString();
                           let newmessage="Your Project is completed!! You will get your money in your bank account within 7 working days "
                            
                            DataHandeling({recipient:freelancerId,sender:'showSkills',date:date,time:time,projectid:ProjectId,ProjectTitle:projectName,message:newmessage})
                        }

                    }
                    else {
                        await db.collection('ActiveProjects').doc(currentUser.uid).update({
                            "RecruitingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: currStatus }),
                        });
                    }
                }
            })
        })
    }



    console.log(FprojectDetails)
    console.log(RprojectDetails)



    return (<>

        <b>once changed can't be undone</b>
        <p>FreelancingProjects</p>
        {FprojectDetails ?
            <div>

                {FprojectDetails.map((val, i) => {
                    return (
                        <div>
                            <p>{val.projectName}</p>
                            <select name="projectstatus"
                                value={fpStatus[i]}
                                onChange={(e) => {
                                    setFcurrentStatus(e.target.value);
                                    updateFProjectStatus(val.recruiterID,val.freelancerID,val.projectName, Fpid[i], fpStatus[i], e.target.value);
                                }}
                            >{fpStatus[i] === "Active" ?
                                <>
                                    <option value="Active" >Active</option>
                                    <option value="Done">Done</option>
                                    <option value="Abandoned">Abandoned</option>
                                </>
                                : fpStatus[i] === 'Completed' ?
                                    <>
                                        <option value={fpStatus[i]}>{fpStatus[i]}</option>
                                    </> :
                                    <option disabled value={fpStatus[i]}>{fpStatus[i]}</option>}
                            </select>
                            
                        </div>
                    )
                })}
            </div>
            : ''}


        <p>RecruitingProjects</p>
        {RprojectDetails ?
            <div>
                {RprojectDetails.map((val, i) => {
                    return (
                        <div>
                            <p>{val.projectName}</p>
                            <select name="projectstatus"
                                value={RPStatus[i]}
                                onChange={(e) => {
                                    setRcurrentStatus(e.target.value);
                                    updateRProjectStatus(val.recruiterID,val.freelancerID,val.projectName, Rpid[i], RPStatus[i], e.target.value);
                                }}
                            >{RPStatus[i] === "Active" ?
                                <>
                                    <option value="Active" >Active</option>
                                    <option value="Done">Done</option>
                                    <option value="Abandoned">Abandoned</option>
                                </>
                                :
                                <option disabled value={RPStatus[i]}>{RPStatus[i]}</option>}
                            </select>

                        </div>
                    )
                })}
            </div>
            : ''}



    </>);
}

export default UserProjects;