const { addListener } = require("process");

let EventEmitter = require("events").EventEmitter;

let ee = new EventEmitter();

ee.addListener("ibmEvent", ibmEventHandler); //listen event

function ibmEventHandler(){
    console.log("IBM Event Happened",count);
}

// answer by sir
var count = 1;
var ci = setInterval(function(){
    console.log("interverl happened",count);
    if (count<6){
        ee.emit("ibmEvent");
        count++;
    }
    else { clearInterval(ci) };
},2000)

// repeat with the interval of 2 seconds
// var ci2 = setInterval(() => ee.emit('ibmEvent'), 2000);

// after 10 seconds stop
// setTimeout(() => { clearInterval(ci2) }, 12000);


// setImmediate(function(){

    // with loop

    // for (var i = 0; i < 5; i++) {

    //     setTimeout(function(){
    //         ee.emit("ibmEvent"); 
    //     },i*2000)

    // }

    // without loop

    // setTimeout(function(){
    //     ee.emit("ibmEvent"); 
    // },2000)

    // setTimeout(function(){
    //     ee.emit("ibmEvent"); 
    // },4000)

    // setTimeout(function(){
    //     ee.emit("ibmEvent"); 
    // },6000)

    // setTimeout(function(){
    //     ee.emit("ibmEvent"); 
    // },8000)

    // setTimeout(function(){
    //     ee.emit("ibmEvent"); 
    // },10000)

// })










