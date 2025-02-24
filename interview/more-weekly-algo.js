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