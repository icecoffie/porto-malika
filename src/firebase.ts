import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdnzG-VvEMFpNfERfQdDqw_rzixOiLqKc",
  authDomain: "likes-web-malika.firebaseapp.com",
  projectId: "likes-web-malika",
  storageBucket: "likes-web-malika.firebasestorage.app",
  messagingSenderId: "53105575987",
  appId: "1:53105575987:web:7a37c23a5e3ba720b7bb46",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
