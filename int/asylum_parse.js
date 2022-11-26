// npm install cheerio
// npm install n_

var fs = require('fs');
var cheerio = require('cheerio');
var _ = require('lodash')

// load helper function library
var helper = require('./asylum_helpers');

// load the cheerio object into a variable, `content`
// which holds data and metadata about the html file (written as txt)
let raw = JSON.parse(fs.readFileSync('data/us-asylum-decision-2019.json'));

console.log(raw)

let outcomes = helper.getOutcomes(raw)
console.log(outcomes)