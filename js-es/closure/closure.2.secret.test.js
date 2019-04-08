import assert from 'assert';

// secret(msg: String) => getSecret() => msg: String
const secret = msg => () => msg;

test('secret', () => {
  const msg =
    'secret() should return a function that returns the passed secret.';

  const theSecret = 'Closures are easy.';
  const mySecret = secret(theSecret);

  const actual = mySecret();
  const expected = theSecret;

  assert.equal(actual, expected, msg);
});
