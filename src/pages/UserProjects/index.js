import useAuthListener from "../../hooks/use-auth-listener";
import { useEffect, useState } from 'react';

import { db } from '../../lib/firebase.prod';
import Firebase from 'firebase/app';
// import { set } from "react-hook-form";
import ReviewModal from '../../Container/ReviewModal';

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
        let fprojects,rprojects;
        let FPIdarr = [];
        let FStatusarr = [];
        let RStatusarr = [];
        let RPIdarr = [];
       
        await db.collection('ActiveProjects').doc(currentUser.uid).get().then((doc) => {
            console.log(doc.data());
            fprojects = doc.data()['FreelancingProjects'];
            rprojects=doc.data()['RecruitingProjects'];

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

    useEffect(()=>{
        projectIDS();
    },[])


    const updateFProjectStatus = async (ProjectId, prevstatus, currStatus) => {
        await db.collection('ActiveProjects').doc(currentUser.uid).update({
            "FreelancingProjects": Firebase.firestore.FieldValue.arrayRemove({ ProjectId: ProjectId, ProjectStatus: prevstatus }),
        });
        await db.collection('ActiveProjects').doc(currentUser.uid).update({
            "FreelancingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: currStatus }),
        });
    }

    const updateRProjectStatus = async (ProjectId, prevstatus, currStatus) => {
        await db.collection('ActiveProjects').doc(currentUser.uid).update({
            "RecruitingProjects": Firebase.firestore.FieldValue.arrayRemove({ ProjectId: ProjectId, ProjectStatus: prevstatus }),
        });
        await db.collection('ActiveProjects').doc(currentUser.uid).update({
            "RecruitingProjects": Firebase.firestore.FieldValue.arrayUnion({ ProjectId: ProjectId, ProjectStatus: currStatus }),
        });
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
                                    updateFProjectStatus(Fpid[i], fpStatus[i], e.target.value);
                                }}
                            >{fpStatus[i] === "Active" ?
                                <>
                                    <option value="Active" >Active</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Abandoned">Abandoned</option>
                                </>
                                : <option value={fpStatus[i]}>{fpStatus[i]}</option>}
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
                                    updateRProjectStatus(Rpid[i], RPStatus[i], e.target.value);
                                }}
                            >{RPStatus[i] === "Active" ?
                                <>
                                    <option value="Active" >Active</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Abandoned">Abandoned</option>
                                </>
                                : <option value={RPStatus[i]}>{RPStatus[i]}</option>}
                            </select>
                            <ReviewModal freelancerid="WTedB4smDdT22lSgV1yW1tzSQpu1" recruiterid="sTKRV6qCFQZu7EnAJXJcYfmBvv33"/>
                        </div>
                    )
                })}
            </div>
            : ''}



    </>);
}

export default UserProjects;