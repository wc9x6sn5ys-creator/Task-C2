
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyDM06s0PKxHhmDupInlK1TviYm-Ag-VQvc",
  authDomain: "frontend-34122.firebaseapp.com",
  projectId: "frontend-34122",
  storageBucket: "frontend-34122.firebasestorage.app",
  messagingSenderId: "186699737307",
  appId: "1:186699737307:web:0925564787da7036dfc4fe",
  measurementId: "G-XX81BRZHPB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
