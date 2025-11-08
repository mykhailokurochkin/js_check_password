'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('1234567890')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it('returns false for too-short, lowercase-only password', () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return false for short mixed-case password with symbol`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });
});
