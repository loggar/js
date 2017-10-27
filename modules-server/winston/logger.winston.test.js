var logger = require('./logger.winston')(__filename);

logger.debug('application [%s] is starting in [%s] mode.', __filename, "developement");
logger.info('application [%s] is starting in [%s] mode.', __filename, "developement");
logger.warn('application [%s] is starting in [%s] mode.', __filename, "developement");
logger.error('application [%s] is starting in [%s] mode.', __filename, "developement");

logger.log('debug', 'application [%s] is starting in [%s] mode.', __filename, "developement");
logger.log('info', 'application [%s] is starting in [%s] mode.', __filename, "developement");
logger.log('warn', 'application [%s] is starting in [%s] mode.', __filename, "developement");
logger.log('error', 'application [%s] is starting in [%s] mode.', __filename, "developement");

var obj1 = {"cookie":{"path":"/","_expires":null,"originalMaxAge":null,"httpOnly":true},"messages":[{"type":"message_error","content":"Sorry! invalid credentials."}]};

logger.debug(obj1);
logger.debug('obj1=', obj1);