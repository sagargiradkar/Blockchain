var a = Symbol("Alien");
var b = Symbol("Alien");

console.log(typeof(a));
console.log(typeof(b));
console.log(a == b);

var c = "Alien";
var d = "Alien"
console.log(typeof(c));
console.log(typeof(d));
console.log(c == d);

let age = Symbol("age");
let user = {
    "Name" :"Sagar",
    "Mname" : "Prakash ",
    "Lname" :"Giradkar",
    "qualification" : "BE",
    [age] : 28

};

console.log(user);
console.log(user.Name);
console.log(user.Symbol)
console.log(user[age]);

for(let key in user){
    console.log(key);
}

console.log(JSON.stringify(user));// JavaScript Object Notation