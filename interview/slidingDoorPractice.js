// leetcode #3

// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// const longestSubStr = str => {
// let longestSubCount = 0
// let set = new Set()

// let left = 0
// let right = 0

// while (right < str.length) {
//     let letter = str[right]
//     if (!set.has(letter)) {
//         set.add(letter)
//         right++
//         longestSubCount = Math.max(longestSubCount, set.size)
//     } else {
//         set.delete(str[left])
//         left++
//     }
//   } 
//   return longestSubCount
// }
// console.log(longestSubStr('sdsdysd'))
// console.log(longestSubStr('sdsdsd'))
// console.log(longestSubStr('adsdysd'))





// leetcode #5
// Longest Palandromic substring

// Given a string s, return the longest palindromic substring in s.

 

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

//  "expand around center" technique.

const longestPalandrome = s => {

}