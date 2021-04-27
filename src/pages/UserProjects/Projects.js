import {ActiveProjectsDataRetrieve} from './DataHandeling';
import useAuthListener from "../../hooks/use-auth-listener";
import { useEffect, useState } from 'react';
import './Projects.css';


const Projects=()=>{
      

    const currentUser=useAuthListener().user;
    const [freelancingProjects,setfp]=useState([]);
    const [recruitingProjects,setrp]=useState([]);
    const [numerOfFProjects,setfpNumber]=useState(0);
    const [numerOfRProjects,setrpNumber]=useState(0);
    const [FreelancingprojectNames,setfprojectNames]=useState([]);
    const [RecruitingprojectNames,setrprojectNames]=useState([]);


    const getProjectsData=async ()=>{

    var  {FreelancingProjects,RecruitingProjects,FpNames,RpNames}=
    await ActiveProjectsDataRetrieve({userid:currentUser.uid});

    console.log(FreelancingProjects);
    console.log(RecruitingProjects);
    
    
    setfp(FreelancingProjects);
    setrp(RecruitingProjects);

    setfpNumber(FreelancingProjects.length);
    setrpNumber(RecruitingProjects.length);

    setfprojectNames(FpNames);
    setrprojectNames(RpNames);


 };

 

 const setStatus=({status,projectid,type})=>{ 


 }
 
   

 useEffect(async ()=>await getProjectsData(),[]);
   console.log(freelancingProjects)
   console.log(FreelancingprojectNames);
   console.log(RecruitingprojectNames);

    return (
        <>

        <div>
            <h3 className="heading34">
        Freelancing Projects:
            </h3>
        {

        freelancingProjects !== [] ? 
        
        [...Array(numerOfFProjects)].map((e,i)=>
        <h clasName="content12" >
          
           <h className="project-info">
           
            <span>{i+1}.</span>
            <span>{FreelancingprojectNames[i]}</span>
            <button id="showstatus" disabled>{freelancingProjects[i].ProjectStatus}</button>

            <select className="gigDropdown" id="projectstatus" name="projectstatus" 
            >
                  
                <option value="Active" selected >Active</option>
                <option value="Completed">Completed</option>
                <option value="Abandoned">Abandoned</option>         
            </select>
              <br />
           </h>
           </h>
        )

        : ''

        }
        </div>


        <div>
        <h3 className="heading34">
        Recruiting  Projects:
            </h3>
        {

        recruitingProjects !== [] ? 
 
        [...Array(numerOfRProjects)].map((e,i)=>
        <h clasName="content12 " >
  
             <h className="project-info">
         <span>{i+1}.</span>
        <span>{RecruitingprojectNames[i]}</span>
        <button id="showstatus" disabled>{recruitingProjects[i].ProjectStatus}</button>

         <select className="gigDropdown" id="projectstatus" name="projectstatus" 
            >
          
                <option value="Active" selected >Active</option>
                <option value="Completed">Completed</option>
                <option value="Abandoned">Abandoned</option>         
         </select>
             <br />
             </h>
             </h>
              )

         : ''
        }
        </div>          
        </>

    )

     
}
export default Projects;