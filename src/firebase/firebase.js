// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "blog-a2ee8.firebaseapp.com",
  projectId: "blog-a2ee8",
  storageBucket: "blog-a2ee8.appspot.com",
  messagingSenderId: "131112160060",
  appId: "1:131112160060:web:09664f5deeca9cda68ec39",
  measurementId: "G-EXJ3CWG33S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
