import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBE8zojUM28Ek1uAunHVUrpiEDZTlZ6aIc",
  authDomain: "fireblogs-ed1b5.firebaseapp.com",
  projectId: "fireblogs-ed1b5",
  storageBucket: "fireblogs-ed1b5.appspot.com",
  messagingSenderId: "462775520892",
  appId: "1:462775520892:web:4a1d023fc5a75cd88dc3f9"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();