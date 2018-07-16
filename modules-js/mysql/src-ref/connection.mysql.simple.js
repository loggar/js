var env_mode = process.env.NODE_ENV || 'developement';
var path = require('path');
var log_file = require('../lib-resources/dirs').resolveLog(env_mode, path.basename(__filename));
var logger = require('./logger.winston').init(env_mode, __filename, log_file);

var nl = require('../lib/os.simple').nl;
var datasource = require('./mysql.datasources').get();
var mysql = require('mysql');

function initializeConnection(config) {
	function addDisconnectHandler(c) {
		c.on("error", function (error) {
			logger.error("%j", error);
			if (error instanceof Error) {
				logger.error(error.stack);
				if (error.code === "PROTOCOL_CONNECTION_LOST") {
					logger.info("Lost connection. Reconnecting...");
					initializeConnection(c.config);
				} else if (error.fatal) {
					throw error;
				}
			}
		});
		c.on('enqueue', function (sequence) {
			if ('Query' === sequence.constructor.name) {
				logger.debug('datasource: %s %s execute query:' + nl + '%s', config.host, config.database, sequence.sql);
			}
		});
	}

	var connection = mysql.createConnection(config);
	addDisconnectHandler(connection);
	connection.connect();
	return connection;
}

var getConnection = function () {
	return initializeConnection(datasource);
}

module.exports = getConnection;
