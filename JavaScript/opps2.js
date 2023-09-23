"use strict"
/*
class Person{
    constructor(name){
        this.name = name ; 
    }

    greet(){
        console.log(`${this.name}`);
    }
}

//Student is a child class 
class Student extends Person{
    constructor(name) {
        console.log("This is a Child class");
        super(name);
    }
}

let obj = new Student("Sagar");
obj.greet();

class Person{
    constructor(name,occupation) {
        this.name = name;
        this.occupation = "JavaDevloper";

    }
    greet(){
        console.log(`Hello ${this.name}`)
        console.log(`${this.occupation}  is my occupation`);
    }
}

class Student extends Person{
    constructor(name,occupation){
        super(name,occupation);

        this.occupation = "BlockChain Devloper";
    }
    greet(){
        console.log(`Hello Students :${this.name}`);
        console.log(`Occupation is now : ${this.occupation}`);
    }
}
let object = new Person("Sagar");
object.greet();

let object2 = new Student("Prakash");
object2.greet();

*/

// Function A- Object1 in para,eter
//function B -working with object1 or working with properties of function A
/*
//Animal is a base function
function Animal(value){
    var obj = {};  // create an empty object 
    obj.name = value.name; //assign a new attribute to the object obj called as name
    return obj ;//return the value of object

}

// Dog is the derived function
function Dog(value){
    var obj = Animal(value);

    obj.greet = function(){
        return `Hellow ,${obj.name}`;
    }
    return obj;
}

var myCuteDog = Dog({name : "Snoop"});
console.log(myCuteDog.greet());

*/

class Person{
    constructor(name){
        this.name = name;

    }
    getName(){
        return this.name;
    }
    static Create(gender){
        let name = gender  =="Male" ? "Sagar" : "Sanjeevani"; 
        return new Person(name);
    }
}

let name_gender = Person.Create("Male");
console.log(name_gender);

let name_gender1 = Person.Create("Female");
console.log(name_gender1);

// let object = new Person("Male");
// console.log(object.Create("Male"));
