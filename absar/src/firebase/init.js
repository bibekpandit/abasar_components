import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAHJ9pfi45y_MVfTO4TFJStac__ntV0GVw",
    authDomain: "fir-beginner-7a581.firebaseapp.com",
    databaseURL: "https://fir-beginner-7a581.firebaseio.com",
    projectId: "fir-beginner-7a581",
    storageBucket: "fir-beginner-7a581.appspot.com",
    messagingSenderId: "470614166429"
  };

  const firebaseApp = firebase.initializeApp(config)
//   firebaseApp.firestore().settings({ timestampsInSanpshots: true })

  export default firebaseApp.firestore()





