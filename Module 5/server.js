'use strict';

var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var movies = require('./Server/movies');
var countries = require('./Server/countries');
var directors = require('./Server/directors');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get('/api/movies', function (req, res) {
    res.send(movies.getAll());
});

app.get('/api/movies/:id', function (req, res) {
    res.send(movies.get(req.params.id));
});

app.put('/api/movies/:id', function (req, res) {
    var result = movies.save(req.params.id, req.body);
    res.send(result, result.statusCode || 200);
});

app.get('/api/directors', function (req, res) {
    res.send(directors.getAll());
});

app.get('/api/countries', function (req, res) {
    res.send(countries.getAll());
});

app.listen(process.env.PORT || 8080, function () {
    console.info('The server is listening at port ' + (process.env.PORT || 8080));
});
