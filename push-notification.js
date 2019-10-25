// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import * as firebase1 from "firebase/messaging"

var firebaseConfig = {
    apiKey: "AIzaSyC_uReoaswzqnCBEYp3twRVWkEsbhpwRoE",
    authDomain: "movie-b4d1c.firebaseapp.com",
    databaseURL: "https://movie-b4d1c.firebaseio.com",
    projectId: "movie-b4d1c",
    storageBucket: "movie-b4d1c.appspot.com",
    messagingSenderId: "216457091533",
    appId: "1:216457091533:web:a0f99fde6efd338189cc84",
    measurementId: "G-W1DBCW5JWP"
  };

  if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
  }
  // Initialize Firebase


window.Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
  } else {
    console.log('Unable to get permission to notify.');
  }
});
