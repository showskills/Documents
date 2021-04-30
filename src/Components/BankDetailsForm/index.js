import { useState } from 'react';
import './BankDetailsForm.css';
import useAuthListener from '../../hooks/use-auth-listener';
import AddBankDetails from './DataHandeling';

const BankDetailsForm=()=>{

    const [bankname,setbankname]=useState('');
    const [Accountno,setaccountno]=useState('');
    const [IFSCcode,setCode]=useState('');
    const [Bankusername,setusername]=useState('');
    const [Mobileno,setmobileNumber]=useState('');
    const currentUser = useAuthListener().user;

    const submitForm=async (e)=>{

            e.preventDefault();
            const newEntry={uid:currentUser.uid,bankname:bankname,accountno:Accountno,
            ifsc:IFSCcode,bankusername:Bankusername,mobileno:Mobileno}
            await AddBankDetails(newEntry);
    }


    return (
        <>
        <div className="BankDetailsheader">
            <label className="BDhead">
                Add details of your bank in which you want to recieve your payments
            </label><br/>

            <div className="userBank">

                <p className="fieldinfo12">
                 <span>Bank Name : </span>
                 <span><textarea type="text" spellCheck='false' value={bankname}  
                 onChange={(e)=>setbankname(e.target.value)}/></span>
                </p>

                <p className="fieldinfo12">
                 <span> Bank Account Number : </span>
                 <span><input type="tel" value={Accountno}spellCheck='false'
                  onChange={(e)=>setaccountno(e.target.value)} /></span>
                </p>

                <p className="fieldinfo12">
                 <span> IFSC Code: </span>
                 <span><textarea type="text" value={IFSCcode}spellCheck='false'
                  onChange={(e)=>setCode(e.target.value)}/></span>
                </p>

                <p className="fieldinfo12">
                 <span>Account Holder Name : </span>
                 <span><textarea type="text"  value={Bankusername}spellCheck='false'
                  onChange={(e)=>setusername(e.target.value)}/></span>
                </p>

                <p className="fieldinfo12">
                 <span>Mobile Number (linked with above account) : </span>
                 <span><input type="tel" value={Mobileno} spellCheck='false'
                  onChange={(e)=>setmobileNumber(e.target.value)}/></span>
                </p>

            </div><br/>
            <button className="bdbtn" onClick={submitForm}>Submit</button>
        </div>
        </>
    )
}
export default BankDetailsForm;