var express     = require('express')
  , bodyParser  = require('body-parser')
  , winston     = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({timestamp: true, colorize: true})
  ]
});

var app = express();

app.use(bodyParser());

app.get('/', function(req, res){
  logger.info('request params', req.params);
  logger.info('request queryString',req.query);
  res.send(200);
});

app.post('/', function(req, res){
  logger.info(req.body);
  res.send(200);
})

app.listen(3000);