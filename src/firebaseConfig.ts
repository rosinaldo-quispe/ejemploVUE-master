import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7j1yUmyavGuqZEdnwlPKjmGzzy5v883A",
  authDomain: "iestpchupa2023-b51f3.firebaseapp.com",
  projectId: "iestpchupa2023-b51f3",
  storageBucket: "iestpchupa2023-b51f3.appspot.com",
  messagingSenderId: "1095577894729",
  appId: "1:1095577894729:web:5be9a13aae95d3aa3fe498"

};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };