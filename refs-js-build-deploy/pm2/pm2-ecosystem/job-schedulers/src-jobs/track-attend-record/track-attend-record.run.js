var env_mode = process.env.NODE_ENV || 'developement';
var path = require("path");
var log_file = require('../lib-resources/dirs').resolveLog(env_mode, path.basename(__filename));
var logger = require('../lib/logger.winston').init(env_mode, __filename, log_file);

var run = require('./track-attend-record');

logger.info('Start Application : %s in %s environment', __filename, env_mode);
run();