var app = require('./server-config.js');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/shortly');
app.listen(port);

console.log('Server now listening on port ' + port);
