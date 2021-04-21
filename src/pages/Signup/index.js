import React, { useState } from "react";
import {SignupForm} from "../../Components";
import {Redirect } from "react-router-dom";
import "./Signup.css";
import FpDb from "../../tools/FpDb";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src="https://image.freepik.com/free-vector/website-private-password-security-access-lock-notice-online-document-page-verification-login-code-web-internet-notification-authentication-flat-illustration_212005-149.jpg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <SignupForm submitForm={submitForm} />
          
        ) : (
          <Redirect to='/'/>
        )}
      </div>
    </>
  );
};

export default Signup;