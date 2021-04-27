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
    getStatus();
}, [])
const{success,error}=values
const getStatus=()=>
{
    db.collection('payments').doc(currentUser.uid).get().then(doc=>{
        if(doc)
        { 
            doc.data().paymentHistory.map((data)=>{
                 console.log(data.ORDERID)
                if(data.ORDERID===match.params.orderId)
                {    
                    if(data.STATUS==='TXN_SUCCESS')
                    {
                        setValues({...values,success:true,error:false})
                    }  
                }
                else
                {
                    setValues({...values,success:false,error:"Payment Failed"})
                }
            })
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
