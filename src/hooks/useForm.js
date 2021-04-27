import { useState, useEffect,useContext } from "react";
import { FirebaseContext } from '../context/firebase';
import { db } from "../lib/firebase.prod";

// import FpDb from "../tools/FpDb";

const useForm = (callback, validate) => {
  const { firebase } = useContext(FirebaseContext);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref=db.collection('login-info')
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    return await firebase.auth().createUserWithEmailAndPassword(values.email,values.password)
    .then(async(result)=>{
        await result.user.updateProfile({
        displayName: values.username,
      });
      console.log('++++++++++=')
     ref.doc(result.user.uid).set({
       Username:values.username,
       Email:result.user.email
     })
    })

    .catch((error)=>{
      console.log('------------------------')
      console.log(error);
    })
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;