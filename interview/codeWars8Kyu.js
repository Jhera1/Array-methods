// #1
// function hello(name) {
  
//   if (typeof name !== 'string' || name === '') return 'Hello World!'
//   let trimed = name.trim()
//   let formated = trimed[0].toUpperCase() + trimed.slice(1).toLowerCase()

 
//     return `Hello, ${formated}`
//   }

  
// console.log(hello('johN'));   // 'Hello, John!'
// console.log(hello('alice'));  // 'Hello, Alice!'
// console.log(hello());         // 'Hello, World!'
// console.log(hello(''));       // 'Hello, World!'


// #2
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// function otherAngle(a, b) {
  
//   if (a === 0 || b === 0) return 0
//   const aPlusB = Math.sqrt(a) + Math.sqrt(b)
//   return aPlusB * aPlusB
// }
// console.log(otherAngle(30, 60)) // => 90




// #3
///////move to 2 decimel places


// function twoDecimalPlaces(n) {
//   return n.toFixed(2)
// }
// console.log(2.35653)



// #4
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []


const inverseOfNums = nums => {
  
  for (let i=0;i<nums.length;i++) {
    if (nums[i] < 0) return Math.abs(nums[i])
  }
  return nums[i] * -1
}
 
console.log(inverseOfNums([1, 2, 3, 4, 5]))
console.log(inverseOfNums([-1, -2, -3, -4, -5]))



// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []