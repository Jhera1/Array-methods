// Description:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


const validatePinCode = pinNumber => {
    // let pinStr = pinNumber.toString()
    // return pinStr.length === 4 || pinStr.length === 6 ? true : false

    // using regex
    return /^(\d{4}|\d{6})$/.test(pinNumber)
}


console.log(validatePinCode(2876))
console.log(validatePinCode(28760))
console.log(validatePinCode(287645))