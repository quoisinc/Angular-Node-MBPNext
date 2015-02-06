var express = require('express'),
  http = require('http');

var assignSeat = require('./data/assignSeat.json');
var eligibibleForCheckinService = require('./data/eligibibleForCheckinService.json');
var generateMBPService = require('./data/generateMBPService.json');
var getSeatmapService = require('./data/getSeatmapService.json');
var itineraryService = require('./data/itineraryService.json');

var app = express()
  .use(express.bodyParser())
  .use(express.static('public'));



app.get('/assignSeat', function  (req, res) {
  res.json(assignSeat);
});

app.get('/eligibibleForCheckinService', function  (req, res) {
  res.json(eligibibleForCheckinService);
});

app.get('/generateMBPService', function  (req, res) {
  res.json(generateMBPService);
});

app.get('/getSeatmapService', function  (req, res) {
  res.json(getSeatmapService);
});

app.get('/itineraryService', function  (req, res) {
  res.json(itineraryService);
});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

http.createServer(app).listen(3000, function () {
  console.log("Server ready at http://localhost:3000");
});