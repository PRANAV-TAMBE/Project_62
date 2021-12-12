 import firebase from 'firebase';

//initialize your database
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_OavoWVc7mUiFXYSV_tHDHgPD7nsbfLY",
  authDomain: "class-attendance-app-9ff4c.firebaseapp.com",
  databaseURL: "https://class-attendance-app-9ff4c-default-rtdb.firebaseio.com",
  projectId: "class-attendance-app-9ff4c",
  storageBucket: "class-attendance-app-9ff4c.appspot.com",
  messagingSenderId: "328600074222",
  appId: "1:328600074222:web:a4371dc7575d304b1a80ff",
  measurementId: "G-13SMPVVZFN"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);

  
}

  export default firebase.database()
 

  