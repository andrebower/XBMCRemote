'use strict';

var _ = require('lodash');
var http = require('http');

// Get list of scans
exports.index = function(req, res) {
  var options = {
  		hostname: '192.168.1.102',
  		port: 80,
  		path: '/jsonrpc',
  		method: 'POST'
  	};
	var request = http.request(options, function(result) {
		var body = '';
		console.log('STATUS: ' + result.statusCode);
	  	console.log('HEADERS: ' + JSON.stringify(result.headers));
	  	result.setEncoding('utf8');
	  	result.on('data', function (chunk) {
	    	body+=chunk;
	  	});
	  	result.on('end',function(){
	  		console.log(body);
	  		var result = JSON.parse(body).result;
	  		
	  		res.json(200,result);
	  	})
	});

	request.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});

	// write data to request body
	request.write('{"jsonrpc": "2.0", "method": "VideoLibrary.Scan", "params": {}, "id": "libMovies"}');
	//"filter": {"field": "playcount", "operator": "is", "value": "0"},
	request.end();
};