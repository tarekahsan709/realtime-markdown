var express = require('express');
var realtimeMarkdownController = require('./controllers/realtimeMarkdownController');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
realtimeMarkdownController(app);

var port = process.env.PORT || 8000;


app.listen(port);
console.log('app is listening on port ' + port);