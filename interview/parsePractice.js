// Write function parseF which takes an input and 
// returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

const parseF = input => {
    const parsed = parseFloat(input);
    return isNaN(parsed) ? null : parsed;
  };
  console.log(parseF(parseF("1"), 1.0))