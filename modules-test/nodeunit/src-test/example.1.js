var fibonacci = require('../../../lib/sample/fibonacci');

exports.testGetFibonacciNumber = function (test) {
    test.expect(3);
    test.equal(fibonacci.get(8), 13, 'Wrong fibonacci!! 8 th fibonacci number is 13.');
    test.equal(fibonacci.get(9), 21, 'Wrong fibonacci!! 9 th fibonacci number is 21.');
    test.equal(fibonacci.get(10), 34, 'Wrong fibonacci!! 10 th fibonacci number is 34.');
    test.done();
};