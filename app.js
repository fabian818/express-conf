var express = require('express');
var routes = require('./routes');
var engines = require('consolidate');
var bodyparser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 3000));


app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/node_modules/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));
// });


// app.configure('development', function(){
//   app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });

// app.configure('production', function(){
//   app.use(express.errorHandler());
// });

// Routes

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Start server

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
