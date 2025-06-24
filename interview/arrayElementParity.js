// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!

// const arrElementParity = numArr => {
//     for (let num of numArr) {

//     }
// }

function findUnique(arr) {
    const set = new Set(arr);
    console.log(set)
    for (let num of set) {
      if (!set.has(-num)) return num;
    }
  }
console.log(findUnique([1, -1, 2, -2, 3])); // 3
console.log(findUnique([-3, 1, 2, 3, -1, -4, -4, -2])); // -4
console.log(findUnique([1, -1, 2, -2, 3, 3])); // 3