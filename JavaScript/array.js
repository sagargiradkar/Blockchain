"use strict"
// Array index number start with 0;

// let num = [1,2,3,5,4,7,5,66];
// console.log(num);

// console.log(num[6]);

// num[3] = 9;

// console.log(num);

// let value = [5 ,"sagar" ,{name1 :"pavan",
// ram:"Sham"},() => {console.log("Hiiii")}];

// console.log(value[3]());

// let value = [1,2,1,2,5,1,2,5,3,5,1,35,2];

// console.log(value.push(10));

// console.log(value);

// console.log(value.pop());

// console.log(value);

// console.log(value.shift());// remove first element from array

// console.log(value);
// console.log(value.unshift(8)); // add element at 0rth index 
// console.log(value)

// let nums = [];
// nums[0] = 9;
// nums[99] = 4;
// console.log(nums);
// for(let i=0 ; i<=100;i++){
//     console.log(nums[i]);
// }
// for(let i in nums){
//     console.log(nums);// worsk with index values
// }

// for (let num of nums){
//     console.log(num);
// }


// let value = [1,5,4,5,4,5,4,5,47,588,65,4,1,44];

// delete value[0];

// console.log(value);

// let value = [121,215,1545,1545,154,1544,2544];

// value.splice(0,2,14);
// console.log(value);
// value.splice(0);
// console.log(value);

// filter ,map,reduce ,for eacch 

// let value = [14,1545,1545,154,256564,5264,5265464,56556,56];

// value.forEach(function(num){
//     console.log(num);
// });
// console.log("New Loop");
// value.forEach((num)=>{
//     console.log(num);
// })

// let values = [6544,1,3,4,5,7,9,11,4545,54564,4564,1454,4554,454];

// values.forEach(num =>{
//     if(num%2 === 0){
//         console.log(num);
//     }
// });

let value = [1,1,4456,54,5,47,6,7,8,9,14,155,14,85,74];

// value.filter( num => num%2 === 0)
//     .map(num => num%2)
//     .forEach(num => console.log(num))



// let result = value.filter( num => num%2 ===0)
//         .map(num => num*2)
//         .reduce((sum,num) => sum + num,1)

// console.log(result);

// let a = 10;
// let b = 192;
// let c = 212876;

// let values = [a,b,c];

// console.log(values);

// let sam = [1,34,546,5656,767,5678,578,78];

// let [a,b,c,d,e,f, ...g] = sam;

// console.log(g);



//rest and spread operator 

// function sum(a,b,...nums){
//     let restult = a + b;

//     for(let num of nums){
//         result = restult + num;
//     }
//     return restult;
// }

// let result = sum(1,154,154,154,154,15);

function sum(a,b,c,d,e){
    let result = a + b + c + d + e;

    return result;
}

let nums = [12,234,45,45,56,456,57,65,74657];

let restult = sum(...nums);

console.log(restult);