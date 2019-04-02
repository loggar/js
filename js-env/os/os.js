var windowPlatformTemplate = 'win32';

module.exports = {
	nl: (process.platform === windowPlatformTemplate ? '\r\n' : '\n')
}