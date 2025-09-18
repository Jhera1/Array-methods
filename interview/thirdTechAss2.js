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


const analyzeInventory = data => {

// 1. Calculate the total value of the inventory (sum of price * stock for all products)

// return data.map(a => a.price * a.stock).reduce((a, b) => a + b)

// 2. Find the product with the highest average rating
let result = null
let highestAvg = 0
for (let product of products) {
    let avg = product.ratings.reduce((a, b) => a + b) / product.ratings.length
    if (avg > highestAvg) {
        highestAvg = avg
        result = product.name
    }
}
// return result

// 3. Group products by category
let categoryMap = {}
for (let product of products) {
    if (!categoryMap[product.category]) {
        categoryMap[product.category] = []
    }
    categoryMap[product.category].push(product)
}
// return categoryMap

// 4. Identify products that are low in stock (less than 10 items)
let lowStock = []
for (let product of products) {
    if (product.stock < 10) {
        lowStock.push(product.name)
    }
}
// return lowStock

// 5. Find the average price for each category
let avgPriceMap = {}
for (let [category, products] of Object.entries(categoryMap)) {
    let avg = products.map(a => a.price).reduce((a, b) => a + b) / products.map(a => a.price).length
   
    avgPriceMap[category] = avg
}

// return avgPriceMap
}
console.log(analyzeInventory(products))
