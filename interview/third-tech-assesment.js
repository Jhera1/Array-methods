/**
 * * Squared Array Matching
 *
 * * Given two arrays a and b write a function that checks whether the two arrays have the "same" elements,
 * * with the same multiplicities (the multiplicity of a member is the number of times it appears).
 * * "Same" here means that the elements in "b" are the elements in "a" squared, regardless of the order.
 *
*    loop through arr a and return a squared arr
     compare to arr b to see if both arr's match
 * 
 * 
 * 
 ? Test Examples
 *
 * * Example 1: Valid case - should return true
 * const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
 * const b1 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
 * console.log(comp(a1, b1)); // should return true
 *
 *  ? This works because b1 contains the squares of elements in a1:
 *  [11², 121², 144², 19², 161², 19², 144², 19²]
 *  = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 *
 * * Example 2: Invalid case - wrong number - should return false
 * const a2 = [121, 144, 19, 161, 19, 144, 19, 11];
 * const b2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
 * console.log(comp(a2, b2)); // should return false
 * ? 132 is not the square of any number in a2
 *
 * * Example 3: Invalid case - wrong number - should return false
 * const a3 = [121, 144, 19, 161, 19, 144, 19, 11];
 * const b3 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
 * console.log(comp(a3, b3)); // should return false
 * ? 36100 is not the square of any number in a3
 *
 *  * Example 4: Edge case - empty arrays - should return true
 * const a4 = [];
 * const b4 = [];
 * console.log(comp(a4, b4)); // should return true
 *
 * * Example 5: Edge case - null input - should return false
 * const a5 = null;
 * const b5 = [1, 4, 9];
 * console.log(comp(a5, b5)); // should return false
 *
 * * Example 6: Edge case - null input - should return false
 * const a6 = [1, 2, 3];
 * const b6 = null;
 * console.log(comp(a6, b6)); // should return false
 */

//  loop through arr a and return a squared arr
//  compare to arr b to see if both arr's match


const a6 = [1, 2, 3];
const b6 = null;

const comp = (a, b) => {
   const squaredArr = a.map(element => element * element) // [1, 4, 9]
   const boolArr = squaredArr.map(num => b.includes(num)) // [false, false, false]
   
   return !boolArr.includes(false)

};




 console.log(comp(a6, b6)); // should return false
