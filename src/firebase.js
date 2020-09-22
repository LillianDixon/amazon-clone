import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDuzSlF9qMFkJtNX40yf69_hNHEdnjf7OI",
  authDomain: "clone-de5d1.firebaseapp.com",
  databaseURL: "https://clone-de5d1.firebaseio.com",
  projectId: "clone-de5d1",
  storageBucket: "clone-de5d1.appspot.com",
  messagingSenderId: "773002936975",
  appId: "1:773002936975:web:7f08714b64f93d5ab726fa",
  measurementId: "G-TQJS9BK26W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};