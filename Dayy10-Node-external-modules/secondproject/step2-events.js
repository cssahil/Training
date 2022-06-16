// const addListener = require("process");
let EventEmitter = require("events").EventEmitter;

let ee = new EventEmitter();

ee.addListener("ibmEvent", ibmEventHandler); //listen event

function ibmEventHandler(){
    console.log("IBM Event Happened");
}

setTimeout(function(){
    ee.emit("ibmEvent");
},2000);



