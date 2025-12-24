import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHDu3fFfIPKzP1G-bKrLBWyzt_oJyE7u8",
    authDomain: "react--auth-dfeca.firebaseapp.com",
    projectId: "react--auth-dfeca",
    storageBucket: "react--auth-dfeca.firebasestorage.app",
    messagingSenderId: "250433040150",
    appId: "1:250433040150:web:fc46744da76f52b443ea37",
    measurementId: "G-2R8FMR848Z"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
