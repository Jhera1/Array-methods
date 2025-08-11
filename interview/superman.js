const kryptonianArchives = [
    {
      id: 1,
      entity: "Jor-El",
      role: "Scientist",
      action: "Predicted Krypton's destruction",
      location: "Kryptonopolis",
      year: -5
    },
    {
      id: 2,
      entity: "Jor-El",
      role: "Scientist",
      action: "Launched Kal-El to Earth",
      location: "Kryptonopolis",
      year: 0
    },
    {
      id: 3,
      entity: "Kal-El",
      role: "Superman",
      action: "Sent to Earth in escape pod",
      location: "Krypton",
      year: 0
    },
    {
      id: 4,
      entity: "Kal-El",
      role: "Superman",
      action: "Discovered powers under yellow sun",
      location: "Smallville",
      year: 2002
    },
    {
      id: 5,
      entity: "Kal-El",
      role: "Superman",
      action: "Became Superman and moved to Metropolis",
      location: "Metropolis",
      year: 2006
    },
    {
      id: 6,
      entity: "Kal-El",
      role: "Superman",
      action: "Saved Metropolis from nuclear disaster",
      location: "Metropolis",
      year: 2012
    },
    {
      id: 7,
      entity: "Kal-El",
      role: "Superman",
      action: "Fought General Zod",
      location: "Metropolis",
      year: 2013
    },
    {
      id: 8,
      entity: "Kal-El",
      role: "Superman",
      action: "Sacrificed himself to stop Doomsday",
      location: "Metropolis",
      year: 2016
    },
    {
      id: 9,
      entity: "Kal-El",
      role: "Superman",
      action: "Resurrected by Justice League",
      location: "Fortress of Solitude",
      year: 2017
    },
    {
      id: 10,
      entity: "General Zod",
      role: "Military Commander",
      action: "Sentenced to Phantom Zone",
      location: "Krypton",
      year: -2
    },
    {
      id: 11,
      entity: "General Zod",
      role: "Military Commander",
      action: "Escaped Phantom Zone",
      location: "Earth Orbit",
      year: 2013
    },
    {
      id: 12,
      entity: "General Zod",
      role: "Military Commander",
      action: "Declared war on Earth",
      location: "Metropolis",
      year: 2013
    },
    {
      id: 13,
      entity: "Lara Lor-Van",
      role: "Scientist",
      action: "Helped Jor-El prepare escape pod",
      location: "Kryptonopolis",
      year: 0
    },
    {
      id: 14,
      entity: "Jor-El",
      role: "Scientist",
      action: "Transferred consciousness to Fortress AI",
      location: "Fortress of Solitude",
      year: 2007
    },
    {
      id: 15,
      entity: "Kal-El",
      role: "Superman",
      action: "Negotiated peace with Atlantis",
      location: "Atlantic Ocean",
      year: 2020
    }
  ];
  
//   🧠 Programming Challenges (no solutions given)
// #1  Earliest Off-World Event

// let happendOnKrypton = data => data.filter(a => a.location.toLowerCase().includes('krypton'))
    
// let earliestEventOnKrypton = data => {
//     let events = happendOnKrypton(data)
//     let earliest = events.reduce((a, b) => a.year < b.year ? a : b)
//     return earliest
//     }
     
    // console.log(earliestEventOnKrypton(kryptonianArchives)) 
    
    
// #2  Find the event with the earliest year that does not take place on Earth (Metropolis, Earth Orbit, or Fortress of Solitude).
// let location = kryptonianArchives.location.toLowerCase()
// let offEarthEvents = data => data.filter(a => 
//     !a.location.toLowerCase().includes('metropolis') &&
//     !a.location.toLowerCase().includes('fortress of solitude') &&
//     !a.location.toLowerCase().includes('earth orbit')
// )
// console.log(offEarthEvents(kryptonianArchives))

// #3  Grouped Events by Role


// const eventsByRole = data => {
//     const roleMap = {}
//     for (let event of data) {
//     let role = event.role
//         if (!roleMap[role]) {
//             roleMap[role] = []
//         }
//         roleMap[role].push(event)
//     }
//     return roleMap
// }
// console.log(eventsByRole(kryptonianArchives))


  
// #4  Group all events by role, such that each key is a role (e.g., "Scientist", "Superman") and
// its value is an array of actions with year and location.
  
// const groupActionYearLocation = data => {
//    let roleMap = {}
//    for (let {role, action, year, location} of data) {
    
//     if (!roleMap[role]) {
//         roleMap[role] = []
//     }
//     roleMap[role].push({action, year, location})
//    }
//    return roleMap
// }
// console.log(groupActionYearLocation(kryptonianArchives))

//   #5 Timeline for a Specific Entity

// const entityTimeline = (data, name) => {
//     let events = []
//     for (let {entity, action, year, location} of data) {
//         if (entity === name) {
//         events.push({action, year, location})
//         }
//     }
//     return events.sort((a, b) => a.year - b-year)
// }
// console.log(entityTimeline(kryptonianArchives))
  
//   #6 Given the name of an entity (e.g., "Kal-El"), return a sorted timeline of all their actions across all roles and years.
  
// const sortedTimelineOfActionsAndYears = (data, name) => {
//  const timeline = data
//  .filter(e => e.entity === name)
//  .sort((a, b) => a.year - b.year)
//  .map(e => `In ${e.year}: ${e.entity} ${e.action}`)
//  .join('\n')
//   return `Timeline for ${name}: \n ${timeline}`
// }
// console.log(sortedTimelineOfActionsAndYears(kryptonianArchives, "Kal-El"))
// console.log(sortedTimelineOfActionsAndYears(kryptonianArchives, "Jor-El"))

//   #7 Event Count by Location

// const countByLocation = data => {
//   let locationMap = {}
//   for (let event of data) {
//     if (!locationMap[event.location]) {
//       locationMap[event.location] = 0
//     }
//     locationMap[event.location]++
//   }
//   return locationMap
// }
// console.log(countByLocation(kryptonianArchives))
  
//   #8 Count how many events took place at each location. 
// Return an object with locations as keys and the number of events as values.

// const countByLocation = data => {
//   let locationMap = {}
//   for (let event of data) {
//     if (!locationMap[event.location]) {
//       locationMap[event.location] = 0
//     }
//     locationMap[event.location]++
//   }
//   return locationMap
// }
// console.log(countByLocation(kryptonianArchives))

//   #9 Most Active Entity

// const mostActiveEntity = data => {
//   let entityMap = {}
//   for (let entry of data) {
//     if (!entityMap[entry.entity]) {
//       entityMap[entry.entity] = 0
//     }
//     entityMap[entry.entity]++
    
//   }
//   let maxEntity = null
//   let maxCount = 0
//   for (let entity in entityMap) {
//     if (entityMap[entity] > maxCount) {
//       maxCount = entityMap[entity]
//       maxEntity = entity
//     }
//   }
//   return `The entity with the most activity is ${maxEntity} with ${maxCount} events`
// }
// console.log(mostActiveEntity(kryptonianArchives))
  
//   #10 Determine which entity appears in the most records and return their name along with how many entries they appear in.
 
// const mostActiveEntity = data => {
//   let entityMap = {}
//   for (let entry of data) {
//     if (!entityMap[entry.entity]) {
//       entityMap[entry.entity] = 0
//     }
//     entityMap[entry.entity]++
    
//   }
//   let maxEntity = null, maxCount = 0
//   for (let entity in entityMap) {
//     if (entityMap[entity] > maxCount) {
//       maxCount = entityMap[entity]
//       maxEntity = entity
//     }
//   }
//   return `The entity with the most activity is ${maxEntity} with ${maxCount} events`
// }
// console.log(mostActiveEntity(kryptonianArchives))
    

//   #11 Sort Roles Chronologically by First Appearance

const rollsCronologicalyByFirstApperance = data => {
  let roleArr = []
  for (let {role, year} of data) {
    roleArr.push([role, year])
  }
  console.log(roleArr)
  return roleArr.sort((a, b) => a[1] - b[1])
}
console.log(rollsCronologicalyByFirstApperance(kryptonianArchives))
  
// const uniqueRoles = data => data
// .map(({role, year}) => [role, year])
// .sort((a, b) => a[1] - b[1])
// console.log(uniqueRoles(kryptonianArchives))

//   #12 Build an array of all unique roles, sorted by the first year that role appears in the data.  
