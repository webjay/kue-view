var kue = require('kue');
var redis = require('redis');
var express = require('express');

kue.redis.createClient = function(){
  var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
	if (process.env.REDIS_AUTH) {
		client.auth(process.env.REDIS_AUTH);
	}
  client.on('error', function (err) {
    console.error(err);
  });
  return client;
};

kue.app.set('title', 'Konfect Kue');

var app = express();
app.use(express.basicAuth('hello', 'joe'));
app.use(express.compress());
app.use(kue.app);
app.listen(process.env.PORT || 3000);