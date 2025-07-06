// #1 sliding windows

// Description:
// Task
// Given a length, an offset, and a list, slide a window of that length, moving by that offset every step, over the list, returning a list of lists.

// The windows may overlap each other, or skip certain elements. All windows should be of the given length; 
// if insufficient elements remain after a certain offset, end the list of lists. It is possible to take 0 
// elements from an empty list, so take care to handle window(0,offset,list) correctly.

// The length will always be non-negative; the offset will always be strictly positive.

// Examples
// for 2, 1, [0,1,2,3,4] return [ [0,1], [1,2], [2,3], [3,4] ]
// for 2, 2, [0,1,2,3,4] return [ [0,1], [2,3] ]
// for 2, 3, [0,1,2,3,4] return [ [0,1], [3,4] ]

const slidingWindow = (length, offset, list) => {
    if (list.length === 0) {}
}

console.log(slidingWindow(2, 1, [0,1,2,3,4])) // [ [0,1], [1,2], [2,3], [3,4] ]
console.log(slidingWindow(2, 2, [0,1,2,3,4])) // [ [0,1], [2,3] ]
console.log(slidingWindow(2, 3, [0,1,2,3,4])) // [ [0,1], [3,4] ]
// Problem Breakdown:
// You need to slide a window of size length over a list, moving offset steps forward each time.
// Each window should be exactly of size length. If you reach the end of the list and don't have enough elements left, you stop.
// The offset tells you how many steps to move forward each time.
// Special edge case: if length is 0, the result should be an array of empty arrays ([]) repeated at each valid offset position.