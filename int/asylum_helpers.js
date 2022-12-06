// npm install d3

/* global d3 */
import * as d3 from "d3";

// get all outcomes
function getOutcomes (array) {
  let outcomes = getOutcomes_Rec(array).concat(getOutcomes_Pro(array), getOutcomes_Rej(array), getOutcomes_Clo(array))

  return outcomes
}

// separate outcomes by recognized
function getOutcomes_Rec (array){
    let outcomes = []
    
    for(let i=0; i<array.length; i++){
      let newOutcome = {}
  
      newOutcome.year = array[i]['Year']
      newOutcome.originCountry = array[i]['Country of origin']
      newOutcome.asylumCountry = array[i]['Country of asylum']
      newOutcome.stage = array[i]['Stage of procedure']
      newOutcome.outcome = "recognized"
      newOutcome.value = +array[i]['Recognized decisions'] || 0
  
    outcomes.push(newOutcome)
    }
  return outcomes
  }

// separate outcomes by protected
function getOutcomes_Pro (array){
  let outcomes = []
  
  for(let i=0; i<array.length; i++){
    let newOutcome = {}

    newOutcome.year = array[i]['Year']
    newOutcome.originCountry = array[i]['Country of origin']
    newOutcome.asylumCountry = array[i]['Country of asylum']
    newOutcome.stage = array[i]['Stage of procedure']
    newOutcome.outcome = "protected"
    newOutcome.value = +array[i]['Complimentary protection'] || 0
    
  outcomes.push(newOutcome)
  }
return outcomes
}

// separate outcomes by rejected
function getOutcomes_Rej (array){
    let outcomes = []
    
    for(let i=0; i<array.length; i++){
      let newOutcome = {}
  
      newOutcome.year = array[i]['Year']
      newOutcome.originCountry = array[i]['Country of origin']
      newOutcome.asylumCountry = array[i]['Country of asylum']
      newOutcome.stage = array[i]['Stage of procedure']
      newOutcome.outcome = "rejected"
      newOutcome.value = +array[i]['Rejected decisions'] || 0
  
    outcomes.push(newOutcome)
    }
  return outcomes
  }

// separate outcomes by closed
function getOutcomes_Clo (array){
    let outcomes = []
    
    for(let i=0; i<array.length; i++){
      let newOutcome = {}
  
      newOutcome.year = array[i]['Year']
      newOutcome.originCountry = array[i]['Country of origin']
      newOutcome.asylumCountry = array[i]['Country of asylum']
      newOutcome.stage = array[i]['Stage of procedure']
      newOutcome.outcome = "closed"
      newOutcome.value = +array[i]['Otherwise closed'] || 0
      
    outcomes.push(newOutcome)
    }
  return outcomes
  }

  // get outcomes by all paths
  function getPaths_all (array) {
    let pathsAll = {}
  
    pathsAll.path_AR = getPath_AR(array)
    pathsAll.path_EO = getPath_EO(array)
    pathsAll.path_IN = getPath_IN(array)
  
    return pathsAll
  }

  // get outcomes by path
  function getPath_IN (array) {
    let outcomes = {}
    let totalOutcomesByStage = d3.rollup(array, v=> d3.sum(v, d => d.value), d => d.stage, d => d.outcome)
  
    let outcomes_rec = {}
  
      outcomes_rec.stage_AR = +0
      outcomes_rec.stage_EO = +0
      outcomes_rec.stage_IN = totalOutcomesByStage.get("IN").get("recognized")
  
    let outcomes_pro = {}
  
      outcomes_pro.stage_AR = +0
      outcomes_pro.stage_EO = +0
      outcomes_pro.stage_IN = totalOutcomesByStage.get("IN").get("protected")
  
    let outcomes_rej = {}
  
      outcomes_rej.stage_AR = +0
      outcomes_rej.stage_EO = +0
      outcomes_rej.stage_IN = totalOutcomesByStage.get("IN").get("rejected")
  
    let outcomes_clo = {}
  
      outcomes_clo.stage_AR = +0
      outcomes_clo.stage_EO = +0
      outcomes_clo.stage_IN = totalOutcomesByStage.get("IN").get("closed")
  
    // add to object path_AR
      outcomes.outcomes_pro = outcomes_pro
      outcomes.outcomes_rec = outcomes_rec
      outcomes.outcomes_rej = outcomes_rej
      outcomes.outcomes_clo = outcomes_clo
  
  return outcomes
    
  }

  // get outcome by path
  function getPath_EO (array) {
    let outcomes = {}
    let totalOutcomesByStage = d3.rollup(array, v=> d3.sum(v, d => d.value), d => d.stage, d => d.outcome)
  
    let outcomes_rec = {}
  
      outcomes_rec.stage_AR = +0
      outcomes_rec.stage_EO = totalOutcomesByStage.get("EO").get("recognized")
      outcomes_rec.stage_IN = +0
  
    let outcomes_pro = {}
  
      outcomes_pro.stage_AR = +0
      outcomes_pro.stage_EO = totalOutcomesByStage.get("EO").get("protected")
      outcomes_pro.stage_IN = +0
  
    let outcomes_rej = {}
  
      outcomes_rej.stage_AR = +0
      outcomes_rej.stage_EO = totalOutcomesByStage.get("EO").get("rejected")
      outcomes_rej.stage_IN = +0
  
    let outcomes_clo = {}
  
      outcomes_clo.stage_AR = +0
      outcomes_clo.stage_EO = totalOutcomesByStage.get("EO").get("closed")
      outcomes_clo.stage_IN = +0
  
    // add to object path_AR
      outcomes.outcomes_pro = outcomes_pro
      outcomes.outcomes_rec = outcomes_rec
      outcomes.outcomes_rej = outcomes_rej
      outcomes.outcomes_clo = outcomes_clo
  
  return outcomes
    
  }

  // get outcome by path
  function getPath_AR (array) {
    let outcomes = {}
    let totalOutcomesByStage = d3.rollup(array, v=> d3.sum(v, d => d.value), d => d.stage, d => d.outcome)
  
    let outcomes_rec = {}
  
      outcomes_rec.stage_AR = totalOutcomesByStage.get("AR").get("recognized")
      outcomes_rec.stage_EO = +0
      outcomes_rec.stage_IN = +0
  
    let outcomes_pro = {}
  
      outcomes_pro.stage_AR = totalOutcomesByStage.get("AR").get("protected")
      outcomes_pro.stage_EO = +0
      outcomes_pro.stage_IN = +0
  
    let outcomes_rej = {}
  
      outcomes_rej.stage_AR = totalOutcomesByStage.get("AR").get("rejected")
      outcomes_rej.stage_EO = +0
      outcomes_rej.stage_IN = +0
  
    let outcomes_clo = {}
  
      outcomes_clo.stage_AR = totalOutcomesByStage.get("AR").get("closed")
      outcomes_clo.stage_EO = +0
      outcomes_clo.stage_IN = +0
  
    // add to object path_AR
      outcomes.outcomes_pro = outcomes_pro
      outcomes.outcomes_rec = outcomes_rec
      outcomes.outcomes_rej = outcomes_rej
      outcomes.outcomes_clo = outcomes_clo
  
  return outcomes
    
  }


export { getOutcomes, getPaths_all };