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

console.log(onlyLast['US'])
console.log(totalConfirmed)
console.log(totalRecovered)
console.log(totalDeceased)

totals = {
    totalConfirmed,
    totalRecovered,
    totalDeceased
}

totals_json = JSON.stringify(totals)
var fs = require('fs');
fs.writeFileSync('./data/totals.json', totals_json, 'utf8');