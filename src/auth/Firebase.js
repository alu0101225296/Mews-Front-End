// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
