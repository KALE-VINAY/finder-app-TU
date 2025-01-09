// Import the functions you need from the SDKs you need
import { initializeApp ,getApps} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
 measurementId: "G-6QRYHF0WVY"

//  apiKey: "AIzaSyBqTdVtijvqiJedPHV-Gt5_g8zUxUc5ums",
//  authDomain: "canteen-status-ce975.firebaseapp.com",
//  projectId: "canteen-status-ce975",
//  storageBucket: "canteen-status-ce975.firebasestorage.app",
//  messagingSenderId: "1070293970453",
//  appId: "1:1070293970453:web:504c308f534ee766c7281c",
// measurementId: "G-6QRYHF0WVY"

};

// Initialize Firebase
const app =  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export { db };