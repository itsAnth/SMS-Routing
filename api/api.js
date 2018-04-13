var router = require('express').Router();


router.route('/').get(function(req, res) {
	var oRes = {
		success: true,
		status: "Hello World"
	};
	var sResponse = JSON.stringify(oRes);
	res.type('json');
	res.status(200).send(sResponse);
});