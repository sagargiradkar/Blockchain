// console.log("One");
// setTimeout(() => console.log("Th333"),0);
// console.log("Three");
// console.log("One");
// console.log("One");
// setTimeout(() => console.log("Two"),0);
// console.log("Three");
// console.log("One");
// console.log("One");
// console.log("Three");
// console.log("One");
// console.log("One");
// console.log("Three");
// console.log("One");
// console.log("One");
// console.log("Three");
// console.log("One");
// console.log("One");

const fun1 = () =>{
    console.log("function is strating");
    fun2();
    console.log("fun1 is ending");
}
const fun2 = () =>{
    setTimeout(() => {
        console.log("func2 is starting");
    },1000);
}

fun1();

// setIntervals
// During Projects

