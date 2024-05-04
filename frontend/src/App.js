import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionDate } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyB-AsmvRhQmq2LxiUtwN11gNuXm5WiW6lg",
  authDomain: "password-challenge.firebaseapp.com",
  projectId: "password-challenge",
  storageBucket: "password-challenge.appspot.com",
  messagingSenderId: "145968987775",
  appId: "1:145968987775:web:09037799273550b6e6094a",
  measurementId: "G-H8JDJVZ7GX"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
