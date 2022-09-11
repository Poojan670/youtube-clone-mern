import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxmoXBdb1Hl8qKYTkgvIrOMoowFPakcvY",
    authDomain: "yt-clone-43541.firebaseapp.com",
    projectId: "yt-clone-43541",
    storageBucket: "yt-clone-43541.appspot.com",
    messagingSenderId: "145922331497",
    appId: "1:145922331497:web:8e18700ef84b3b910ce3f8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;