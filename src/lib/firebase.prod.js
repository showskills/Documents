import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

var firebaseConfig = {
  apiKey: "AIzaSyDVPlcU01A2E7fqRJ7pVTtOnjcv7TLswVg",
  authDomain: "showskills-943ad.firebaseapp.com",
  projectId: "showskills-943ad",
  storageBucket: "showskills-943ad.appspot.com",
  messagingSenderId: "1078093360525",
  appId: "1:1078093360525:web:20a3e5cd65ec74351021c4",
  measurementId: "G-M02T27N836"
};
// Initialize Firebase
const firebase=Firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
