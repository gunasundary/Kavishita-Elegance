// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrLsUe1mANA7pX4jjZ_VGCjZxiakVAFoo",
  authDomain: "kavishita-elegance-2c561.firebaseapp.com",
  projectId: "kavishita-elegance-2c561",
  storageBucket: "kavishita-elegance-2c561.firebasestorage.app",
  messagingSenderId: "313791279349",
  appId: "1:313791279349:web:b89fa983ead27b3b2695bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();