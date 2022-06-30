import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
//firebase is the db and firestore is the storage section for storing photos

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB40Ui4Uh-6sTmYvY2RgdtpaqIYnAo1tkQ",
  authDomain: "myfiregram-9a9de.firebaseapp.com",
  projectId: "myfiregram-9a9de",
  storageBucket: "myfiregram-9a9de.appspot.com",
  messagingSenderId: "1068522885583",
  appId: "1:1068522885583:web:2886eadac1d5701eed02ba",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }