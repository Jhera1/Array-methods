// // You will be given an array which lists the current inventory 
// // of stock in your store and another array which lists 
// // the new inventory being delivered to your store today.

// // Your task is to write a function that returns the updated 
// // list of your current inventory in alphabetical order.

// // Example
// // currentStock = [[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']]
// // newStock = [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']]

// // updateInventory(currentStock, newStock)  ==>
// // [[15, 'Apple'], [25, 'HTC'], [5, 'LG'], [1000, 'Nokia'], [54, 'Samsung'], [43, 'Son


// const updateInventory = (curStock, newStock) => {

//     const inventoryMap = new Map();
// //   console.log(inventoryMap)
           
//            // Add current stock to the map
//     curStock.forEach(([qty, name]) => inventoryMap.set(name, qty));
// //   console.log(inventoryMap)
// //   console.log(inventoryMap.get('Sony'))

//            // Update or add new stock
//     newStock.forEach(([qty, name]) => {
//       inventoryMap.set(name, (inventoryMap.get(name) || 0) + qty);
//     });
  
//            // Convert to back to array
           
//     return [...inventoryMap]
      
//   }
  


// const updateInventory = (curStock, newStock) => {
//     const inventoryObj = {};
  
//     // Add current stock to the object
//     curStock.forEach(([qty, name]) => {
//       inventoryObj[name] = qty;
//     });
// console.log(inventoryObj)
//     // Update or add new stock
//     newStock.forEach(([qty, name]) => {
//       inventoryObj[name] = (inventoryObj[name] || 0) + qty;
//     });
// console.log(inventoryObj)  
//     // Convert back to array
//     const inventoryArr = Object.entries(inventoryObj)
// console.log(inventoryArr)
//     inventoryArr.sort((a, b) => a[0].localeCompare(b[0]))
//     return inventoryArr
//   };
  
//   console.log(updateInventory([[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']], [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']]))


// ********************
// ectract all id's into an array

const data = {
    id: 1,
    items: [
      {id: 2},
      {id: 3, items: [
        {id: 4},
        {id: 5}
      ]}
    ]
  }

  const extractIds = data => {
    let ids = [data.id]
    return ids
  }
  
  console.log(extractIds(data)) // should return [1,2,3,4,5]