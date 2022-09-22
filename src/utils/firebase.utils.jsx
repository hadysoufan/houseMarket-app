import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0q49ECT94axolTPUK3VaP3DxXRyBnFww",
  authDomain: "housemarket-app-b88c8.firebaseapp.com",
  projectId: "housemarket-app-b88c8",
  storageBucket: "housemarket-app-b88c8.appspot.com",
  messagingSenderId: "851881894375",
  appId: "1:851881894375:web:56c5f1f82670749af29d42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
