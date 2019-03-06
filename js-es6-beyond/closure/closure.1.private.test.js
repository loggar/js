const getSecret = secret => {
  return {
    get: () => secret
  };
};

test('Closure for object privacy.', () => {
  const expected = 1;
  const obj = getSecret(expected);

  const actual = obj.get();

  try {
    expect(secret).toBe(expected); // This throws an error.
  } catch (e) {
    expect(true).toBe(true); // The secret var is only available to privileged methods.
  }

  expect(actual).toEqual(expected); // .get() should have access to the closure.'
});
