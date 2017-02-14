var express = require('express');
var bodyParser =require('body-parser');
var _ = require('underscore');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/:date', function (req,res) {
	var unix = parseInt(req.params.date,10);
	var timestamp;
	if(unix > 1){
		var date = new Date(unix);
		timestamp = {unix: date.getTime(), natural: date.toDateString()};
		res.json(timestamp);
	}else{
		var date = new Date(req.params.date);
		timestamp = {unix: date.getTime(), natural: date.toDateString()};
		res.json(timestamp);
	}
});

app.listen(PORT, function () {
	console.log('Express Started on port ' + PORT);
});	