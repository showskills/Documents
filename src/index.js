import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <BrowserRouter>
   <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
