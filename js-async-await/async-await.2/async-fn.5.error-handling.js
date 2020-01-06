async function canRejectOrReturn() {
  // wait one second
  await new Promise(res => setTimeout(res, 1000));
// Reject with ~50% probability
  if (Math.random() > 0.5) {
    throw new Error('Sorry, number too big.')
  }
return 'perfect number';
}

// 1
async function foo() {
  try {
    await canRejectOrReturn();
  } catch (e) {
    return 'error caught';
  }
}


// 2
async function foo2() {
  try {
    return canRejectOrReturn();
  } catch (e) {
    return 'error caught';
  }
}

// 1 and 2 together
async function foo3() {
  try {
    return await canRejectOrReturn();
  } catch (e) {
    return 'error caught';
  }
}
