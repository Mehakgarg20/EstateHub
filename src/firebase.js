// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ed681.firebaseapp.com",
  projectId: "mern-estate-ed681",
  storageBucket: "mern-estate-ed681.appspot.com",
  messagingSenderId: "751435267940",
  appId: "1:751435267940:web:bb05d9e5f3d0a754cc4471"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);