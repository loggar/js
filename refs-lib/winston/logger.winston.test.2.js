var env_mode = process.env.ENV || "development";
var log_file = './_log/test-winston.log';
var logger = require('./logger.winston').init("production", __filename, log_file);

var appName = 'Test-Logger-Winston';


logger.debug('application [%s] is starting in [%s] mode.');
logger.info('application [%s] is starting in [%s] mode.', appName, env_mode);
logger.warn('application [%s] is starting in [%s] mode.', appName, env_mode);
logger.error('application [%s] is starting in [%s] mode.', appName, env_mode);
logger.log('debug', 'application [%s] is starting in [%s] mode.', appName, env_mode);
logger.log('info', 'application [%s] is starting in [%s] mode.', appName, env_mode);
logger.log('warn', 'application [%s] is starting in [%s] mode.', appName, env_mode);
logger.log('error', 'application [%s] is starting in [%s] mode.', appName, env_mode);

var objSmaple = {"cookie":{"path":"/","_expires":null,"originalMaxAge":null,"httpOnly":true},"messages":[{"type":"message_error","content":"Sorry! invalid credentials."}]};

logger.debug('objSmaple=' + objSmaple);
logger.debug('objSmaple=%s', objSmaple);
logger.debug('objSmaple=%j', objSmaple);