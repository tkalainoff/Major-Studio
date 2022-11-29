
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

export { getOutcomes };

// module.exports = { getOutcomes };