//  Node JS < Back-end area >
var express = require('express')
var app = express()

app.use(express.static('Public'))

app.get('/', function(req, res) {
	// res.send('<h1>Hello World</h1>')
	res.sendFile(__dirname + "/index.html")
});

app.listen(8080, function() {
	console.log('Server is run. http://localhost:8080')
})