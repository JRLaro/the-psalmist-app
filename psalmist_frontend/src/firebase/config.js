import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./config";


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({prompt: 'select_account'})


export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUser = async (userAuth, additionalData) => {
    if (!userAuth) return
    const {uid} = userAuth


    const userRef = firestore.doc(`users/${uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const timestamp = new Date()


        try {
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                ...additionalData
            })
        } catch (err) {
            console.error();
        }
    }
    return userRef;
}