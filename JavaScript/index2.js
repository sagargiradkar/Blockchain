// While loop

let i = 1;
console.log("The numbers from 1 to 10 ");
while(i<=10){
    console.log(i);
    i++;
}

// Do while loop 
console.log("The numbers from 1 to 100  incrementing by 10")
do{
    console.log(i);
    i+=10;
}while(i<=100);

// for loop
console.log("Printing the square of numbers from 1 to 10")
for(let i=1 ; i<=10 ; i++){
    console.log(i**2)
}

let day = "mon"

if(day ==='sun')
    console.log("6am")
else if(day === 'mon')
    console.log("8am")
else if(day === 'wed')
    console.log("7am")

switch(day){
    case "sat":
        console.log("6am");
        break;
    case "mon":
        console.log("8am");
        break;
    case "wed":
        console.log("7am");
        break;
}

function print(){
    for(let i=1; i<=10;i++){
        for(let j=0 ;j<=10 ;j++){
            console.log(j*i)
        }
        console.log("The end ")
    }
}
console.log("First call to the print function")
print()
console.log("Second call to the print function")
print()

// Functions .........

function printeven(){
    console.log("Even Numbers are :")
    for(let i=0 ;i<=10 ;i++){
        if(i%2 ===0){
            console.log(i)
        }
    }

}
printeven()
let n = 5 ;
let num1 = 5;
function fact(n,num1){
    return n + num1
}

let result = fact(n,num1);

console.log(`factorial of ${5}`,result)


// ......Object in JAVASCRIPTS ..............

let obj = {
    name1 : "sagar",
    midName :"Prakash",
    Lname :"Giradkar",
    At :"Pauna"
}
console.log(obj)