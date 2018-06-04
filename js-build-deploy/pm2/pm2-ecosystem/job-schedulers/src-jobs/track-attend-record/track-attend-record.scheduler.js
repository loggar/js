var env_mode = process.env.NODE_ENV || 'developement';
var path = require('path');
var winston = require('../../lib/logger.winston');
var dirs = require('../../lib-resources/dirs');
var log_file = path.resolve(dirs.dirProjectRoot(env_mode), dirs.dirLog(), path.basename(__filename)) + '.log';
var logger = env_mode !== 'production' ?
	winston(__filename || 'Process Name', 'debug', 2, log_file) :
	winston(__filename || 'Process Name', 'info', 1, log_file);

var schedule = require('node-schedule');
var run = require('./track-attend-record');

logger.info('Start Application : %s in %s environment', __filename, env_mode);
var schedule_track_attend_record = schedule.scheduleJob('0 10 8 * * *', function () {
	logger.debug('Run scheduleJob %s %s', new Date(), __filename);
	run();
});