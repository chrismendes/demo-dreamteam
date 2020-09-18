import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: 'AIzaSyCBGW5en-a8lASLaMB3H8z1KvqCRje6mcE',
  authDomain: 'football-dream-team.firebaseapp.com',
  databaseURL: 'https://football-dream-team.firebaseio.com',
  projectId: 'football-dream-team',
  storageBucket: 'football-dream-team.appspot.com',
  messagingSenderId: '624429412264',
  appId: '1:624429412264:web:8f58356383a2b4c438779d',
  measurementId: 'G-MVJMXJ8FVW'
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

window.firebase = firebase; // (For dev/console purposes)

export default firebase;
