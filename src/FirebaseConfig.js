// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4ToUqDORLf6i-floxmIPM-lA-vfhPzVA",
  authDomain: "new-auth-cf96e.firebaseapp.com",
  projectId: "new-auth-cf96e",
  storageBucket: "new-auth-cf96e.appspot.com",
  messagingSenderId: "478643219655",
  appId: "1:478643219655:web:93c7d52929280ded4f22e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


