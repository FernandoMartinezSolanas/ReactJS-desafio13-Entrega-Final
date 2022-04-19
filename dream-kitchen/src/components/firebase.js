// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASiMEcWRPwsX75kV0PQNPH-xNa-NtsrIk",
  authDomain: "dream-kitchen-coderhouse.firebaseapp.com",
  projectId: "dream-kitchen-coderhouse",
  storageBucket: "dream-kitchen-coderhouse.appspot.com",
  messagingSenderId: "581078015625",
  appId: "1:581078015625:web:291376235ab46fd6283058",
  measurementId: "G-XCC0TL1QWF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
