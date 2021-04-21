import {db} from '../../lib/firebase.prod';

const DataHandeling = async (doc)=> {
      console.log(doc);
     const {uid,id,title,gigdesciption,price,instructions,
          category,subCategory,duration,gigPhotoUrl,Tag}=doc;
       
     var docref=  db.collection('Gig-Data').doc(uid);

    await docref.set({Title:title,Description:gigdesciption,Price:price,
          Instructions:instructions,Category:category,SubCategory:subCategory,
          Duration:duration,PhotoURL:gigPhotoUrl,Uid:id,Tag:Tag      
       });
                 
 }

 

export default DataHandeling;