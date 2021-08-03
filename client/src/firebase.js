
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCabealybHy9HLIKz1Ut7cX3z8MnBKV6Jo",
    authDomain: "envi-media.firebaseapp.com",
    projectId: "envi-media",
    storageBucket: "envi-media.appspot.com",
    messagingSenderId: "1046093236765",
    appId: "1:1046093236765:web:34b47bce78699c5c1554f4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db