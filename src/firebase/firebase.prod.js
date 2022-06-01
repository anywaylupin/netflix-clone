// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhKCRNnOmgnt9kJokuc2nXmTPfLjpLUA4",
  authDomain: "netflix-clone-220528.firebaseapp.com",
  databaseURL: "https://netflix-clone-220528.web.app/",
  projectId: "netflix-clone-220528",
  storageBucket: "netflix-clone-220528.appspot.com",
  messagingSenderId: "903718144706",
  appId: "1:903718144706:web:291dc6b39ea7558ff2895b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export { firebaseApp };
