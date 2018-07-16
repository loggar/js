var env_mode = process.env.NODE_ENV || 'developement';
var server_id = process.env.SERVER_ID || 'imitation';

var datasources = (function () {
	var dev = {
		host: '0.0.0.0',
		user: 'user_ro',
		password: 'user_ro#1',
		database: 'DB_TEST'
	}
	var prod = {
		host: '0.0.0.0',
		user: 'user_ro',
		password: 'user_ro#1',
		database: 'DB_PROD'
	}
	return {
		get: function () {
			if (env_mode === 'production') {
				if (server_id === 'real') {
					return prod;
				} else {
					return dev;
				}
			} else {
				return dev;
			}
		}
	}
})();
module.exports = datasources;
