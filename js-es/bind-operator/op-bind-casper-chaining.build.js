'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePage = function () {
	function HomePage() {
		_classCallCheck(this, HomePage);
	}

	_createClass(HomePage, [{
		key: 'run',
		value: function run(casper) {
			var _context;

			function thenClickInMySection(n, selector) {
				return this.thenClick('.my-section:nth-of-type(' + n + ') ' + selector);
			}

			function thenScreenshotContainer(name) {
				return this.thenScreenshot('#container', name);
			}

			return (_context = (_context = (_context = (_context = casper.thenVisit('http://my-url.com/home').thenScreenshot('body', 'home'), thenClickInMySection).call(_context, 1, '.foo'), thenScreenshotContainer).call(_context, 'foo').thenClick('.cancel'), thenClickInMySection).call(_context, 2, '.bar'), thenScreenshotContainer).call(_context, 'bar');
		}
	}]);

	return HomePage;
}();
