var uniqueRandomArray = require('unique-random-array');
var tolkienNames = require('./tolkien-names.json');

module.exports = {
    all: tolkienNames,
    random: uniqueRandomArray(tolkienNames)
};