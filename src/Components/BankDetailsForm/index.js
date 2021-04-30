import { useState } from 'react';
import './BankDetailsForm.css';


const BankDetailsForm=()=>{

    const [bankname,setbankname]=useState('');
    const [Accountno,setaccountno]=useState('');
    const [IFSCcode,setCode]=useState('');
    const [Bankusername,setusername]=useState('');
    const [Mobileno,setmobileNumber]=useState('');


    return (
        <>
        <div className="BankDetailsheader">
            <label className="BDhead">
                Add details of your bank in which you want to recieve your payments
            </label><br/>

            <div className="userBank">

                <p className="fieldinfo12">
                 <span>Bank Name : </span>
                 <span><textarea type="text"   value={bankname}  
                 onChange={(e)=>setbankname(e.target.value)}/></span>
                </p>

                <p className="fieldinfo12">
                 <span> Bank Account Number : </span>
                 <span><input type="tel" value={Accountno}
                  onChange={(e)=>setaccountno(e.target.value)} /></span>
                </p>

                <p className="fieldinfo12">
                 <span> IFSC Code: </span>
                 <span><textarea type="text" value={IFSCcode}
                  onChange={(e)=>setCode(e.target.value)}/></span>
                </p>

                <p className="fieldinfo12">
                 <span>Account Holder Name : </span>
                 <span><textarea type="text"  value={Bankusername}
                  onChange={(e)=>setusername(e.target.value)}/></span>
                </p>

                <p className="fieldinfo12">
                 <span>Mobile Number (linked with above account) : </span>
                 <span><input type="tel" value={Mobileno} 
                  onChange={(e)=>setmobileNumber(e.target.value)}/></span>
                </p>

            </div><br/>
            <button className="bdbtn" >Submit</button>
        </div>
        </>
    )
}
export default BankDetailsForm;