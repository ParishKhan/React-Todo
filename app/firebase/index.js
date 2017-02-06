import * as firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAhZ4pTnNxh_GsPkaFsH4WYkXDmOMHjm68",
    authDomain: "todo-app-23083.firebaseapp.com",
    databaseURL: "https://todo-app-23083.firebaseio.com",
    storageBucket: "todo-app-23083.appspot.com",
    messagingSenderId: "894925955135"
    };

    // initial Firebase
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
