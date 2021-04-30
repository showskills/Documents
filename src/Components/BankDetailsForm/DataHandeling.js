import{db} from '../../lib/firebase.prod';


const AddBankDetails=async (props)=>{
    
    const {uid,bankname,accountno,ifsc,bankusername,mobileno}=props;

    var ref=db.collection('UserBankDetails').doc(uid);

       await ref.set({
            Bankname:bankname,
            BankAccountNumber:Number(accountno),
            IFSCcode:ifsc,
            AccountHolderName:bankusername,
            MobileNumber:Number(mobileno)
       });

}
export default AddBankDetails;