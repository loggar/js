var str = 'successUserList:[11111111,22222222,33333333,44444444]';

console.log('|' + str.substr(17, str.length - 2) + '|');

console.log('|' + str.substring(17, str.length - 1) + '|');

var str2 = str.substring(17, str.length - 1);

console.log(str2);

var arr = str2.split(',');

console.log(arr);
