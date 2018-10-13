// var date = new Date();

// var months = ['Jan','Feb']
// console.log(date.getMonth())

var moment = require('moment');

var date = moment();

var someTimestamp = moment().valueOf();

console.log(date.format('MMM Do, YYYY'))

console.log(date.format('h:mm A'))