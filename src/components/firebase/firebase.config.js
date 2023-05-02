// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrQ_QumyHlsTM-yU0Mc-a1KyjfgyUSIAI",
  authDomain: "chef-table-bd.firebaseapp.com",
  projectId: "chef-table-bd",
  storageBucket: "chef-table-bd.appspot.com",
  messagingSenderId: "637618874243",
  appId: "1:637618874243:web:521b5f7cd41994daff38b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;