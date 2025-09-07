// 1.Implement a function that takes a string and returns 
//   an object with the counts of vowels and consonants.

const vowelsConsonantsCount = str => {
    const counts = {'vowels': 0, 'consonants': 0}
    const cleanStr = str.replace(/[^A-Za-z]/g, '')
    const vowels = 'AEIOUaeiou'
    for (let char of cleanStr) {
        if (vowels.includes(char)) {
            counts.vowels++
        } else counts.consonants++
    }
    return counts
}
// console.log(vowelsConsonantsCount('Somewhere in time'))




// 2.Given a non-empty array of integers where every 
// element appears twice except for one, find that 
// single one.

const charThatAppearsOnlyOnce = arr => {
    const countObj = {}
    for (let char of arr) {
        countObj[char] = (countObj[char] || 0) + 1
    }
    for (let char in countObj) {
        if (countObj[char] === 1) {
            return `${char} appears only once in this array`
        }     
    }
    return `There is no number in ${arr} that appears only once`
}
// console.log(charThatAppearsOnlyOnce([9, 9, 4, 4, 5, 6, 5, 6]))

// 3.Given a string s, return true if the string can 
// be a palindrome after deleting at most one character 
// from it.

// 3.5 => Extension: Have the amount of removals be dynamic

// const almostPalindrome = (str, maxRemovals) => {
//     const s = str.toLowerCase()
//     let l = 0
//     let r = s.length-1
//     let removals = 0
//     while (l < r) {
//         if (s[l] === s[r]) {
//             l++
//             r--
//         } else {
//         if (removals >= maxRemovals) return false
    
//         if (s[l + 1] === s[r]) {
//             l++
//         } else if (s[l] === s[r - 1]) {
//             r--
//         } else {
//             return false
//         }
//         removals++
        
//         }
//     }

//     return true
// }
// console.log(almostPalindrome('Raceciiar', 2))

const isPalindrome = (s, l, r, removalsLeft) => {
    while (l < r) {
        if (s[l] === s[r]) {
            l++
            r--
        } else {
            if (removalsLeft === 0) return false
            return (
                isPalindrome(s, l + 1, r, removalsLeft - 1) || // Skip left character
                isPalindrome(s, l, r - 1, removalsLeft - 1)    // Skip right character
            )
        }
    }
    return true
}

const almostPalindrome = (str, maxRemovals) => {
    return isPalindrome(str.toLowerCase(), 0, str.length - 1, maxRemovals)
}

// console.log(almostPalindrome('raceciiar', 2)); // ✅ true
// console.log(almostPalindrome('abca', 1)); // ✅ true
// console.log(almostPalindrome('abcdef', 2)); // ❌ false







// loop through candies arr
// add extra candies to the item of arr
// compare to other kids candies to see if curr kid now has the most candies

// let arr = [12, 4, 6, 9, 19]
// let exCandies = 4

// const kidsWithCandies = (candies, extraCandies) => {
//     let 
// }



///////////////////////////////////////



// There is an array of strings. All strings contains 
// similar letters except one. Try to find it!

const findUniqueChar = strArr => {
    const reducedStrArr = strArr.map(
      s => [...new Set(s.toLowerCase())].sort().join("") // normalize
    );
     
    console.log(reducedStrArr)
    
    for (let i = 0; i < reducedStrArr.length - 1; i++) {
      if (reducedStrArr[i] === reducedStrArr[i + 1]) {
        continue; // same set, keep going
      } else {
        // one of these two is the odd one
        // decide which is unique by also checking the neighbor before/after
        if (i === 0) {
          // at the start, compare with the 2nd and 3rd
          return reducedStrArr[1] === reducedStrArr[2]
            ? strArr[0]
            : strArr[1];
        } else {
          // in the middle, compare with previous
          return reducedStrArr[i] === reducedStrArr[i - 1]
            ? strArr[i + 1]
            : strArr[i];
        }
      }
    }
    return null;
  };
//   findUniqueChar([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])
//   findUniqueChar(["abc", "cab", "bca", "abcd"])

// console.log(findUniqueChar([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))// => 'BbBb'
// console.log(findUniqueChar(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']))// => 'foo'


function missingWord(nums, str) {
    let cleanStr = str.toLowerCase().replace(/ /g, '')
    let corectOrderOfindex = nums.slice().sort((a, b) => a - b)
    let result = ''
    for (let i = 0; i < corectOrderOfindex.length; i++) {
     result += cleanStr[corectOrderOfindex[i]]
    }
     return result
   }
//    console.log(missingWord([0,3,5],'I love you'))

function sayHello( name, city, state ) {
    
    
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
 
}
// console.log(sayHello(["Justin","Lee", "Armstrong"], "Monterey", "California"))

// !!!!!!!!!!!!!!!!!!!!INTERVIEW QUESTION!!!!!!!!!
let cleanStr = arr => arr.map(item => item.replace(/\|\|/g, '').trim());
// console.log(cleanStr(["Justin || Lee || Armstrong || Monterey || California"]).toString()) 
//****************************************************/

// You will be given a list of strings. You must sort 
// it alphabetically (case-sensitive, and based on the 
// ASCII values of the chars) and then return the first
//  value.

// The returned value must be a string, and have "***" 
// between each of its letters.

// You should not remove or add elements from/to the
// array.

const bitSort = arr => {
return arr.sort((a, b) => b.length - a.length)[0].split('').join('***')
}
// console.log(bitSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))// = 'b***i***t***c***o***i***n' 



function findOddNames(list) {
    let oddNames = []
      for (let person of list) {
      let nameValue = person.firstName.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
      if (nameValue % 2 !== 0) {
        oddNames.push(person)
      } 
    }
    return oddNames
    }
    console.log(findOddNames( [
        { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
        { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }]))