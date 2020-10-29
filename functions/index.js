/* eslint-disable promise/always-return */
const functions = require('firebase-functions');
var fetch = require('node-fetch')

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.push = functions.database.ref('contacts/').onCreate(event => {

    const root = event.data.ref.root
    var messages = []

    return root.child('/users').once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {

            var expoToken = childSnapshot.val().expoToken;

            messages.push({
                "to": expoToken,
                "sound": "default",
                "body": "New Note Added"
            });
        });
        return Promise.all(messages)

    })
        .then(messages => {
            fetch('https://exp.host/--/api/v2/push/send', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messages)

            });
        })
        .catch(reason => {
            console.log(reason)
        })
});
