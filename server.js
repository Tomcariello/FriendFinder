// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Star Wars Characters (DATA)
// =============================================================
// var characters = [{
// 	routeName: 'yoda',
// 	name: 'Yoda',
// 	role: 'Jedi Master',
// 	age: 900,
// 	forcePoints: 2000
// }, {
// 	routeName: 'darthmaul',
// 	name: 'Darth Maul',
// 	role: 'Sith Lord',
// 	age: 200,
// 	forcePoints: 1200
// }, {
// 	routeName: 'obiwankenobi',
// 	name: 'Obi Wan Kenobi',
// 	role: 'Jedi Master',
// 	age: 55,
// 	forcePoints: 1350
// }];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	console.log('root access requested');
	res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

// app.get('/add', function (req, res) {

// 	res.sendFile(path.join(__dirname, 'add.html'));
// });

app.get('/allchar', function (req, res) {
	res.sendFile(path.join(__dirname, 'allchar.html'));
});

app.get('/charlist', function(req, res) {
	console.log('charlist requested');
	res.json(characters);
});

// Search for Specific Character (or all characters) - provides JSON
app.get('/api/:characters?', function (req, res) {
	var chosen = req.params.characters;

	if (chosen) {
		console.log(chosen);

		for (var i = 0; i < characters.length; i++) {
			if (chosen === characters[i].routeName) {
				res.json(characters[i]);
				return;
			}
		}

		res.json(false);
	} else {
		res.json(characters);
	}
});

// Create New Characters - takes in JSON input
app.post('/add', function (req, res) {
	console.log("Adding data");
	console.log(req);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
