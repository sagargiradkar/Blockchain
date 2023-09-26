// Create a promise
//This is a executer function

let promise = new Promise(function(resolve,regect){
    // setTimeout(function(result){

    //     // success condition -> water has been fetched
    //     resolve("Hurry! jack ans jill are back with water");

    // },2000)

    setTimeout(function(){
        //if(this == that)
        regect(
            // throwing an error
            new Error ("Jack fail down and broken his crown , and jill can tumbling after"));
    },2000)
})

// consumer function - the one which will receive promise

const grandParentCooking = () =>{

    // promise.then(function(result){
    //     // then will indicate promise has been fulfilled
    //     console.log(`cooking jack and jill are back with water`);
    // }); ////
// try - catch is used for error handling 
    promise.catch(function(error){
        console.log(`omg ${error.message}`)
    });
};
grandParentCooking();

// implemented both resolve and regected for this examples 

let promis = new Promise(function(resolve,regect){
    setTimeout(function (){
        resolve("Hurray ! jack and jill are back with water ")
    },2000);
});


// Promise chaining 
const grandParentCooking1 = () =>{
    promis.then((result) => {
        console.log(`Cooking the vegatables with the ${result}`);
    })
    .catch((error) => {
        console.log(`Food is not prepared becaused ${error.message}`);
    });
    
};
grandParentCooking1();