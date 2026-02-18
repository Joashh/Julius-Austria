// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAu-_f5fzlnEpSGuDCl9IuvPGhHU9YhEJk",
  authDomain: "joash-s-portfolio.firebaseapp.com",
  databaseURL: "https://joash-s-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "joash-s-portfolio",
  storageBucket: "joash-s-portfolio.firebasestorage.app",
  messagingSenderId: "492456754582",
  appId: "1:492456754582:web:6318f40ed8cbb086e331b7",
  measurementId: "G-27J4N6CCE3"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
