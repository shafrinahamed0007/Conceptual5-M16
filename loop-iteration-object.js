let bike = {
    color: "Black",
    brand: "Honda",
    cc: 160,
    pillion:2,
    milage: 35,
    isMeterDigital:true,
    advantage:["less milage","High Speed", "Low Configuration"],
    battery:{
        color: "black",
        durability: "StorageManager",
        warranty: "2 years"
    }
};

for(let key in bike){
    console.log(key, " -> ", bike[key]);
}

// console.log(Object.keys(bike).length);
// console.log(Object.values(bike).length);

let bikeKeys = Object.keys(bike);
let bikeValues = Object.values(bike);

for(let i=0; i<bikeKeys.length; i++){
    let key  = bikeKeys[i];
    let value = bike[key];
    console.log(i, "->", bikeKeys[i], ":" , value);
}





