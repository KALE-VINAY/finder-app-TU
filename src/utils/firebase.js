// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkYgLye1IiQazbJtxDleByvqO7R0A2Fr0",
  authDomain: "food-app-tu.firebaseapp.com",
  projectId: "food-app-tu",
  storageBucket: "food-app-tu.firebasestorage.app",
  messagingSenderId: "172520369779",
  appId: "1:172520369779:web:46de1c99cb7b2fdcee8406",
  measurementId: "G-9VLMM5WB1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();