import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjfWgvxD6IirexxTBSByN-Hcf8HSwC_YE",
  authDomain: "photo-folio-356cb.firebaseapp.com",
  projectId: "photo-folio-356cb",
  storageBucket: "photo-folio-356cb.appspot.com",
  messagingSenderId: "698010145523",
  appId: "1:698010145523:web:09e19182673e9aefca5d86",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
