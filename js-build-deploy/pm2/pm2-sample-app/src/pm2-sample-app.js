var env_mode = process.env.NODE_ENV || 'developement';
var path = require('path');
var log_dir = path.resolve(__dirname, '../../../../');
var logger = require('../../../../modules-js/winston/logger.winston')(__filename || 'Process Name', 'debug', 1, log_dir + '/_log/pm2-sample-app.log');
var schedule = require('node-schedule');

logger.info('Start Application : %s in %s environment', __filename, env_mode);
var s1 = schedule.scheduleJob('10 * * * * *', function () {
	logger.info('%s %s', new Date(), '10 * * * * *');
});