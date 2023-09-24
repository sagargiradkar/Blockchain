"use strict"
class Alien{
    constructor(){
        let age , name ;

    }
    setAge(age){
        this.age = age;
    }
    setName(name){
        this.name = name;
    }
    getAge(){
        return this.age;
    }
    getName(){
        return this.name;
    }
}

let obj = new Alien();

obj.setAge(25);
obj.setName("Sagar");

console.log(obj.getName());
console.log(obj.getAge()); 