
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO0QrzDxX0CFtAS0bOTFzRUudecN5anCM",
  authDomain: "auth-development-6bf89.firebaseapp.com",
  projectId: "auth-development-6bf89",
  storageBucket: "auth-development-6bf89.appspot.com",
  messagingSenderId: "999592886215",
  appId: "1:999592886215:web:ff0476032de742e63d23e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)