import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './motes-background.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
firebase.initializeApp({
  apiKey: "AIzaSyDLhF6Cvyh2BMPeDcHe5JJCiYe8JUVt1Cc",
  authDomain: "lie-builder.firebaseapp.com",
  projectId: "lie-builder",
  storageBucket: "lie-builder.appspot.com",
  messagingSenderId: "188809832678",
  appId: "1:188809832678:web:31773ff4cecb52c3af7327",
  measurementId: "G-ZV9PG604SX"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
