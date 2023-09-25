// callback ,higer-order function ,closer 
// console.log("Welcome");

// setTimeout(function print(){
//     console.log("Get Lost");
// },5000);// 5 sec

// setTimeout(() => console.log("Welcome to functional Programming in javascript"),10000);


// Functional - functions are the first class citizen

// function x(){
//     function y(){
//         console.log("in y");
//     }
//     console.log("in x");
// }
// // higher order function add
// function add(a,b,handle){
//     let result = a + b;
//     handle(result); // print(result)
// }

// function print(result){
//     console.log(result);
// }
// // add(4,50,print);

// function setRequest(result){
//     console.log("Sending data to server",result);
// }

// add(10,15,setRequest);

// Closure 

function outer(){
    let num = 20;
    console.log("Outer",num);
    return function(num2){
        let num = 10;

        console.log("inner",num,num2);
    }
}

let result = outer();
result(200);

