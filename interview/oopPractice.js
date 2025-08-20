// const kryptonianArchives = 
//     {
//       id: 1,
//       entity: "Jor-El",
//       role: "Scientist",
//       action: "Predicted Krypton's destruction",
//       location: "Kryptonopolis",
//       year: -5
//     }
//     console.log(kryptonianArchives)
//     kryptonianArchives.year = kryptonianArchives.year += 1
//     console.log(kryptonianArchives)
//     kryptonianArchives.relationshipToSuperman = 'Father'
//     console.log(kryptonianArchives)

// const retrieveProperty = (obj, strKey) => obj[strKey] ? obj[strKey] : 'This information does not exist'
// console.log(retrieveProperty(kryptonianArchives, "year"))

const papaJohns = {
    name: "Papa John's",
    slogan: "Better Ingredients. Better Pizza. Papa John's.",
    cuisines: ["italian", "american", "pizza"],
    pizzaToppings: {
      pepperoni: 2,
      peppers: 0.6,
      extraCheese: 1.5,
      olives: 0.5,
      bacon: 3,
      extraSauce: 1,
    },
    numberOfStars: 3.5,
    favorited: false,
    address: "555 Main Street",
    zipcode: 11234,
    acceptsReservations: false,
  };

  const grabCategories = obj => Object.keys(obj)
//   console.log(grabCategories(papaJohns))

  const verifyValues = (obj, targetNum) => Object.values(obj).length >= targetNum
//   console.log(verifyValues(papaJohns, 8))

  const getToppingsInfo = obj => Object.entries(obj.pizzaToppings)
//   console.log(getToppingsInfo(papaJohns))

papaJohns.printAd = function (topping) {
    return `Welcome to Papa John's! We are located at ${papaJohns.address}. This week, we are having a sale on ${topping} for $${papaJohns.pizzaToppings[topping]}. ${papaJohns.slogan}`
}
// console.log(papaJohns.printAd('bacon'))

papaJohns.slogan = 'Only slightly addictive'
// console.log(papaJohns.printAd('bacon'))

const dominos = {
    name: "Domino's",
    cuisines: ["italian", "new york", "pizza"],
    pizzaToppings: {
      pepperoni: 2.2,
      mushrooms: 0.7,
      extraCheese: 1.4,
      onions: 0.5,
      sausage: 2.8,
      extraSauce: 0.8,
    },
    starReviews: {
      Peach: 3,
      Yoshi: 2.1,
      Bowser: 4,
      Mario: 5,
      Luigi: 5,
      Gumba564: 3.4,
      "Donkey Kong": 3.2,
    },
    favorited: true,
    address: "123 Elm Street",
    zipcode: 54321,
    acceptsReservations: true,
  };

  const printPizzaPlace = obj => {
    for (let key in obj) {
     console.log(key, obj[key])   
    }
  }
// printPizzaPlace(dominos)

const toppingsPriceRange = obj => {
    const {pizzaToppings: toppings} = obj
    let max = -Infinity
    let min = Infinity
    for (let key in toppings) {
      if (toppings[key] > max) {
        max = toppings[key]
      } else if (toppings[key] < min) {
        min = toppings[key]
      }
      
    }
    return [min, max]
}
// console.log(toppingsPriceRange(dominos))
// console.log(toppingsPriceRange(papaJohns))

const calculateAverageRating = pizzaPlace => {
    const {starReviews} = pizzaPlace
    const numOfReviews = Object.keys(starReviews).length
    let totalStars = 0
    for (let key in starReviews) {
        totalStars += starReviews[key]
    }
    console.log(Number((totalStars / numOfReviews).toFixed(2)))
    
}
calculateAverageRating(dominos)