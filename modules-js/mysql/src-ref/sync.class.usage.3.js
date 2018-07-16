var DataBase = require('./connection.mysql.sync.class');
var congif = require('./mysql.datasources')

var database = new DataBase(config);

let someRows, otherRows;
database.query('SELECT * FROM some_table')
	.then(rows => {
		someRows = rows;
		return database.query('SELECT * FROM other_table');
	})
	.then(rows => {
		otherRows = rows;
		return database.close();
	}, err => {
		return database.close().then(() => { throw err; })
	})
	.then(() => {
		// do something with someRows and otherRows
	})
	.catch(err => {
		// handle the error
	})
