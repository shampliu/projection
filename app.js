"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
let app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/projection');

let Project = require('./client/models/project');

app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');

app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

app.use(express.static( path.join( __dirname, 'client/dist' )));

app.get('/', function (req, res) {
  res.render('index', { });
});

app.get('/all', function(req, res) {
  Project.find({}, function (err, projects) {
    if (err) throw err;

    console.log("All projects: ", projects);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(projects));
  });
});

app.get('/projects', function(req, res) {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: 'Missing required parameter `q`',
    });
    return;
  }

  Project.find({
    name: { $regex: new RegExp(param, "ig") }
  }, function(err, projects) {
    console.log('Projects found matching', param, ':', projects);
    res.send(JSON.stringify(projects));

  })
})

app.listen(3005, function() {
  console.log('Server listening on port 3005');
});
