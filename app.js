var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose');

var routes = require('./routes/index');

var app = express();

var port = process.env.PORT || 5050;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/views", express.static(path.join(__dirname, 'views')));
app.use("/node_modules", express.static(path.join(__dirname, 'node_modules')));
app.use("/bower_components", express.static(path.join(__dirname, 'bower_components')));
app.use("/doc", express.static(__dirname + "/doc"));


app.use('/', routes);


app.listen(port);
console.log("Server running on port: " + port);

module.exports = app;
