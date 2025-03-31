
// const canPlaceFlowers = (flowerbed, n) => {
//     let plantedFlowers = 0
//     for (let i = 0; i < flowerbed.length; i++) {
//         if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) &&
//         (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
//             flowerbed[i] = 1
//             plantedFlowers++
//             i++
//         }
        
//     }
//     return plantedFlowers >= n
// };

// console.log(canPlaceFlowers([1,0,0,0,1], 1))


// const canPlaceFlowers = (flowerbed, n) => {
//     let flowersPlaced = 0
//     for (let i = 0; i < flowerbed.length; i++) {
//         while (flowersPlaced <= n) {
//         if ((i === 0 || flowerbed[i - 1] === 0) 
//             && (i === flowerbed.length - 1 
//         || flowerbed[i + 1] === 0)) {
//             flowerbed[i] = 1
//             flowersPlaced++
//             i++
//         }
//         }
//         return flowersPlaced <= n
//     }
// };
// console.log(canPlaceFlowers([1,0,0,0,1], 1))



/////Reverse Vowels\\\\\\\\\\



// var reverseVowels = function(s) {
//     const vowels = s.match(/[aeiou]/ig)
//     const withRevVowels = []
//     for (letter of s) {
//         if (/[aeiou]/i.test(letter)) {
//             withRevVowels.push(vowels.pop())
//         } else {
//             withRevVowels.push(letter)
//         }
//     } 
//     return withRevVowels.join('')
// };
// console.log(reverseVowels("IceCreAm"))


// const reverseVowels = s => {
//  const vowels = new Set('aeiouAEIOU')
//  let sArr = [...s]
//  let l = 0, r = sArr.length - 1
//  while (l < r) {
//     if (!vowels.has(sArr[l])) {
//     l++
//     continue
//     }
//     if (!vowels.has(sArr[r])) {
//     r--
//     continue
//     }
//     [sArr[l], sArr[r]] = [sArr[r], sArr[l]]
//     l++
//     r--
//  }
//  return sArr.join('')
// };

// // Test cases
// console.log(reverseVowels("hello")); // "holle"
// console.log(reverseVowels("leetcode")); // "leotcede"
// console.log(reverseVowels("aA")); // "Aa"
// console.log(reverseVowels("racecar")); // "racecar"
// console.log(reverseVowels("")); // ""

// const reverseWords = str => {
//     let trimmedStr = str.split(/\s+/).reverse().join(' ').trim()
//     return trimmedStr
// }
// console.log(reverseWords("the sky is blue"))
// console.log(reverseWords("  hello world  "))
// console.log(reverseWords("a good   example"))



///////////productExceptSelf\\\\\\\\\\\\\\


// var productExceptSelf = function(nums) {
//     // const result = []
//     // for (let i = 0; i < nums.length; i++) {
//     // const cleanArr = nums.filter((_, index) => index !== i)
//     // const reduceCleanArr = cleanArr.reduce((acc, curr) => acc * curr)
//     // result.push(reduceCleanArr)
//     // }
//     // return result
//     let result = Array(nums.length).fill(1), left = 1, right = 1;
//   nums.forEach((num, i) => (result[i] *= left, left *= num));
//   nums.reverse().forEach((num, i) => (result[nums.length - 1 - i] *= right, right *=  num));
//   return result;
// };

// const productExceptSelf = arr => {
//  return arr.map(num => {
//      num = null
//      num * num
//  })
   
// }
// console.log(productExceptSelf([1,2,3,4]))


// const howManyDifferencesDoesItTake = (flowerbed, n) => {
//     let plantedFlowers = 0
//     for (let i = 0; i < flowerbed.length; i++) {
//         if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) &&
//         (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
//             flowerbed[i] = 1
//             plantedFlowers++
//             i++
//         }
        
//     }
//     return plantedFlowers >= n
// }
// console.log(howManyDifferencesDoesItTake([1,0,0,0,1], 1))

// Complete the method so that it returns an array of all 
// ID's passed in. The data structure will be similar to the 
// following:

// const data = {
//     id: 1,
//     items: [
//       {id: 2},
//       {id: 3, items: [
//         {id: 4},
//         {id: 5}
//       ]}
//     ]
//   }

// const extractIds = d => {
// let result = []
// for (let items of d) {
//     result.push(items.id)
// }
// return result
// }

// const extractIds = d => {
//     let result = [];

//     const traverse = obj => {
//         // Add current object's id
//         if (obj.id) {result.push(obj.id)}; 
//         // Recursively process children
//         if (obj.items) {
//             obj.items.forEach(traverse)
//         }; 
//     };

//     traverse(d);
//     return result;
// };



// console.log(extractIds(data)) // should return [1,2,3,4,5]



// const sumExceptSelf = arrOfNumbers => {
//     let resultArr = []

//     for (let i = 0; i < arrOfNumbers.length; i++) {
//         let tempArr = [...arrOfNumbers]
//         tempArr.splice(i, 1)
//         // console.log(tempArr)
//         let sumWithoutIndex = arrOfNumbers.pop([i], [i + 1]) 
//         resultArr.push(sumWithoutIndex)
//     }
//     return resultArr
// }

const sumExceptSelf = arr => { 
    let resultArr = []
    for (let i = 0; i < arr.length; i++) {
        let newArr = arr.slice(0, i).concat(arr.slice(i + 1)); 
        let newArrSum = newArr.reduce((a, b) => a * b) 
        resultArr.push(newArrSum)
    }
    return resultArr
}
console.log(sumExceptSelf([1, 2, 3, 4, 5])) // Expected new arr [120, 60, 40, 30, 24]




// Write a function that finds the contiguous subarray with the largest sum and returns that sum.
// Extension: Implement both the O(n) Kadane's algorithm and the divide-and-conquer approach.

// Write a function that takes a string as input and returns the string with only the first letter of each word capitalized.
// Extension : Modify the function to preserve the case of the remaining letters in each word.

// Given a positive integer n, return it reversed without converting it to a string.
// Bonus: modify this function to return a boolean expressing if the number is a palindrome.