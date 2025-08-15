
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAZX5Pnpher_5FiFE4Qm-alzw6DNz8jNTA",
  authDomain: "cesa-website-a696a.firebaseapp.com",
  projectId: "cesa-website-a696a",
  storageBucket: "cesa-website-a696a.firebasestorage.app",
  messagingSenderId: "410887009820",
  appId: "1:410887009820:web:19dc09ba8a56911b6751d9",
  measurementId: "G-D7BXNY5668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };