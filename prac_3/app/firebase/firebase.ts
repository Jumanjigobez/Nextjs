import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_FIREBASE_APIKEY,
//   authDomain: process.env.NEXT_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.NEXT_FIREBASE_PROJECTID,
//   storageBucket: process.env.NEXT_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.NEXT_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.NEXT_FIREBASE_APPI,
//   measurementId: process.env.NEXT_FIREBASE_MEASUREMENTID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBIe9D32FB6LXZCzOVayRXQnM-BU6kb_fo",
  authDomain: "projokes-dc31c.firebaseapp.com",
  projectId: "projokes-dc31c",
  storageBucket: "projokes-dc31c.firebasestorage.app",
  messagingSenderId: "621181203014",
  appId: "1:621181203014:web:1eae4fa556dd1644889047",
  measurementId: "G-NQ9F7FEGE0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// if(auth){
//   console.log("success config")
// }
