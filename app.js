var kue = require('kue');
var express = require('express');

kue.app.set('title', 'Konfect Kue');

var app = express();
app.use(express.basicAuth(process.env.USERNAME, process.env.PASSWD));
app.use(express.compress());
app.use(kue.app);
app.listen(process.env.PORT);
