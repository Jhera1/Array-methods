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

// const data = {
//   id: 1,
//   items: [
//     { id: 2 },
//     { id: 3, items: [
//         { id: 4 },
//         { id: 5 }
//       ]}
//   ]
// };

// const data = {
//   id: 1,
//   items: [
//     { id: 2 },
//     { 
//       id: 3, 
//       items: [
//         { id: 4 },
//         { 
//           id: 5, 
//           items: [
//             { id: 6 },
//             { 
//               id: 7, 
//               items: [
//                 { id: 8 },
//                 { 
//                   id: 9, 
//                   items: [
//                     { id: 10 }
//                   ]
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     { id: 11 }
//   ]
// };


// const data = {
//   id : 1,
//   items : [{
//   id : 2,
//   items : [{
//     id : 3,
//     items : [
//     {id : 4},
//     {id : 5}
//     ]
//     },{
//     id : 6,
//     items : [{id : 7}]
//     }]
//   }]
// }


// const extractIds = data => {
//   // get id value and make it an array
//   let ids = [data.id];
//   // check to see if data.items exists & if it is an array
//   if (data.items && Array.isArray(data.items)) {
//   // recursive function to extract ids from items
//     for (const item of data.items) {
//       ids = ids.concat(extractIds(item));
//     }
//   }
//   if (ids === undefined) {
//     return []
//   }
//   return ids;
// };

// console.log(extractIds(data)); 

// ***************************

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

const endsWith = (strA, strB) => 