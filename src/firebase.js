import { initializeApp } from 'firebase/app';
import 'firebase/auth'; // Import any other specific modules you need from firebase
import {getFirestore} from "@firestore/firestore"

const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
});

export const auth = app.auth();
export const db = getFirestore(app)
export default app;
