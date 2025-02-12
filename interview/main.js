// // // console.log('hello world')
// // # Count Removed Duplicate Letters

// // Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.
// // Note: This includes any character
// // Example
// // 'abbbbc'  => 'abc'    #  answer: 3
// // 'abbcca'  => 'abca'   #  answer: 2
// // 'ab cca'  => 'ab ca'  #  answer: 1

// const countRemovedLetters = str => {
//     let count = 0
//     for (i = 0; i < str.length; i++) {
//       if (str[i] === str[i - 1]) {
//         count++
//       }
//     }
//     return count
// }

// console.log(countRemovedLetters('abbbbc'))
// console.log(countRemovedLetters('abbcca'))
// console.log(countRemovedLetters('ab cca'))












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

// function solve(a, b) {
//    return b.map(target => {
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === target) {
//             count++
//         }
//     }
//     return count;
//    })
// }

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

// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))




// ["AS", "3S", "9S", "KS", "4S"]  ==> true

// ["AD", "4S", "7H", "KS", "10S"] ==> false

// const isFlush = cards => {
//     return cards.every(card => card[1] === cards[0].slice(- 1))
//    }
// console.log(isFlush(["AS", "3S", "9S", "KS", "4S"] ))
// console.log(isFlush(["AD", "4S", "7H", "KS", "10S"] ))




// Description:
// Write a function that takes two array arguments, and returns a new array populated with the elements that appear in either array, but not in both. Elements should only appear once in the returned array.

// The order of the elements in the result should follow what appears in the first array, then the second one.

// Examples
// [1, 2, 3, 3], [3, 2, 1, 4, 5] --> [4, 5]

// ["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"] --> ["tartar", "domino"]

// [77, "ciao"], [78, 42, "ciao"] --> [77, 78, 42]

// [1, 2, 3, 3], [3, 2, 1, 4, 5, 4] --> [4,5]

// [1, 2, 3] , [3, 3, 2, 1] --> []

// const hotSingles = (arr1, arr2) => {
//     const resultArr = []
//     for (let item of arr1) {
//         if (!arr2.includes(item) && !resultArr.includes(item)) {
//             resultArr.push(item)
//         }
//     }
//     for (let item of arr2) {
//         if (!arr1.includes(item) && !resultArr.includes(item)) {
//             resultArr.push(item)
//         }
//     }
//     return resultArr
// }
// console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]))
// console.log(hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]))


// Given a text, for example:

// const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

// get an array of last names of people named Michael. The result should be:
// ["Jordan", "Johnson", "Green", "Wood"]

// Notes:

// First name will always be Michael with upper case 'M'.
// There will always be a space character between 'Michael' and last name.
// Last name will always be one word, starting with an upper-case letter and continuing with lower-case letters.
// There will always be at least one 'Micheal' with a valid last name in the input text.

// const getMichaelsLastName = str => {
//        const resultArr = []
//        let splitStr = str.split(/\s+/)
       
//        for (let i = 0; i < splitStr.length; i++) {
//         if (splitStr.replace(/[^a-zA-Z]/g, '') === 'Michael') {
//             resultArr.push(splitStr[i + 1].replace(/[^a-zA-Z]/g, ''))
//         }
//        }
//        console.log(cleanSplitString)
//        console.log(splitStr)
//        return resultArr
// }
// console.log(getMichaelsLastName(inputText))

// const getMichaelsLastName = str => {
//     const resultArr = [];
//     const words = str.split(" "); // Split string into words

//     const cleanWord = word => {
//         let cleaned = "";
//         for (let char of word) {
//             if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
//                 cleaned += char; // Keep only letters
//             }
//         }
//         return cleaned;
//     };

//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === "Michael") { // Find "Michael"
//             let lastName = words[i + 1] || ""; // Get next word
//             lastName = cleanWord(lastName); // Remove punctuation manually

//             // Validate last name (starts with uppercase, rest lowercase)
//             if (lastName.length > 0 && lastName[0] >= "A" && lastName[0] <= "Z") {
//                 let isValid = true;
//                 for (let j = 1; j < lastName.length; j++) {
//                     if (!(lastName[j] >= "a" && lastName[j] <= "z")) {
//                         isValid = false;
//                         break;
//                     }
//                 }
//                 if (isValid) resultArr.push(lastName);
//             }
//         }
//     }

//     return resultArr;
// };

// const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

// console.log(getMichaelsLastName(inputText)); 
// // Output: ["Jordan", "Johnson", "Green", "Wood"]


// const getMichaelsLastName = str => {
//     return (str.match(/Michael ([A-Z][a-z]+)/g) || []).map(match => match.split(" ")[1]);
// };

// const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

// console.log(getMichaelsLastName(inputText));
// // Output: ["Jordan", "Johnson", "Green", "Wood"]



// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.




// function getAge(inputString){
//     return parseInt(inputString.match(/[0-9]/g)) 
//     }
//     console.log(getAge("5 years old"))



////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\

// Remove exclamation marks !!!


// function removeExclamationMarks(s) {
//     return s.replace(/['!']/g, '')
//   }
//   console.log(removeExclamationMarks('Somewhere! in! time!!!!'))








// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5


// const litres = hrs => {
//     const litresPerHr = 0.5
//     return Math.floor(litresPerHr * hrs)
// }
// console.log(litres(11.8))








// Description:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// const uniqueInOrder = str => {
//     const resultArr = []
//     const splitArr = [...str]
//     for (i = 0; i < splitArr.length; i++) {
//         if (str[i] !== str[i+1]) {
//             resultArr.push(str[i])
//         }
//     }
//     return resultArr

// }

// const uniqueInOrder = str => {
//     const resultArr = []
//     const strArr = str.split('')
    
//     for (i = 0; i < strArr.length; i++) {
//       if (str[i] !== str[+1]) {
//         resultArr.push(str[i])
//       }
//      }
//       return resultArr
//     }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))









// Description:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// ArraysFundamentals


// const sumToLowest = arr => {
//     const reorderedArr = arr.sort((a, b) => a - b)
//     return reorderedArr[0] + reorderedArr[1] 
// }
// console.log(sumToLowest([10, 343445353, 3453445, 3453545353453]))











// function firstNonConsecutive (arr) {
//     for (let i = 1; i < arr.length; i++) {
//      if (arr[i] !== arr[i-1] + 1) {
//         return arr[i]
//     } 
//   }
//   return 'All Consecutive'
// }
// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))  // => 6
// console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]))  // => 6





// const findCentury = year => {
//     const yearToString = year.toString()
//     const firstTwoDig = yearToString.slice(0, -2)
//     const lastTwoDig = yearToString.slice(-2)
//     // console.log(firstTwoDig)
//     // console.log(lastTwoDig)
//     return lastTwoDig !== '00' ? Number(firstTwoDig) + 1 : Number(firstTwoDig)
// }

// const century = year => Math.ceil(year / 100);


//   console.log(century(1979))



// Description:
// Task
// Create a function that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// Examples
// "amazon" --> true
// "apple" --> false
// "banana" --> true
// Note
// Arguments consist of only lowercase letters.
// AlgorithmsStrings



// const areWeAlternates = str => {
//     const vowels = 'aeiou'
//     for (let i = 0; i < vowels.length; i++) {
// if (vowels.includes(str[0])) {
//     return 
// }
//     }
// }
// console.log(areWeAlternates("amazon"))



// const moveZeroes = numbers => {
//     let nonZeroPlacementIndex = 0;
    
//     for (let i = 0; i < numbers.length; i++) {
//         let currentNonZeroValue = numbers[i]
//         if (numbers[i] !== 0) {
//             numbers[i] = numbers[nonZeroPlacementIndex]
//             numbers[nonZeroPlacementIndex] = currentNonZeroValue
//             nonZeroPlacementIndex++
//         }
        
//         }
//     }


// let numbers = [0,1,0,3,12];//[1,3,12,0,0]
// moveZeroes(numbers);
// console.log(numbers); 

















// Given a string s, return true if the string 
// can be a palindrome after 
// deleting at most one character from it.

const validPalindrome = (s) => {
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
            let l = left + 1, r = right;
            while (l < r && s[l] === s[r]) l++, r--;
            if (l >= r) return true; // Removing left character worked
            
            l = left, r = right - 1;
            while (l < r && s[l] === s[r]) l++, r--;
            return l >= r; // Removing right character worked
        }
        left++;
        right--;
    }
    
    return true;
};
console.log(validPalindrome('ottlo'))
















// const moveZeroes = numbers => {
//     let nonZeroIndex = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (nums[i] !== 0) {
//             // Swap nums[i] with nums[nonZeroIndex] using a temp variable
//             let temp = nums[i];
//             nums[i] = nums[nonZeroIndex];
//             nums[nonZeroIndex] = temp;
            
//             // Move the nonZeroIndex forward
//             nonZeroIndex++;
//         }
//     }
// };

// let nums = [0, 1, 0, 3, 12];
// moveZeroes(nums);
// console.log(nums); // Output: [1, 3, 12, 0, 0]

