var http = require('http')
  , util = require('util');

var server = http.createServer(function(req, res){
  var message = '';
  req.setEncoding('utf8');
  req.on('data', function(data){
    message += data;
  });

  req.on('end', function(){
    util.log(message);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('OK');
  });

  req.on('error', function(err){
    console.log(err);
  });
});

server.listen(3000);