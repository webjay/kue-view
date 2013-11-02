var kue = require('kue');
var express = require('express');
//var redis = require('redis');

// kue.redis.createClient = function(){
//   var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
//   if (process.env.REDIS_AUTH) {
//     client.auth(process.env.REDIS_AUTH);
//   }
//   client.on('error', function (err) {
//     console.error(err);
//   });
//   return client;
// };

kue.app.set('title', 'Konfect Kue');

var app = express();
app.use(express.basicAuth(process.env.USERNAME, process.env.PASSWD));
app.use(express.compress());
app.use(kue.app);
app.listen(process.env.PORT);