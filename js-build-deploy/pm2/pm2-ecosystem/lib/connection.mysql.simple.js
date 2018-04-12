var env_mode = process.env.NODE_ENV || 'developement';
var path = require('path');
var log_dir = path.resolve(__dirname, '../') + '/_log/';
var logger = env_mode !== 'production' ? require('./logger.winston')(__filename || 'Process Name', 'debug', 0) : require('./logger.winston')(__filename || 'Process Name', 'info', 2, log_dir + require('path').basename(__filename) + '.log');
var mysql = require('mysql');

var datasource = env_mode !== 'production' ? require('./koi/mysql.datasources').dev : require('./koi/mysql.datasources').production;

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