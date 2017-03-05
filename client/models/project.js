"use strict";

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProjectSchema = new Schema({
	name : String,
	img : String,
	url : String
}, {
	// minimize: false
});

module.exports = mongoose.model('Project', ProjectSchema);
