// LeetCode #5

// Given a string s, return the longest palindromic substring 
// in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

const longestPalindromicStr = s => {
    let strToArr = s.split()
    let leftPointer = 0
    let rightPointer = 1
    let palimdromeList = []
    for (let i = 0; i < strToArr.length; i++) {
        let palindrome = strToArr.slice(leftPointer, rightPointer)
        if (strToArr[leftPointer] !== strToArr[rightPointer]) {
            rightPointer++
        } else {
            palimdromeList.push(palindrome)
        }
    }
    return palimdromeList

}
console.log(longestPalindromicStr("babad"))