import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

import "./index.css";

import App from "./App";


ReactDOM.render(
  <BrowserRouter>
   <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
