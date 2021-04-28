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

const addReview=async(props)=>{

     var {fid,rid,pid,rating,review} = props;
      var rating1= parseInt(rating);
     var rusername;
    var docref=db.collection('Reviews').doc(fid);
console.log('++++++++++');
     console.log(rating);

     await docref.get().then(async(doc)=>{
        if(doc.exists)
        {   
            var data=doc.data();
            console.log(data)
           var noOfreviews=data.NumberOfReviews;
           //noOfreviews=parseInt(noOfreviews);
           console.log(typeof(noOfreviews))
            
            var avgRating=data.AverageRating;
           
            avgRating=parseInt(avgRating);
            console.log(typeof(avgRating))
            var x=avgRating*noOfreviews;// here is the problem not adding rating
            var n=x+rating1   ;// even now not adding
            console.log(n);
            var y=noOfreviews+1;
            console.log(y);
            var z=n/y;
            console.log(z);
            var newavgRating=z.toFixed(2);

           await docref.update({
            AverageRating:newavgRating,
            NumberOfReviews:noOfreviews+1
        });

        }

        else
        {  

            await docref.set({
                AverageRating:rating1,
                NumberOfReviews:1
            });
        }
     })

    await db.collection('Login-info').doc(rid).get().then(doc=>{
        rusername=doc.data().username;
    })
    console.log(rusername)
    var newreview={
          FromUID:rid,
          FromUser:rusername,
          Rating:rating1,
          Review:review
    };
    
   var ref= docref.collection('CustomerReviews').doc(pid);
    await ref.set(newreview);

}

export {getFreelancerName,addReview};