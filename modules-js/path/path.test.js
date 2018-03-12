var logger = require('../winston/logger.winston')(__filename);
var path = require('path');

logger.debug(path);

var dir = path.dirname(__filename);
logger.debug(dir);

var root = path.normalize(dir + "/../..");
logger.debug(root);

var root2 = path.resolve(dir, "../../");
logger.debug(root2);

logger.debug(dir.split(path.seq)); // "?"
