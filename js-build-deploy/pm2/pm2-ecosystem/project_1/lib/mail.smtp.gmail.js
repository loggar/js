/**
 * mail sender
 * @description with gmail smtp
 * @version 0.1.1
 */

var env_mode = process.env.NODE_ENV || 'developement';
var path = require('path');
var log_dir = path.resolve(__dirname, '../') + '/_log/';
var logger = env_mode !== 'production' ? require('./logger.winston')(__filename || 'Process Name', 'debug', 0) : require('./logger.winston')(__filename || 'Process Name', 'info', 2, log_dir + require('path').basename(__filename) + '.log');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	auth: {
		user: 'noreply@example.com',
		pass: 'xxxxxxxx'
	}
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

