import {db} from '../../lib/firebase.prod';

const DataHandeling = async (doc)=> {

     const {uid,title,gigdesciption,price,instructions,
          category,subCategory,duration,gigPhotoUrl}=doc;

     var docref=  db.collection('Gig-Data').doc(uid);

    await docref.set({Title:title,Description:gigdesciption,Price:price,
          Instructions:instructions,Category:category,SubCategory:subCategory,
          Duration:duration,PhotoURL:gigPhotoUrl      
       });
                 
 }

 

export default DataHandeling;