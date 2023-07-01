import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ0NsBpbZTipjqpY4r44t60HgcsjQH9W8",
  authDomain: "chatapp-51346.firebaseapp.com",
  projectId: "chatapp-51346",
  storageBucket: "chatapp-51346.appspot.com",
  messagingSenderId: "95390333522",
  appId: "1:95390333522:web:55ceffeb3f2f3bf5fd3d8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();