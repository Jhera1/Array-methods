
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


const reverseVowels = s => {
 const vowels = new Set('aeiouAEIOU')
 let sArr = [...s]
 let l = 0, r = sArr.length - 1
 while (l < r) {
    if (!vowels.has(sArr[l])) {
    l++
    continue
    }
    if (!vowels.has(sArr[r])) {
    r--
    continue
    }
    [sArr[l], sArr[r]] = [sArr[r], sArr[l]]
    l++
    r--
 }
 return sArr.join('')
};

// Test cases
console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("leetcode")); // "leotcede"
console.log(reverseVowels("aA")); // "Aa"
console.log(reverseVowels("racecar")); // "racecar"
console.log(reverseVowels("")); // ""
