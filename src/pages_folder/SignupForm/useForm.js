import { useState, useEffect,useContext } from "react";
import { FirebaseContext } from '../../context/firebase';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    return firebase.auth().createUserWithEmailAndPassword(values.email,values.password)
    .then((result)=>{
      result.user.updateProfile({
        displayName: values.username,
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