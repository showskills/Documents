import {ActiveProjectsDataRetrieve} from './DataHandeling';
import useAuthListener from "../../hooks/use-auth-listener";
import { useEffect, useState } from 'react';


const Projects=()=>{
      

    const currentUser=useAuthListener().user;
    const [freelancingProjects,setfProjects]=useState([]);
    const [recruitingProjects,setrProjects]=useState([]);


    const getProjectsData=async ()=>{

    var  {FreelancingProjects,RecruitingProjects}=
    await ActiveProjectsDataRetrieve(currentUser.uid);
    setfProjects(FreelancingProjects);
    setrProjects(RecruitingProjects);
    

 };


 useEffect(async ()=>await getProjectsData(),[]);


    return (
        <>
        <div>
        Freelancing Projects:
        </div>
        <div>
        Recruiting Projects:
        </div>
             
        </>

    )

     
}
export default Projects;