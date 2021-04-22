const firebase=require('firebase')


var firebaseConfig = {
  apiKey: "AIzaSyDLAxAqD4uchDEUkyHYE50-Q_ybTLge1Dw",
  authDomain: "showskills-9cb15.firebaseapp.com",
  projectId: "showskills-9cb15",
  storageBucket: "showskills-9cb15.appspot.com",
  messagingSenderId: "848572387255",
  appId: "1:848572387255:web:68c488f04213993a426232",
  measurementId: "G-P41JP2FMHP"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore()


  module.exports=db;