"use strict"
console.log("Objects and Arrow Function")

// functions in javascript ->> Objects 
// engine -v8 
function add(n1,n2){
    return n1+n2;
}
let result = add(5,6)
console.log(add(5,6))
console.log(result)

// functional programming - functios are first class citiesion

// x = 0
//values
// define , pass , return

// assign the value 

// define , pass ,return , assign functions;

// anonymause function 
let add1 = function(n1,n2)
{

    return n1 + n2 ;

}
let result1 = add1(50,50);
console.log(add1(5,142));
console.log(result1);
// Arrow function
let add12 =(n1,n2) => n1 + n2 ;

let result11 = add12(50,50);
console.log(add12(5,142));
console.log(result11);

let sub = function(num1,num2){
    return num1 - num2;
}

let subs = sub(25,54)
console.log(subs)

let mult = (num2,num3) => (num2 * num3);

let multi = mult(100,50);

console.log("The Multiplication of two numbers are :",multi)