// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBHLuAT7hWfJS_yy2EmvjX-qhAKamZbrQY",
    authDomain: "clone-cff60.firebaseapp.com",
    projectId: "clone-cff60",
    storageBucket: "clone-cff60.appspot.com",
    messagingSenderId: "180015894442",
    appId: "1:180015894442:web:ccdcbfd5bd9187c91a65d3",
    measurementId: "G-JQC00NEJNS"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore
  const auth=firebase.auth();

  export {db,auth};