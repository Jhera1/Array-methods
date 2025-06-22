// Prompt: Write a function that takes a list of numbers and returns the sum of all even numbers in the list.
// Extension: Modify the function to return both the sum of even numbers and the sum of odd numbers.



const sumOfEvenAndOddNums = arr => {
    let oddSum = 0
    let evenSum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i]
        } else {
            oddSum += arr[i]
        }
    }
    return {
        'odd sum': oddSum,
        'even sum': evenSum
    }
}


console.log(sumOfEvenAndOddNums([1, 2, 3, 4, 5, 6]))