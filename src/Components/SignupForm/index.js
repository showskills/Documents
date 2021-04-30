import React from "react";
import { useContext } from 'react';
import validate from "../../tools/validateInfo";
import useForm from "../../hooks/useForm";
import "./Form.css";
import { Link, useHistory } from "react-router-dom";
import { FirebaseContext } from '../../context/firebase';
import { auth, db } from "../../lib/firebase.prod";
import firebase from 'firebase/app'

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const ref=db.collection('login-info')
  

  const history =useHistory();

  // const { firebase } = useContext(FirebaseContext);
  
  var provider = new firebase.auth.GoogleAuthProvider();

  const googleSignIN=()=>{
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user); 
    console.log(user.displayName);
    ref.doc(result.user.uid).set({
      Username:user.displayName,
      Email:user.email
    }) 
    // history.push('/')
       // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    console.log(errorCode,errorMessage,email,credential);
// ...
  });
  }


  return (
    <div className="form-content-right">
        <p className='intro'>
        Get started with us! Fill out the details below to create your
          account and continue exploring.
        </p>
       <button className="SignInWithGoogleButton" onClick={googleSignIN}>
          Sign In with google
      </button>
      <p>OR</p>
      <form onSubmit={handleSubmit} className="form" noValidate>
      
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
       
      </form>
     
      <span className="form-input-login">
          Already have an account? <Link to='/Login'>Login</Link>
        </span>
        
    </div>

  );
};

export default FormSignup;