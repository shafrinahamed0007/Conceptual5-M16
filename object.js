// Object  - non primitive or referancial data type

let bike = {
    color: "Black",
    brand: "Honda",
    cc: 160,
    pillion:2,
    milage: 35,
    isMeterDigital:true,
    advantage:["less milage","High Speed", "Low Configuration"]
};

console.log(bike);

// access a specific property or key
/**
 * 1. dot notation
 * 2. bracket notation
 */

console.log(bike.color); // dot notation
console.log(bike.advantage);

console.log(bike["milage"]);