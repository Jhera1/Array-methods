// /*  
// $ Remove the Lowest

// $ The museum of incredibly dull things wants to get rid of some exhibits. 
// $ Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. 
// $ She gives them a rating, and then removes the one with the lowest rating.
// $ However, just as she finished rating all exhibits, she's off to an important fair, 
// $ so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// ? Task
// ? Given an array of integers, remove the smallest value. 
// ? Do not mutate the original array/list. 
// ? If there are multiple elements with the same value, remove the one with the lowest index. 
// ? If you get an empty array/list, return an empty array/list.

// ! Don't change the order of the elements that are left.

// Examples

// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
// * */
// // Input: arr
// // output: arr

// // find smallest value & remove

// function removeLowest(arr) {
     
//     let minNum = Math.min(...arr) 
//     let index = arr.indexOf(minNum) 
//     return arr.slice(0, index).concat(arr.slice([index + 1]))
    
// }


// console.log(removeLowest([1, 2, 3, 4, 5]));
// console.log(removeLowest([7, 1, 34, 22, 11]));
// console.log(removeLowest([5, 3, 2, 1, 4]));
// console.log(removeLowest([2, 2, 1, 2, 1]));



const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      stock: 50,
      ratings: [4, 5, 3, 5, 4, 5, 3, 4, 5],
    },
    {
      id: 2,
      name: "Shirt",
      category: "Clothing",
      price: 24.99,
      stock: 100,
      ratings: [4, 4, 5],
    },
    {
      id: 3,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 89.99,
      stock: 30,
      ratings: [5, 4, 4, 5, 3, 4],
    },
    {
      id: 4,
      name: "Book",
      category: "Books",
      price: 14.99,
      stock: 200,
      ratings: [4, 4, 4, 5, 3, 5, 4],
    },
    {
      id: 5,
      name: "Smartphone",
      category: "Electronics",
      price: 599.99,
      stock: 75,
      ratings: [3, 4, 4, 5, 5, 4, 3, 5],
    },
    {
      id: 6,
      name: "Socks",
      category: "Clothing",
      price: 9.99,
      stock: 150,
      ratings: [5, 5, 4, 5, 4],
    },
    {
      id: 7,
      name: "Blender",
      category: "Home Appliances",
      price: 49.99,
      stock: 8,
      ratings: [4, 3, 4, 5, 3, 5, 4, 4],
    },
    {
      id: 8,
      name: "Headphones",
      category: "Electronics",
      price: 199.99,
      stock: 6,
      ratings: [5, 5, 5, 4, 5, 4],
    },
    {
      id: 9,
      name: "Running Shoes",
      category: "Footwear",
      price: 79.99,
      stock: 25,
      ratings: [4, 4, 3, 5, 4, 3, 5, 4, 5],
    },
]


// # Product Inventory Analysis

// You're given an array of objects representing products in an e-commerce system. Each product object has the following properties:

// | Key      | Type     | Description                       |
// | -------- | -------- | --------------------------------- |
// | id       | number   | Unique identifier for the product |
// | name     | string   | Name of the product               |
// | category | string   | Category of the product           |
// | price    | number   | Price of the product              |
// | stock    | number   | Current stock quantity            |
// | ratings  | number[] | Customer ratings (1-5)            |

// Your task is to create a function called analyzeInventory that takes this array of product objects 
// and performs the following operations and returns a report object with the results:



// 1. Calculate the total value of the inventory (sum of price * stock for all products)
// 2. Find the product with the highest average rating
// 3. Group products by category
// 4. Identify products that are low in stock (less than 10 items)
// 5. Find the average price for each category









