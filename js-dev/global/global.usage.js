require('./global');

global.test_1 = function() {
  console.log(this.v); // 1.0
};

global.v = '1.0';
global.test_1();
