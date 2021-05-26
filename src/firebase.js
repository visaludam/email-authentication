import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCObe2bQYza7Y43buQzZle72kMPNvADQv8",
    authDomain: "react-firebase-emaillogin.firebaseapp.com",
    projectId: "react-firebase-emaillogin",
    storageBucket: "react-firebase-emaillogin.appspot.com",
    messagingSenderId: "422541730965",
    appId: "1:422541730965:web:778539271fdc6dd931679c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

export {auth}
export default db