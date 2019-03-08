import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyAJ8LFzpWrk8qeyyGKjV35il796Prit7rU",
    authDomain: "comments-reactjs-mario.firebaseapp.com",
    databaseURL: "https://comments-reactjs-mario.firebaseio.com",
    projectId: "comments-reactjs-mario",
    storageBucket: "comments-reactjs-mario.appspot.com",
    messagingSenderId: "653450200384"
  };
  firebase.initializeApp(config)

  export const database = firebase.database()