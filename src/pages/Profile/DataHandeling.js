import {db} from '../../lib/firebase.prod';

const descriptiondb=async (doc)=>{
    const {uid,description}=doc;
   const docref=db.collection('freelancer-profile').doc(uid);
   await docref.get().then(doc=>{
      if(doc.exists)
      {
         docref.update({
            Description:description
         });
      }
      else
      {
         docref.set({
            Description:description
         });
      }
   })
                
}

const languagedb=async(doc)=>{
    const {uid,language,languageLevel}=doc;
    var docref=  db.collection('freelancer-profile').doc(uid);

    await docref.get().then(doc=>{
       if(doc.exists)
       {    var array= (doc.data()['Languages']);
          if(array)
          {
            array.push({Language:language,LanguageLevel:languageLevel});
          }
          else
          {
             array= [{Language:language,LanguageLevel:languageLevel}];
          }
          
         docref.update({
         Languages:array });
         console.log(array);

         return {array};

       }
       else
       {  const array=[{Language:language,LanguageLevel:languageLevel}];
         docref.set({
            Languages:array
          });
          return array;
       }
    })

     };

  
const skillsdb=async (doc)=>{
   const {uid,skillName,skillLevel}=doc;
   var docref=db.collection('freelancer-profile').doc(uid);

   await docref.get().then(doc=>{
      if(doc.exists)
      {    var array=(doc.data()['Skills']);
         if(array)
         {
           array.push({skillName:skillName,skillLevel:skillLevel});
         }
         else
         {
            array= [{skillName:skillName,skillLevel:skillLevel}];
         }
         
       docref.update({
        Skills:array }) 
      }
      else
      {  const array=[{skillName:skillName,skillLevel:skillLevel}];
        docref.set({
           Skills:array
         });
      }
   })

    };
  
  
    const educationdb=async(doc)=>{
      const {uid,collegename,graduationyear,title,major}=doc;
      var docref=db.collection('freelancer-profile').doc(uid);
   
      await docref.get().then(doc=>{
         if(doc.exists)
         {    var array=(doc.data()['Education']);
            if(array)
            {
              array.push({collegename:collegename,
               graduationyear:graduationyear,title:title,major:major});
            }
            else
            {
               array= [{collegename:collegename,
                  graduationyear:graduationyear,title:title,major:major}];
            }
            
          docref.update({
           Education:array }) 
         }
         else
         {  const array=[{collegename:collegename,
            graduationyear:graduationyear,title:title,major:major}];
           docref.set({
              Education:array
            });
         }
      })
   
       };
     
export {descriptiondb,languagedb,skillsdb,educationdb};