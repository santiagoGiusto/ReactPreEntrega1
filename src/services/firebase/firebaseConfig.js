import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAqCqULDg8Iww4RNIbFK149VM4Vs8fAKig",
  authDomain: "baco-8b878.firebaseapp.com",
  projectId: "baco-8b878",
  storageBucket: "baco-8b878.appspot.com",
  messagingSenderId: "387072215894",
  appId: "1:387072215894:web:dffa60c3d38c5eafd764f7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)