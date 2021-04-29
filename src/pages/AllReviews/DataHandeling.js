import {db} from '../../lib/firebase.prod';

const getCustomerReviews=async (uid)=>{
var allReviews=[];
   await  db.collection('Reviews').doc(uid)
         .collection('CustomerReviews').get().then((docs)=>{

             docs.forEach(doc=>{console.log(doc.data());
            allReviews.push(doc.data())
        });
            
         }
         )
         console.log(allReviews);
        return allReviews;

}
export {getCustomerReviews};