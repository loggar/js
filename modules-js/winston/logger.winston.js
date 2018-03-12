/**
 * js logger with winston
 * @author Charly Lee <charly.loggar@gmail.com>
 * @description format style
 * @version 0.0.1
 */
var winston = require('winston');
require('winston-daily-rotate-file');
var dateFormat = require('dateformat');
var path = require('path');
var env_mode = process.env.ENV || "developement";

module.exports = function (process_nm) {
	if (!process_nm) process_nm = 'unknown';
	else process_nm = path.basename(process_nm, '.js');

	var timestamp = function () {
		return dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss");
	}

	var formatter = function (options) {
		return options.timestamp() + ' [' + options.level.toUpperCase()[0] + '] [' + process_nm + '] ' + (options.message ? options.message : '') + (options.meta && Object.keys(options.meta).length ? JSON.stringify(options.meta) : '');
	}

	var transportConsole = new (winston.transports.Console)({
		level: 'debug', /* { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 } */
		json: false, /* true : will log out multi-line JSON objects */
		stringify: false,
		timestamp: timestamp,
		formatter: formatter
	});

	var transportDailyRotateFile = new (winston.transports.DailyRotateFile)({
		filename: './modules-server/winston/log/log',
		datePattern: 'yyyy-MM-dd.',
		prepend: true,
		level: 'info',
		json: false,
		stringify: false,
		timestamp: timestamp,
		formatter: formatter
	});

	var transports = env_mode === "developement" ? [transportConsole] : [transportDailyRotateFile];

	return new (winston.Logger)({ transports: transports });
}