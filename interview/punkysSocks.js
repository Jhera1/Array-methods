// Description:
// Punky loves wearing different colored socks, but Henry can't stand it.

// Given an array of different colored socks, return a pair depending on who was picking them out.

// Example:

// getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
// Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

// If there is no possible combination of socks, return an empty array.

// const pairSocks = arrOfSocks => {
//     let punkiesSocks = arrOfSocks.filter(a => a === b)
//     return punkiesSocks
// }

const getSocks = (name, socks) => {
  if (name.length < 2) return []
  if (name === 'punky') {
    [color1, color2] = [...new Set(socks)]
    return color2 ? [color1, color2] : []
  }

  if (name === 'henry') {
    const pairOfASocks = socks.find(a => a === socks ? pairOfASocks : [])
    // return 
  }  
    
}

console.log('Punkys Socks', getSocks('punky', ['red','blue','blue','green'])) // => ['red', 'blue']
console.log('Henrys Socks', getSocks('henry', ['red','blue','blue','green'])) // => ['blue', 'blue']