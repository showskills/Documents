import React from "react";
import "./Form.css";
import Login from "../LoginForm/Login";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">
        We have received your request! Proceed to Login!
      </h1>
      <Login />
    </div>
  );
};

export default FormSuccess;
