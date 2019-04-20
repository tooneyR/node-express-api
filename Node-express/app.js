//express is a middleware for http communication
const express = require('express');
//execute express 
const app = express();
//Processes the body of incoming requests
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const blogRoutes = require('./api/routes/blog');

mongoose.connect('mongodb://localhost:27017/BlogApiDB');

//Add the middleware function with use method
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/blog', blogRoutes);

//Object within module for export of code
module.exports = app;