var express = require('express');
var layouts = require('express-ejs-layouts');

// Declare express app
var app = express();

// Declare a reference to models folder
var db = require('./models'); 

// Set views to EJS
app.set('view engine', 'ejs');