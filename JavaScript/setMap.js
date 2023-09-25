// Set - Map
//Functional Programming 
// Callback
// Higher - Order -Functionj
// Closer
// Mamoirization

// Date Methods

// Set - Map 

// Oueue  Unique Data 

//

// let values = [1,3,45,656,7567,67,78,78];

// let array = new Array();

// let set = new Set();
// set.add(10)
// set.add("Sagar");
// set.add("prakash")
// console.log(set);
// set.delete("prakash");
// console.log(set);

// console.log(set.size);

// for(let i=1 ; i<=20 ; i++){
//     let num = set.add(Math.ceil(Math.random()*100));
//     array.push(num);
//     set.add(num)
// }
// console.log(set);

// console.log(array);
// console.log(set.size);

// let a = 66.4398;
// console.log(Math.ceil(a));
// console.log(Math.floor(a));

// Map is working with keys and values pair

let map = new Map(); // => set of keys and array of values 

map.set("Sagar","Java");
map.set("Hyder","JavaScript");
map.set("Sanjeevan","Blockchain");
map.set("Sagar","EdgeComputing");
console.log(map);

console.log(map.keys());
console.log(map.values());

console.log(map.size);
map.forEach((v,k) => console.log(v,k));

let values = [1,2,5,5,6,6];

values.forEach( (v,i,values) => console.log(v,i));