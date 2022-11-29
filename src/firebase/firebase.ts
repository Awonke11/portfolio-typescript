import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDu3_ClY9C9xNH3W03zVLvmzeJrfnyfxps",
  authDomain: "portfolio-typescript-d609c.firebaseapp.com",
  projectId: "portfolio-typescript-d609c",
  storageBucket: "portfolio-typescript-d609c.appspot.com",
  messagingSenderId: "1050648226050",
  appId: "1:1050648226050:web:e940ffe7f7e413bafe7a1b",
  measurementId: "G-VZRH2RW7DN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);