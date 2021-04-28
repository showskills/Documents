import React, { useEffect, useState } from 'react'
import useAuthListener from '../hooks/use-auth-listener'
import { db } from '../lib/firebase.prod'



const PaymentStatus = ({match}) => {

    console.log(match.params)
const[values,setValues]=useState({
    success:false,
    error:false
})

const currentUser= useAuthListener().user;
console.log(currentUser.uid)

useEffect(() => {
    setTimeout(() =>{getStatus();},500)
    
}, [])
const{success,error}=values
const getStatus=()=>
{
    db.collection('Transactions').doc(match.params.orderId).get().then(doc=>{
        if(doc)
        { 
          console.log(doc.data());
                if(doc.data().ORDERID===match.params.orderId)
                {    
                    if(doc.data().STATUS==='TXN_SUCCESS')
                    {
                        setValues({...values,success:true,error:false})
                    }  
                }
                else
                {
                    setValues({...values,success:false,error:"Payment Failed"})
                }
        }
    }).catch(e=> console.log(e))
}


    return (
        <div>
            {
                success && <h1>Payment Succesfully</h1>
            }
            {
                error && <h1>{error}</h1>
            }
        </div>
    )
}

export default PaymentStatus
