// console.log('Hello World')

// console.log(+20.030054635.toFixed(2))

// const divide = (n, divideBy) => parseFloat((n/divideBy).toFixed(2))
// console.log(divide(78.50, 6))

// const add = (a, b) => a + b
// console.log(add(78.50, 6))

const sum = arr => arr.reduce((a, b) => a + b)
console.log(sum([1,2,3]))

const foodList = [
    {name: 'berries', price: 13.08},
    {name: 'pizza', price: 13.08},
    {name: 'bananas', price: 13.08},
    {name: 'ice cream', price: 13.08},
    {name: 'chips', price: 13.09},
    {name: 'salsa', price: 13.09}
]

const prices = foodList.map(food => food.price)
console.log(prices)

const sumOfPrices = sum(prices)
console.log(sumOfPrices)

let coupon = .25
const couponDiscount = sumOfPrices * coupon

const priceAfterDiscount = +(sumOfPrices - couponDiscount).toFixed(2)
console.log(priceAfterDiscount)

const taxPercent = 7.75 /100

const tax = priceAfterDiscount * taxPercent 

const totalPrice = priceAfterDiscount + tax 

console.log(Number(totalPrice.toFixed(2)))


