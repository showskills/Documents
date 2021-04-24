import useAuthListener from "../../hooks/use-auth-listener";
import React, { useEffect, useMemo, useState } from "react";
import { db } from "../../lib/firebase.prod";
import { Card } from "../../Components";



const ListItems = (props) => {

const [isloading, setisloading] = useState(true);
const [data,setData] = useState([]);


console.log(props.location.state.uids)

    const getdata=async (uids)=>{
        var arr=[];
             
            await uids.map(async val=>{
                 await db.collection('Gig-Data').doc(val).get().then((doc)=>{
                     
                     arr.push(doc.data());  
                   })  
             })
            
             
             setData(arr);
            //  arr=[];
            
             setTimeout(() => {setisloading(false)},[1000])
             

    }


    useEffect(()=>{
        getdata(props.location.state.uids);
    },[props.location.state.uids])

    console.log(data)



    if (isloading) {
        return (<p>loading.....</p>)
    }

    
    

    return ( 
        <div className="CardsList">{                
            data.map((val, i) => (
             <Card
                key={i}
                imgsrc={val.PhotoURL}
                profileImg={val.PhotoURL}
                title={val.Title}
                sellername={val.Username}
                price={val.Price}
                uid={val.Uid}
              /> 
            

            ))
        }
          </div>
     );
}
 
export default ListItems;