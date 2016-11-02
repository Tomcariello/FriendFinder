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
		console.log(req.body);

		//I have no idea why this is necessary. When I put this directly in the array they were strings & I could not parseInt...?
		var answer01 = parseInt(req.body.Scores[0]);
		var answer02 = parseInt(req.body.Scores[1]);
		var answer03 = parseInt(req.body.Scores[2]);
		var answer04 = parseInt(req.body.Scores[3]);
		var answer05 = parseInt(req.body.Scores[4]);
		var answer06 = parseInt(req.body.Scores[5]);
		var answer07 = parseInt(req.body.Scores[6]);
		var answer08 = parseInt(req.body.Scores[7]);
		var answer09 = parseInt(req.body.Scores[8]);
		var answer10 = parseInt(req.body.Scores[9]);

		var submittedData = {
			name: req.body.name,
			photo: req.body.photo,
			scores: [answer01,answer02,answer03,answer04,answer05,answer06,answer07,answer08,answer09,answer10]
		};

		friendsList.push(submittedData);
		console.log(friendsList);
	});
}