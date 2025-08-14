// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0WM21eVJGzmmQrqXxNk89y-W-c_qMfYM",
  authDomain: "login-auth-7f597.firebaseapp.com",
  projectId: "login-auth-7f597",
  storageBucket: "login-auth-7f597.firebasestorage.app",
  messagingSenderId: "614678571324",
  appId: "1:614678571324:web:ac44f977a9a7f702f15639"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(App);
export default App;