// npm install cheerio
// npm install n_
// npm install d3

/* global d3 */
import * as d3 from "d3";
import fs from 'fs';
import cheerio from 'cheerio';
import _ from 'lodash';

// var fs = require('fs');
// var cheerio = require('cheerio');
// var _ = require('lodash');
// const d3 = require('d3');
// var d3 = require('d3');
// const d3 = await import("d3");

import { getOutcomes } from './asylum_helpers.js';

// load helper function library
// var helper = require('./asylum_helpers');
// const internal = require('stream');

// load the cheerio object into a variable, `content`
// which holds data and metadata about the html file (written as txt)
let rawData = JSON.parse(fs.readFileSync('data/us-asylum-decision-2019.json'));
console.log(rawData)

// console.log(rawData)
let outcomes = getOutcomes(rawData)
console.log(outcomes)

// let outcomes = helper.getOutcomes(rawData)
// console.log(outcomes)

let totalOutcomesByStage = d3.rollup(outcomes, v=> d3.sum(v, d => d.value), d => d.outcome)
console.log(totalOutcomesByStage)

// desired data structure (total of 3 paths) for https://observablehq.com/@oluckyman/sankey-animation-acyclic-graph
// path01 {
//     outcome_rec {
//         stage_AR: interger,
//         stage_EO: interger,
//         stage_IN: integer
//     }
//     outcome_pro {
//         stage_AR: interger,
//         stage_EO: interger,
//         stage_IN: integer
//     }
//     outcome_rej {
//         stage_AR: interger,
//         stage_EO: interger,
//         stage_IN: integer
//     }
//     outcome_clo {
//         stage_AR: interger,
//         stage_EO: interger,
//         stage_IN: integer
//     }
// }