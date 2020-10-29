import * as firebase from 'firebase';

import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCZCXQ2nCMgDEEG0RAGGdo_ZEEP0J0YIX0",
  authDomain: "coronavirus-4cf01.firebaseapp.com",
  databaseURL: "https://coronavirus-4cf01.firebaseio.com",
  projectId: "coronavirus-4cf01",
  storageBucket: "coronavirus-4cf01.appspot.com",
  messagingSenderId: "212609824178",
  appId: "1:212609824178:web:8a1b444beb7afa8646e0ab",
  measurementId: "G-J5SD2GGDXV"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

