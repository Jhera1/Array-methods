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


// const inverseOfNums = nums => {
  
//   for (let i=0;i<nums.length;i++) {
//     if (nums[i] < 0) return Math.abs(nums[i])
//   }
//   return nums[i] * -1
// }
 
// console.log(inverseOfNums([1, 2, 3, 4, 5]))
// console.log(inverseOfNums([-1, -2, -3, -4, -5]))



// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []


// #5
// 8 kyu
// Correct the mistakes of the character recognition software
// 

// Description:
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// FundamentalsStrings

// const correctTranslation = str => 
//   str.split('').map(a => 
//     a === '5' ? 'S' :
//     a === '0' ? 'O' :
//     a === '1' ? 'I' :
//     a).join('')
  



//     console.log(correctTranslation("L0ND0N")); // ,"LONDON"
//     console.log(correctTranslation("DUBL1N")); // "DUBLIN"
//     console.log(correctTranslation("51NGAP0RE")); // "SINGAPORE"
//     console.log(correctTranslation("BUDAPE5T")); // "BUDAPEST"
//     console.log(correctTranslation("PAR15")); // "PARIS"


///////////////////////////////////////////

// Description:
// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

const mergeArrays = (arr1, arr2) => {
    let result = []
    let maxArrLength = Math.max(arr1.length, arr2.length)
    
    

    for (i = 0; i < maxArrLength; i++) {
     
      if (arr1[i] === undefined) arr1[i]++
      if (arr2[i] === undefined) arr2[i]++
      result.push(arr1[i])
      result.push(arr2[i])
    }
    return result
}
    

console.log(mergeArrays([1, 3, 5], [2, 2, 4, 6]))
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])) // => [a, 1, b, 2, c, 3, d, 4, e, 5]