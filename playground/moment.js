var moment = require('moment')


var time = moment().unix();
console.log(moment.unix(time).format("MMMM Do, YYYY @ h:mm A"));