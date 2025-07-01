const isPalindrome = x => {
    let reversedArr = Number(x.toString().split('').reverse().join(''))
    return reversedArr === x ? true : false
};
console.log(isPalindrome(121))