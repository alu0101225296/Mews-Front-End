// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAwBkoYK0nSevWT7eUldHWPTyKgdutFvYs',
  authDomain: 'mews-51910.firebaseapp.com',
  projectId: 'mews-51910',
  storageBucket: 'mews-51910.appspot.com',
  messagingSenderId: '958853525348',
  appId: '1:958853525348:web:ace8e4703856bfdc551471',
  measurementId: 'G-JS0BRWMHPM',
};

let app =
  firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const auth = firebase.auth();

export { auth };
