// taken from: http://es-discourse.com/t/partial-default-arguments/120/7

var defaults = {
	options: {
		remove: true,
		enable: false,
		instance: {}
	},
	log: {
		warn: true,
		error: true
	}
};

var config = {
	options: {
		remove: false,
		instance: null
	}
};

/*
config.options = config.options || {};
config.options.remove = (config.options.remove !== undefined) ? config.options.remove : defaults.options.remove;
config.options.enable = (config.options.enable !== undefined) ? config.options.enable : defaults.options.enable;
...
*/

config = Object.assign({}, defaults, config);

console.log(config);

/*
config.options = config.options || {};
config.log = config.log || {};
({
	options: {
		remove: config.options.remove = defaults.options.remove,
		enable: config.options.enable = defaults.options.enable,
		instance: config.options.instance = defaults.options.instance
	} = {},
	log: {
		warn: config.log.warn = defaults.log.warn,
		error: config.log.error = defaults.log.error
	} = {}
} = config);
*/

// merge `defaults` into `config`
{
	// destructure (with default value assignments)
	let {
		options: {
			remove = defaults.options.remove,
		enable = defaults.options.enable,
		instance = defaults.options.instance
		} = {},
		log: {
			warn = defaults.log.warn,
			error = defaults.log.error
		} = {}
	} = config;

	// restructure
	config = {
		options: { remove, enable, instance },
		log: { warn, error }
	};
}
console.log(config);