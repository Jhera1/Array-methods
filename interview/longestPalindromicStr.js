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
    if (!s || s.length < 1) return "";
  
    let start = 0;
    let end = 0;
  
    const expandAroundCenter = (left, right) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
        console.log(left, right)
      }
      return [left + 1, right - 1];
    };
  
    for (let i = 0; i < s.length; i++) {
      const [left1, right1] = expandAroundCenter(i, i);
      const [left2, right2] = expandAroundCenter(i, i + 1);
  
      if (right1 - left1 > end - start) {
        start = left1;
        end = right1;
      }
      if (right2 - left2 > end - start) {
        start = left2;
        end = right2;
      }
    }
  
    return s.slice(start, end + 1);
  };
  
console.log(longestPalindromicStr("babad"))