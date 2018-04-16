'use strict';

var _context;

var _eventLib = require('eventLib');

var _eventLib2 = _interopRequireDefault(_eventLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_eventLib2.default.on('foo', undefined.gotFoo.bind(undefined));
_eventLib2.default.on('bar', undefined.gotBar.bind(undefined));
_eventLib2.default.on('log', (_context = console).log.bind(_context));
