var kue = require('kue');
var redis = require('redis');
var express = require('express');

kue.redis.createClient = function(){
  var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
  //client.auth('password');
  client.on('error', function (err) {
    console.error(err);
  });
  return client;
};

kue.app.set('title', 'Konfect Kue');


var app = express();
app.use(express.basicAuth('hello', 'joe'));
app.use(kue.app);
app.listen(process.env.PORT || 3000);