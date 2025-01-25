
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWitAXyViBLIqEnlSgVNHiqRODVH7Ywl8",
  authDomain: "blogging-app-reactjs.firebaseapp.com",
  projectId: "blogging-app-reactjs",
  storageBucket: "blogging-app-reactjs.appspot.com",
  messagingSenderId: "521158653334",
  appId: "1:521158653334:web:fa4b8e0be562e2ef9d19b7",
  measurementId: "G-KP9G783BC7"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const auth = getAuth();


export const db = getFirestore(app);

export const storage = getStorage(app);

