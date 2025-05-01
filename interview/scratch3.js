// ***********Fill in the gaps in my timesheet.(caodewars)

// Background:
// At work I need to keep a timesheet, by noting which project I was working on every 15 minutes. I have an timer that beeps every 15 minutes to prompt me to note down what I was working on at that point, but sometimes when I'm away from my desk or working continuously on one project, I don't note anything down and these get recorded as null.

// Task:
// Help me populate my timesheet by replacing any null values in the array with the correct project name which is given by surrounding matching values.

// Examples:
// fill_gaps([1,null,1]) -> [1,1,1]   # Replace nulll values surrounded by matching values
// fill_gaps([1,null,null,null,1]) -> [1,1,1,1,1]  # There may be multiple nulls
// fill_gaps([1,null,1,2,null,2]) -> [1,1,1,2,2,2]  # There may be multiple replacements required
// fill_gaps([1,null,2,null,2,null,1]) -> [1,null,2,2,2,null,1]  # No nesting.
// fill_gaps([1,null,2]) -> [1,null,2] # No replacement if ends don't match
// fill_gaps([null,1,null]) -> [null,1,null] # No replacement if ends don't match off the ends of the array
// fill_gaps(['codewars', null, null, 'codewars', 'real work', null, null, 'real work']) -> ["codewars", "codewars", "codewars", "codewars", "real work", "real work", "real work", "real work"] # Works with strings too
// Input:
// An array of values some of which will be null

// Output:
// An array with any consecutive null elements surrounded by equal values replaced by that value.

// const fillInTimeSheet = timeLogArr => {
    
//   let result = [...timeLogArr]
  
//   for (let j = 0; j < result.length; j++) {
//     if (result[j] === null) {
//      let start = j
//     }
//   } 
  
    
//   while (j < result.length && result[j] === null) {
//     j++
//   }
  
//   const before = result[start - 1]
//   const after = result[j]
  
//   if (before !== undefined && before === after) {
//     for (let i = start; i < j; i++) {
//       result[i] = before 
//     }
//   }
//   return result
// }
// console.log(fillInTimeSheet([1,null,2,null,2,null,1]))
// console.log(fillInTimeSheet([1,null,1,2,null,2]))
// console.log(fillInTimeSheet([1,null,null,1,2,null,2])) // should be [1,1,1,1,2,2,2,]




////////////////////////////////


// Description:
// A latin square is an n × n array filled with the integers 1 to n, each occurring once in each row and column.

// Here are examples of latin squares of size 4 and 7:

// [[1, 4, 3, 2],      [[2, 3, 1, 7, 4, 6, 5], 
//  [4, 3, 2, 1],       [7, 1, 6, 5, 2, 4, 3], 
//  [3, 2, 1, 4],       [6, 7, 5, 4, 1, 3, 2], 
//  [2, 1, 4, 3]]       [4, 5, 3, 2, 6, 1, 7], 
//                      [5, 6, 4, 3, 7, 2, 1], 
//                      [1, 2, 7, 6, 3, 5, 4], 
//                      [3, 4, 2, 1, 5, 7, 6]]
// Latin squares have many practical uses, for example in error-correcting-codes and the design of agricultural experiments. See https://en.wikipedia.org/wiki/Latin_square for more details. Sudoku is a special type of 9 x 9 latin square, with additional conditions.

// Task: Write a function that returns a latin square for any positive integer n.

// function makeLatinSquare(n) {
//   const square = [];

//   for (let i = 0; i < n; i++) {
//     const row = [];
//     for (let j = 0; j < n; j++) {
//       row.push((i + j) % n + 1);
//     }
//     square.push(row);
//   }

//   return square.forEach(row => console.log(row));
// }
// console.log(makeLatinSquare(4))



///////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




// Description:
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// let list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'Ruby' }
// ];
// // your function should return true.


// const hasARubyDeveloperSignedUp = arrOfObjects => {
//   for (let obj of arrOfObjects) {
   
//       if (obj.language == 'Ruby') {
//         return true
//       } 
   
//   }
// }

// console.log(hasARubyDeveloperSignedUp(list1))



// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]



// function twoSum(numbers, target) {
//    for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i])
    
//     for (let j = 0; j < numbers.length; j++) {
//       if (i === j) {
//         j++
//       }
      
//       // console.log(j, i)
//       if ((numbers[j] + numbers[i]) === target) {
//         // console.log(j, i)
//         return [j, i]
//       }
//      } 
//   } 
//   return 'No Match'
// }
// console.log(twoSum([3, 2, 4], 6))
// console.log(twoSum([1, 2, 3], 4))

