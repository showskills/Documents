import {db} from '../../lib/firebase.prod';

const DataHandeling = async (doc)=> {
      
     const {uid,id,title,gigdesciption,price,instructions,
          category,subCategory,duration,gigPhotoUrl,Tag,Username}=doc;
       
     var docref=  db.collection('Gig-Data').doc(uid);
     console.log(doc);
    await docref.set({Title:title,Username:Username ,Description:gigdesciption,Price:price,
          Instructions:instructions,Category:category,SubCategory:subCategory,
          Duration:duration,PhotoURL:gigPhotoUrl,Uid:id,Tag:Tag     
       });      
 }

 

export default DataHandeling;