const conspiracyTheories = [
    { title: "Moon Landing Hoax", category: "Space", mentions: 1500, firstAppearance: "1969-07-20" },
    { title: "Flat Earth", category: "Science", mentions: 1200, firstAppearance: "1800s" },
    { title: "JFK Assassination", category: "Government", mentions: 2000, firstAppearance: "1963-11-22" },
    { title: "9/11 Was an Inside Job", category: "Government", mentions: 3000, firstAppearance: "2001-09-11" },
    { title: "Bigfoot Exists", category: "Cryptozoology", mentions: 900, firstAppearance: "1950s" },
    { title: "Chemtrails", category: "Environment", mentions: 1300, firstAppearance: "1990s" },
    { title: "New World Order", category: "Government", mentions: 2500, firstAppearance: "1700s" },
    { title: "Reptilian Elite", category: "Aliens", mentions: 1400, firstAppearance: "1990s" },
    { title: "Area 51 and Aliens", category: "Aliens", mentions: 2800, firstAppearance: "1947-07-08" },
    { title: "The Mandela Effect", category: "Psychology", mentions: 1600, firstAppearance: "2009" }
  ];




////////////////////Beginner Conspiracy Theory Data Questions\\\\\\\\\\\\\\\\\\\\\\

//   1️⃣ Count the total number of conspiracy theories in the dataset
const howManyTheories = conspiracyTheories.length
// console.log(howManyTheories)

//   2️⃣ Identify the most frequently mentioned conspiracy theory

// Using reduce
const mostFrequentlyMentioned = conspiracyTheories.reduce((mostFrequent, curr) => curr.mentions > mostFrequent.mentions ? curr : mostFrequent)  
// console.log(mostFrequentlyMentioned)

// Using object count
const mentionsPerConspiracy = {}
for (let {mentions, title} of conspiracyTheories) {
    mentionsPerConspiracy[title] = (mentionsPerConspiracy[title] || 0) + mentions
}
const mostFrequentlyMentioned2 = Object.entries(mentionsPerConspiracy).reduce((a, b) => a[1] > b[1] ? a : b)
// console.log(mostFrequentlyMentioned2)

//   3️⃣ Group conspiracy theories by category
const theoriesByCategory = {}
for (let {title, category} of conspiracyTheories) {
    if (!theoriesByCategory[category]) {
        theoriesByCategory[category] = []
    }
    theoriesByCategory[category].push(title)
}
// console.log(theoriesByCategory.Government[0])

//   4️⃣ Calculate the average number of mentions across all theories
const totalNumOfMentions = conspiracyTheories.reduce((acc, {mentions}) => acc + mentions, 0)
const avgNumOfMentions = totalNumOfMentions/conspiracyTheories.length
// console.log(`${avgNumOfMentions} Mentions on average`)

//   5️⃣ Find the oldest conspiracy theory (earliest first appearance)
const oldestTheory = conspiracyTheories.reduce((a, b) => a.firstAppearance < b.firstAppearance ? a : b)
// console.log(oldestTheory)

//   6️⃣ Find the most popular conspiracy theory in each category
// console.log(theoriesByCategory)


//   7️⃣ Determine the total number of conspiracy theories that mention aliens
const alienTheories = theoriesByCategory.Aliens.length
// console.log(alienTheories)
//   8️⃣ Find all conspiracy theories that originated before the year 1950

//     For Of Loop
// const theoriesBefore1950 =  []
// for (let theory of conspiracyTheories) {
//     let originalAppearance = theory.firstAppearance.slice(0,4)
//     if (originalAppearance < 1950) {
//         theoriesBefore1950.push(theory)
//        }
//     // console.log(originalAppearance)
//     }    
// // console.log(theoriesBefore1950)

//         Filter Method
const theoriesBefore1950 = conspiracyTheories.filter(({firstAppearance}) => firstAppearance.slice(0,4) < 1950)
// console.log(theoriesBefore1950)

//   9️⃣ Identify the conspiracy theory with the fewest mentions
const theoryWithFewestMentions = conspiracyTheories.reduce((a, b) => a.mentions < b.mentions ? a : b)  
// console.log(theoryWithFewestMentions)

//   🔟 Sort the conspiracy theories by number of mentions in descending order
const mostMentionsToLeast = conspiracyTheories.sort((a, b) => b.mentions - a.mentions)
// console.log(mostMentionsToLeast)



////////////////////////Advanced Conspiracy Theory Data Questions\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




// 1️⃣ Find the conspiracy theory with the longest title (in terms of characters).
const theoryWithLongestTitle = conspiracyTheories.reduce((a, b) => a.title.length > b.title.length ? a : b).title
console.log(theoryWithLongestTitle)

// 2️⃣ Find the conspiracy theory with the shortest title.
const theoryWithShortestTitle = conspiracyTheories.reduce((a, b) => a.title.length < b.title.length ? a : b).title
console.log(theoryWithShortestTitle)
// 3️⃣ Sort conspiracy theories by title in alphabetical order.


// 4️⃣ Sort conspiracy theories by title in reverse alphabetical order.
// 5️⃣ Find all conspiracy theories that originated in the 20th century (1901-2000).
// 6️⃣ Find all conspiracy theories that originated in the 21st century (2001-present).
// 7️⃣ Determine the percentage of conspiracy theories that belong to the "Government" category.
// 8️⃣ Find the average number of mentions for conspiracy theories that originated before 1950.
// 9️⃣ Find the conspiracy theory that has the highest mentions per year since its first appearance.
// 🔟 Find the conspiracy theory that has the lowest mentions per year since its first appearance.
// 1️⃣1️⃣ Group conspiracy theories by century based on their first appearance.
// 1️⃣2️⃣ Find the most common category among the conspiracy theories.
// 1️⃣3️⃣ Find the least common category among the conspiracy theories.
// 1️⃣4️⃣ Find all conspiracy theories with more than 1,500 mentions.
// 1️⃣5️⃣ Find all conspiracy theories with fewer than 1,000 mentions.
// 1️⃣6️⃣ Create a new array containing only the titles of all conspiracy theories.
// 1️⃣7️⃣ Create a new array containing only the categories of all conspiracy theories (no duplicates).
// 1️⃣8️⃣ Create an object that counts how many theories exist in each category.
// 1️⃣9️⃣ Calculate the total number of mentions for each category.
// 2️⃣0️⃣ Create a new array where each conspiracy theory has an added property: mentionDensity (mentions divided by years since first appearance).