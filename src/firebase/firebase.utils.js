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
};

export const createUserProfileDocument = async (userAuth, additinoalData) => {
    if (!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additinoalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        };

    }

    return userRef;

}

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collection => {
    const transformCollection = collection.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;