const getTimeClock = () => {

    // Date - ger current time
    // Current year / hours / min/sec
    return new Date().getHours()
    + ":"
    + new Date().getMinutes()
    +":"
    + new Date().getSeconds()
};

function getSynchronusMessage(){
    return "Hello"
}

function getHelloFromPromise(){
    return Promise.resolve('Hello -- Promise');

}

function getHollaWaitDelay(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve('holloA');},4000);
    });
}

async function caller(){

    const MessageHellow = await getSynchronusMessage();
    console.log(getTimeClock(),MessageHellow);

    const MessageHellowPromise = await getHelloFromPromise();
    console.log(getTimeClock(),MessageHellowPromise);

    const MessageHollow = await getHollaWaitDelay();
    console.log(getTimeClock(),MessageHollow); 

    
    
}

caller();