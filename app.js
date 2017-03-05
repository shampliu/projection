"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
let app = express();

app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');

app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

app.use(express.static( path.join( __dirname, 'client/dist' )));

app.get('/', function (req, res) {
  res.render('index', { });
});

app.listen(3005, function() {
  console.log('Server listening on port 3005');
});
