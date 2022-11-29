// npm install cheerio
// npm install n_
// npm install d3

/* global d3 */
import * as d3 from "d3";
import fs from 'fs';
// import cheerio from 'cheerio';
import _ from 'lodash';

// import helper functions
import { getOutcomes } from './asylum_helpers.js';

// load the cheerio object into a variable, `rawData`
let rawData = JSON.parse(fs.readFileSync('data/us-asylum-decision-2019.json'));
console.log(rawData)

let outcomes = getOutcomes(rawData)
console.log(outcomes)

const totalOutcomes = d3.rollup(outcomes, v=> d3.sum(v, d => d.value))
console.log(totalOutcomes)

const totalOutcomesByType = d3.rollup(outcomes, v=> d3.sum(v, d => d.value), d => d.outcome)
console.log(totalOutcomesByType)

const totalOutcomesByStage = d3.rollup(outcomes, v=> d3.sum(v, d => d.value), d => d.stage, d => d.outcome)
console.log(totalOutcomesByStage)

const leastOutcomeCountry = d3.least(d3.rollup(outcomes, v=> d3.sum(v, d => d.value), d=> d.originCountry), ([, sum]) => sum)
console.log(leastOutcomeCountry)

const highestOutcomeCountry = d3.least(d3.rollup(outcomes, v=> d3.sum(v, d => d.value), d=> d.originCountry), ([, sum]) => -sum)
console.log(highestOutcomeCountry)


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