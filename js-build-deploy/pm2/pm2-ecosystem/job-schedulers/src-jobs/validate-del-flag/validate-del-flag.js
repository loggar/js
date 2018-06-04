var env_mode = process.env.NODE_ENV || 'developement';
var path = require('path');
var winston = require('../../lib/logger.winston');
var dirs = require('../../lib-resources/dirs');
var log_file = path.resolve(dirs.dirProjectRoot(env_mode), dirs.dirLog(), path.basename(__filename)) + '.log';
var logger = env_mode !== 'production' ?
	winston(__filename || 'Process Name', 'debug', 2, log_file) :
	winston(__filename || 'Process Name', 'info', 1, log_file);

var nl = require('../../lib/os.simple').nl;
var getConnection = require('../../lib/connection.mysql.simple');
var mailSender = require('../../lib/mail.smtp.gmail');
var mailAddr = require('../../lib-resources/mail-address');
var schedule = require('node-schedule');

var sql_call = 'CALL getTableNamesHaveBadDelFlag()';

var run = function () {
	var connection = getConnection();
	connection.query(sql_call, function (error, results, fields) {
		if (error) {
			logger.error('%j', error);
			return false;
		}
		if (typeof (results[0]) !== 'undefined' && (results[0]).length > 0) {
			var result_formatt_str = nl + JSON.stringify(results[0], null, '\t');
			logger.info('%s', result_formatt_str);
			mailSender.send({
				from: mailAddr.job_scheduler,
				to: env_mode !== 'production' ? mailAddr.testers : mailAddr.receivers,
				subject: '[SIMS-DB-' + env_mode + '] Unexpected DEL_FLAG value Detected.',
				text: result_formatt_str
			});
		} else {
			logger.debug('%s', "no result.");
		}
	});
	connection.end();
}

module.exports = run;