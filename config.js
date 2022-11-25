import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyA8Pyex9kDWVs2LATkAldZyxCGRmQ9qZ6w",
  authDomain: "project-71-7f1a0.firebaseapp.com",
  projectId: "project-71-7f1a0",
  storageBucket: "project-71-7f1a0.appspot.com",
  messagingSenderId: "883284495837",
  appId: "1:883284495837:web:1d53e763c4a43c68093a34"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
