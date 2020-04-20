const data = require('./data/raw.json');

maxCases = 0
onlyLast = {}
totalConfirmed = 0
totalRecovered = 0
totalDeceased = 0
for (country in data) {
    let latestData = data[country].length - 1
    onlyLast[country] = data[country][latestData]
    totalConfirmed = totalConfirmed + onlyLast[country].confirmed
    totalRecovered = totalRecovered + onlyLast[country].recovered
    totalDeceased = totalDeceased + onlyLast[country].deaths
}

totals = {
    totalConfirmed,
    totalRecovered,
    totalDeceased
}

oldData = require('./data/totals.json');
totals['totalConfirmedIncrease'] = totals['totalConfirmed'] - oldData['totalConfirmed']
totals['totalRecoveredIncrease'] = totals['totalRecovered'] - oldData['totalRecovered']
totals['totalDeceasedIncrease'] = totals['totalDeceased'] - oldData['totalDeceased']

console.log(onlyLast['US'])
console.log(totalConfirmed)
console.log(totalRecovered)
console.log(totalDeceased)
console.log(totals['totalConfirmedIncrease'])
console.log(totals['totalRecoveredIncrease'])
console.log(totals['totalDeceasedIncrease'])

totals_json = JSON.stringify(totals)
fs = require('fs');
fs.writeFileSync('./data/totals.json', totals_json, 'utf8');