import {db} from '../../lib/firebase.prod';
import Firebase from 'firebase/app';


const ActiveProjectsDataUpdate = async (props)=>{
    const {freelancerid,recruiterid,projectid}=props;
    var newProject ={ ProjectId:projectid,ProjectStatus:'Active'};  

    // updation of freelancer

    var ref1=db.collection('ActiveProjects').doc(freelancerid);
    await ref1.get().then(async (doc)=>{

         if (doc.exists)
        {   await ref1.update({FreelancingProjects:
            Firebase.firestore.FieldValue.arrayUnion(newProject) });
        }

         else
         {
             await ref1.set({FreelancingProjects:[newProject],RecruitingProjects:[]});
         }
  });

    // updation of recruiter
    
    var ref1=db.collection('ActiveProjects').doc(recruiterid);
    await ref1.get().then(async (doc)=>{

         if (doc.exists)
        {   await ref1.update({RecruitingProjects:
            Firebase.firestore.FieldValue.arrayUnion(newProject) });
        }

         else
         {
        await ref1.set({RecruitingProjects:[newProject],FreelancingProjects:[]});
         }
  });


}

const ActiveProjectsDataRetrieve=async (props)=>{

      const {userid} = props;
    var FreelancingProjects=[],RecruitingProjects=[];
    
  var ref =db.collection('ActiveProjects').doc(userid);
  console.log('++++++++++++')
   await ref.get().then(doc=>{        
       if((doc.exists))
       {FreelancingProjects=doc.data().FreelancingProjects;
        RecruitingProjects=doc.data().RecruitingProjects;
       } 
   });
     
  var Fpinfo ,Fpids,Rpinfo,Rpids;

  var {pinfo,pids} =await Projectsinfo(FreelancingProjects);
  Fpinfo=pinfo;
  Fpids=pids;

  var {pinfo,pids} =await Projectsinfo(RecruitingProjects);
  Rpinfo=pinfo;
  Rpids=pids;


   console.log('----------')
   console.log(Fpinfo,Fpids,Rpinfo);
   return {Fpinfo,Rpinfo,Fpids,Rpids};   

}

const Projectsinfo=async (projects)=>{
    
  var pinfo={};
  var pids=[];
  projects.map(async (project,i)=>{
    pids.push(project.ProjectId);
     var ref=db.collection('Projects').doc(project.ProjectId);
     await ref.get().then(
         doc=>
         {   var data=doc.data();
          // ProjectName,ProjectStatus,UserStatus
            pinfo[project.ProjectId]=[data.projectName,data.status,project.ProjectStatus];
         }
     )
  });
  console.log(pinfo,pids);
   return {pinfo,pids};

}




export {ActiveProjectsDataRetrieve,ActiveProjectsDataUpdate};