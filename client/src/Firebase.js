// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0C8ITnBUmieTy9AihgNozdscEGHxtSUc",
  authDomain: "bit2byte-5ff6d.firebaseapp.com",
  projectId: "bit2byte-5ff6d",
  storageBucket: "bit2byte-5ff6d.appspot.com",
  messagingSenderId: "609693048447",
  appId: "1:609693048447:web:06f325c400a3de53afe94a",
  measurementId: "G-6QZVSJC1J4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };