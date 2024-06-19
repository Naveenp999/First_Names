let list = require('../country/state/city/index.js')
let getFirstName = require('../utilities/utils/index.js')

let getPeopleInCity = list => {
  return getFirstName(list)
}

module.exports = getPeopleInCity;

