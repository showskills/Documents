import {db} from '../../lib/firebase.prod';
import Firebase from 'firebase/app'

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
    var FpNames=[],RpNames=[];
  var ref =db.collection('ActiveProjects').doc(userid);

   await ref.get().then(doc=>{
        
       if((doc.exists))
       {FreelancingProjects=doc.data().FreelancingProjects;
    RecruitingProjects=doc.data().RecruitingProjects;}
  
   });
      FpNames= await ProjectNames(FreelancingProjects);
      RpNames=await ProjectNames(RecruitingProjects);
    
   console.log(FreelancingProjects)
   return {FreelancingProjects,RecruitingProjects,FpNames,RpNames};

}

const ProjectNames=async (projects)=>{
    
  var pnames=[];
  projects.map(async (project,i)=>{

     var ref=db.collection('Projects').doc(project.ProjectId);
     await ref.get().then(
         doc=>
         { pnames.push(doc.data().projectName);
               
         }
     )
  });
  console.log(pnames)
   return pnames;

}




export {ActiveProjectsDataRetrieve,ActiveProjectsDataUpdate};