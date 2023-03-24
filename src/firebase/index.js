// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHbD8ySKFKqy1caFtPyEnB3X4TOhgDU7A",
  authDomain: "vue-fire-auth-yt-7243d.firebaseapp.com",
  projectId: "vue-fire-auth-yt-7243d",
  storageBucket: "vue-fire-auth-yt-7243d.appspot.com",
  messagingSenderId: "476705014996",
  appId: "1:476705014996:web:f80d9dd4f2412665b7e741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }