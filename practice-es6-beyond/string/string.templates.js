// Before: 
let msg = 'Thanks for uploading ' + response.filename + '.jpg. Your account is ' + account.status + '.';

// After:
let msg = `Thanks for uploading ${response.filename}.jpg. Your account is ${account.status}.`;