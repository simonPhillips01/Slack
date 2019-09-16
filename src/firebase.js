import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyD1vuxJSz9PdS1VRzXiHh7PeiTG_8xCYyA",
    authDomain: "react-slack-clone-c9476.firebaseapp.com",
    databaseURL: "https://react-slack-clone-c9476.firebaseio.com",
    projectId: "react-slack-clone-c9476",
    storageBucket: "react-slack-clone-c9476.appspot.com",
    messagingSenderId: "215067502561",
    appId: "1:215067502561:web:83cff3d30ea6f85d9bd4a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;