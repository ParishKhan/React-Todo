import * as firebase from 'firebase';

// Initialize Firebase
var config = {
apiKey: "AIzaSyAhZ4pTnNxh_GsPkaFsH4WYkXDmOMHjm68",
authDomain: "todo-app-23083.firebaseapp.com",
databaseURL: "https://todo-app-23083.firebaseio.com",
storageBucket: "todo-app-23083.appspot.com",
messagingSenderId: "894925955135"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();


firebaseRef.set({
    app: {
        appName: 'Todo APP',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: "Parish",
        age: 24,
    }
});


var notesRef = firebaseRef.child('notes');

var newNote = notesRef.push({
    text: 'Feed the dog'
})

var newNote = notesRef.push({
    text: 'Feed the Elephant'
});