// 1.Implement a function that takes a string and returns 
//   an object with the counts of vowels and consonants.

const vowelsConsonantsCount = str => {
    let counts = {'vowels': 0, 'consonants': 0}
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