import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyC9T0XwWw-JLAEkrPiIePs0Rgm7dR1UUEc",
  authDomain: "projetreunion-d0001.firebaseapp.com",
  databaseURL: "https://projetreunion-d0001.firebaseio.com",
  projectId: "projetreunion-d0001",
  storageBucket: "projetreunion-d0001.appspot.com",
  messagingSenderId: "1049223730427",
  appId: "1:1049223730427:web:ad8e7551d78b8cf8efcc5e",
  measurementId: "G-HTNBZ6GQMX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase