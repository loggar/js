var DataBase = require('./connection.mysql.sync.class');
var congif = require('./mysql.datasources')

var database = new DataBase(config);

/*
If you often use this pattern, it’s useful to wrap creating and closing the connection in a separate function like this:
*/

Database.execute = function (config, callback) {
	const database = new Database(config);
	return callback(database).then(
		result => database.close().then(() => result),
		err => database.close().then(() => { throw err; })
	);
};

let someRows, otherRows;
Database.execute(config,
	database => database.query('SELECT * FROM some_table')
		.then(rows => {
			someRows = rows;
			return database.query('SELECT * FROM other_table')
		})
		.then(rows => {
			otherRows = rows;
		})
).then(() => {
	// do something with someRows and otherRows
}).catch(err => {
	// handle the error
});
