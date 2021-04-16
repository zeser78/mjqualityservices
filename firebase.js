import firebase from "firebase/app"
import "firebase/analytics"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_e34Bpq2iIu6lHlS7J5nBjfpcY_ZXonc",
  authDomain: "mjqservices.firebaseapp.com",
  databaseURL: "https://mjqservices.firebaseio.com",
  projectId: "mjqservices",
  storageBucket: "mjqservices.appspot.com",
  messagingSenderId: "678583414165",
  appId: "1:678583414165:web:dde712897dd57d84f35a9c",
  measurementId: "G-Y5Z3HN2RWD",
}

firebase.initializeApp(firebaseConfig)

firebase.analytics()
