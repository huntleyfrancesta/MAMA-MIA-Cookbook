import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaAeYSbadW_hmtO9d8h_70VOtS6e4IMmk",
  authDomain: "recipe-app-challenge.firebaseapp.com",
  databaseURL: "https://recipe-app-challenge.firebaseio.com",
  projectId: "recipe-app-challenge",
  storageBucket: "recipe-app-challenge.appspot.com",
  messagingSenderId: "52070158457",
  appId: "1:52070158457:web:239fb73767a69b07b284a8",
};

firebase.initializeApp(firebaseConfig);