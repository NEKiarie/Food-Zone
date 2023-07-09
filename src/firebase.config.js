import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAAYtFPaH-A_8TqhYQoix2PKEE1RywoQsA",
    authDomain: "resturantapp-1c93d.firebaseapp.com",
    databaseURL: "https://resturantapp-1c93d-default-rtdb.firebaseio.com",
    projectId: "resturantapp-1c93d",
    storageBucket: "resturantapp-1c93d.appspot.com",
    messagingSenderId: "309049852973",
    appId: "1:309049852973:web:a2e91d9d5ac323cb50a4a4"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export  { app, firestore, storage}
