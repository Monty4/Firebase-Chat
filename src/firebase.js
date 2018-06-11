import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyCfsKavRiRqcltzq4v0HHnKdbYKZXah6bo",
    authDomain: "first-firebase-13ff7.firebaseapp.com",
    databaseURL: "https://first-firebase-13ff7.firebaseio.com",
    projectId: "first-firebase-13ff7",
    storageBucket: "first-firebase-13ff7.appspot.com",
    messagingSenderId: "927996707439"
})

const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)


const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()

export { db, provider, auth }