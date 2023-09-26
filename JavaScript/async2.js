// async   and await
// perpose is to return a promises 
// why we have it used it is wrapper on top of promises

// Promise( , , );
//auto matically resolve promises
// 
/*
async function f1(){
    return -1;
}

f1().then(console.log("Success"));
*/


/*
/// Prom ise internal state
resoleve
regect
pemding

*/
/*
async function f1(){
    return Promise.resolve(1);
}

f1().then(console.log("Success"));

*/
/*
async function f(){
    let promise = new Promise((resolve,regect) => {
        setTimeout(() => resolve("Done"),1000);
    });
    let result = await promise;// wait to having somethings is happening
    console.log(`Success - the result is ${result}`);
}

f();
*/
async function f(){
    let promise = new Promise((resolve,regect) => {
        setTimeout(() => resolve("Done"),6000);
    });
    let result = await promise;// wait to having somethings is happening
    console.log(`Success - the result is ${result}`);
    console.log("Hello");
    console.log("Blockchian");
}

f();