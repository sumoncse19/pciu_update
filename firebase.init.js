// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMvja32ORKZebHXAwfIasay2XAgEoTtsw",
  authDomain: "pciu-journal.firebaseapp.com",
  projectId: "pciu-journal",
  storageBucket: "pciu-journal.appspot.com",
  messagingSenderId: "771052868594",
  appId: "1:771052868594:web:6233918ace2d232197516b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
