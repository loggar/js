var env_mode = process.env.NODE_ENV || 'developement';
var path = require('path');
var log_file = path.resolve(__dirname, '../') + '/_log/' + path.basename(__filename) + '.log';
var logger = env_mode !== 'production' ? require('../lib/logger.winston')(__filename || 'Process Name', 'debug', 2, log_file) : require('../lib/logger.winston')(__filename || 'Process Name', 'info', 1, log_file);
var nl = require('../lib/os.simple').nl;
var getConnection = require('../lib/connection.mysql.simple');
var mailSender = require('../lib/mail.smtp.gmail');
var mailAddr = require('../lib/koi/mail-address');
var schedule = require('node-schedule');

var query_str_list = require('./sql/track-attend-record.sql.list');

var run = function () {
	var connection = getConnection();
	connection.query(query_str_list, function (error, results, fields) {
		if (error) {
			logger.error('%j', error);
			return false;
		}
		if (typeof (results[0]) !== 'undefined' && (results[0]).length > 0) {
			var result_formatt_str = nl + JSON.stringify(results[0], null, '\t');
			logger.info('%s', result_formatt_str);
			mailSender.send({
				from: mailAddr.job_scheduler,
				to: mailAddr.testers,
				subject: '[SIMS-DB-' + env_mode + '] Remained Attend Record Detected.',
				text: result_formatt_str
			});
		} else {
			logger.debug('%s', "no result.");
		}
	});
	connection.end();
}

logger.info('Start Application : %s in %s environment', __filename, env_mode);
var schedule_track_attend_record = schedule.scheduleJob('* 10 8 * * *', function () {
	logger.debug('Run scheduleJob %s %s', new Date(), __filename);
	run();
});