var express = require('express');
var api = require('./api/api');
var config = require('./config/config');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");

require('dotenv').config();

process.env.ENVIRONMENT = process.env.ENVIRONMENT || 'development';
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', api);
// setup global error handling
app.use(function(err, req, res, next) {
	var oRes = {
		success: false,
		payload: {}
	};
	var sResponse = JSON.stringify(oRes);
	res.type('json');
	res.status(400).send(sResponse);
});

app.listen(config.port, function() {
	console.log('Node app is running on port', config.port);
});