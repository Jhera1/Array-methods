// /**  #1
//  * * Squared Array Matching
//  *
//  * * Given two arrays a and b write a function that checks whether the two arrays have the "same" elements,
//  * * with the same multiplicities (the multiplicity of a member is the number of times it appears).
//  * * "Same" here means that the elements in "b" are the elements in "a" squared, regardless of the order.
//  *
// *    loop through arr a and return a squared arr
//      compare to arr b to see if both arr's match
//  * 
//  * 
//  * 
//  ? Test Examples
//  *
//  * * Example 1: Valid case - should return true
//  * const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//  * const b1 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
//  * console.log(comp(a1, b1)); // should return true
//  *
//  *  ? This works because b1 contains the squares of elements in a1:
//  *  [11², 121², 144², 19², 161², 19², 144², 19²]
//  *  = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//  *
//  * * Example 2: Invalid case - wrong number - should return false
//  * const a2 = [121, 144, 19, 161, 19, 144, 19, 11];
//  * const b2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
//  * console.log(comp(a2, b2)); // should return false
//  * ? 132 is not the square of any number in a2
//  *
//  * * Example 3: Invalid case - wrong number - should return false
//  * const a3 = [121, 144, 19, 161, 19, 144, 19, 11];
//  * const b3 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
//  * console.log(comp(a3, b3)); // should return false
//  * ? 36100 is not the square of any number in a3
//  *
//  *  * Example 4: Edge case - empty arrays - should return true
//  * const a4 = [];
//  * const b4 = [];
//  * console.log(comp(a4, b4)); // should return true
//  *
//  * * Example 5: Edge case - null input - should return false
//  * const a5 = null;
//  * const b5 = [1, 4, 9];
//  * console.log(comp(a5, b5)); // should return false
//  *
//  * * Example 6: Edge case - null input - should return false
//  * const a6 = [1, 2, 3];
//  * const b6 = null;
//  * console.log(comp(a6, b6)); // should return false
//  */

// //  loop through arr a and return a squared arr
// //  compare to arr b to see if both arr's match

// const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// const b1 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// const a2 = [121, 144, 19, 161, 19, 144, 19, 11];
// const b2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

// const a3 = [121, 144, 19, 161, 19, 144, 19, 11];
// const b3 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];

// const a4 = [];
// const b4 = [];

// const a5 = null;
// const b5 = [1, 4, 9];

// const a6 = [1, 2, 3];
// const b6 = null;



// const compareArrrays = (arr1, arr2) => {
//  if (!arr1 || !arr2) return false
//  if (arr1.length !== arr2.length) return false
//  const squaredAndSortedArr1 = arr1.map(a => a * a).sort((a, b) => a - b)
//  const sortedArr2 = arr2.sort((a, b) => a - b)

//  for (let i = 0; i < sortedArr2.length; i++) {
//    if (squaredAndSortedArr1[i] !== sortedArr2[i]) {
//       return false
//    }
//  }
//       return true
// }

//  console.log(compareArrrays(a1, b1)); // should return true
//  console.log(compareArrrays(a2, b2))
//  console.log(compareArrrays(a3, b3))
//  console.log(compareArrrays(a4, b4))
//  console.log(compareArrrays(a5, b5))
//  console.log(compareArrrays(a6, b6))

// #2
// 🔁 Practice Problem: Cube Comparison
// Problem Statement:

// Write a function compareCubes(arr1, arr2) that returns true if each value in arr2 is the cube of a value in arr1, and the frequency of values matches. Otherwise, return false.

// You must account for duplicates and order does not matter.

// Return false if either array is null or undefined.

// const compareCubes = (arr1, arr2) => {
//    if (!arr1 || !arr2) return false 
//    if (arr1.length !== arr2.length) return false
  
//    const cubedAndSortedArr1 = arr1.map(a => a * (a * a)).sort((a, b) => a - b)
//    const sortedArr2 = arr2.sort((a, b) => a - b)
//    for (i = 0; i < arr1.length; i++) {
//       if (cubedAndSortedArr1[i] !== sortedArr2[i]) {
//          return false
//       }
//    }
//    return true
// } 



// console.log(compareCubes([2, 3, 4], [8, 27, 64]));             // true
// console.log(compareCubes([2, 2, 3], [8, 8, 27]));              // true
// console.log(compareCubes([2, 2, 3], [8, 27]));                 // false
// console.log(compareCubes([1, 2, 3], [1, 8, 27, 64]));          // false
// console.log(compareCubes(null, [1, 8, 27]));                   // false
// console.log(compareCubes([], []));                             // true

// #3
// 🔁 Practice Problem: Anagram Cubes
// 🧠 Problem Statement:
// Write a function compareAnagramCubes(arr1, arr2) that returns true if:
// Every string in arr1 represents a number
// Its cube is present in arr2
// All cube values in arr2 are represented as strings, but possibly as anagrams (i.e., scrambled digits)
// You must also match frequency and ignore order.
// 📦 Requirements:
// arr1 is an array of numeric strings (e.g. "2", "3")
// arr2 is an array of stringified cubes (e.g. "8", "27") in anagram form (e.g. "72" instead of "27")
// Return false if:
// An input is null
// Lengths don’t match
// A cube from arr1 is not found as an anagram in arr2

const isStrAnagram = (str1, str2) => {
   if (str1.length !== str2.length) return false
   const splitStr1 = str1.split('')
   const splitStr2 = str2.split('')
   for (let i = 0; i < str1.length; i++) {
      if (!splitStr1.includes(splitStr2[i])) return false
   }
   return true
}
// console.log('isStrAnagram?', isStrAnagram('132', '123'))
// console.log('isStrAnagram?', isStrAnagram('cinema', 'iceman'))

const doesStrRepresentNumber = str => !isNaN(str) ? true : false
// console.log('doesStrRepresentNumber?', doesStrRepresentNumber('132', '123'))
// console.log('doesStrRepresentNumber?', doesStrRepresentNumber('cinema', 'iceman'))

const cubeStrRepresentingNum = str => {
   const num = Number(str)
   const cube = num * num * num
   return String(cube)
}
// console.log('cubeStrRepresentingNum', cubeStrRepresentingNum('123'))

const compareAnagramCubes = (arr1, arr2) => {
   if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) return false
  
   const isNumeric = str => Number.isFinite(Number(str))
   const normalize = str => str.split('').sort().join('')
   
   const frequencyMap = {}

   for (let NumStr of arr1) {
      if (!isNumeric(NumStr)) return false
      const cubed = (Number(NumStr) ** 3).toString()
      const normalized = normalize(cubed)
      
      frequencyMap[normalized] = (frequencyMap[normalized] || 0) + 1
   }

   for (let candidate of arr2) {
      const normalized = normalize(candidate)
      if (!frequencyMap[normalized]) return false
      frequencyMap[normalized]--
   }
       return true
} 
console.log(compareAnagramCubes(["2", "3"], ["8", "27"]));                 // true
console.log(compareAnagramCubes(["2", "3", "4"], ["8", "27", "46"]));      // true
console.log(compareAnagramCubes(["2", "3", "2"], ["8", "27", "8"]));       // true
console.log(compareAnagramCubes(["5"], ["521"]));                         // true
console.log(compareAnagramCubes(["5", "3"], ["125", "72"]));               // true
console.log(compareAnagramCubes(["5", "3"], ["125", "27", "64"]));         // false
console.log(compareAnagramCubes(null, ["125"]));                          // false


// 💡 Hint:
// You'll need a helper to check if two strings are anagrams.

// Use a frequency map or sort technique for anagram detection.

// Consider transforming arr1 into cubed strings first.











