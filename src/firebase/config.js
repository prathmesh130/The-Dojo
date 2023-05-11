import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdxvD9heDCvQbTie6qdt6SU2DnAronQv0",
    authDomain: "projectmanagement-6ffd4.firebaseapp.com",
    projectId: "projectmanagement-6ffd4",
    storageBucket: "projectmanagement-6ffd4.appspot.com",
    messagingSenderId: "653943799429",
    appId: "1:653943799429:web:1273f4eaf1cc2d185773ec",
    measurementId: "G-G4VPJG5BSH"
};

//   init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth()
const projectStorage = firebase.storage();

//timestamps
const timestamp = firebase.firestore.Timestamp
export { projectAuth, projectFirestore, timestamp, projectStorage };