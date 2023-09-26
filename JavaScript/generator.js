// Generator 
console.log("Generator");


function *display(){
    console.log("Hey");
    yield "First Pause";
    console.log("How");
    yield "Second Pause";
    console.log("are");
    yield "Third Pause";
    console.log("You ????");
    yield "Fourth Pause";
}

let control = display();

console.log(control.next());
// control.next();
// control.next();
// control.next();
// control.next();
// control.next();
// control.next();
// control.next();
// control.next();
// control.next();