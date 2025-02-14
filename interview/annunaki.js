const ancientRecords = [
    {
      id: 1,
      entity: "Enki",
      role: "God of Wisdom",
      action: "Created humanity",
      location: "Eridu",
      year: -4000,
    },
    {
      id: 2,
      entity: "Enlil",
      role: "Lord of the Air",
      action: "Brought the Great Flood",
      location: "Nippur",
      year: -3000,
    },
    {
      id: 3,
      entity: "Anu",
      role: "Sky Father",
      action: "Granted kingship to Earth",
      location: "Nibiru",
      year: -4500,
    },
    {
      id: 4,
      entity: "Marduk",
      role: "God of Babylon",
      action: "Established Babylon as supreme city",
      location: "Babylon",
      year: -2000,
    },
    {
      id: 5,
      entity: "Ninhursag",
      role: "Mother Goddess",
      action: "Shaped the first humans",
      location: "Dilmun",
      year: -3900,
    },
    {
      id: 6,
      entity: "Utu",
      role: "God of Justice",
      action: "Provided laws to humanity",
      location: "Sippar",
      year: -2500,
    }
  ];
  

//   Four Programming Challenges:

const dataAnalyzer = ancientRecords => {


// Find the earliest recorded event
// Identify which record has the earliest year (smallest year value).
const earliestEvent = ancientRecords.sort((a, b) => a.year - b.year)[0]


// Group events by location
// Create an object where each key is a location and the value is an array of events that took place there.
const eventsObject = {}

return eventsObject


// Find all events related to a specific entity
// Given an entity's name (e.g., "Enki"), return all their recorded actions.


// Sort events chronologically
// Arrange the records from the oldest to the most recent event.

}
console.log(dataAnalyzer(ancientRecords))


