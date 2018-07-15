import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDEWPueEVf0uEjKLM4oRu3JEOzNCDMPv94",
    authDomain: "foodpep-dev.firebaseapp.com",
    databaseURL: "https://foodpep-dev.firebaseio.com",
    projectId: "foodpep-dev",
    storageBucket: "",
    messagingSenderId: "546882423806"
  };
  export const firebaseApp = firebase.initialize(config);
