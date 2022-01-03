var http = require('http');
var app = require('./config/express')();
require('./config/passport')();
const url = 'mongodb+srv://user:password@clusterdswa5.x96ld.mongodb.net/ifsp?retryWrites=true&w=majority';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});