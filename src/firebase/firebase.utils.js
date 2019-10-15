import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAA7M6uTz5TpbG6TQTMHQPmmPt2BOXMlVg",
    authDomain: "crwn-db-c236f.firebaseapp.com",
    databaseURL: "https://crwn-db-c236f.firebaseio.com",
    projectId: "crwn-db-c236f",
    storageBucket: "crwn-db-c236f.appspot.com",
    messagingSenderId: "470920076392",
    appId: "1:470920076392:web:c6523cbeb6e5979a302fdd",
    measurementId: "G-537LBCKL38"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;