// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKPUTOQEMnXlaJcvL1v-4Ytm5ze6BliSE",
  authDomain: "phone-auth-728c6.firebaseapp.com",
  projectId: "phone-auth-728c6",
  storageBucket: "phone-auth-728c6.appspot.com",
  messagingSenderId: "963493987803",
  appId: "1:963493987803:web:cd252e7be44b4d048453fe"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
