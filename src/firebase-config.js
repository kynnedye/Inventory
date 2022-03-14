import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCnw_eN2kI8mORQmvFDDG01Fc7YGKmxRA4",
    authDomain: "inventory-628dd.firebaseapp.com",
    projectId: "inventory-628dd",
    storageBucket: "inventory-628dd.appspot.com",
    messagingSenderId: "628935363071",
    appId: "1:628935363071:web:4535a057e7b7929375bfca",
    measurementId: "G-X3G3LSNYY2"
  };

  const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)