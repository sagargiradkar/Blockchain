class Car{
    constructor(name1,brand,com,totalSales) {
        this.name1 = name1;
        this.brand = brand;
        this.com = com;
        this.totalSales = totalSales;
    }
    getData(){
        console.log(`${this.name1}  && ${this.brand}`)
    }
}

let obj = new Car();

class carDetails extends Car{
    constructor(name1 ,brand,com,totalSales){
        super()
        this.name1 = name1;
        this.brand = brand;
        this.com = com;
        this.totalSales = totalSales;

    }
    
}


//object of parent class

let parent = new Car("Sagar","BMW");
parent.getData();



// object of child class

let child1 = new carDetails("Pavan","Scorpio");
child1.getData();
