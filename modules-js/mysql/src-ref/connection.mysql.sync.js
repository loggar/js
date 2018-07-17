var env_mode = process.env.NODE_ENV || 'development';
var path = require('path');
var log_file = require('../lib-resources/dirs').resolveLog(env_mode, path.basename(__filename));
var logger = require('./logger.winston').init(env_mode, __filename, log_file);

var getConnection = require('./connection.mysql.simple');

var connectionMysqlSync = (function () {
	var connection;
	var open = function () {
		connection = null;
		connection = getConnection();
	};
	var close = function () {
		return new Promise((resolve, reject) => {
			connection.end(err => {
				if (err) {
					return reject(err);
				}
				resolve();
			});
		});
	};
	var query = function (sql, args) {
		return new Promise((resolve, reject) => {
			connection.query(sql, args, (err, result) => {
				if (err)
					return reject(err);
				resolve(result);
			});
		});
	};
	return {
		open: open,
		close: close,
		query: query
	}

})();

module.exports = connectionMysqlSync;