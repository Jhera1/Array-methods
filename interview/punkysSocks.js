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

const pairSocks = sockArray => [
    ...new Set(
      sockArray.filter((sockColor, _, allSocks) =>
        allSocks.filter(currentSock => currentSock === sockColor).length > 1
      )
    )
  ];

console.log(pairSocks('Punkys Socks', ['red','blue','blue','green'])) // => ['red', 'blue']