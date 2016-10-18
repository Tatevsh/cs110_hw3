'use strict'

let http = require('http');
const port = 8000;
const server = http.createServer(function(request, response) {
	if (request.url === '/hey') {
		response.writeHead('200', {'Content-Type' : 'text/plain'});
		response.write('hiii');
		response.end();
	}
	else if (request.url === '/howru') {
		response.writeHead('200', {'Content-Type' : 'text/plain'});
		response.write("Are you okay?");
		response.end();
	}
	else if (request.url === '/concert') {
		response.writeHead('200', {'Content-Type' : 'text/plain'});
		response.write("I've got tickets for today's concert!");
		response.end();
	}
	else if (request.url === '/tomorrowevening') {
		response.writeHead('200', {'Content-Type' : 'text/plain'});
		response.write("We have to meet in the evening tomorrow!");
		response.end();
	}
	else if (request.url === '/ok') {
		response.writeHead('200', {'Content-Type' : 'text/plain'});
		response.write('Okay then, have a nice day!');
		response.end();
	}
	else {
		response.writeHead('404', {'Content-Type' : 'text/plain'});
		response.write('Error occured');
		response.end();
	}
})

server.listen(port, () => console.log('checking localhost: 8000'));
