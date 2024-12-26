// Import the functions you need from the SDKs you need
import { initializeApp , getApps,getApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY_FINDER_APP_TU,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_FINDER_APP_TU,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_FINDER_APP_TU,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_FINDER_APP_TU,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_FINDER_APP_TU,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID_FINDER_APP_TU,
  // measurementId: "G-9VLMM5WB1R"
  apiKey: "AIzaSyCkYgLye1IiQazbJtxDleByvqO7R0A2Fr0",
  authDomain: "food-app-tu.firebaseapp.com",
  projectId: "food-app-tu",
  storageBucket: "food-app-tu.firebasestorage.app",
  messagingSenderId: "172520369779",
  appId: "1:172520369779:web:46de1c99cb7b2fdcee8406",
  measurementId: "G-9VLMM5WB1R"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
export const auth = getAuth();
