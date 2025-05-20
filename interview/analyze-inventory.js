// You're given an array of objects representing products in an e-commerce system.

// Your task is to create a function called analyzeInventory that takes this array of product objects and performs the following operations and returns a report object with the results:

// Calculate the total value of the inventory (sum of price * stock for all products)
// Find the product with the highest average rating
// Group products by category
// Identify products that are low in stock (less than 10 items)
// Find the average price for each category

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99, stock: 50, ratings: [4, 5, 3, 5, 4, 5, 3, 4, 5] },
    { id: 2, name: "Shirt", category: "Clothing", price: 24.99, stock: 100, ratings: [4, 4, 5] },
    { id: 3, name: "Coffee Maker", category: "Home Appliances", price: 89.99, stock: 30, ratings: [5, 4, 4, 5, 3, 4] },
    { id: 4, name: "Book", category: "Books", price: 14.99, stock: 200, ratings: [4, 4, 4, 5, 3, 5, 4] },
    { id: 5, name: "Smartphone", category: "Electronics", price: 599.99, stock: 75, ratings: [3, 4, 4, 5, 5, 4, 3, 5] },
    { id: 6, name: "Socks", category: "Clothing", price: 9.99, stock: 150, ratings: [5, 5, 4, 5, 4] },
    { id: 7, name: "Blender", category: "Home Appliances", price: 49.99, stock: 8, ratings: [4, 3, 4, 5, 3, 5, 4, 4] },
    { id: 8, name: "Headphones", category: "Electronics", price: 199.99, stock: 6, ratings: [5, 5, 5, 4, 5, 4] },
    { id: 9, name: "Running Shoes", category: "Footwear", price: 79.99, stock: 25, ratings: [4, 4, 3, 5, 4, 3, 5, 4, 5] },
    { id: 10, name: "Novel", category: "Books", price: 19.99, stock: 95, ratings: [3, 4, 4, 4, 5, 3] },
    { id: 11, name: "Smart Watch", category: "Electronics", price: 299.99, stock: 4, ratings: [4, 5, 5, 5, 4, 5, 4] },
    { id: 12, name: "Dress", category: "Clothing", price: 49.99, stock: 60, ratings: [4, 3, 5, 4, 5, 3, 4, 5] },
    { id: 13, name: "Microwave", category: "Home Appliances", price: 129.99, stock: 25, ratings: [4, 4, 3, 5, 4, 3] },
    { id: 14, name: "Sandals", category: "Footwear", price: 29.99, stock: 20, ratings: [4, 3, 4, 4, 5, 3, 4] },
    { id: 15, name: "Cookbook", category: "Books", price: 24.99, stock: 45, ratings: [5, 5, 4, 4, 5, 4, 5, 3] },
    { id: 16, name: "Plant", category: "Home & Garden", price: 19.99, stock: 35, ratings: [4, 5, 5, 4, 3, 5, 4, 4, 5] },
    { id: 17, name: "Garden Tools Set", category: "Home & Garden", price: 89.99, stock: 7, ratings: [4, 4, 5, 3] },
    { id: 18, name: "Desk Lamp", category: "Lighting", price: 39.99, stock: 25, ratings: [4, 5, 4, 4, 5, 3, 5] }
  ];
  
  const analyzeInventory = data => { 
       // Step 1: Initialize the Report Structure
      const report = {
       // Calculate the total value of the inventory (sum of price * stock for all products)
       totalInventoryValue: 0,
       // Find the product with the highest average rating
       highestRatedProduct: null,
       // Group products by category
       productsByCategory: {},
       // Identify products that are low in stock (less than 10 items)
       lowStockProducts: [],
       // Find the average price for each category
       averagePriceByCategory:{}
      }
  
      let highestAverageRating = 0;
  
      const catagoryTotals = {}
      const catagoryCounts = {}
  
      for (const product of data) {    
// Calculate the total value of the inventory (sum of price * stock for all products)
      report.totalInventoryValue += product.price * product.stock

// Find the product with the highest average rating
  
      let avg = product.ratings.reduce((a, b) => a + b) / product.ratings.length
    //   console.log(avg)

      if (avg > highestAverageRating) {
        highestAverageRating = avg
        report.highestRatedProduct = product
        }

// Group products by category
    const catagory = product.category
     if (!report.productsByCategory[catagory]) {
        report.productsByCategory[catagory] = []
     } 
     report.productsByCategory[catagory].push(product.name)
    // console.log(catagory)

// Identify products that are low in stock (less than 10 items)

     if (product.stock < 10) {
        report.lowStockProducts.push(product.name)
        }
     
// Find the average price for each category

//  Prepare data for average price by category
     if (!catagoryTotals[product.catagory]) {
        catagoryTotals[product.catagory] = 0
        catagoryCounts[product.catagory] = 0 
    }
    catagoryTotals[product.catagory] += product.price
    catagoryCounts[product.catagory] += 1

    }

// Finalize total inventory value (rounded to 2 decimals w/ dollar sign and commas)
    report.totalInventoryValue = report.totalInventoryValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'USD'
    })

// Finalize average price by category
    for (const catagory in catagoryTotals) {
        report.averagePriceByCategory = +(
            catagoryTotals[catagory] / catagoryCounts[catagory]
        ).toFixed(2)
    }    


console.log(catagoryCounts, catagoryTotals)
    return report
  }
  console.log(analyzeInventory(products))