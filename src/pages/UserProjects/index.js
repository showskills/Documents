import useAuthListener from "../../hooks/use-auth-listener";
import { useEffect, useState } from 'react';

import { db } from '../../lib/firebase.prod';
import Firebase from 'firebase/app';
import DataHandeling from "../../Components/MessageForm/DataHandeling";
// import { Button, Toast } from "react-bootstrap";
// import { set } from "react-hook-form";
import ReviewModal from '../../Container/ReviewModal';
import './Projects.css'

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
    const [compPrDetails, setcompPrDetails] = useState();


    const projectIDS = async () => {
        let fprojects, rprojects;
        let FPIdarr = [];
        let FStatusarr = [];
        let RStatusarr = [];
        let RPIdarr = [];


        const projectData = await db.collection('ActiveProjects').doc(currentUser.uid).get();
        const CprojectData = await db.collection('CompletedProjects').doc(currentUser.uid).get();
        setcompPrDetails(CprojectData.data());
        fprojects = await projectData.data()['FreelancingProjects'];
        rprojects = await projectData.data()['RecruitingProjects'];

        fprojects && fprojects.forEach((project) => {
            FPIdarr.push(project.ProjectId);
            FStatusarr.push(project.ProjectStatus)
        });

        rprojects && rprojects.forEach((project) => {
            RPIdarr.push(project.ProjectId);
            RStatusarr.push(project.ProjectStatus)
        });

        setFpid(FPIdarr);
        setRpid(RPIdarr);
        setfpStatus(FStatusarr);
        setRPStatus(RStatusarr);

        const flAPIs = [];
        FPIdarr.forEach(async (projectId) => {
            flAPIs.push(db.collection('Projects').doc(projectId).get());
        });
        const projectDetails = await Promise.all(flAPIs);
        console.clear();
        console.log("projectDetails: ", projectDetails)
        const flProjectsData = [];
        projectDetails.forEach(async (project) => {
            const data = project.data();
            flProjectsData.push(data);
        });
        setFprojectDetails(flProjectsData);


        const rAPIs = [];
        RPIdarr.forEach(async (projectId) => {
            rAPIs.push(db.collection('Projects').doc(projectId).get());
        });

        const rprojectDetails = await Promise.all(rAPIs);
        console.clear();
        console.log("projectDetails: ", rprojectDetails)
        const rProjectsData = [];
        rprojectDetails.forEach(async (project) => {
            const data = project.data();
            rProjectsData.push(data);
        });
        setRprojectDetails(rProjectsData);
    }


    // useEffect(() => {
    //     setTimeout(() => {
    //         projectIDS();
    //     }, 2000)

    // }, [FcurrentStatus, RcurrentStatus])

    useEffect(() => {
        projectIDS();
    }, [])


    const updateFProjectStatus = async (RecruiterId, freelancerId, projectName, ProjectId, prevstatus, currStatus) => {
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

                        var ref = db.collection('CompletedProjects').doc(currentUser.uid);

                        await ref.get().then(doc => {
                            if (doc.exists) {
                                ref.update({
                                    "FreelancingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x, ProjectName: projectName, FreelancerID: freelancerId, RecruiterID: RecruiterId }),
                                });
                            }
                            else {
                                ref.set({
                                    "FreelancingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x, ProjectName: projectName, FreelancerID: freelancerId, RecruiterID: RecruiterId }),
                                });
                            }
                        })

                        await db.collection('ActiveProjects').doc(RecruiterId).update({
                            "RecruitingProjects": Firebase.firestore.FieldValue.arrayRemove({ ProjectId: ProjectId, ProjectStatus: currStatus }),
                        });

                        var Rref = db.collection('CompletedProjects').doc(RecruiterId);

                        await Rref.get().then(doc => {
                            if (doc.exists) {
                                Rref.update({
                                    "RecruitingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x, ProjectName: projectName, FreelancerID: freelancerId, RecruiterID: RecruiterId ,ReviewAdded:"No"}),
                                });
                            }
                            else {
                                Rref.set({
                                    "RecruitingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x, ProjectName: projectName, FreelancerID: freelancerId, RecruiterID: RecruiterId ,ReviewAdded:"No"}),
                                });
                            }
                        })

                        if (x === 'Completed') {
                            let newDate = new Date();
                            let date = newDate.toDateString();
                            let time = newDate.toTimeString();
                            let newmessage = "Your Project is completed!! You will get your money in your bank account within 7 working days "

                            DataHandeling({ recipient: freelancerId, sender: 'showSkills', date: date, time: time, projectid: ProjectId, ProjectTitle: projectName, message: newmessage })
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

        setTimeout(() => { projectIDS(); }, 500)
    }


    const updateRProjectStatus = async (RecruiterId, freelancerId, projectName, ProjectId, prevstatus, currStatus) => {

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

                        var ref = db.collection('CompletedProjects').doc(currentUser.uid);

                        await ref.get().then(doc => {
                            if (doc.exists) {
                                ref.update({
                                    "RecruitingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x, ProjectName: projectName, FreelancerID: freelancerId, RecruiterID: RecruiterId ,ReviewAdded:"No"}),
                                });
                            }
                            else {
                                ref.set({
                                    "RecruitingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x, ProjectName: projectName, FreelancerID: freelancerId, RecruiterID: RecruiterId ,ReviewAdded:"No"}),
                                });
                            }
                        })



                        await db.collection('ActiveProjects').doc(freelancerId).update({
                            "FreelancingProjects": Firebase.firestore.FieldValue.arrayRemove({ ProjectId: ProjectId, ProjectStatus: currStatus }),
                        });


                        var Rref = db.collection('CompletedProjects').doc(freelancerId);

                        await Rref.get().then(doc => {
                            if (doc.exists) {
                                Rref.update({
                                    "FreelancingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x, ProjectName: projectName, FreelancerID: freelancerId, RecruiterID: RecruiterId }),
                                });
                            }
                            else {
                                Rref.set({
                                    "FreelancingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: x, ProjectName: projectName, FreelancerID: freelancerId, RecruiterID: RecruiterId }),
                                });
                            }
                        })


                        if (x === 'Completed') {
                            let newDate = new Date();
                            let date = newDate.toDateString();
                            let time = newDate.toTimeString();
                            let newmessage = "Your Project is completed!! You will get your money in your bank account within 7 working days "

                            DataHandeling({ recipient: freelancerId, sender: 'showSkills', date: date, time: time, projectid: ProjectId, ProjectTitle: projectName, message: newmessage })
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
        setTimeout(() => { projectIDS(); }, 500)
    }



    const updateReview = async (Project) => {
        console.log(Project)
        await db.collection('CompletedProjects').doc(currentUser.uid).update({
            "RecruitingProjects":Firebase.firestore.FieldValue.arrayRemove(Project)
        });
        let x=Project;
        x.ReviewAdded="Not interseted"
        await db.collection('CompletedProjects').doc(currentUser.uid).update({
            "RecruitingProjects":Firebase.firestore.FieldValue.arrayUnion(x)
        });

        setTimeout(() => {
            projectIDS()
        }, 500)
    }


    // console.log(FprojectDetails)
    // console.log(RprojectDetails)
    console.log(compPrDetails);


    return (<div className='ProjectContainer'>

        <p>once changed can't be undone</p>
        <br />
        <div className="ProjectTypeHeading">FreelancingProjects</div>
        {FprojectDetails ?
            <div className="ProjectDetailsContainer">

                {FprojectDetails.map((val, i) => {
                    return (
                        <div className="ProjectDetails">
                            <p>{val.projectName}</p>
                            <select className="ProjectDropdown" name="projectstatus"
                                value={fpStatus[i]}
                                onChange={(e) => {
                                    setFcurrentStatus(e.target.value);
                                    updateFProjectStatus(val.recruiterID, val.freelancerID, val.projectName, Fpid[i], fpStatus[i], e.target.value);
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
                            {/* { fpStatus[i] === 'Completed' ? val.FreelancerReviewAdded === "No" ?
                                <div className='ReviewButtons'>
                                    <ReviewModal freelancerid={val.recruiterID}
                                        recruiterid={val.freelancerID}
                                        projectid={Fpid[i]} />
                                    <button className='AddReviewButton' onClick={()=>{updateReview(Fpid[i],'FreelancerReviewAdded')}}>Not interseted</button>
                                </div>

                                : '' : ''} */}
                        </div>
                    )
                })}
            </div>
            : ''}

        <br />
        <div className="ProjectTypeHeading">RecruitingProjects</div>

        {RprojectDetails ?
            <div className="ProjectDetailsContainer">
                {RprojectDetails.map((val, i) => {
                    return (
                        <div className="ProjectDetails">
                            <p>{val.projectName}</p>
                            <select className="ProjectDropdown" name="projectstatus"
                                value={RPStatus[i]}
                                onChange={(e) => {
                                    setRcurrentStatus(e.target.value);
                                    updateRProjectStatus(val.recruiterID, val.freelancerID, val.projectName, Rpid[i], RPStatus[i], e.target.value);
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
                            {/* { RPStatus[i] === 'Completed' ? val.RecruiterReviewAdded === "No" ?
                                <div className='ReviewButtons'>
                                    <ReviewModal freelancerid={val.freelancerID}
                                        recruiterid={val.recruiterID}
                                        projectid={Fpid[i]} />
                                    <button className='AddReviewButton' onClick={() => { updateReview(Rpid[i], 'RecruiterReviewAdded') }}>Not interseted</button>
                                </div>
                                : '' : ''} */}

                        </div>
                    )
                })}
            </div>
            : ''}



        <br />
        <h4>Completed Project</h4>
        {compPrDetails ? compPrDetails['FreelancingProjects'] ?
            <>

                <p>Freelancing Projects</p>
                <div className="ProjectDetailsContainer">
                    {compPrDetails['FreelancingProjects'].map((val, i) => {
                        return (
                            < >
                                <div className="ProjectDetails">
                                    <p>{val.ProjectName}</p>
                                    <p>{val.ProjectStatus}</p>
                                </div>

                            </>
                        )

                    })}
                </div>
            </>
            :
            '' : 'None'}
        <p>Recruting Projects</p>

        {compPrDetails && compPrDetails['RecruitingProjects'] ?
            <>

                <div className="ProjectDetailsContainer">
                    {compPrDetails['RecruitingProjects'].map((val, i) => {
                        return (
                            <>
                                <div className="ProjectDetails">
                                    <p>{val.ProjectName}</p>
                                    <p>{val.ProjectStatus}</p>
                                </div>
                                {val.ReviewAdded==="No" && <div className='ReviewButtons'>
                                    <ReviewModal freelancerid={val.FreelancerID}
                                        recruiterid={val.RecruiterID}
                                        projectid={val.ProjectId}
                                        details={val}
                                         />
                                    <button className='AddReviewButton' onClick={() => { updateReview(val) }}>Not interseted</button>
                                </div>}

                            </>
                        )

                    })}
                </div>
            </>
            :
            'None'}

    </div>);
}

export default UserProjects;