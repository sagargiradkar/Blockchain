
console.log("Object orieneted programming in JavaScript");

// OOPS concepts-
//abstraction
//inheritance
//pass by value and reference
//coding practice
//Class is ued to define the object behaviour
class Person{
    //a class can have only one constructor
    //you need to define all the atributes of thec lass 
    constructor(name,age,high_qual,desig,city,nationality,salary,gender){
        //this keyword is used to point the current object of the class
        this.name = name;
        this.age = age
        //this.name -> Member of this class
        //name -> value of class
        this.high_qual = high_qual;
        this.desig = desig;
        this.city = city;
        this.nationality = nationality;
        this.salary = salary;
        this.gender = gender;

    }
    greet(){
        console.log(`Hello ${this.name}`);

        console.log(`Designamtion is ${this.desig}`);
        console.log(`City of the Employee ${this.city}`);
        console.log(`Nationality of the employee ${this.nationality}`);
        console.log(`Salary of an employee ${this.salary}`);
        console.log(`Gender of an employee ${this.gender}`);
    }

    print(){
        console.log(`Hello ${this.name}`);
        console.log(`${this.age}`);
        console.log(`${this.desig}`);
        console.log(`${this.city}`);
        console.log(`${this.nationality}`);
        console.log(`${this.salary}`);
        console.log(`${this.gender}`);
    }
}
//creation of an object of a class using new keyword
let person1 = new Person("Sagar",21,"B.Tech","Software Engineer","Pune","Indian",50000,"Male");
person1.greet();
person1.print();

class Students extends Person{

}


let student1 = new Students("Pavan",55,"B.Tech","Android Devloper","Chinees","China",1000000,"Male");
console.log("Printing Data From Child class by calling to the Parent class")
student1.greet();
student1.print();