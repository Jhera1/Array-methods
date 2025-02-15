const mysteryData = [
    { name: "Hermetic Order", origin: "Ancient Egypt", teachings: ["Alchemy", "Astrology", "Theurgy"], keyFigure: "Hermes Trismegistus", yearFounded: -3000, associatedRace: "Neteru" },
    { name: "Pythagorean Brotherhood", origin: "Ancient Greece", teachings: ["Sacred Geometry", "Numerology", "Harmonics"], keyFigure: "Pythagoras", yearFounded: -500, associatedRace: "Lyrans" },
    { name: "Druidic Order", origin: "Celtic Lands", teachings: ["Nature Magic", "Divination", "Oral Tradition"], keyFigure: "Taliesin", yearFounded: -1000, associatedRace: "Fae" },
    { name: "Zoroastrian Magi", origin: "Persia", teachings: ["Duality of Light & Dark", "Fire Worship", "Prophecy"], keyFigure: "Zarathustra", yearFounded: -1500, associatedRace: "Anunnaki" },
    { name: "The Eleusinian Mysteries", origin: "Ancient Greece", teachings: ["Alchemy", "Ritual Initiation", "Afterlife Mysticism", "Divine Feminine"], keyFigure: "Demeter", yearFounded: -1400, associatedRace: "Pleiadians" },
    { name: "The Essenes", origin: "Judea", teachings: ["Asceticism", "Prophetic Visions", "Sacred Texts"], keyFigure: "Teacher of Righteousness", yearFounded: -200, associatedRace: "Sirian" },
    { name: "Mystery of Isis", origin: "Ancient Egypt", teachings: ["Resurrection Magic", "Sacred Motherhood", "Moon Mysticism"], keyFigure: "Isis", yearFounded: -2500, associatedRace: "Neteru" },
    { name: "Shambhala Monks", origin: "Himalayas", teachings: ["Inner Alchemy", "Mind Training", "Energy Control"], keyFigure: "Padmasambhava", yearFounded: -800, associatedRace: "Hyperboreans" },
    { name: "Orphic Mysteries", origin: "Ancient Greece", teachings: ["Reincarnation", "Music as Magic", "Underworld Journeys"], keyFigure: "Orpheus", yearFounded: -600, associatedRace: "Lyrans" },
    { name: "Atlantean Priesthood", origin: "Atlantis", teachings: ["Crystal Technology", "Sound Healing", "Akashic Records"], keyFigure: "Thoth", yearFounded: -11000, associatedRace: "Atlanteans" }
];
// name, origin, teachings, Key figure, year founded, associated race
// 11 Practice Problems:

const dataAnalyzer = mysteryData => {
// Find the Oldest Mystery School
// Identify the school that was founded the earliest in history.
const oldestMysterySchool = mysteryData.sort((a, b) => a.yearFounded - b.yearFounded)[0]


// Group Schools by Alien Race
// Create an object where the keys are alien races and the values are arrays of mystery schools associated with each race.

const racesAndTheirSchools = {}
for (let entry of mysteryData) {
if (!racesAndTheirSchools[entry.associatedRace]) {
    racesAndTheirSchools[entry.associatedRace] = []
}
racesAndTheirSchools[entry.associatedRace].push(entry.teachings)
}

// Find Schools That Teach a Specific Topic
// Write a function that takes a keyword (e.g., "Alchemy") and returns all schools that include it in their teachings.

// All subjects
// [ 'Crystal Technology', 'Sound Healing', 'Akashic Records' ],
// [ 'Alchemy', 'Astrology', 'Theurgy' ],
// [ 'Resurrection Magic', 'Sacred Motherhood', 'Moon Mysticism' ],
// [ 'Duality of Light & Dark', 'Fire Worship', 'Prophecy' ],
// [ 'Ritual Initiation', 'Afterlife Mysticism', 'Divine Feminine' ],
// [ 'Nature Magic', 'Divination', 'Oral Tradition' ],
// [ 'Inner Alchemy', 'Mind Training', 'Energy Control' ],
// [ 'Reincarnation', 'Music as Magic', 'Underworld Journeys' ],
// [ 'Sacred Geometry', 'Numerology', 'Harmonics' ],
// [ 'Asceticism', 'Prophetic Visions', 'Sacred Texts' ]

const allSchoolsThatTeachThis = []
let keyWord = 'Crystal Technology'
   for (let entry of mysteryData) {
    if (entry.teachings.includes(keyWord))
        allSchoolsThatTeachThis.push(entry.name)
   }

// List of all teachings from all schools
   const listOfTeachings = []
    for (let entry of mysteryData) {
    // if (!listOfTeachings.includes(entry.teachings)) {
        listOfTeachings.push(entry.teachings)
    // }
   }

// Sort Schools by Founding Year (Oldest to Newest)
// Use .sort() to order the schools from the most ancient to the most recent.
const oldestToRecent = mysteryData.sort((a, b) => a.yearFounded - b.yearFounded)

// Find the Most Common Teaching Across All Schools
// Count which teaching appears the most times across all mystery schools.

const teachingCount = {}
for (let {teachings} of mysteryData) {
   for (let teaching of teachings) {
teachingCount[teaching] = (teachingCount[teaching] || 0) +1
  }
}
   const mostCommonTeaching = Object.entries(teachingCount).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
    
//   return JSON.stringify(teachingCount, null, 2)

// Create a Summary Sentence for Each School
// Convert each school’s data into a readable string like:
// "The Hermetic Order, founded in Ancient Egypt around -3000, was led by Hermes Trismegistus and focused on Alchemy, Astrology, and Theurgy."

// name, origin, teachings, Key figure, year founded, associated race
const allSchoolSummary = []
for (let entry of mysteryData) {
        allSchoolSummary.push(`${entry.name}, founded in ${entry.origin} around ${entry.yearFounded}, was led by ${entry.keyFigure} and focused on ${entry.teachings}.`)
    }

// Filter Schools That Originated Before -2000
// Find all mystery schools that existed before -2000.
const mysterySchoolsBefore2000Bc = []
for (let entry of mysteryData) {
    if (entry.yearFounded < -2000) {
        mysterySchoolsBefore2000Bc.push(entry.name)
    }
}
// return [mysterySchoolsBefore2000Bc[0], oldestToRecent[0]] 

// Find Schools with the Longest List of Teachings
// Determine which mystery school has the most teachings listed.
const schoolWithMostTeachings = mysteryData.sort((a, b) => b.teachings.length - a.teachings.length)[0]


// Find All Schools from a Given Civilization (e.g., Ancient Greece)
// Return a list of schools that originated in a given civilization.

const teachingsOfGivenCivilization = civilization => {
    for (let entry of mysteryData) {
    if (entry.origin === civilization) {

    }
}
}

return teachingsOfGivenCivilization
// Match Schools with Their Key Figures
// Create an object where the keys are the names of key figures, and the values are the mystery schools they were associated with.

}
console.log(dataAnalyzer(mysteryData))