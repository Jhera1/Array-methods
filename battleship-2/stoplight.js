// let currentLightColor = ['red'].random()
// let lastWords = ''

// const remainderOfSentence = () => {
//     if (currentLightColor == 'green') {
//         lastWords = 'You can go!'
//     } else if (currentLightColor == 'red') {
//         lastWords = 'STOP!!!'
//     } else if (currentLightColor == 'yellow') {
//         lastWords = 'Slow Down'
//     } else {
//         lastWords = 'Just floor it'
//     }
// } 
// remainderOfSentence()

// const printSentence = () => `the light is ${currentLightColor}, ${lastWords}`

// console.log(printSentence())



// const whatColorIsTheLight = () => {
//     let currentLightColor = 'green'

//     if (currentLightColor == 'green') {
//         console.log('the light is green')
//     } else if (currentLightColor == 'red') {green
//         console.log('the light is red')
//     } else if (currentLightColor == 'yellow') {
//         console.log('the light is yellow')
//     } else {
//         console.log('there is no light')
//     }
// }
// whatColorIsTheLight()

// let currentLightColor = 'red'


// const colorOfLight = () => currentLightColor == 'green' ? 'the light is green' :
//                      currentLightColor == 'red' ? 'the light is red' :
//                      currentLightColor == 'yellow' ? 'the light is yellow' : 'the light is non operational' 
//              console.log(colorOfLight())                            

///////////////////ready to skate\\\\\\\\\\\\\\\\\\\\\

// let readyToSkate = false;
// let energyLevel = 18000;
// let crewStatus = true;
// let cameraBattery = "green";

// if (energyLevel >= 24000) {
//    console.log("Energy level is a go!");
//    readyToSkate = true;
// } else {
//    console.log("WARNING: Insufficient energy!");
//    readyToSkate = false;
// }

// if (crewStatus && cameraBattery === "green"){
//    console.log("Crew & cameraBattery is a go!");
//    readyToSkate = true;
// } else {
//    console.log("WARNING: Crew or cameraBattery not ready!");
//    readyToSkate = false;
// }

// if (readyToSkate) {
//    console.log("Let's goooooo!");
//    console.log("Time to skate!");
// } else {
//    console.log("No skating today.");
// }

const reverseVowels = (s) => {
       const vowels = 'aeiouAEIOU'
       const vowelsInS = s.split('').filter(char => vowels.includes(char))
       return s.split('').map(char => vowels.includes(char) ? vowelsInS.pop() : char).join('')

};

console.log(reverseVowels('Somewhere In Time'))






// const reverseVowels = str =>