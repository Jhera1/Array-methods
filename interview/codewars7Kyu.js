// #1 sliding windows

// Description:
// Task
// Given a length, an offset, and a list, slide a window of that length, moving by that offset every step, over the list, returning a list of lists.

// The windows may overlap each other, or skip certain elements. All windows should be of the given length; 
// if insufficient elements remain after a certain offset, end the list of lists. It is possible to take 0 
// elements from an empty list, so take care to handle window(0,offset,list) correctly.

// The length will always be non-negative; the offset will always be strictly positive.

// Examples
// for 2, 1, [0,1,2,3,4] return [ [0,1], [1,2], [2,3], [3,4] ]
// for 2, 2, [0,1,2,3,4] return [ [0,1], [2,3] ]
// for 2, 3, [0,1,2,3,4] return [ [0,1], [3,4] ]

// const slidingWindow = (length, offset, list) => {
//     if (list.length === 0) {}
// }

// console.log(slidingWindow(2, 1, [0,1,2,3,4])) // [ [0,1], [1,2], [2,3], [3,4] ]
// console.log(slidingWindow(2, 2, [0,1,2,3,4])) // [ [0,1], [2,3] ]
// console.log(slidingWindow(2, 3, [0,1,2,3,4])) // [ [0,1], [3,4] ]
// // Problem Breakdown:
// You need to slide a window of size length over a list, moving offset steps forward each time.
// Each window should be exactly of size length. If you reach the end of the list and don't have enough elements left, you stop.
// The offset tells you how many steps to move forward each time.
// Special edge case: if length is 0, the result should be an array of empty arrays ([]) repeated at each valid offset position.

// Description:
// Everybody loves pi, but what if pi were a square? Given a number of digits digits, find the smallest integer whose square is greater or equal to the sum of the squares of the first digits digits of pi, including the 3 before the decimal point.

// Note: Test cases will not extend beyond 100 digits; the first 100 digits of pi are pasted here for your convenience:



///////////////////////////////////////////////////////////////

// Description:
// Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, 
// so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in 
// her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, 
// from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

// In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from 
// the comment (string) that create the word.

// Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
// Spaces are not places, you need the actual letters. No spaces.
// The returned word should be all lowercase letters.
// if you can't find one of the letters using the index numbers, return "No mission today". 
// Jenny would be very sad, but that's life... :(
// Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")

// const decodeString = (numsArr, str) => {
// let cleanStr = str.split(' ').join(' ')
// let result 
// return cleanStr
// }
// console.log(decodeString([5, 0, 3], "I Love You"))

function findShort(s){
    let splitStr = s.split(' ')
    let longestWordLength = 0
    for (let word of splitStr) {
      if (word.length <= longestWordLength) {
        longestWordLength = word.length
      }
    }
    return longestWordLength
  }