var http = require('http');
var dt = require('./timeModule');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World!" + " " + dt.showDate());
    var q = url.parse(req.url,true).query;
    var text = q.month + " " + q.year;
    res.end(text);


}) .listen(8080);