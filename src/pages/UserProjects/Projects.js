import {ActiveProjectsDataRetrieve} from './DataHandeling';
import useAuthListener from "../../hooks/use-auth-listener";
import { useEffect, useState } from 'react';
import './Projects.css';
import {db} from '../../lib/firebase.prod';
import Firebase from 'firebase/app';

const Projects=()=>{
      

    const currentUser=useAuthListener().user;

    const [fps,setfp]=useState({});  // freelancing projects
    const [rps,setrp]=useState({});   //recruiting projects
    const [numerOfFProjects,setfpNumber]=useState(0);
    const [numerOfRProjects,setrpNumber]=useState(0);
    const [fpids,setfpids]=useState([]);
    const [rpids,setrpids]=useState([]);



    const getProjectsData=async ()=>{

     var {Fpinfo,Rpinfo,Fpids,Rpids}=
     await ActiveProjectsDataRetrieve({userid:currentUser.uid});

    console.log(Fpinfo,Fpids);
    setfpids(Fpids);
    setrpids(Rpids);
    setfp(Fpinfo);
    setrp(Rpinfo);

    setfpNumber(Fpids.length);
    setrpNumber(Rpids.length);

    

 };

 /*const checkProjectStatus=async ({ptype,pid,pstatus})=>{
             
    var ref=db.collection('ActiveProjects').doc(currentUser.uid);
    if(ptype === 'freelancing')
    {   ref.update({
          FreelancingProjects:Firebase.firestore.FieldValue.arrayRemove(
              {ProjectId:pid,ProjectStatus:'Active'}
          )
        })
        ref.update({
            FreelancingProjects:Firebase.firestore.FieldValue.arrayUnion(
                {ProjectId:pid,ProjectStatus:pstatus}
            )
        })
    }
    else
    {

    }
    await getProjectsData();
 }

 */

 useEffect(async ()=>{
    await getProjectsData()
 },[])


   console.log(fpids);
   console.log(fps);
   
    return (
        <>
       
        <div>
            <h3 className="heading34">
        Freelancing Projects:
            </h3>
        {

        fpids !== [] ? 
        
        [...Array(numerOfFProjects)].map((e,i)=>
        <h clasName="content12" >
          
           <h className="project-info">
           
            <span>{i+1}.</span>
            <span>{(fps[fpids[0]])[0]}</span>
            <button id="showstatus" disabled>{(fps[fpids[i]])[1]}</button>

            <select className="gigDropdown" id="projectstatus" name="projectstatus" 
            value={((fps[fpids[i]])[2]).valueOf()}
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
// onChange={(e)=>checkProjectStatus({ptype:'freelancing',
//pstatus:e.target.value,pid:fpids[i]})} 