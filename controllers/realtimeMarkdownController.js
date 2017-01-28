var sharejs = require('share');
var redis = require('redis');
// set up redis server
var redisClient;
console.log(process.env.REDISTOGO_URL);
if (process.env.REDISTOGO_URL) {
    var rtg = require("url").parse(process.env.REDISTOGO_URL);
    redisClient = require("redis").createClient(rtg.port, rtg.hostname);
    redisClient.auth(rtg.auth.split(":")[1]);
} else {
    redisClient = require("redis").createClient();
}

var options = {
    db: { type: 'redis' }
};

module.exports = function(app) {

    sharejs.server.attach(app, options);

    app.get('/', function(req, res) {
        res.render('pad');
    });

    app.get('/(:id)', function(req, res) {
        res.render('pad');
    });

};