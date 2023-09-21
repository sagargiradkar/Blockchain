"use strict"
console.log("WELCOME TO THE WORLD OF JAVASCRIPT PROGRAMMING !");

let a = 10 ;
console.log("The vale of a =",a); 

let b = 100;
console.log("The Value of b =",b);

let sum = a + b;

console.log("The sum of a and b =  ",sum);

// INCREMENT THE VALUE OF NUMBER 
let num = 10 ;

num = 20 ;

num = num + 10 ;

console.log("After incremental num :",num);

/* Multiline 
comment
in
Javascipt 

*/

var stringss = "umbersss"
const st =  typeof(stringss)

console.log(st);

let  type = typeof(num);

console.log(type);

let num1 =
`Sagar 
Prakash 
Giradkar`;
console.log(num1);


// Syntactic error

// logicak - bugs

let num2 = 2 * 3;

console.log("Multiplication of two number :",num2);

// Always used the syntax of the declaration of variable

let user = "Sagar";
console.log(user);

let num3 = 100;
let num4 = 100;

console.log(num3 % num4);

let x = 6

console.log(x)

console.log(typeof(x));

let y = 3.434

console.log(typeof(y));

let z 

console.log(typeof(z));

let value = "9786";

console.log(typeof(value));

let name1 = Number("Sagar Praksh Giradkar");
// NaN (Not A Number ) its is a illegal number 
console.log(typeof(name1));
console.log(name1);

let value3 = parseInt("484645454654475358");

console.log(value3);

let sagar = 10 ;
sagar += 154544;
sagar++;
sagar--;
console.log(sagar);

let num5 = 10
let num11 = 10
console.log(num5 > num11)

console.log(num5 === num11)

let user1 = "Sagar"

let user2 = "Pavan"

console.log(user1 + "  " + user2)

// Template literal

console.log(`The Value of number 5 and 11 is ${num5} && ${num11}`)

console.log(num1 + num2 )

let num10 = 157

if(num10 % 2 === 0){
    console.log("Given Number is Even ")
}
else{
    console.log("Given Number is not even i.e. ( Odd Number )")
}

let p = 1998
let q = 1373

if(p>q){
    console.log("p is greter than q")
}
else{
    console.log("q is greter than p")
}

let c =100
let d = 28929
let e = 32478

if( c > d && c >e){
    console.log(`${c} is greter than ${d} and ${e}`)
}
else if(d>c && d >e){
    console.log(`${d} is greter than ${d} and ${e}`)
}
else {
    console.log(`${e} is greter than ${c} and ${d}`)
}


// Ternary Operator

let result1 = (num5 % 2 === 0) ? "Even" : "Odd" 

console.log(result1)

for(let i=1 ; i<=10 ; i++){
    console.log(i);
}
let i = 0;
while(i<=100){
    console.log(i*i*5)
    i+=10
}