import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4bK3jlL5I6ObPEuy4ugp1UCl_JKh6FZg",
    authDomain: "react-contact-form-23e78.firebaseapp.com",
    databaseURL: "https://react-contact-form-23e78.firebaseio.com",
    projectId: "react-contact-form-23e78",
    storageBucket: "react-contact-form-23e78.appspot.com",
    messagingSenderId: "417695493914",
    appId: "1:417695493914:web:1baa7179e365820fee06a3"
});

var db = firebaseApp.firestore();
export { db }