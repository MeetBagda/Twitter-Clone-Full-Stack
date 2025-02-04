import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQ7AXQ1CJKusVKHORsnTaaOEfaEwDZzos",
  authDomain: "twiller-fced2.firebaseapp.com",
  projectId: "twiller-fced2",
  storageBucket: "twiller-fced2.firebasestorage.app",
  messagingSenderId: "874960194127",
  appId: "1:874960194127:web:e6bf609b854d96b5ecf83a",
  measurementId: "G-MB1LW5QFLG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;