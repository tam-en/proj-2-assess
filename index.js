var express = require('express');
var layouts = require('express-ejs-layouts');
var parser = require('body-parser');


// Declare express app
var app = express();

// Declare a reference to models folder
var db = require('./models'); 


// Set views to EJS
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(layouts);
app.use('/', express.static('static'));
app.use(parser.urlencoded({extended: false}));



// Declare routes
app.get('/', function(req, res){
	res.render('home');
});

app.get('/favorites', function(req, res){
	db.animal.findAll().then(function(animals) {
		res.render('favorites', { animals });
  // users will be an array of all User instances
	});
});

// 	db.animal.findAll({
// 		species_name: req.body.species_name,
// 		scientific_name: req.body.scientific_name,
// 		image_url: req.body.image_url,
// 		description: req.body.description,
// 		extinct: req.body.extinct
// 	});
// 	res.render('favorites', { animals });
// });


app.post('/favorites/new', function(req, res){
	db.animal.create({
		species_name: req.body.species_name,
		scientific_name: req.body.scientific_name,
		image_url: req.body.image_url,
		description: req.body.description,
		extinct: req.body.extinct
	});
	res.redirect('/favorites');
});


app.get('/favorites/new', function(req, res){
	// get form for entering new animal
	res.render('new');
});


// Listen on port
app.listen(process.env.PORT || 8000, function(){
	console.log('hello world!');
});