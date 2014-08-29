var express = require('express')
  , util = require('util')
  , bodyParser = require('body-parser')
  , route = require('./route')
  ;

var app = express();

app.set('port', 8773);
app.set('domain', '127.0.0.1');
app.set('view engine', 'jade');
app.set('views', 'app/views');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

route(app);

app.use(express.static('public'));



app.listen(app.get('port'), app.get('domain'), function () {
  console.log(util.format('Point your browser to http://%s:%d to start using USSD Mocker.'
    , app.get('domain'), app.get('port')));
});