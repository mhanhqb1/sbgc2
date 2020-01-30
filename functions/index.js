const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');

const firebaseApp = firebase.initializeApp(
	functions.config().firebase
);

// function getFacts() {
// 	const ref = firebaseApp.database().ref('facts');
// 	return ref.once('value').then(snap => snap.val());
// }

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	// getFacts.then(facts => {
		
	// });
	let facts = [
		{'text' : 'aaa'},
		{'text' : 'bbb'}
	];
	res.render('index', { facts });
});

app.get('/t', (req, res) => {
	res.send(`${Date.now()}`);
});

app.get('/tc', (req, res) => {
	res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	res.send(`${Date.now()}`);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
