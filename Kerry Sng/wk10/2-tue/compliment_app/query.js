var pgp = require('pg-promise')(options);
var options = {
  promiseLib: promise
};

var connectionString = 'postgres://localhost:8000/:name';
var db = pgp(connectionString);

//add query functions

module.exports = {
  getAllCompliments: getAllCompliments,
  getSingleCompliment: getSingleCompliment,
  createCompliment: createCompliment,
  removeCompliment: removeCompliment,
}
