// Description:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

const strIncrementer = str => {
  const match = str.match(/(\d*)$/);
  console.log(match)
  const number = match[0];                       // The trailing digits ('' if none)
  const prefix = str.slice(0, -number.length);   // Everything before the digits

  const incremented = (parseInt(number, 10) + 1).toString();
  const padded = incremented.padStart(number.length, '0'); // keep same length if possible

return prefix + padded;
}
console.log(strIncrementer('foo099')) // => foo100