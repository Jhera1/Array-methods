import { mostRecentUfoData } from './ufo-data.mjs'

// 🔹🔹🔹🔹Beginner Friendly🔹🔹🔹🔹

// Basic Object and Array Manipulation Questions


const ufoDataAnalyzer = mostRecentUfoData => {

// 🔹🔹🔹🔹 Tech Interview Questions 🔹🔹🔹🔹
    // 1. Count the total number of sightings
const TotNumOfSightings = mostRecentUfoData.length
// return TotNumOfSightings

// 2. Identify the shape that appears the most amount of times
const countOfShapes = {}
for (let sighting of mostRecentUfoData) {
    const shape = sighting.Shape
    countOfShapes[shape] = (countOfShapes[shape] || 0) + 1
}
const mostCommonShape = Object.keys(countOfShapes).reduce((a, b) => countOfShapes[a] > countOfShapes[b] ? a : b)
// return mostCommonShape

// 3. Group sightings by date Occurred (ignoring time)
 const sightingsGroupedByDate = {}
 for (let sighting of mostRecentUfoData) {
    const date = sighting.Occurred.slice(0)
    if (!sightingsGroupedByDate[date]) {
        sightingsGroupedByDate[date] = []
    }
    sightingsGroupedByDate[date].push()
 }

// 4. Calculate the average Summary length (in characters)
const totalLength = mostRecentUfoData.reduce((sum, sighting) => sum + (sighting.Summary ? sighting.Summary.length : 0), 0);
const count = mostRecentUfoData.filter(sighting => sighting.Summary).length;
const averageSummaryLength = totalLength / count
return Math.ceil(averageSummaryLength)
;



// 🔹 1.Create an Array of UFO Sightings
// Given an array of UFO sighting objects, how would you access the city of the first sighting?
const mostRecentSighting = `The most recent sighting we have is ${mostRecentUfoData[0].City} in ${mostRecentUfoData[0].Country}`
// return mostRecentSighting

// 🔹 2.Filtering UFO Sightings by Country
// Write a function that filters all UFO sightings from the United States ("USA") in an array of sighting objects.
let country = 'France'
const sightingsFromCountry = mostRecentUfoData.filter(sighting => sighting.Country === country)
// return sightingsFromCountry

// 🔹 3.Counting Sightings by Shape
// How would you count how many times "Disc" appears as the shape in the UFO sightings dataset?
let shape = "Triangle"
let shapeCount = 0
for (let sighting of mostRecentUfoData) {
    if (sighting.Shape === shape) {
        shapeCount++
    }
} 
// return `There are ${shapeCount} sightings with the shape of ${shape}`

// 🔹 4.Sorting UFO Sightings by Date
// Write a function that sorts an array of UFO sightings by the occurred date in ascending order.

// 🔹🔹🔹🔹Array of Dates🔹🔹🔹🔹
let date = mostRecentUfoData.map(sighting => sighting.Occurred)
// return date
// 🔹🔹🔹🔹.sort method🔹🔹🔹🔹
const allSightingsByDate = mostRecentUfoData.sort((a, b) => new Date(a.Occurred) - new Date(b.Occurred))
// return allSightingsByDate

// 🔹 5.Finding the Most Recent UFO Sighting
// Given an array of UFO sighting objects, find the sighting with the most recent occurred date.
const earliestSighting = allSightingsByDate[allSightingsByDate.length - 1]
// return earliestSighting

// 🔹 6.Extracting Unique Shapes from UFO Sightings
// Write a function that returns an array of unique UFO shapes from the sightings dataset (e.g., ["Disc", "Triangle", "Light"]).
const shapes = new Set([mostRecentUfoData.map(sighting => (sighting.Shape))])
// return shapes

// 🔹 7.Mapping UFO Sightings to Summaries
// Use .map() to create a new array that only contains the summary field from each UFO sighting object.
const sightingSummary = mostRecentUfoData.map(sighting => [sighting.Summary])
// return sightingSummary

// 🔹 8.Grouping Sightings by State
// Write a function that groups all UFO sightings by state, returning 
// an object where the keys are state names and the values are arrays of sightings.
const stateAndSightingObject = {}
for (let sighting of mostRecentUfoData) {
    let state = sighting['State/Province']
    if (!stateAndSightingObject[state]) {
        stateAndSightingObject[state] = []
    }
    stateAndSightingObject[state].push(sighting)
}
// return stateAndSightingObject

// 🔹 9.Checking If Any Sightings Have Media Evidence
// Use .some() to check if any sighting in the dataset has "Y" in the media field.
const hasMediaReported = mostRecentUfoData.some(sighting => sighting.Media === 'Y')
// return hasMediaReported

// 🔹 10.Removing Sightings Without a Summary
// Write a function that removes all UFO sightings where the summary field is empty or null.
const sightingsWithSummary = mostRecentUfoData.filter(sighting => sighting.Summary && sighting.Summary.trim() !== "")
// return sightingsWithSummary


//🔹🔹🔹🔹slightly more difficult🔹🔹🔹🔹


// 🔹 1. Find the Most Common UFO Shape
// Write a function that finds the most frequently reported UFO shape in the dataset. If multiple shapes have the same highest count, return an array of them.
const frequencyOfShape = {}
for (let sighting of mostRecentUfoData) {
    let shape = sighting.Shape
    if (!frequencyOfShape[shape]) {
        frequencyOfShape[shape] = []
    }
    frequencyOfShape[shape]++
}
let mostFrequentShapeCount = Math.max(...Object.values(frequencyOfShape))
let mostFrequentShape = Object.keys(frequencyOfShape).filter(shape => frequencyOfShape[shape] === mostFrequentShapeCount)
// return mostFrequentShape


// 🔹 2. Sort Sightings by the Most Recent "Occurred" Date
// Modify your sorting function so that sightings are sorted in descending order (latest first) based on the "Occurred" date.
const sightingsDescendingOrder = allSightingsByDate.reverse()
// return sightingsDescendingOrder


// 🔹 3. Find the City with the Most Sightings
// Write a function that returns the city with the highest number of sightings. If multiple cities have the same count, return an array of them.
const sightingsPerCity = {}
for (let sighting of mostRecentUfoData) {
    let city = sighting.City
    
        sightingsPerCity[city] = (sightingsPerCity[city] || 0) + 1
    }
const maxSightings = Math.max(...Object.values(sightingsPerCity))
const cityWithMostSightings = Object.keys(sightingsPerCity).filter(city => sightingsPerCity[city] === maxSightings)
// return sightingsPerCity

// 🔹🔹🔹🔹One line solution🔹🔹🔹🔹
// ?


// 🔹 4. Count Sightings Per Country and Sort by Most Sightings
// Create an object where keys are country names and values are the number of sightings. Then return an array of countries sorted by the highest number of sightings.



// 🔹 5. Find the Earliest and Latest Sightings
// Write a function that finds and returns both the earliest and latest recorded sighting dates.

// 🔹 6. Filter Sightings that Have an Explanation
// Create a function that removes all sightings that already have an "Explanation" (i.e., they have been identified).

// 🔹 7. Find Sightings with the Longest Summary
// Find and return the sighting(s) with the longest Summary description.

// 🔹 8. Group Sightings by Hour of Occurrence
// Group sightings by the hour they occurred (e.g., 22:10 → 22, 08:00 → 08). Return an object where keys are hours ("08", "22") and values are arrays of sightings.

// 🔹 9. Find the Percentage of Sightings with Media Evidence
// Calculate the percentage of UFO sightings that have "Media": "Y", meaning they include some evidence.

// 🔹 10. Find the Most Recent Sighting Without an Explanation
// Return the most recent sighting where "Explanation" is an empty string.



}
console.log(ufoDataAnalyzer(mostRecentUfoData))













// intermediate
// 1.Class Design:
// Design a UfoSighting class that represents a single UFO 
// sighting. What attributes and methods would you include?

// 2.Encapsulation:
// How would you ensure that the Explanation field is only
// modifiable through a specific method in the UfoSighting class?

// 3.Inheritance:
// Suppose you need to track different types of sightings, 
// such as ConfirmedUfoSighting and DebunkedUfoSighting. 
// How would you design an inheritance hierarchy to 
// differentiate between these cases?

// 4.Polymorphism:
// Implement a method describe_sighting() in the UfoSighting 
// class that returns a string summary. Then, override it in 
// ConfirmedUfoSighting and DebunkedUfoSighting to provide 
// different descriptions based on the explanation field.

// 5.Abstraction:
// Define an abstract class Sighting with an abstract method 
// get_details(), and implement it in UfoSighting. What fields 
// should be included in get_details()?

// 6.Association & Composition:
// Create a UfoReport class that contains multiple UfoSighting 
// objects. How would you implement methods to add, remove, and filter sightings?

// 7.Encapsulation & Validation:
// Modify the UfoSighting class so that the Occurred field 
// must follow a strict datetime format. How would you implement this validation in a setter method?

// 8.Static Methods & Class Variables:
// Implement a class variable in UfoSighting to keep track of 
// the total number of sightings created. Include a static method get_total_sightings() to retrieve the count.

// 9.Data Processing:
// Write a method filter_by_country() in the UfoReport class 
// that returns all sightings from a given country. How would 
// you implement this using object-oriented principles?

// 10.Sorting & Comparisons:
// Implement a method in the UfoSighting class that allows 
// sorting sightings by the Occurred date. 
// How would you define a comparison method to achieve this?