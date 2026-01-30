let str = "Programming Hero";

// size check
console.log(str.length);

// access specific character by index
console.log(str[2]);

// compare two string

let str2 = "Programming hero";
console.log(str === str2);

// convert to capital or small

console.log(str.toLowerCase() === str2.toLowerCase());
console.log(str.toUpperCase() === str2.toUpperCase());

// trim: to remove space from beginning to end

let str3 = " Programming Hero";
console.log(str3.trim());

// slice
let bd = "I Love Bangladesh";
console.log(bd.slice(2, 6));

// includes: to check specific portion
console.log(bd.includes("Love Bangladesh"));

// concat

let newStr = str.concat(str2);
console.log(newStr);

// replace: to replace specific portion
console.log(bd.replace("I", "We"));
console.log(bd.replace("Love", "Love very much"));

// split --> It's very useful for reverse a string
let str1 = "We love programming";
let strArr = str1.split(" ");
let reverseArr = strArr.reverse();
let reverseStr = reverseArr.join(" ");

console.log(strArr);
console.log(reverseArr);
console.log(reverseStr);

// split -> Other example
let name1 = "Shafrin Ahamed";
let nameArray = name1.split(" ");
let reverseNameArray = nameArray.reverse();
let arrayNameStr = reverseNameArray.join(" ");
console.log(arrayNameStr);

// split -> shorthand

let location = "Dhaka, Bangladesh";
let reverseLocation = location.split(" ").reverse().join(",");
console.log(reverseLocation);

// count a specific letter

let string = "We love to travel and watch movie";

// how many times the t letter

let tCount = 0;

for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  if (letter == "t") {
    tCount++;
  }
}

console.log(tCount);
