// Prompt: Write a function that takes a list of numbers and returns the sum of all even numbers in the list.
// Extension: Modify the function to return both the sum of even numbers and the sum of odd numbers.

// const sumOfEvenAndOddNums = arr => { 
//     let evenArr = []
//     let oddArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//           evenArr.push(arr[i])
//         }

//         if (arr[i] % 3 === 0) {
//             oddArr.push(arr[i])
//           }
//      }
//      return {
//         'Sum of Even': evenArr.reduce((a, b) => a + b),
//         'Sum of Odd': oddArr.reduce((a, b) => a + b)
//      }
// }

const sumOfEvenAndOddNums = arr => 
console.log(sumOfEvenAndOddNums([1, 2, 3, 4, 5, 6]))