// Potential Friends (DATA)
// =============================================================
var friendsList = [{
	name: 'Homer Simpson (all 1)',
	photo: 'http://www.trbimg.com/img-573a089a/turbine/ct-homer-simpson-live-pizza-debate-met-0517-20160516',
	scores: [1,1,1,1,1,1,1,1,1,1],
}, {
	name: 'Cindy Lou Hu (all 5)',
	photo: 'http://3.bp.blogspot.com/-NleYqGDpEl0/TuueZscUsFI/AAAAAAAAAWQ/XiOnyDJm9fo/s1600/CJSNMTT.jpg',
	scores: [5,5,5,5,5,5,5,5,5,5],
}, {
	name: 'Charlie Brown (all 3)',
	photo: 'https://upload.wikimedia.org/wikipedia/en/2/22/Charlie_Brown.png',
	scores: [3,3,3,3,3,3,3,3,3,3],
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
var path = require('path');

module.exports = function (app) {

	app.get('/app/public/styles.css', function (req, res) {
		console.log('Serve up css');
		res.sendFile(path.join(__dirname, '/../public/styles.css'));
	});

	app.get('/', function (req, res) {
		console.log('root access requested');
		res.sendFile(path.join(__dirname, '/../public/home.html'));
	});

	app.get('/app/public/survey.html', function (req, res) {
		console.log('root access requested');
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});


	app.get('/friendsList', function(req, res) {
		console.log('friendsList requested');
		res.json(friendsList);
	});

	// Create New Characters - takes in JSON input
	app.post('/add', function (req, res) {
		console.log("Data recieved on server. Adding data to database (pending)");
		console.log(req);
	});
}