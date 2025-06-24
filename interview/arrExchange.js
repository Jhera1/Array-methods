// Description:
// Array Exchange and Reversing

// It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed. The arrays may be of unequal lengths, in which case you will have to expand the shorter one in-place.

// # before
// my_array = ['a', 'b', 'c']
// other_array = [1, 2, 3]

// exchange_arrays(my_array, other_array)

// # after
// my_array 
// other_array 
let my_array = ['a', 'b', 'c'];
let other_array = [1, 2, 3, 4, 5];

function exchange_arrays(a, b) {
    const aCopy = [...a].reverse();
    const bCopy = [...b].reverse();
    const maxLength = Math.max(a.length, b.length);
  
    for (let i = 0; i < maxLength; i++) {
      a[i] = bCopy[i];
      b[i] = aCopy[i];
      if (i === undefined) {
        i.replace('')
      }
    }
    
  }
 exchange_arrays(my_array, other_array) 
  console.log(my_array);      // [3, 2, 1]
  console.log(other_array);   // ['c', 'b', 'a']