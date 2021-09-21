import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDvz0idqzpxgVeCNti011cda6aKawsc4rM",
    authDomain: "todoapp-9b650.firebaseapp.com",
    projectId: "todoapp-9b650",
    storageBucket: "todoapp-9b650.appspot.com",
    messagingSenderId: "972896951057",
    appId: "1:972896951057:web:db0d66ae39e5ab1ef00ab0",
    measurementId: "G-GPLQSFXYD8"
  };
  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;