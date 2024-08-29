// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// REACT_APP_FIREBASE_API_KEY= "AIzaSyABO07J7CO_nM4r3heLp-mOz1k9EFLKYKI",
// REACT_APP_FIREBASE_AUTH_DOMAIN= "feedbackformproject.firebaseapp.com",
// REACT_APP_FIREBASE_PROJECT_ID= "feedbackformproject",
// REACT_APP_FIREBASE_STORAGE_BUCKET= "feedbackformproject.appspot.com",
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID= "605275307853",
// REACT_APP_FIREBASE_APP_ID= "1:605275307853:web:61810e31dfdf9d28894104",
// REACT_APP_FIREBASE_MEASUREMENT_ID= "G-9R9ZYJB5CB"

const firebaseConfig = {
  apiKey: "AIzaSyABO07J7CO_nM4r3heLp-mOz1k9EFLKYKI",
  authDomain: "feedbackformproject.firebaseapp.com",
  projectId: "feedbackformproject",
  storageBucket: "feedbackformproject.appspot.com",
  messagingSenderId: "605275307853",
  appId: "1:605275307853:web:61810e31dfdf9d28894104",
  measurementId: "G-9R9ZYJB5CB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
