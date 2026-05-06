// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('valid phone number with area code in parens: (858) 534-2230', () => {
  expect(isPhoneNumber('(858) 534-2230')).toBe(true);
});

test('valid phone number with dashes: 858-534-2230', () => {
  expect(isPhoneNumber('858-534-2230')).toBe(true);
});

test('invalid phone number with letters: abc-defg-hij', () => {
  expect(isPhoneNumber('abc-defg-hij')).toBe(false);
});

test('invalid phone number missing digits: 12-34', () => {
  expect(isPhoneNumber('12-34')).toBe(false);
});

// isEmail
test('valid email: hello@ucsd.edu', () => {
  expect(isEmail('hello@ucsd.edu')).toBe(true);
});

test('valid email: user1@gmail.com', () => {
  expect(isEmail('user1@gmail.com')).toBe(true);
});

test('invalid email missing @: helloucsd.edu', () => {
  expect(isEmail('helloucsd.edu')).toBe(false);
});

test('invalid email missing domain extension: hello@ucsd', () => {
  expect(isEmail('hello@ucsd')).toBe(false);
});

// isStrongPassword
test('valid strong password: Abcd1', () => {
  expect(isStrongPassword('Abcd1')).toBe(true);
});

test('valid strong password: my_password', () => {
  expect(isStrongPassword('my_password')).toBe(true);
});

test('invalid strong password starts with number: 1abcd', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});

test('invalid strong password too short: ab', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate
test('valid date: 12/25/2024', () => {
  expect(isDate('12/25/2024')).toBe(true);
});

test('valid date: 1/1/1999', () => {
  expect(isDate('1/1/1999')).toBe(true);
});

test('invalid date with two-digit year: 12/25/24', () => {
  expect(isDate('12/25/24')).toBe(false);
});

test('invalid date with dashes: 12-25-2024', () => {
  expect(isDate('12-25-2024')).toBe(false);
});

// isHexColor
test('valid 6-char hex color: #aabbcc', () => {
  expect(isHexColor('#aabbcc')).toBe(true);
});

test('valid 3-char hex color without hash: F0A', () => {
  expect(isHexColor('F0A')).toBe(true);
});

test('invalid hex color with non-hex chars: #ZZZZZZ', () => {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});

test('invalid hex color wrong length: #12345', () => {
  expect(isHexColor('#12345')).toBe(false);
});
