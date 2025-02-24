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
console.log(vowelsConsonantsCount('Somewhere in time'))




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
console.log(charThatAppearsOnlyOnce([9, 9, 4, 4, 5, 6, 5, 6]))

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

console.log(almostPalindrome('raceciiar', 2)); // ✅ true
console.log(almostPalindrome('abca', 1)); // ✅ true
console.log(almostPalindrome('abcdef', 2)); // ❌ false
