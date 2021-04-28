import {db} from '../../lib/firebase.prod';



const getFreelancerName=async (fid)=>{
     var docref=db.collection('Gig-Data').doc(fid);
     var name='';
      await docref.get().then(doc=>{
          if(doc.exists)
          {
              name=doc.data().Username;
          }
      });
      return name;

}

export {getFreelancerName}