"use strict"
let a = 45;
let s1 = "Hello";
let s2 = "World";

// How to declare an Object in JavaScript

let empty = {
};
console.log(empty);

let point = {x:10 , y:100}

console.log(point);

let book = {
    "tittle":"javascript",
    "author":"sagar",
    "year":2022,
    
}
console.log(book.author)


let book1 = new Object();
book1.tittle = "Sagar";
book1.pages = "pavan"

console.log(book1.pages)

book1["author"] = "Shudhanshu kumar";
console.log(book1.author)

let obj1 = Object.create({x:10 , y:19})
let obj2 = obj1.x + obj1.y;

console.log(obj2)

const myCar = new Object();
myCar.company = "BMW";
myCar.Color = "Black";
myCar.year = 20021
myCar.engine = "150cc"

myCar.Color = "Pink"
console.log(myCar)
console.log(myCar.engine)

let student = new Object();

student.name = "Sagar"
student.marks = 95;
student.age = 51
student.address = "Pauna Khurd"
student.po = "Manglli "
student.tah = "Pauni";
student.dist = "Bhandara"
student.mar = {math :54,phy :35 ,chem :55}

console.log(student)
console.log(student.age)
console.log(student.po)
console.log(student.address)
console.log(student.tah)
console.log(student.dist)