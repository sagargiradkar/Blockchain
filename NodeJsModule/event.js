const EmitEvent = require("events");

let eventEmitter = new EmitEvent();


// on indicates what to to when event is triggered from clent side
eventEmitter.on('mySimpleEvent',(msg) =>{
    console.log(msg);
});

eventEmitter.emit('mySimpleEvent',"First event occured");