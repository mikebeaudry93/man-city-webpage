import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDKB1XDEmsoMys5CSxYUwz5wqQoegIj0oc",
  authDomain: "m-city-5d00c.firebaseapp.com",
  databaseURL: "https://m-city-5d00c.firebaseio.com",
  projectId: "m-city-5d00c",
  storageBucket: "m-city-5d00c.appspot.com",
  messagingSenderId: "1052426330750",
  appId: "1:1052426330750:web:9a207d775f0937ca9aee2f",
  measurementId: "G-1CD9TSS1FX",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { firebase, firebaseMatches, firebasePromotions };
