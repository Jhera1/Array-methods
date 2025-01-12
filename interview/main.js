// // // console.log('hello world')
// // # Count Removed Duplicate Letters

// // Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.
// // Note: This includes any character
// // Example
// // 'abbbbc'  => 'abc'    #  answer: 
// // 'abbcca'  => 'abca'   #  answer: 2
// // 'ab cca'  => 'ab ca'  #  answer: 1

// // find duplicate
// // remove extras
// // return without duplicates

// // const removeConsecRepeats = str => str.split('')
 
// function countOfCharacters (str) {
//     let strArr = [...str] 
//     let charRemoved = []
//     for (i = 0; i < strArr.length; i++) {
      
//         console.log(strArr[i])
      
//     }
//     console.log(strArr[0])
//     return charRemoved.length
// }



// console.log(countOfCharacters('abbbbc'))

// function countRemovalsToAvoidRepeats(input) {
//     let removals = 0;
//     for (let i = 0; i < input.length - 1; i++) {
//         if (input[i] === input[i + 1]) {
//             removals++;
//         }
//     }
//     return removals;
// }

// // Example Usage:
// console.log(countRemovalsToAvoidRepeats("aabbcc")); // Output: 3
// console.log(countRemovalsToAvoidRepeats("aaabbb")); // Output: 4
// console.log(countRemovalsToAvoidRepeats("abc"));    // Output: 0

//////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\

// const greaterThan9 = n => n > 9 ? true : false
// const lessThan9 = n => n < 9 ? true : false

// const all = (sequence, func) => sequence.length === 0 || sequence.every(func);
// console.log(all([1,2,4,6,], greaterThan9))
// console.log(all([], lessThan9))

/////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\

// function eachCons(array, n) {
// 	result = []
//     for (i = 0; i < array.length; i++) {
        
//         result.push(array.slice(i, n)) 
//        i++ 
//     }
//    return result
// }


// console.log(eachCons([1,2,3,4,5,6,7,8,9], 4))





// function eachCons(array, n) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
         
//         let subArray = array.slice(i, i + n);

//         if (subArray.length === n) {
//             result.push(subArray);
//         }
//     }
//     return result;
// }

// console.log(eachCons([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

// function differenceInAges(ages){
//     const youngestToOldest = ages.sort((a, b) => a - b)
//     const youngest = youngestToOldest[0]
//     const oldest = youngestToOldest[youngestToOldest.length - 1]
//     const diff = oldest - youngest
//     return {youngest, oldest, diff}
//   }
// function differenceInAges(ages){
//     const youngestToOldest = ages.sort((a, b) => a - b)
//     const youngest = youngestToOldest[0]
//     const oldest = youngestToOldest[youngestToOldest.length - 1]
//     const difference = oldest - youngest
//     return [youngest, oldest, difference] 
// }
  
// console.log(differenceInAges([50, 12, 6, 99, 102, 7, 17]))


//???????????????????????????????????????
// var reverseVowels = function(s) {
//     const sArr = s.split('')
//     const VowelsInS = s.match(/[aeiou]/gi)
//     for (let i = 0; i < sArr.length; i++) {
//         if (VowelsInS.includes(sArr[i])) {
//            sArr[i] = VowelsInS.pop()
//         }
//         console.log(i)
//     }

//         return sArr.join('')
// };

// console.log(reverseVowels('Somewhere in time'))

//????????????????????????????????????????


// var reverseWords = function(s) {
//     let wordsArr = s.split(' ') 
//     let revArr = wordsArr.reverse()
//     return revArr.join(' ')
//  };
// console.log(reverseWords('Somewhere in time'))

// function solve(a,b){
//     const newArr = [] 
//     const result = []
    
//     let a = ['abc', 'abc', 'xyz', 'cde', 'uvw']
//      let b = ['abc', 'cde', 'uap']

//    for (let i = 0; i < a.length; i++) {
//        if (b.includes(a[i])) {
//          newArr.push(a[i])
//        }
  
//    } 
//    return newArr
// }
// solve(a, b)

function solve(a, b) {
   return b.map(target => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === target) {
            count++
        }
    }
    return count;
   })
}

// function solve(a, b) {
//     let numOfTimes = 0;
//     for (let item of a) {
//       if (b.includes(item)) {
//         numOfTimes++;
//       }
//     }
//     return numOfTimes;
//   }
  



// // Example usage:
// let a = ['abc', 'abc', 'xyz', 'cde', 'uvw'];
// let b = ['abc', 'cde', 'uap'];
// console.log(solve(a, b)); // Output: ['abc', 'abc', 'cde']


//////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic 
// characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// function numOfDup(str) {
//     const lowerCaseStr = str.toLowerCase()
//     const charMap = {}
//     for (let char of lowerCaseStr) {
//     charMap[char] = (charMap[char] || 0)+ 1
//     }
//     let countResult = 0
//     for (let count of Object.values(charMap)) {
//         if (count > 1) {
//             countResult++
//         }
//     }

    

//     return countResult

//     }
// console.log(numOfDup('indivisibility'))
// console.log(numOfDup('Indivisibilities'))
// console.log(numOfDup('aA11'))
// console.log(numOfDup('ABBA'))
// console.log(Object.values(charMap))
// function duplicateCount(text){
//     const lowerCaseText = text.toLowerCase()
//     const charMap = {}
//     for (let char of lowerCaseText) {
//       charMap[char] = (charMap[char] || 0) + 1
//     }
//       let returnCount = 0
//       for (let count of Object.values(charMap)) {
//         if (count > 1) {
//           returnCount++
//         }
//       } return returnCount 
//     }
//     console.log(duplicateCount('indivisibility'))
// const findApplicants = (list) => {
//     for (let applicant of list) {
//       if (applicant[0] >= 55 && applicant[1] > 7) {
//         console.log('Senior')
//       } else {
//         console.log('Open')
//       }
//     }
// } 

// const findApplicants = (list) => {
//     let listOfStrings = []
//     for (let applicant of list) {
//         if (applicant[0] >= 55 && applicant[1] > 7) {
//         listOfStrings.push('Senior')
//       } else {
//         listOfStrings.push('Open')
//       } 
//     } 
//     return listOfStrings
// } 
    
// findApplicants([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])
    // list[0][1]

// console.log(findApplicants([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

// const openOrSenior = data => data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? 'Senior' : 'Open'))
// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

// const indexOfAllOccurrences = (arr, n) => {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             result.push(i)
//         }
//     } return result
// }

// // const indexOfAllOccurrences = (arr, n) => arr.indexOf(n)


// // indexOfAllOccurrences([6, 9, 3, 4, 3, 82, 11], 3)
// console.log(indexOfAllOccurrences([6, 9, 3, 4, 3, 82, 11], 3))

// function countPositivesSumNegatives(input) {
//     let pos = 0
//     let neg = 0
//     if (input[0] === 0) {
//         return []
//     }
//     for (i = 0; i < input.length; i++) {
//       if (input[i] > 0) {
//         pos++
//       } else if (input[i] < 0) {
//         neg += input[i]
//       }
//     } 
//     return [pos, neg]
//     }


//  countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))