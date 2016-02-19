var express = require('express');
var server = express();
var port = 8080;
var states = require('./server-assets/states');

server.use(express.static(__dirname + '/public'));

server.get('/states', function(req, res){
    return res.send(states);
})

server.listen(port, function(){
   console.log('BOOBS can be seen at port: ', port);
});