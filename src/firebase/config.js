import { initializeApp } from "firebase/app";
import { Firestore, getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCObTXNPuQDwFAGGAKDKUAUVbmb-xz1W1E",
    authDomain: "app-rj-coder.firebaseapp.com",
    projectId: "app-rj-coder",
    storageBucket: "app-rj-coder.appspot.com",
    messagingSenderId: "388963907744",
    appId: "1:388963907744:web:0f1370240358a68993b1c5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)