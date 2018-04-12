var path = require('path');
var log_dir = path.resolve(__dirname, '../../../');
var logger = require('../../../modules-js/winston/logger.winston')(__filename || 'Process Name', 'debug', 1, log_dir + '/_log/test-pm2.log');
var schedule = require('node-schedule');

var s1 = schedule.scheduleJob('10 * * * * *', function () {
	logger.info('%s %s', new Date(), '10 * * * * *');
});