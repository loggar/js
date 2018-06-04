/**
 * mail sender
 * @author Charly Lee <charly.loggar@gmail.com>
 * @description with gmail smtp
 * @version 0.1.1
 */

var env_mode = process.env.NODE_ENV || 'developement';
var path = require('path');
var winston = require('./logger.winston');
var dirs = require('../lib-resources/dirs');
var log_file = path.resolve(dirs.dirProjectRoot(env_mode), dirs.dirLog(), path.basename(__filename)) + '.log';
var logger = env_mode !== 'production' ?
	winston(__filename || 'Process Name', 'debug', 0) :
	winston(__filename || 'Process Name', 'info', 2, log_file);

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('../lib-resources/mail.smtp.gmail.config');

var transporter = nodemailer.createTransport(smtpTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	auth: config.auth
}));

var sendMail = function (mailOptions) {
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			logger.error('%j', error);
		} else {
			logger.info('Email sent to %s : %j', mailOptions.to, info.response);
		}
	});
}

module.exports = {
	send: sendMail
}

