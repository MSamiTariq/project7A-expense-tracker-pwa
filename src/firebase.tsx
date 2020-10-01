import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBzRgW59C8UM6PpRZJCFv1BJoAVSQz0EyU",
    authDomain: "fir-tracker-edd12.firebaseapp.com",
    databaseURL: "https://fir-tracker-edd12.firebaseio.com",
    projectId: "fir-tracker-edd12",
    storageBucket: "fir-tracker-edd12.appspot.com",
    messagingSenderId: "185650354740",
    appId: "1:185650354740:web:c10f76b25d63fdad408861",
    measurementId: "G-36PGQ9M1VB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
