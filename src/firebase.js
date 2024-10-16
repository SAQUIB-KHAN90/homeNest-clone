import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2YZGW9QzEaizzsVJ9SZLZpPRTiUHoujU",
  authDomain: "homenest-a-e-state-website.firebaseapp.com",
  projectId: "homenest-a-e-state-website",
  storageBucket: "homenest-a-e-state-website.appspot.com",
  messagingSenderId: "828739058485",
  appId: "1:828739058485:web:4814f7df4b9d894861ea7c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
