var http = require('http')
  , util = require('util');

var server = http.createServer(function(req, res){
  req.setEncoding('utf8');
  req.on('data', function(data){
    util.log(data);
  });

  req.on('end', function(){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('OK');
  });

  req.on('error', function(err){
    console.log(err);
  });
});

server.listen(3000);