/**
 * primarily 2types --> data type
 * 1. Primitive --> string, number, boolean, undefined, null
 * 2. non primitive --> array, object
 *  */

/**
 * Array: An array is fundamental data structure that stores a collection of elements (like numbers or text) of the same type
 * in a single variable, organized in a sequence and accessed by a numerical index, usually starting from zero
 */

let array = [10, 20, 30, 40, 50];
console.log(array[0]);

// how many elements in array to find size
console.log(array.length);


// insert
array.push(22); // insert value at last
array.unshift(5); // insert value at first
console.log(array);

// remove
array.pop();
console.log(array);

array.shift(); //remove value at first;
console.log(array);
