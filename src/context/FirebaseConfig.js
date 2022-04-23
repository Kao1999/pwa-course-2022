import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyCPYcp9CGp51nnh5S_nSORNVd_cjYO8Rcc",
  authDomain: "pwa-coures-2022.firebaseapp.com",
  projectId: "pwa-coures-2022",
  storageBucket: "pwa-coures-2022.appspot.com",
  messagingSenderId: "1055519115123",
  appId: "1:1055519115123:web:69e4df64bbcd6c718ea706",
  measurementId: "G-5LTJ5RYYJX",
  databaseURL: "https://pwa-coures-2022-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;