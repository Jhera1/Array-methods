// 1. **Fundamentals**:
//    - **Problem**: Write a function that takes an array of numbers and returns a new array with all the numbers doubled. Use `let` and `const` appropriately in your solution.
doubleNumbers = (arr) => {
    return arr.map(num => num*2);
};
console.log(doubleNumbers([1, 2, 3, 4, 5])); 
// similar (squareNumbers)
squareNumbers = (arr) => {
    return arr.map(num => num * num); 
}
console.log(squareNumbers([1, 2, 3, 4, 5])); 

// 2. **Functions**:
//    - **Problem**: Create a function that returns another function. 
//        The inner function should take a number and return that number multiplied by a 
//        factor that was passed to the outer function.
createMultiplier = (factor) => {
    return ((num) => num * factor);
};
const double = createMultiplier(2);
console.log(double(10)); 
const quadruple = createMultiplier(4);
console.log(quadruple(10)); 

// 3. **Asynchronous JavaScript**:
//    - **Problem**: Write a function that fetches data from a public API (like JSONPlaceholder) and logs the result. 
//        Use Promises and then refactor it to use async/await.
const fetchPokeData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Full Data:", data);
        console.log("First Ability:", data.abilities[0].ability.name);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};
// Call the function
fetchPokeData(); 
// 4. **DOM Manipulation**:
//    - **Problem**: Write a function that takes an ID of an HTML element and changes its background color to blue when clicked. 
//        Use event delegation to handle clicks on multiple elements.

// 5. **Object-Oriented Programming**:
//    - **Problem**: Create a simple class called `Car` that has properties for `make`, `model`, and `year`. 
//        Include a method that returns a string describing the car (e.g., "2020 Toyota Camry").

// 6. **ES6 Features**:
//    - **Problem**: Write a function that takes an object with properties 
//       `firstName` and `lastName`, and returns a string that combines them into a full name using destructuring assignment.

// These problems will help you practice and solidify your understanding of JavaScript concepts. 
// If you want, I can guide you on how to approach solving these problems or suggest resources to help you practice. 
// Would you like to dive deeper into any specific problem or concept?
