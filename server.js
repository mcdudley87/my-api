const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));


//post, create  route
app.post('/bands', function(req, res) {
	db.band.create({
		bandName: req.body.bandName,
		memberNames: req.body.memberNames, 
		sinceYear: parseInt(req.body.sinceYear),
		albumsOut: parseInt(req.body.albumsOut)
	}).then(function(data) {
		console.log(data);
		res.json(data);
	})
});


// app.post('/users', function(req, res) {
// 	db.user.create({
// 		firstName: req.body.firstName,
// 		lastName: req.body.lastName,
// 		age: parseInt(req.body.age),
// 		email: req.body.email
// 	}).then(function(data) {
// 		console.log(data);
// 		res.json(data);
// 	})
// });



//get-all route
app.get('/bands', function(req, res) {
	db.band.findAll().then(function(bands){
		res.json(bands);
	});
});

// app.get('/users', function(req, res) {
// 	db.user.findAll().then(function(users) {
// 		res.json(users);
// 	});
// });

//get-one route

app.get('/bands/:id', function(req, res) {
	db.band.findOne({
		where: {id: parseInt(req.params.id)}
	}).then(function(user) {
		res.json(user);
	});
});

// app.get('/users/:id', function(req,res) {
// 	db.user.findOne({
// 		where: {id: parseInt(req.params.id)}
// 	}).then(function(user) {
// 		res.json(user);
// 	})
// });

//update route

app.put('/bands/:id', function(req, res) {
	db.band.update({
		bandName: req.body.bandName,
		memberNames: req.body.memberNames, 
		sinceYear: parseInt(req.body.sinceYears),
		albumsOut: parseInt(req.body.albumsOut)
	}, {
		where: {id: parseInt(req.params.id)}
	}).then(function(count) {
		res.json(count);
	});
});

// app.put('/users/:id', function(req, res) {
// 	db.user.update({
// 		firstName: req.body.firstName,
// 		lastName: req.body.lastName,
// 		age: parseInt(req.body.age),
// 		email: req.body.email
// 	}, {
// 		where: {id: parseInt(req.params.id)}
// 	}).then(function(count) {
// 		res.json(count);
// 	});
// });

//delete route

app.delete('/bands/:id', function(req, res) {
	db.user.destroy({
		where: {id: parseInt(req.params.id)}
	}).then(function(data) {
		res.json(data);
	});
});

// app.delete('/users/:id', function(req, res) {
// 	db.user.destroy({
// 		where: {id: parseInt(req.params.id)}
// 	}).then(function(data) {
// 		res.json(data);
// 	});
// });



app.get('/', function(req,res) {
	res.send("Everything is beautiful and nothing hurts.")
});

app.listen(3000, function() {
	console.log("the ghosts in the machine are listening...")
}); 



/*
// Done
// Make your model (refer to notes, no spaces, only commas)
//		-names, fields, string or integer, 
// Run the migrations
// Write routes: 
//create one record route; 
//read one record route; 
//read all records route; 
//update one record route; 
//delete one record route
// res.json to send them back
// all routes are '  /collectionname '
// 5 tops






*/